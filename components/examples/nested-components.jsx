/** @filename examples/nested-components.jsx
    @author SRAVAN
 */
var Child = React.createClass({
	render: function(){
		return (<strong><em>Child Component</em></strong>)
	}
});

var Parent = React.createClass({
	render: function(){
		return (
			<p>
				Parent Component
				<Child /> 
			</p>);
	}
});
module.exports = Parent;