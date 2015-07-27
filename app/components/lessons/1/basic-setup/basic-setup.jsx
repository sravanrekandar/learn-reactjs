var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippetBoilerplate = requireSnippet('./1/basic-setup/1.snippet');
var BasicSetUp = React.createClass({
    render: function () {
        return (
            <div>
                <p>Use the below boilerplate to start with React Coding. <br />
                    Create a file (say <em>welcome.html</em>) with the below code.</p>
                <CodeSnippet html={snippetBoilerplate} />
                <p>Open the file in browser and check console to make sure there are no errors.
                </p>
                <p>
                    Alternatively, you can <a href="downloads/boilerplate.zip" target="_blank">download this boiler plate here</a>.
                </p>
                <p>
                    Apart from including ReactJS, we have included <em>JSXTransformer.js</em> which will identify the <em>&lt;script <strong>type="text/jsx"</strong> /&gt;</em> tags and convert them to JavaScript before executing.
                </p>
            </div>
        );
    }
});
module.exports = BasicSetUp;