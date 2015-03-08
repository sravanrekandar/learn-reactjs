var LeftNav = React.createClass({
	propTypes:{
		data:  React.PropTypes.array.isRequired
	},
	getDefaultProps: function(){
		return {
			data: []
		}
	},
	render: function(){
		list  = this.props.data.map(function(el){
			var link = '#' + el.title.replace(/\s/g, '');
			link = link.replace(/'/g, '');
			return <li><a href={link}>{el.title}</a></li>
		});

		return (
					<ul id="sidebar" className="nav nav-stacked fixed">
						{list}
					</ul>
			);
	}
});
module.exports = LeftNav;