var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TabbedArea = ReactBootstrap.TabbedArea;
var TabPane = ReactBootstrap.TabPane;

var requireSnippet = require('../../../custom-requires').requireSnippet;
var CodeSnippet = require('../../../code-snippet.jsx');
var snippet1 = require('!!snippet-loader!./crud3-example.jsx');
var snippet2 = require('!!snippet-loader!./heros-grid.jsx');
var Output = require('./crud3-example.jsx');
var Crud3 = React.createClass({
    render: function(){
        return (
            <div>
                <h4>Final Output</h4>
                <div className="output-container">
                    <Output />
                </div>
                <h4>Code:</h4>
                <TabbedArea defaultActiveKey={1}>
                    <TabPane eventKey={1} tab='app.jsx'>
                        <CodeSnippet html={snippet1} />
                    </TabPane>
                    <TabPane eventKey={2} tab='heros-grid.jsx'>
                        <CodeSnippet html={snippet2} />
                    </TabPane>
                </TabbedArea>
                <p>There are very few changes we have made to the components</p>
                <ol>
                    <li>We have added <strong>removeHero()</strong> method to <strong>&lt;App /&gt;</strong></li>
                    <li>We are passing the <strong>removeHero()</strong> method to <strong>&lt;HerosGrid /&gt;</strong> :  <em>onRemove=&#123;this.removeHero&#125;</em></li>
                    <li>In <strong>&lt;HerosGrid /&gt;</strong>, we are now using another component <strong>&lt;Hero /&gt;</strong> for each row.</li>
                    <li>
                        <strong>Hero </strong> class:
                        <ul>
                            <li>Each of the hero object been provided with a new attribute <strong><em>__edit</em></strong> which tells whether the object is in edit mode or not.</li>
                            <li>In <strong>render()</strong> method,  we are rendering one of the two markups (edit or view)</li>
                            <li>In edit markup, we are using <strong>ref</strong> attributes, and using <strong>updateAttr()</strong> we are editing the actual hero object.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        )
    }
});
module.exports = Crud3;