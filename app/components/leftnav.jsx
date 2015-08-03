var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var lessonsList = require('../../app/lessons.json');
var LeftNav = React.createClass({
    mixins: [ Router.State ],
    render: function () {
        var currentLessonName = this.getParams().name;
        var items = lessonsList.map(function(el, idx){
            return (
                <li className={"list-group-item " + ((currentLessonName === el.name) ? 'active': '')}
                    key={idx}
                    >
                    <Link to="lesson" params={{name: el.name}}> {el.title}</Link>
                </li>
            );
        });
        return (
            <div>
                <ul className="list-group lessons-list">
                    {items}
                </ul>
            </div>
        );
    }
});

module.exports = LeftNav;