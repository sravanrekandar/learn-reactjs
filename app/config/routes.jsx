var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('../components/app.jsx');
var Lesson = require('../components/lesson.jsx');

var Default = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Welcome to Learn React.JS!</h1>
                <p>This page is an effort to make programmers' life a bit easy by providing as many examples as I can.</p>
                <p>If you are reading this content, it means you are already determined to learn <a target="_blank" href="http://facebook.github.io/react/">React.JS</a>.</p>
                <p className="text-center">
                    <Link to="lesson" params={{name: 'setup'}} className="btn btn-primary btn-lg">
                        Start learning
                    </Link>
                </p>
            </div>
        );
    }
});

// declare our routes and their hierarchy
var routes = (
    <Route handler={App} >
        <Route name="lesson" path="/lesson/:name" handler={Lesson}/>
        <Router.DefaultRoute name="default" handler={Default} />
    </Route>
);



module.exports = routes;