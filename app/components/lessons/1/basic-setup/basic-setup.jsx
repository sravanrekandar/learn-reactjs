var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippetBoilerplate = requireSnippet('./1/basic-setup/crud1-example.jsx');
var BasicSetUp = React.createClass({
    render: function () {
        return (
            <div>
                <p><a href="http://facebook.github.io/react/" target="_blank">React.js</a> is a JavaScript library to create reusable UI components.</p>
                <p>We write the React.js components using <a href="https://jsx.github.io/" target="_blank">JSX language</a>. JSX is a combination of HTML and JavaScript. Using some JSX Transformer, we will convert the JSX code to JS before executing in browser. In our case, we will use <a href="https://babeljs.io/" target="_blank">Babel</a>'s loader.</p>
                <hr />
                <p>Before you start developing the React.JS components, you have to collect all the dependencies, helpers and set up proper environment. There are basically three types of approaches. </p>
                <ol>
                    <li>Browser : Simple approach, easy to start with. But it is not feasable to maintain as the application grows.</li>
                    <li>AMD</li>
                    <li>Common JS</li>
                </ol>

                <p>However, the suggested approach is CommonJS approach.</p>

                <p>If you want to just want to jump into react.js without focusing on any others, <br/>
                    Use the below boilerplate to start with React Coding. <br />
                    You can do one of the following </p>
                <ol>
                    <li>Create a file (say <em>welcome.html</em>) with the below code.</li>
                    <li><a href="downloads/boilerplate.zip" download>Download boilerplate.zip</a></li>
                    <li><a href="downloads/boilerplate/boilerplate-with-cdn-links.html" download>Download the html file with cdn links</a></li>
                </ol>
                <CodeSnippet html={snippetBoilerplate} />
                <p>Open the file in browser and check console to make sure there are no errors.
                </p>

                <p>
                    Apart from including jQuery, Bootstrap and ReactJS, we have included <a href="https://babeljs.io/docs/usage/jsx/" target="_blank"><em>Babel JSXTransformer</em></a> which will identify the <em>&lt;script <strong>type="text/babel"</strong> /&gt;</em> tags and convert them to JavaScript before executing.
                </p>
            </div>
        );
    }
});
module.exports = BasicSetUp;