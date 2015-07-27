var React = require('react');
var Intro = React.createClass({
    render: function () {
        return (
            <div>
                <p>This page is an effort to give a list of code examples of ReactJS along with explanations.</p>
                <p><a href="http://facebook.github.io/react/" target="_blank">React.js</a> is a JavaScript library to create reusable UI components.</p>
                <p>We write the React.js components using <a href="https://jsx.github.io/" target="_blank">JSX language</a>. JSX is a combination of HTML and JavaScript. Using some JSX Transformer, we will convert the JSX code to JS before executing in browser</p>
            </div>
        );
    }
});
module.exports = Intro;