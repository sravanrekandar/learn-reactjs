var React = require('react');
var CodeSnippet = React.createClass({
    propTypes: {
      html: React.PropTypes.string.isRequired,
      title: React.PropTypes.string
    },
    getDefaultProps: function(){
      return {
          title: ''
      } ;
    },
    render: function(){
        return (
            <div className="code-snippet-container">
                <div className="code-snippet-title"><em className="text-muted">{this.props.title}</em></div>
                <div dangerouslySetInnerHTML={{__html: this.props.html}} />
            </div>
        );
    }
});
module.exports = CodeSnippet;