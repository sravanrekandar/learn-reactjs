var React = require('react');
var CodeSnippet = React.createClass({
    propTypes: {
      html: React.PropTypes.string
    },
    render: function(){
        return <div dangerouslySetInnerHTML={{__html: this.props.html}} />
    }
});
module.exports = CodeSnippet;