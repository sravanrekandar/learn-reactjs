var _ = require('_');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var lessonsList = require('../../app/lessons.json');
var requireLesson = require('./custom-requires').requireLesson;

var AasPaasLinks = React.createClass({
    propTypes: {
        current: React.PropTypes.object
    },
    getDefaultProps: function(){
        return {
            current: lessonsList[0]
        }
    },
    render: function(){
        var currentIndex = _.findIndex(lessonsList, this.props.current)
        ,   prev = (currentIndex <= 0) ? '' : <Link to="lesson" params={{name:lessonsList[currentIndex - 1].name}}><i className="glyphicon glyphicon-menu-left" /> {lessonsList[currentIndex - 1].title}</Link>
        ,   next = (currentIndex < 0 || currentIndex >= lessonsList.length - 1) ? '' : <Link to="lesson" params={{name:lessonsList[currentIndex + 1].name}}>{lessonsList[currentIndex + 1].title} <i className="glyphicon glyphicon-menu-right" /> </Link>
        ;
        return  (
            <ul className="list-inline">
                <li>{prev}</li>
                <li>
                    {(prev!== '' && next!== '')? '|' : ''}
                </li>
                <li>{next}</li>
            </ul>
        );
    }
});
var Lesson = React.createClass({
    updateLessonInfo: function(name){
        this.setState({
            name: name
        });
    },
    getInitialState: function(){
        return{
            name: 'intro'
        }
    },
    componentDidMount: function () {
        this.updateLessonInfo(this.props.params.name);
    },
    componentWillReceiveProps: function(nextProps){
        this.updateLessonInfo(nextProps.params.name);
    },
    render: function(){console.log(85);
        var lesson = _.find(lessonsList, {name: this.state.name}),
            title = lesson ? lesson.title : '',
            Component = lesson ? requireLesson('./' + lesson.component) : undefined;
        return (
            <div className="lesson-container">
                <div className="clearfix">
                    <h2 className="pull-left">{title}</h2>
                    <div className="pull-right">
                        <AasPaasLinks current={lesson} />
                    </div>
                </div>

                {
                    Component
                        ? <Component />
                        : ''
                }
                <hr />
                <AasPaasLinks current={lesson} />
            </div>
        );
    }
});
module.exports = Lesson;