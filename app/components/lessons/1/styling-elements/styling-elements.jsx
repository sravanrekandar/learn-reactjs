var React = require('react');
var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippet1 = requireSnippet('./1/styling-elements/crud1-example.jsx');
var Output = React.createClass({
    render: function(){
        var greenStyle = {
            color: 'green',
            fontWeight: 'bold'
        };
        return (
            <div>
                <p style={{color: 'red'}}>Text styled in red color</p>
                <p style={greenStyle}>Hellow! I am a styled paragraph.</p>
                <p style={{color:'blue', textDecoration:'underline'}}>Another styled paragraph.</p>
            </div>
        )
    }
});
var InlineStyles = React.createClass({
    render: function(){
        return (
            <div>
                <p>We are going to achieve this:</p>
                <div className="output-container">
                    <Output />
                </div>
                <p>Follow the below snippet and observe the changes.</p>
                <CodeSnippet html={snippet1} />
                <p>The changes are as follows</p>
                <ol>
                    <li>We added a <strong>&lt;style /&gt;</strong> to the head section</li>
                    <li><strong>className</strong>: When you want to use <strong>class</strong> attribute for any element, use <strong>className</strong>. The first paragraph of the component has the attribute <strong>className</strong>. It is the equivalent of html's <strong>class</strong> attribute. The word 'class' is reserved for other purposes in React.js.</li>
                    <li><strong>Inline Styles</strong>: we have created an object named <strong>greenStyle</strong>. Note that the style <strong>fontWeight</strong> is named in camelCase. To apply this style to the second paragraph, we have used  <strong>style = &#123;greenStyle&#125;</strong>.</li>
                    <li><strong>Evaluating expressions</strong>: To evaluate the variable <strong>greenStyle</strong>, we have enclosed the variable name with curly braces : <strong>&#123;greenStyle&#125;</strong></li>
                    <li><strong>Inline expression evaluation</strong>: The last paragraph has the style attribute. we have the object <strong>&#123;color:'blue', textDecoration:'underline'&#125;</strong>. In order to evaluate it, we have to enclose the object in curly braces: &#123;&#123;color:'blue', textDecoration:'underline'&#125;&#125;</li>
                </ol>
            </div>
        )
    }
});
module.exports = InlineStyles;