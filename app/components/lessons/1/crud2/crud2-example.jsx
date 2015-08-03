var HerosGrid = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },
    removeHero: function(hero){
        this.props.onRemove(hero);
    },
    render: function(){
        var self = this,
            heros = this.props.data,
            rows = heros.map((hero, idx)=> {
                return (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td><strong>{hero.title}</strong> ({hero.name})</td>
                        <td>{hero.city}</td>
                        <td>
                            <button className="btn btn-default btn-xs"
                                onClick={self.removeHero.bind(self, hero)}>
                                <i className="glyphicon glyphicon-remove" />
                            </button>
                        </td>
                    </tr>
                );
            });
        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>City</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
});
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