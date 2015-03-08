(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./public/components/main.jsx":[function(require,module,exports){
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Leftnav = require('./leftnav.jsx');
var exampleComponentsData = require('./require-list-examples');
var ComponentList = require('./component-list.jsx');
var MainComponent = React.createClass({displayName: "MainComponent",
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
			React.createElement("div", null, 
				React.createElement(Header, null), 
				React.createElement("div", null, 
					React.createElement("p", null, "Code examples to create React components")
				), 
				React.createElement("div", {className: "row"}, 
					
					React.createElement("div", {className: "col-md-10"}, 
						React.createElement(ComponentList, {data: exampleComponentsData})
					), 
					React.createElement("nav", {className: "col-md-2 bs-docs-sidebar"}, 
						React.createElement(Leftnav, {data: exampleComponentsData})
					)
				), 
				React.createElement(Footer, null)
			)
			);
	}
});
$(function(){
	React.render(React.createElement(MainComponent, null), document.getElementById('page-content'));	
})


},{"./component-list.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\component-list.jsx","./footer.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\footer.jsx","./header.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\header.jsx","./leftnav.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\leftnav.jsx","./require-list-examples":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\require-list-examples.js"}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\component-list.jsx":[function(require,module,exports){
var LoneComponent = React.createClass({displayName: "LoneComponent",
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
				React.createElement("div", {className: "presentation-component"}, 
					React.createElement("h2", null, React.createElement("i", {className: "glyphicon glyphicon-link"}), 
						React.createElement("a", {className: "btn-link", id: link}, " ", this.props.data.title)
					), 
					React.createElement("p", null, React.createElement("strong", null, "Description: "), " ", this.props.data.description), 
					React.createElement("div", {className: "presentation rendered"}, 
						React.createElement(this.props.data.componentClass, null), 
						React.createElement("div", {className: "presentation-indicator"}, 
							React.createElement("small", null, "Rendered Component")
						)
					), 
					React.createElement("div", {className: "presentation code"}, 
						React.createElement("pre", {className: "code-snippet"}, 
						codeText
						), 
						React.createElement("div", {className: "presentation-indicator"}, 
							React.createElement("small", null, "Code")
						)
					)
				)
			);
	}
});
var ComponentList = React.createClass({displayName: "ComponentList",
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
			return (React.createElement("li", null, 
					React.createElement(LoneComponent, {data: el})
				));
		});
		return (
			React.createElement("ul", {className: "list-unstyled"}, 
				list
			)
			);
	}
});
module.exports = ComponentList;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\demo-component-lifecycle.jsx":[function(require,module,exports){
/** @filename examples/demo-component-lifecycle.jsx
    @author SRAVAN
 */
var Hero = React.createClass({displayName: "Hero",
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	render: function(){
		var data = this.props.data;
		return (
			React.createElement("div", null, 
				React.createElement("img", {src: data.imageUrl, width: 50, height: 75, alt: data.name, title: data.name}), "  ", 
				React.createElement("span", {className: "badge"}, data.name), "  ", 
				data.realName
			)
		);
	}
});
var SuperHeros = React.createClass({displayName: "SuperHeros",
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
			return React.createElement("option", {value: el.source}, el.name)
		});

		var heros = data.team.map(function(el){
			return React.createElement(Hero, {data: el})
		});

		return (
			React.createElement("div", null, 
				React.createElement("select", {ref: "dataSelect", onChange: this.changeData}, 
					options
				), 
				React.createElement("h3", null, data.name), 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-md-3"}, 
						React.createElement("img", {src: data.imageUrl, height: 324, width: 216})
					), 
					React.createElement("div", {className: "col-md-9"}, 
						React.createElement("ul", {className: "list-unstyled"}, 
							heros
						)
					)
				)
			));
	}
}); 
module.exports = SuperHeros;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\inline-styles.jsx":[function(require,module,exports){
/** @filename examples/inline-styles.jsx
    @author SRAVAN
 */
var InlineStyles = React.createClass({displayName: "InlineStyles",
	render: function(){
		var inlineStyle = {
				color: 'darkgreen',
				textDecoration: 'underline',
				fontStyle: 'italic' 
			};
		return React.createElement("p", {style: inlineStyle}, "I am a styled component!")
	}
});
module.exports = InlineStyles;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\nested-components.jsx":[function(require,module,exports){
/** @filename examples/nested-components.jsx
    @author SRAVAN
 */
var Child = React.createClass({displayName: "Child",
	render: function(){
		return (React.createElement("strong", null, React.createElement("em", null, "Child Component")))
	}
});

var Parent = React.createClass({displayName: "Parent",
	render: function(){
		return (
			React.createElement("p", null, 
				"Parent Component", 
				React.createElement(Child, null)
			));
	}
});
module.exports = Parent;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\passing-data.jsx":[function(require,module,exports){
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
var Avenger = React.createClass({displayName: "Avenger",
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	render: function(){
		var avenger = this.props.data;
		return (
			React.createElement("div", null, 
				React.createElement("img", {src: avenger.imageUrl, width: 50, height: 75, alt: avenger.name, title: avenger.name}), "  ", 
				React.createElement("span", {className: "badge"}, avenger.name), "  ", 
				avenger.realName
			)
		);
	}
});

// The parent component which will hold multiple instances of a child component
var Avengers = React.createClass({displayName: "Avengers",
	render: function(){
		var listItems = avengersData.map(function(el){
			return React.createElement(Avenger, {data: el})
		});
		return (
			React.createElement("div", null, 
				React.createElement("h3", null, "The Avengers"), 
				React.createElement("ul", {className: "list-unstyled"}, 
					listItems
				)
			));
	}
});
module.exports = Avengers;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\static-text.jsx":[function(require,module,exports){
/** @filename examples/static-text.jsx
    @author SRAVAN
 */
var StaticText = React.createClass({displayName: "StaticText",
	render: function(){
		return React.createElement("h3", null, "Hello React!")
	}
});
module.exports = StaticText;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\footer.jsx":[function(require,module,exports){
var Footer = React.createClass({displayName: "Footer",
	render: function(){
		return (
			React.createElement("div", {className: "well text-center"}, 
				React.createElement("ul", {className: "list-unstyled"}, 
					React.createElement("li", null, React.createElement("a", {href: "https://github.com/sravanrekandar/learn-reactjs"}, "Fork on github")), 
					React.createElement("li", null, React.createElement("a", {href: "https://github.com/sravanrekandar"}, "SRAVANREKANDAR @ github"))
				)
			))
	}
});
module.exports = Footer;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\header.jsx":[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
  render: function() {
    return (

      React.createElement("nav", {className: "navbar navbar-default"}, 
        React.createElement("div", {className: "container-fluid"}, 
          /* Brand and toggle get grouped for better mobile display */
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
            ), 
            React.createElement("a", {className: "navbar-brand", href: "#"}, "Learn React")
          ), 
          /* Collect the nav links, forms, and other content for toggling */
          React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, React.createElement("i", {className: "glyphicon glyphicon-home"}), React.createElement("span", {className: "sr-only"}, "(current)")))
              
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right user-nav"}, 
              React.createElement("li", {className: "header-nav-item"}, React.createElement("a", {href: "", className: "github-link"}, React.createElement("i", {className: "fa fa-github"}))
              ), 
              React.createElement("li", {className: "header-nav-item js-menu-container"}, 
                React.createElement("a", {className: "header-nav-link name", href: "https://github.com/sravanrekandar", "data-ga-click": "Header, go to profile, text:username"}, 
                  React.createElement("img", {alt: "SRAVAN KUMAR REKANDAR", className: "avatar", "data-user": "2802088", height: "26", src: "https://avatars1.githubusercontent.com/u/2802088?v=3&s=40", width: "26"}), 
                  React.createElement("span", {className: "css-truncate"}, 
                    React.createElement("span", {className: "css-truncate-target"}, " sravanrekandar")
                  )
                )
              )
           
          )
          )/* /.navbar-collapse */
        )/* /.container-fluid */
      )
    );
  }
});

module.exports = Header;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\leftnav.jsx":[function(require,module,exports){
var LeftNav = React.createClass({displayName: "LeftNav",
	propTypes:{
		data:  React.PropTypes.array.isRequired
	},
	getDefaultProps: function(){
		return {
			data: []
		}
	},
	render: function(){
		list  = this.props.data.map(function(el){
			var link = '#' + el.title.replace(/\s/g, '');
			link = link.replace(/'/g, '');
			return React.createElement("li", null, React.createElement("a", {href: link}, el.title))
		});

		return (
					React.createElement("ul", {id: "sidebar", className: "nav nav-stacked fixed"}, 
						list
					)
			);
	}
});
module.exports = LeftNav;

},{}],"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\require-list-examples.js":[function(require,module,exports){
var staticText = require('../components/examples/static-text.jsx');
var inlineStyles = require('../components/examples/inline-styles.jsx');
var nestedComponents = require('../components/examples/nested-components.jsx');
var passingData = require('../components/examples/passing-data.jsx');
var lifeCycle = require('../components/examples/demo-component-lifecycle.jsx');
module.exports = [
	{
		componentClass: staticText,
		path: 'examples/static-text.jsx',
		description: 'A simple react component that has a static header',
		title: 'Hello React'
	},{
		componentClass: inlineStyles,
		path: 'examples/inline-styles.jsx',
		description: 'You can apply inline styles by creating a javascript object and supplying it to the \'styles\' attribute in the markup using the curly braces: \'{\' and \'}\'.',
		title: 'Inline Styles'
	},{
		componentClass: nestedComponents,
		path: 'examples/nested-components.jsx',
		description: 'A react component can contain another react component.',
		title: 'Nesting components'
	},{
		componentClass: passingData,
		path: 'examples/passing-data.jsx',
		description: 'You can pass data to child component.',
		title: 'Passing Data to child components'
	},{
		componentClass: lifeCycle,
		path: 'examples/demo-component-lifecycle.jsx',
		description: 'Dealing with component&quote;s life cycle events',
		title: 'Component\'s life cycle events'
	}
];

},{"../components/examples/demo-component-lifecycle.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\demo-component-lifecycle.jsx","../components/examples/inline-styles.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\inline-styles.jsx","../components/examples/nested-components.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\nested-components.jsx","../components/examples/passing-data.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\passing-data.jsx","../components/examples/static-text.jsx":"D:\\sravan\\projects\\GitHub\\learn-reactjs\\public\\components\\examples\\static-text.jsx"}]},{},["./public/components/main.jsx"]);
