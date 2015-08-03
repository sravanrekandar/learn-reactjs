var App = React.createClass({
    submitForm: function(event){
        event.preventDefault();
        var username = this.refs.username.getDOMNode().value,
            password = this.refs.password.getDOMNode().value;

        if(username === password && username !== '') {
            alert('Login Success.');
            this.refs.username.getDOMNode().value = '';
            this.refs.password.getDOMNode().value = '';
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" ref="username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" ref="password" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <p className="text-info">* login success on <em>username = password</em></p>
            </div>
        )
    }
});

module.exports = App;