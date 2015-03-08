var LoneComponent = React.createClass({
	propTypes:{
		data:  React.PropTypes.object.isRequired
	},
	componentWillMount: function(){
		var self = this;
		$.ajax({
			url: 'components/' + this.props.data.path,
			method: 'get',
			dataType: 'html',
			success: function(response){
				self.codeText = response;
				self.setState({});
			}
		});
	},
	render: function(){
		var codeText = this.codeText || '';
		var link = this.props.data.title.replace(/\s/g, '');
		link = link.replace(/'/g, '');
		return (
				<div className="presentation-component">
					<h2><i className="glyphicon glyphicon-link" />
						<a className="btn-link" id={link}> {this.props.data.title}</a>
					</h2>
					<p><strong>Description: </strong> {this.props.data.description}</p>
					<div className="presentation rendered">
						<this.props.data.componentClass />
						<div className="presentation-indicator">
							<small>Rendered Component</small>
						</div>
					</div>
					<div className="presentation code">
						<pre className="code-snippet">
						{codeText}
						</pre>
						<div className="presentation-indicator">
							<small>Code</small>
						</div>
					</div>
				</div>
			);
	}
});
var ComponentList = React.createClass({
	propTypes:{
		data:  React.PropTypes.array.isRequired
	},
	getDefaultProps: function(){
		return {
			data: []
		}
	},
	render: function(){
		var exampleComponents = this.props.data;
		var list = exampleComponents.map(function(el){
			var Comp = el.componentClass;
			return (<li>
					<LoneComponent data={el} />
				</li>);
		});
		return (
			<ul className="list-unstyled">
				{list}
			</ul>
			);
	}
});
module.exports = ComponentList;