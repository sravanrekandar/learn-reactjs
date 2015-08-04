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
            </div>
        )
    }
});
module.exports = Crud3;