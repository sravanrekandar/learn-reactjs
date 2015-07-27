var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippetHelloWorld = requireSnippet('./1/helloworld/1.snippet');
var snippetJSXCode = requireSnippet('./1/helloworld/2.snippet');
var snippetTransformedToJSCode = requireSnippet('./1/helloworld/3.snippet');

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                <p>Let us write HelloWorld program. Modify your boiler plate as following..</p>
                <CodeSnippet html={snippetHelloWorld} />
                <p>
                    In the above code, we have created a component named <em>FirstComponent</em> and rendering the component to <em>&lt;div <strong>id="page-content"</strong>&gt;</em>.
                </p>
                <ol>
                    <li> To create a react component,  we use <strong><em>React.createClass</em></strong>
                    </li>
                    <li><strong><em>React.createClass</em></strong> would expect an object (<strong><em>&#123; &#125;</em></strong>)
                    </li>
                    <li><strong><em>render()</em></strong> is mandatory for any React component.
                    </li>
                    <li><strong><em>render()</em></strong> should return a valid React element And all valid HTML elements are valid React elements. We are returning a <strong><em>&lt;h1 / &gt;</em></strong> tag in the above component.
                    </li>
                    <li><strong><em>React.render()</em></strong> would render a React element to a DOM element.
                    </li>
                </ol>
                <p>If you are wondering how the JSX to JS transformed code would look like, copy the JSX code and try the <a href="https://facebook.github.io/react/jsx-compiler.html" target="_blank">JSX compiler service</a>. For quick view, look at the below codes.</p>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th>JSX Code</th>
                                    <th>Transformed to JavaScript</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><CodeSnippet html={snippetJSXCode} /></td>
                                    <td><CodeSnippet html={snippetTransformedToJSCode} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
});
module.exports = HelloWorld;