/** @filename examples/inline-styles.jsx
    @author SRAVAN
 */
var InlineStyles = React.createClass({
	render: function(){
		var inlineStyle = {
				color: 'darkgreen',
				textDecoration: 'underline',
				fontStyle: 'italic' 
			};
		return <p style={inlineStyle}>I am a styled component!</p>
	}
});
module.exports = InlineStyles;