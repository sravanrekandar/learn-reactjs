/** @filename examples/demo-component-lifecycle.jsx
    @author SRAVAN
 */
var Hero = React.createClass({
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	render: function(){
		var data = this.props.data;
		return (
			<div>
				<img src={data.imageUrl} width={50} height={75} alt={data.name} title={data.name} /> &nbsp;
				<span className="badge">{data.name}</span> &nbsp;
				{data.realName}
			</div>
		);
	}
});
var SuperHeros = React.createClass({
	changeData: function(){
		var url = this.refs.dataSelect.getDOMNode().value;
		this.updateData(url)
	},
	updateData: function(url){
		var self =this;
		
		$.getJSON(url, function(response){
			self.setState({
				data: response
			});
		});
	},
	getInitialState: function(){
		return {
			data: {
				name: 'NA',
				imageUrl: '#',
				team: []
			}
		}
	},
	getDefaultProps: function(){
		return {
			dataSources: [
						{
							name: 'Avengers',
							source: 'components/assets/super-heros-1.json'
						},{
							name: 'Fantastic 4',
							source: 'components/assets/super-heros-2.json'
						}
					]
		};
	},
	componentWillMount: function(){
		this.updateData(this.props.dataSources[0].source);
	},
	render: function(){
		var data = this.state.data;
		var options = this.props.dataSources.map(function(el){
			return <option value={el.source}>{el.name}</option>
		});

		var heros = data.team.map(function(el){
			return <Hero data={el} />
		});

		return (
			<div>
				<select ref="dataSelect" onChange={this.changeData}>
					{options}
				</select>
				<h3>{data.name}</h3>
				<div className="row">
					<div className="col-md-3">
						<img src={data.imageUrl} height={324} width={216} />
					</div>
					<div className="col-md-9">
						<ul className="list-unstyled">
							{heros}
						</ul>
					</div>
				</div>
			</div>);
	}
}); 
module.exports = SuperHeros;