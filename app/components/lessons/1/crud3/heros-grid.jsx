var React = require('react');

var Hero = React.createClass({
    propTypes: {
        data: React.PropTypes.object.isRequired,
        idx: React.PropTypes.number.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },
    removeHero: function(){
        this.props.onRemove(this.props.data);
    },
    editHero: function(){
        this.props.data.__edit = true;
        this.forceUpdate();
    },
    saveHero: function(){
        this.props.data.__edit = false;
        this.forceUpdate();
    },
    cancelChange: function(){

    },
    updateAttr: function(attr){
        var field = this.refs[attr].getDOMNode(),
            value = field.value;
        this.props.data[attr] = value;
    },
    render: function(){
        var idx = this.props.idx,
            hero = this.props.data,
            markup;
        if(hero.__edit) {
            markup = (
                <tr>
                    <td>{idx + 1}</td>
                    <td>
                        <input type="text"
                               className="form-control"
                               defaultValue={hero.title}
                               ref="title"
                               onChange={this.updateAttr.bind(this, 'title')}
                            />
                    </td>
                    <td>
                        <input type="text"
                               className="form-control"
                               defaultValue={hero.name}
                               ref="name"
                               onChange={this.updateAttr.bind(this, 'name')}
                            />
                    </td>
                    <td>
                        <input type="text"
                               className="form-control"
                               defaultValue={hero.city}
                               ref="city"
                               onChange={this.updateAttr.bind(this, 'city')}
                            />
                    </td>
                    <td>
                        <button className="btn btn-default btn-xs"
                                onClick={this.removeHero}>
                            <i className="glyphicon glyphicon-remove"/>
                        </button>
                        <button className="btn btn-default btn-xs"
                                onClick={this.saveHero}
                                title="save">
                            <i className="glyphicon glyphicon-floppy-disk"/>
                        </button>
                    </td>
                </tr>
            );
        } else {
            markup = (
                <tr>
                    <td>{idx + 1}</td>
                    <td><strong>{hero.title}</strong></td>
                    <td>{hero.name}</td>
                    <td>{hero.city}</td>
                    <td>
                        <button className="btn btn-default btn-xs"
                                onClick={this.removeHero}>
                            <i className="glyphicon glyphicon-remove"/>
                        </button>
                        <button className="btn btn-default btn-xs"
                                onClick={this.editHero}
                                title="edit">
                            <i className="glyphicon glyphicon-pencil"/>
                        </button>
                    </td>
                </tr>
            );
        }
        return markup;
    }
});

var HerosGrid = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },
    render: function(){
        var self = this,
            heros = this.props.data,
            rows = heros.map((el, idx)=> {
                return (
                    <Hero key={idx} idx={idx} data={el} onRemove={this.props.onRemove} />
                );
            });
        return (
            <table className="table table-striped table-condensed">
                <thead>
                <tr>
                    <th>S.no</th>
                    <th>title</th>
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

module.exports = HerosGrid;