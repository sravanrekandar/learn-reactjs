var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Routes = require('./config/routes.jsx');
require('syntaxhighlighter-core.css');
require('syntaxhighlighter-core-default.css');

Router.run(Routes, Router.HashLocation, function(Root){
    React.render(React.createElement(Root), document.getElementById('page-container'));
});