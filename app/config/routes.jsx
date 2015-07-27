var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('../components/app.jsx');
var Lesson = require('../components/lesson.jsx');

var Default = React.createClass({
    render: function(){
        return <div>Default</div>
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