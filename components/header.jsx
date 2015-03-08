var Header = React.createClass({
  render: function() {
    return (

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Learn React</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#"><i className="glyphicon glyphicon-home" /><span className="sr-only">(current)</span></a></li>
              
            </ul>
            <ul className="nav navbar-nav navbar-right user-nav">
              <li className="header-nav-item"><a href="" className="github-link"><i className="fa fa-github"></i></a>
              </li>
              <li className="header-nav-item js-menu-container">
                <a className="header-nav-link name" href="https://github.com/sravanrekandar" data-ga-click="Header, go to profile, text:username">
                  <img alt="SRAVAN KUMAR REKANDAR" className="avatar" data-user="2802088" height="26" src="https://avatars1.githubusercontent.com/u/2802088?v=3&amp;s=40" width="26" />
                  <span className="css-truncate">
                    <span className="css-truncate-target"> sravanrekandar</span>
                  </span>
                </a>
              </li>
           
          </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
    );
  }
});

module.exports = Header;