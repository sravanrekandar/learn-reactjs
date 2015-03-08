/** @filename examples/passing-data.jsx
    @author SRAVAN
 */

// The data. optionally, you can import from a json. This code been included here for easy demonstration purpose.
var avengersData = [
	{name: 'IRON MAN', realName: 'Anthony Edward "Tony" Stark', 
		imageUrl: 'http://x.annihil.us/u/prod/marvel/i/mg/2/50/537bb1c400135/portrait_small.jpg'},
	{name: 'CAPTAIN AMERICA', realName: 'Steven "Steve" Rogers',
		imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_small.jpg'},
	{name: 'HULK', realName: 'Robert Bruce Banner',
		imageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/portrait_small.jpg'},
	{name: 'THOR', realName: 'Thor Odinson',
		imageUrl: 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/portrait_small.jpg'},
];

// This would be the child component.
var Avenger = React.createClass({
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	render: function(){
		var avenger = this.props.data;
		return (
			<div>
				<img src={avenger.imageUrl} width={50} height={75} alt={avenger.name} title={avenger.name} /> &nbsp;
				<span className="badge">{avenger.name}</span> &nbsp;
				{avenger.realName}
			</div>
		);
	}
});

// The parent component which will hold multiple instances of a child component
var Avengers = React.createClass({
	render: function(){
		var listItems = avengersData.map(function(el){
			return <Avenger data={el} />
		});
		return (
			<div>
				<h3>The Avengers</h3>
				<ul className="list-unstyled">
					{listItems}
				</ul>
			</div>);
	}
});
module.exports = Avengers;