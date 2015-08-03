var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippet1 = require('!!snippet-loader!./handling-form-fields-example.jsx');

var Output = require('./handling-form-fields-example.jsx');

var HandlingFormFields = React.createClass({
    render: function(){
        return (
            <div>
                <p>Let us create a simple component that provides a form with two input fields: User Name and Password. <br/>
                    The purpose of this tutorials is to explore the methods of accessing values from the fields.</p>
                <h4>Final Output</h4>
                <div className="output-container">
                    <Output />
                </div>
                <h4>Code:</h4>
                <CodeSnippet html={snippet1} />
                <h4>Explanation:</h4>
                <p></p>
                <ol>
                    <li>
                        Assigning event to form : <strong>&lt;form onSubmit=&#123;this.submitForm&#125;&gt;</strong>
                    </li>
                    <li>
                        We have assigned <strong>ref</strong> attribute to each of the input fields :  <strong><em>ref="username"</em></strong> and <strong><em>ref="password"</em></strong>
                    </li>
                    <li>
                        We can access the rendered HTML elements - DOM through the <strong>ref</strong> attribute: <strong><em>username = this.refs.username.getDOMNode().value</em></strong> <br/>
                        <a href="https://facebook.github.io/react/docs/more-about-refs.html" target="_blank">Read more about refs here</a>.
                    </li>
                    <li>Rest of the code is self explanatory :)</li>
                </ol>
            </div>
        )
    }
});
module.exports = HandlingFormFields;