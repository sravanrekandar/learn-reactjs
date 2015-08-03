var HerosGrid = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function(){
        var heros = this.props.data,
        rows = heros.map((hero, idx)=> {
                    return (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td><strong>{hero.title}</strong> ({hero.name})</td>
                            <td>{hero.city}</td>
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

                <HerosGrid data={this.state.superHeros} />
            </div>
        );
    }
});
module.exports = App;