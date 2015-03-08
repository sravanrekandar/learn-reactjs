var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Leftnav = require('./leftnav.jsx');
var exampleComponentsData = require('./require-list-examples');
var ComponentList = require('./component-list.jsx');
var MainComponent = React.createClass({
	componentDidMount: function(){
		this.setState({});
	},
	componentDidUpdate: function(){
		/* For side bar*/
		$('body').scrollspy({
		    target: '.bs-docs-sidebar',
		    offset: 40
		});
	},
	render: function(){
		return (
			<div>
				<Header />
				<div>
					<p>Code examples to create React components</p>
				</div>
				<div className="row">
					
					<div className="col-md-10">
						<ComponentList data={exampleComponentsData} />
					</div>
					<nav className="col-md-2 bs-docs-sidebar">
						<Leftnav data={exampleComponentsData} />
					</nav>
				</div>
				<Footer />
			</div>
			);
	}
});
$(function(){
	React.render(<MainComponent />, document.getElementById('page-content'));	
})
