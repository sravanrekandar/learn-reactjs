var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Leftnav = require('./leftnav.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div>
                    <Header />
                    <div className="row">
                        <div className="col-md-10">
                            <RouteHandler />
                        </div>
                        <nav className="col-md-2 bs-docs-sidebar">
                            <Leftnav/>
                        </nav>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
});
module.exports = App;