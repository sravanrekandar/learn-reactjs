var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;

var CodeSnippet = require('../../../code-snippet.jsx');
var snippet1 = require('!!snippet-loader!./crud3-example.jsx');
var Output = require('./crud3-example.jsx');
var Crud3 = React.createClass({
    render: function(){
        return (
            <div>
                <em>To be writeen</em>
                {/*
                <h4>Final Output</h4>
                <div className="output-container">
                    <Output />
                </div>
                <h4>Code:</h4>
                <CodeSnippet html={snippet1} />
                */}
            </div>
        )
    }
});
module.exports = Crud3;