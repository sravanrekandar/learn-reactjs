var React = require('react');
var CodeSnippet = require('../../../code-snippet.jsx');
var snippet1 = require('!!snippet-loader!./crud2-example.jsx');
var Output = require('./crud2-example.jsx');
var Crud2 = React.createClass({
    render: function(){
        return (
            <div>
                <h4>Final Output</h4>
                <div className="output-container">
                    <Output />
                </div>
                <h4>Code:</h4>
                <CodeSnippet html={snippet1} />
            </div>
        )
    }
});
module.exports = Crud2;