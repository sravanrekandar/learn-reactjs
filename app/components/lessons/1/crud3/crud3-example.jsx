var React = require('react');
var HerosGrid = require('./heros-grid.jsx');

var App = React.createClass({
    getInitialState: function(){
        return {
            superHeros: [
                {title: 'Bat Man', name: 'Bruce Wayne', city: 'Gotham'},
                {title: 'Hulk', name: ' Bruce Banner', city: 'Un known'},
                {title: 'Iron Man', name: 'Tony Stark', city: 'New York'},
            ]
        }
    },
    removeHero: function(hero){
        var index = this.state.superHeros.indexOf(hero);

        if(index !== -1) {
            this.state.superHeros.splice(index, 1);
        }

        this.forceUpdate();
    },
    addHero: function(){
        var newHero = {
            title: 'You',
            name: 'Your self',
            city: 'Banglore'
        }

        this.state.superHeros.push(newHero);
        this.forceUpdate();
        // other way: this.setState({});
    },
    render: function(){
        return (
            <div>
                <button
                    className="btn btn-default btn-big"
                    onClick={this.addHero}>
                    <i className="glyphicon glyphicon-plus" />
                    New Hero
                </button>

                <HerosGrid data={this.state.superHeros} onRemove={this.removeHero} />
            </div>
        );
    }
});
module.exports = App;