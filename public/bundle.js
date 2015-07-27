/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;
	
	var Routes = __webpack_require__(3);
	__webpack_require__(27);
	__webpack_require__(28);
	
	Router.run(Routes, Router.HashLocation, function(Root){
	    React.render(React.createElement(Root), document.getElementById('page-container'));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Router = __webpack_require__(2);
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;
	
	var App = __webpack_require__(4);
	var Lesson = __webpack_require__(9);
	
	var Default = React.createClass({displayName: "Default",
	    render: function(){
	        return React.createElement("div", null, "Default")
	    }
	});
	
	// declare our routes and their hierarchy
	var routes = (
	    React.createElement(Route, {handler: App}, 
	        React.createElement(Route, {name: "lesson", path: "/lesson/:name", handler: Lesson}), 
	        React.createElement(Router.DefaultRoute, {name: "default", handler: Default})
	    )
	);
	
	
	
	module.exports = routes;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var RouteHandler = Router.RouteHandler;
	var Link = Router.Link;
	
	var Header = __webpack_require__(5);
	var Footer = __webpack_require__(6);
	var Leftnav = __webpack_require__(7);
	
	var App = React.createClass({displayName: "App",
	    render: function () {
	        return (
	            React.createElement("div", {className: "container"}, 
	                React.createElement("div", null, 
	                    React.createElement(Header, null), 
	                    React.createElement("div", {className: "row"}, 
	                        React.createElement("div", {className: "col-md-10"}, 
	                            React.createElement(RouteHandler, null)
	                        ), 
	                        React.createElement("nav", {className: "col-md-2 bs-docs-sidebar"}, 
	                            React.createElement(Leftnav, null)
	                        )
	                    ), 
	                    React.createElement(Footer, null)
	                )
	            )
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Header = React.createClass({displayName: "Header",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                "Header"
	            )
	        );
	    }
	});
	module.exports = Header;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Footer = React.createClass({displayName: "Footer",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                "Footer"
	            )
	        );
	    }
	});
	module.exports = Footer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Link = Router.Link;
	var lessonsList = __webpack_require__(8);
	var LeftNav = React.createClass({displayName: "LeftNav",
	    mixins: [ Router.State ],
	    render: function () {
	        var currentLessonName = this.getParams().name;
	        var items = lessonsList.map(function(el){
	            return (
	                React.createElement("li", {className: "list-group-item " + ((currentLessonName === el.name) ? 'active': '')}, 
	                    React.createElement(Link, {to: "lesson", params: {name: el.name}}, " ", el.title)
	                )
	            );
	        });
	        return (
	            React.createElement("div", null, 
	                React.createElement("ul", {className: "list-group lessons-list"}, 
	                    items
	                )
	            )
	        );
	    }
	});
	
	module.exports = LeftNav;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "intro",
			"title": "Introduction",
			"component": "1/intro/intro.jsx",
			"chapter": "1",
			"keywords": [
				"essentials",
				"setup"
			]
		},
		{
			"name": "setup",
			"title": "Basic Setup",
			"component": "1/basic-setup/basic-setup.jsx",
			"chapter": "1",
			"snippets": {
				"1/basic-setup/1": "lessons/1/basic-setup/1.snippet"
			},
			"keywords": [
				"essentials",
				"setup"
			]
		},
		{
			"name": "helloworld",
			"title": "Hello World",
			"component": "1/helloworld/helloworld.jsx",
			"chapter": "1",
			"snippets": {
				"1/helloworld/1": "lessons/1/helloworld/1.snippet",
				"1/helloworld/2": "lessons/1/helloworld/2.snippet",
				"1/helloworld/3": "lessons/1/helloworld/3.snippet"
			},
			"keywords": [
				"essentials",
				"helloworld"
			]
		},
		{
			"name": "inline-styles",
			"title": "Inline Styles",
			"component": "1/inline-styles/inline-styles.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"essentials",
				"styles",
				"css"
			]
		},
		{
			"name": "nesting-components",
			"title": "Nesting Components",
			"component": "1/nesting-components/nesting-components.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"essentials",
				"nesting",
				"styles",
				"css"
			]
		},
		{
			"name": "crud1",
			"title": "CRUD Operations (part 1) C,R & U",
			"component": "1/crud1/crud1.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"essentials",
				"crud"
			]
		},
		{
			"name": "crud2",
			"title": "CRUD Operations (part 2) Delete",
			"component": "1/crud2/crud2.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"essentials",
				"crud"
			]
		},
		{
			"name": "handling-form-fields",
			"title": "Handling Form Fields",
			"component": "1/handling-form-fields/handling-form-fields.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"Form"
			]
		}
	]

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(10);
	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Link = Router.Link;
	var lessonsList = __webpack_require__(8);
	var requireLesson = __webpack_require__(11).requireLesson;
	
	var AasPaasLinks = React.createClass({displayName: "AasPaasLinks",
	    propTypes: {
	        current: React.PropTypes.object
	    },
	    getDefaultProps: function(){
	        return {
	            current: lessonsList[0]
	        }
	    },
	    render: function(){
	        var currentIndex = _.findIndex(lessonsList, this.props.current)
	        ,   prev = (currentIndex <= 0) ? '' : React.createElement(Link, {to: "lesson", params: {name:lessonsList[currentIndex - 1].name}}, React.createElement("i", {className: "glyphicon glyphicon-menu-left"}), " ", lessonsList[currentIndex - 1].title)
	        ,   next = (currentIndex < 0 || currentIndex >= lessonsList.length - 1) ? '' : React.createElement(Link, {to: "lesson", params: {name:lessonsList[currentIndex + 1].name}}, lessonsList[currentIndex + 1].title, " ", React.createElement("i", {className: "glyphicon glyphicon-menu-right"}), " ")
	        ;
	        return  (
	            React.createElement("ul", {className: "list-inline"}, 
	                React.createElement("li", null, prev), 
	                React.createElement("li", null, 
	                    (prev!== '' && next!== '')? '|' : ''
	                ), 
	                React.createElement("li", null, next)
	            )
	        );
	    }
	});
	var Lesson = React.createClass({displayName: "Lesson",
	    updateLessonInfo: function(name){
	        this.setState({
	            name: name
	        });
	    },
	    getInitialState: function(){
	        return{
	            name: 'intro'
	        }
	    },
	    componentDidMount: function () {
	        this.updateLessonInfo(this.props.params.name);
	    },
	    componentWillReceiveProps: function(nextProps){
	        this.updateLessonInfo(nextProps.params.name);
	    },
	    render: function(){console.log(85);
	        var lesson = _.find(lessonsList, {name: this.state.name}),
	            title = lesson ? lesson.title : '',
	            Component = lesson ? requireLesson('./' + lesson.component) : undefined;
	        return (
	            React.createElement("div", {className: "lesson-container"}, 
	                React.createElement("div", {className: "clearfix"}, 
	                    React.createElement("h2", {className: "pull-left"}, title), 
	                    React.createElement("div", {className: "pull-right"}, 
	                        React.createElement(AasPaasLinks, {current: lesson})
	                    )
	                ), 
	
	                
	                    Component
	                        ? React.createElement(Component, null)
	                        : '', 
	                
	                React.createElement("hr", null), 
	                React.createElement(AasPaasLinks, {current: lesson})
	            )
	        );
	    }
	});
	module.exports = Lesson;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var requireLesson = __webpack_require__(12);
	var requireSnippet = __webpack_require__(22);
	module.exports = {
	    requireLesson: requireLesson,
	    requireSnippet: requireSnippet
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1/basic-setup/basic-setup.jsx": 13,
		"./1/crud1/crud1.jsx": 15,
		"./1/crud2/crud2.jsx": 16,
		"./1/handling-form-fields/handling-form-fields.jsx": 17,
		"./1/helloworld/helloworld.jsx": 18,
		"./1/inline-styles/inline-styles.jsx": 19,
		"./1/intro/intro.jsx": 20,
		"./1/nesting-components/nesting-components.jsx": 21
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 12;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippetBoilerplate = requireSnippet('./1/basic-setup/1.snippet');
	var BasicSetUp = React.createClass({displayName: "BasicSetUp",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("p", null, "Use the below boilerplate to start with React Coding. ", React.createElement("br", null), 
	                    "Create a file (say ", React.createElement("em", null, "welcome.html"), ") with the below code."), 
	                React.createElement(CodeSnippet, {html: snippetBoilerplate}), 
	                React.createElement("p", null, "Open the file in browser and check console to make sure there are no errors."
	                ), 
	                React.createElement("p", null, 
	                    "Alternatively, you can ", React.createElement("a", {href: "downloads/boilerplate.zip", target: "_blank"}, "download this boiler plate here"), "."
	                ), 
	                React.createElement("p", null, 
	                    "Apart from including ReactJS, we have included ", React.createElement("em", null, "JSXTransformer.js"), " which will identify the ", React.createElement("em", null, "<script ", React.createElement("strong", null, "type=\"text/jsx\""), " />"), " tags and convert them to JavaScript before executing."
	                )
	            )
	        );
	    }
	});
	module.exports = BasicSetUp;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var CodeSnippet = React.createClass({displayName: "CodeSnippet",
	    propTypes: {
	      html: React.PropTypes.string
	    },
	    render: function(){
	        return React.createElement("div", {dangerouslySetInnerHTML: {__html: this.props.html}})
	    }
	});
	module.exports = CodeSnippet;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Crud1 = React.createClass({displayName: "Crud1",
	    render: function(){
	        return (
	            React.createElement("div", null, 
	                React.createElement("em", null, "To be written.")
	            )
	        )
	    }
	});
	module.exports = Crud1;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Crud2 = React.createClass({displayName: "Crud2",
	    render: function(){
	        return (
	            React.createElement("div", null, 
	                React.createElement("em", null, "To be written.")
	            )
	        )
	    }
	});
	module.exports = Crud2;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var HandlingFormFields = React.createClass({displayName: "HandlingFormFields",
	    render: function(){
	        return (
	            React.createElement("div", null, 
	                React.createElement("em", null, "To be written.")
	            )
	        )
	    }
	});
	module.exports = HandlingFormFields;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippetHelloWorld = requireSnippet('./1/helloworld/1.snippet');
	var snippetJSXCode = requireSnippet('./1/helloworld/2.snippet');
	var snippetTransformedToJSCode = requireSnippet('./1/helloworld/3.snippet');
	
	var HelloWorld = React.createClass({displayName: "HelloWorld",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("p", null, "Let us write HelloWorld program. Modify your boiler plate as following.."), 
	                React.createElement(CodeSnippet, {html: snippetHelloWorld}), 
	                React.createElement("p", null, 
	                    "In the above code, we have created a component named ", React.createElement("em", null, "FirstComponent"), " and rendering the component to ", React.createElement("em", null, "<div ", React.createElement("strong", null, "id=\"page-content\""), ">"), "."
	                ), 
	                React.createElement("ol", null, 
	                    React.createElement("li", null, " To create a react component,  we use ", React.createElement("strong", null, React.createElement("em", null, "React.createClass"))
	                    ), 
	                    React.createElement("li", null, React.createElement("strong", null, React.createElement("em", null, "React.createClass")), " would expect an object (", React.createElement("strong", null, React.createElement("em", null, "{ }")), ")"
	                    ), 
	                    React.createElement("li", null, React.createElement("strong", null, React.createElement("em", null, "render()")), " is mandatory for any React component."
	                    ), 
	                    React.createElement("li", null, React.createElement("strong", null, React.createElement("em", null, "render()")), " should return a valid React element And all valid HTML elements are valid React elements. We are returning a ", React.createElement("strong", null, React.createElement("em", null, "<h1 / >")), " tag in the above component."
	                    ), 
	                    React.createElement("li", null, React.createElement("strong", null, React.createElement("em", null, "React.render()")), " would render a React element to a DOM element."
	                    )
	                ), 
	                React.createElement("p", null, "If you are wondering how the JSX to JS transformed code would look like, copy the JSX code and try the ", React.createElement("a", {href: "https://facebook.github.io/react/jsx-compiler.html", target: "_blank"}, "JSX compiler service"), ". For quick view, look at the below codes."), 
	                React.createElement("div", {className: "row"}, 
	                    React.createElement("div", {className: "col-md-12"}, 
	                        React.createElement("table", {className: "table table-condensed table-bordered"}, 
	                            React.createElement("thead", null, 
	                                React.createElement("tr", null, 
	                                    React.createElement("th", null, "JSX Code"), 
	                                    React.createElement("th", null, "Transformed to JavaScript")
	                                )
	                            ), 
	                            React.createElement("tbody", null, 
	                                React.createElement("tr", null, 
	                                    React.createElement("td", null, React.createElement(CodeSnippet, {html: snippetJSXCode})), 
	                                    React.createElement("td", null, React.createElement(CodeSnippet, {html: snippetTransformedToJSCode}))
	                                )
	                            )
	                        )
	                    )
	                )
	
	            )
	        );
	    }
	});
	module.exports = HelloWorld;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var InlineStyles = React.createClass({displayName: "InlineStyles",
	    render: function(){
	        return (
	            React.createElement("div", null, 
	                React.createElement("em", null, "To be written.")
	            )
	        )
	    }
	});
	module.exports = InlineStyles;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Intro = React.createClass({displayName: "Intro",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("p", null, "This page is an effort to give a list of code examples of ReactJS along with explanations."), 
	                React.createElement("p", null, React.createElement("a", {href: "http://facebook.github.io/react/", target: "_blank"}, "React.js"), " is a JavaScript library to create reusable UI components."), 
	                React.createElement("p", null, "We write the React.js components using ", React.createElement("a", {href: "https://jsx.github.io/", target: "_blank"}, "JSX language"), ". JSX is a combination of HTML and JavaScript. Using some JSX Transformer, we will convert the JSX code to JS before executing in browser")
	            )
	        );
	    }
	});
	module.exports = Intro;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var NestingComponents = React.createClass({displayName: "NestingComponents",
	    render: function(){
	        return (
	            React.createElement("div", null, 
	                React.createElement("em", null, "To be written.")
	            )
	        )
	    }
	});
	module.exports = NestingComponents;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1/basic-setup/1.snippet": 23,
		"./1/helloworld/1.snippet": 24,
		"./1/helloworld/2.snippet": 25,
		"./1/helloworld/3.snippet": 26
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 22;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_605172\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>Welcome to ReactJS&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css</a>\"</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"plain\">/> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">Welcome to ReactJS </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://code.jquery.com/jquery-2.1.3.min.js\">https://code.jquery.com/jquery-2.1.3.min.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js\">http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min.js\">https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js\">https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/jsx\"</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">// React.JS code goes here </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number20 index19 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_168313\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>Welcome to ReactJS&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css</a>\"</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"plain\">/> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://code.jquery.com/jquery-2.1.3.min.js\">https://code.jquery.com/jquery-2.1.3.min.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js\">http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.js\">https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/javascript\"</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"<a href=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js\">https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js</a>\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/jsx\"</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number26 index25 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_560723\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_595833\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({displayName: </code><code class=\"string\">\"FirstComponent\"</code><code class=\"plain\">, </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">React.createElement(</code><code class=\"string\">\"h1\"</code><code class=\"plain\">, </code><code class=\"keyword\">null</code><code class=\"plain\">, </code><code class=\"string\">\"Hello, world!\"</code><code class=\"plain\">) </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(React.createElement(FirstComponent, </code><code class=\"keyword\">null</code><code class=\"plain\">), document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZhMDUzYTFiNjEzNjIwODEyY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9jb25maWcvcm91dGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9sZWZ0bmF2LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvbGVzc29ucy5qc29uIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3Nvbi5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2N1c3RvbS1yZXF1aXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9sZXNzb25zIF5cXC5cXC8uKlxcLmpzeCQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2Jhc2ljLXNldHVwL2Jhc2ljLXNldHVwLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb2RlLXNuaXBwZXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9jcnVkMS9jcnVkMS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2NydWQyL2NydWQyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvaGFuZGxpbmctZm9ybS1maWVsZHMvaGFuZGxpbmctZm9ybS1maWVsZHMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9oZWxsb3dvcmxkL2hlbGxvd29ybGQuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9pbmxpbmUtc3R5bGVzL2lubGluZS1zdHlsZXMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9pbnRyby9pbnRyby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL25lc3RpbmctY29tcG9uZW50cy9uZXN0aW5nLWNvbXBvbmVudHMuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMgXlxcLlxcLy4qXFwuc25pcHBldCQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2Jhc2ljLXNldHVwLzEuc25pcHBldCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvaGVsbG93b3JsZC8xLnNuaXBwZXQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2hlbGxvd29ybGQvMi5zbmlwcGV0Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9oZWxsb3dvcmxkLzMuc25pcHBldCIsIndlYnBhY2s6Ly8vLi9+L25vZGUtc3ludGF4aGlnaGxpZ2h0ZXIvbGliL3N0eWxlcy9zaENvcmUuY3NzIiwid2VicGFjazovLy8uL34vbm9kZS1zeW50YXhoaWdobGlnaHRlci9saWIvc3R5bGVzL3NoQ29yZURlZmF1bHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7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OEJBQThCLEVBQUUsK0ZBQStGLGFBQWEsdUZBQXVGLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSw4Q0FBOEMsbUxBQW1MLCtGQUErRixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLGlDQUFpQyxtS0FBbUssTUFBTSxNQUFNLE1BQU0saUNBQWlDLG9KQUFvSixzSDs7Ozs7O0FDQTU1Uyx1cUJBQXNxQiw2RkFBNkYsTUFBTSxNQUFNLE1BQU0sNEdBQTRHLDZGQUE2RixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHVFQUF1RSxnRkFBZ0YsNkpBQTZKLE1BQU0sTUFBTSxNQUFNLDhCQUE4Qiw2RUFBNkUsRUFBRSw2RkFBNkYsYUFBYSxxRkFBcUYsbUxBQW1MLG9EOzs7Ozs7QUNBN3lELHVxQkFBc3FCLHdMQUF3TCxNQUFNLE1BQU0sTUFBTSw0R0FBNEcsNkZBQTZGLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sc1lBQXNZLE1BQU0sTUFBTSxNQUFNLDhCQUE4Qiw2RUFBNkUsRUFBRSw2RkFBNkYsYUFBYSw0UkFBNFIsb0Q7Ozs7OztBQ0E5K0QsMEM7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InB1YmxpYy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZmYTA1M2ExYjYxMzYyMDgxMmNhXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XHJcblxyXG52YXIgUm91dGVzID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzeCcpO1xyXG5yZXF1aXJlKCdzeW50YXhoaWdobGlnaHRlci1jb3JlLmNzcycpO1xyXG5yZXF1aXJlKCdzeW50YXhoaWdobGlnaHRlci1jb3JlLWRlZmF1bHQuY3NzJyk7XHJcblxyXG5Sb3V0ZXIucnVuKFJvdXRlcywgUm91dGVyLkhhc2hMb2NhdGlvbiwgZnVuY3Rpb24oUm9vdCl7XHJcbiAgICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGFpbmVyJykpO1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xyXG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcclxuXHJcbnZhciBBcHAgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2FwcC5qc3gnKTtcclxudmFyIExlc3NvbiA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvbGVzc29uLmpzeCcpO1xyXG5cclxudmFyIERlZmF1bHQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiRGVmYXVsdFwiKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIGRlY2xhcmUgb3VyIHJvdXRlcyBhbmQgdGhlaXIgaGllcmFyY2h5XHJcbnZhciByb3V0ZXMgPSAoXHJcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7aGFuZGxlcjogQXBwfSwgXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwibGVzc29uXCIsIHBhdGg6IFwiL2xlc3Nvbi86bmFtZVwiLCBoYW5kbGVyOiBMZXNzb259KSwgXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIuRGVmYXVsdFJvdXRlLCB7bmFtZTogXCJkZWZhdWx0XCIsIGhhbmRsZXI6IERlZmF1bHR9KVxyXG4gICAgKVxyXG4pO1xyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbmZpZy9yb3V0ZXMuanN4XG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xyXG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcclxudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcclxuXHJcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlci5qc3gnKTtcclxudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyLmpzeCcpO1xyXG52YXIgTGVmdG5hdiA9IHJlcXVpcmUoJy4vbGVmdG5hdi5qc3gnKTtcclxuXHJcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGFpbmVyXCJ9LCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLCBcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC0xMFwifSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlSGFuZGxlciwgbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMiBicy1kb2NzLXNpZGViYXJcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZWZ0bmF2LCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2FwcC5qc3hcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkhlYWRlclwiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICBcIkhlYWRlclwiXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9oZWFkZXIuanN4XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGb290ZXJcIixcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgXCJGb290ZXJcIlxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLmpzeFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcclxudmFyIGxlc3NvbnNMaXN0ID0gcmVxdWlyZSgnLi4vLi4vYXBwL2xlc3NvbnMuanNvbicpO1xyXG52YXIgTGVmdE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJMZWZ0TmF2XCIsXHJcbiAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudExlc3Nvbk5hbWUgPSB0aGlzLmdldFBhcmFtcygpLm5hbWU7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gbGVzc29uc0xpc3QubWFwKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcImxpc3QtZ3JvdXAtaXRlbSBcIiArICgoY3VycmVudExlc3Nvbk5hbWUgPT09IGVsLm5hbWUpID8gJ2FjdGl2ZSc6ICcnKX0sIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImxlc3NvblwiLCBwYXJhbXM6IHtuYW1lOiBlbC5uYW1lfX0sIFwiIFwiLCBlbC50aXRsZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibGlzdC1ncm91cCBsZXNzb25zLWxpc3RcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGVmdE5hdjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbGVmdG5hdi5qc3hcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcImludHJvXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIkludHJvZHVjdGlvblwiLFxuXHRcdFwiY29tcG9uZW50XCI6IFwiMS9pbnRyby9pbnRyby5qc3hcIixcblx0XHRcImNoYXB0ZXJcIjogXCIxXCIsXG5cdFx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XHRcImVzc2VudGlhbHNcIixcblx0XHRcdFwic2V0dXBcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcInNldHVwXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIkJhc2ljIFNldHVwXCIsXG5cdFx0XCJjb21wb25lbnRcIjogXCIxL2Jhc2ljLXNldHVwL2Jhc2ljLXNldHVwLmpzeFwiLFxuXHRcdFwiY2hhcHRlclwiOiBcIjFcIixcblx0XHRcInNuaXBwZXRzXCI6IHtcblx0XHRcdFwiMS9iYXNpYy1zZXR1cC8xXCI6IFwibGVzc29ucy8xL2Jhc2ljLXNldHVwLzEuc25pcHBldFwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRzXCI6IFtcblx0XHRcdFwiZXNzZW50aWFsc1wiLFxuXHRcdFx0XCJzZXR1cFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiaGVsbG93b3JsZFwiLFxuXHRcdFwidGl0bGVcIjogXCJIZWxsbyBXb3JsZFwiLFxuXHRcdFwiY29tcG9uZW50XCI6IFwiMS9oZWxsb3dvcmxkL2hlbGxvd29ybGQuanN4XCIsXG5cdFx0XCJjaGFwdGVyXCI6IFwiMVwiLFxuXHRcdFwic25pcHBldHNcIjoge1xuXHRcdFx0XCIxL2hlbGxvd29ybGQvMVwiOiBcImxlc3NvbnMvMS9oZWxsb3dvcmxkLzEuc25pcHBldFwiLFxuXHRcdFx0XCIxL2hlbGxvd29ybGQvMlwiOiBcImxlc3NvbnMvMS9oZWxsb3dvcmxkLzIuc25pcHBldFwiLFxuXHRcdFx0XCIxL2hlbGxvd29ybGQvM1wiOiBcImxlc3NvbnMvMS9oZWxsb3dvcmxkLzMuc25pcHBldFwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRzXCI6IFtcblx0XHRcdFwiZXNzZW50aWFsc1wiLFxuXHRcdFx0XCJoZWxsb3dvcmxkXCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJpbmxpbmUtc3R5bGVzXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIklubGluZSBTdHlsZXNcIixcblx0XHRcImNvbXBvbmVudFwiOiBcIjEvaW5saW5lLXN0eWxlcy9pbmxpbmUtc3R5bGVzLmpzeFwiLFxuXHRcdFwiY2hhcHRlclwiOiBcIjFcIixcblx0XHRcInNuaXBwZXRzXCI6IHt9LFxuXHRcdFwia2V5d29yZHNcIjogW1xuXHRcdFx0XCJlc3NlbnRpYWxzXCIsXG5cdFx0XHRcInN0eWxlc1wiLFxuXHRcdFx0XCJjc3NcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIm5lc3RpbmctY29tcG9uZW50c1wiLFxuXHRcdFwidGl0bGVcIjogXCJOZXN0aW5nIENvbXBvbmVudHNcIixcblx0XHRcImNvbXBvbmVudFwiOiBcIjEvbmVzdGluZy1jb21wb25lbnRzL25lc3RpbmctY29tcG9uZW50cy5qc3hcIixcblx0XHRcImNoYXB0ZXJcIjogXCIxXCIsXG5cdFx0XCJzbmlwcGV0c1wiOiB7fSxcblx0XHRcImtleXdvcmRzXCI6IFtcblx0XHRcdFwiZXNzZW50aWFsc1wiLFxuXHRcdFx0XCJuZXN0aW5nXCIsXG5cdFx0XHRcInN0eWxlc1wiLFxuXHRcdFx0XCJjc3NcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcImNydWQxXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIkNSVUQgT3BlcmF0aW9ucyAocGFydCAxKSBDLFIgJiBVXCIsXG5cdFx0XCJjb21wb25lbnRcIjogXCIxL2NydWQxL2NydWQxLmpzeFwiLFxuXHRcdFwiY2hhcHRlclwiOiBcIjFcIixcblx0XHRcInNuaXBwZXRzXCI6IHt9LFxuXHRcdFwia2V5d29yZHNcIjogW1xuXHRcdFx0XCJlc3NlbnRpYWxzXCIsXG5cdFx0XHRcImNydWRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcImNydWQyXCIsXG5cdFx0XCJ0aXRsZVwiOiBcIkNSVUQgT3BlcmF0aW9ucyAocGFydCAyKSBEZWxldGVcIixcblx0XHRcImNvbXBvbmVudFwiOiBcIjEvY3J1ZDIvY3J1ZDIuanN4XCIsXG5cdFx0XCJjaGFwdGVyXCI6IFwiMVwiLFxuXHRcdFwic25pcHBldHNcIjoge30sXG5cdFx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XHRcImVzc2VudGlhbHNcIixcblx0XHRcdFwiY3J1ZFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiaGFuZGxpbmctZm9ybS1maWVsZHNcIixcblx0XHRcInRpdGxlXCI6IFwiSGFuZGxpbmcgRm9ybSBGaWVsZHNcIixcblx0XHRcImNvbXBvbmVudFwiOiBcIjEvaGFuZGxpbmctZm9ybS1maWVsZHMvaGFuZGxpbmctZm9ybS1maWVsZHMuanN4XCIsXG5cdFx0XCJjaGFwdGVyXCI6IFwiMVwiLFxuXHRcdFwic25pcHBldHNcIjoge30sXG5cdFx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XHRcIkZvcm1cIlxuXHRcdF1cblx0fVxuXVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvbGVzc29ucy5qc29uXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCdfJyk7XHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcclxudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcclxudmFyIGxlc3NvbnNMaXN0ID0gcmVxdWlyZSgnLi4vLi4vYXBwL2xlc3NvbnMuanNvbicpO1xyXG52YXIgcmVxdWlyZUxlc3NvbiA9IHJlcXVpcmUoJy4vY3VzdG9tLXJlcXVpcmVzJykucmVxdWlyZUxlc3NvbjtcclxuXHJcbnZhciBBYXNQYWFzTGlua3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQWFzUGFhc0xpbmtzXCIsXHJcbiAgICBwcm9wVHlwZXM6IHtcclxuICAgICAgICBjdXJyZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgICB9LFxyXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IGxlc3NvbnNMaXN0WzBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gXy5maW5kSW5kZXgobGVzc29uc0xpc3QsIHRoaXMucHJvcHMuY3VycmVudClcclxuICAgICAgICAsICAgcHJldiA9IChjdXJyZW50SW5kZXggPD0gMCkgPyAnJyA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImxlc3NvblwiLCBwYXJhbXM6IHtuYW1lOmxlc3NvbnNMaXN0W2N1cnJlbnRJbmRleCAtIDFdLm5hbWV9fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge2NsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtbGVmdFwifSksIFwiIFwiLCBsZXNzb25zTGlzdFtjdXJyZW50SW5kZXggLSAxXS50aXRsZSlcclxuICAgICAgICAsICAgbmV4dCA9IChjdXJyZW50SW5kZXggPCAwIHx8IGN1cnJlbnRJbmRleCA+PSBsZXNzb25zTGlzdC5sZW5ndGggLSAxKSA/ICcnIDogUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwibGVzc29uXCIsIHBhcmFtczoge25hbWU6bGVzc29uc0xpc3RbY3VycmVudEluZGV4ICsgMV0ubmFtZX19LCBsZXNzb25zTGlzdFtjdXJyZW50SW5kZXggKyAxXS50aXRsZSwgXCIgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXJpZ2h0XCJ9KSwgXCIgXCIpXHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJsaXN0LWlubGluZVwifSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgcHJldiksIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgIChwcmV2IT09ICcnICYmIG5leHQhPT0gJycpPyAnfCcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgbmV4dClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgTGVzc29uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxlc3NvblwiLFxyXG4gICAgdXBkYXRlTGVzc29uSW5mbzogZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBuYW1lOiAnaW50cm8nXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMZXNzb25JbmZvKHRoaXMucHJvcHMucGFyYW1zLm5hbWUpO1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcyl7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMZXNzb25JbmZvKG5leHRQcm9wcy5wYXJhbXMubmFtZSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe2NvbnNvbGUubG9nKDg1KTtcclxuICAgICAgICB2YXIgbGVzc29uID0gXy5maW5kKGxlc3NvbnNMaXN0LCB7bmFtZTogdGhpcy5zdGF0ZS5uYW1lfSksXHJcbiAgICAgICAgICAgIHRpdGxlID0gbGVzc29uID8gbGVzc29uLnRpdGxlIDogJycsXHJcbiAgICAgICAgICAgIENvbXBvbmVudCA9IGxlc3NvbiA/IHJlcXVpcmVMZXNzb24oJy4vJyArIGxlc3Nvbi5jb21wb25lbnQpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsZXNzb24tY29udGFpbmVyXCJ9LCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjbGVhcmZpeFwifSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWU6IFwicHVsbC1sZWZ0XCJ9LCB0aXRsZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwdWxsLXJpZ2h0XCJ9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBYXNQYWFzTGlua3MsIHtjdXJyZW50OiBsZXNzb259KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICksIFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnLCBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWFzUGFhc0xpbmtzLCB7Y3VycmVudDogbGVzc29ufSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IExlc3NvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbGVzc29uLmpzeFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX1wiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciByZXF1aXJlTGVzc29uID0gcmVxdWlyZS5jb250ZXh0KFwiLi9sZXNzb25zXCIsIHRydWUsIC9eXFwuXFwvLipcXC5qc3gkLyk7XHJcbnZhciByZXF1aXJlU25pcHBldCA9IHJlcXVpcmUuY29udGV4dChcIi4vbGVzc29uc1wiLCB0cnVlLCAvXlxcLlxcLy4qXFwuc25pcHBldCQvKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICByZXF1aXJlTGVzc29uOiByZXF1aXJlTGVzc29uLFxyXG4gICAgcmVxdWlyZVNuaXBwZXQ6IHJlcXVpcmVTbmlwcGV0XHJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvY3VzdG9tLXJlcXVpcmVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi8xL2Jhc2ljLXNldHVwL2Jhc2ljLXNldHVwLmpzeFwiOiAxMyxcblx0XCIuLzEvY3J1ZDEvY3J1ZDEuanN4XCI6IDE1LFxuXHRcIi4vMS9jcnVkMi9jcnVkMi5qc3hcIjogMTYsXG5cdFwiLi8xL2hhbmRsaW5nLWZvcm0tZmllbGRzL2hhbmRsaW5nLWZvcm0tZmllbGRzLmpzeFwiOiAxNyxcblx0XCIuLzEvaGVsbG93b3JsZC9oZWxsb3dvcmxkLmpzeFwiOiAxOCxcblx0XCIuLzEvaW5saW5lLXN0eWxlcy9pbmxpbmUtc3R5bGVzLmpzeFwiOiAxOSxcblx0XCIuLzEvaW50cm8vaW50cm8uanN4XCI6IDIwLFxuXHRcIi4vMS9uZXN0aW5nLWNvbXBvbmVudHMvbmVzdGluZy1jb21wb25lbnRzLmpzeFwiOiAyMVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zIF5cXC5cXC8uKlxcLmpzeCRcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIHJlcXVpcmVTbmlwcGV0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY3VzdG9tLXJlcXVpcmVzJykucmVxdWlyZVNuaXBwZXQ7XHJcbnZhciBDb2RlU25pcHBldCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvZGUtc25pcHBldC5qc3gnKTtcclxudmFyIHNuaXBwZXRCb2lsZXJwbGF0ZSA9IHJlcXVpcmVTbmlwcGV0KCcuLzEvYmFzaWMtc2V0dXAvMS5zbmlwcGV0Jyk7XHJcbnZhciBCYXNpY1NldFVwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkJhc2ljU2V0VXBcIixcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlVzZSB0aGUgYmVsb3cgYm9pbGVycGxhdGUgdG8gc3RhcnQgd2l0aCBSZWFjdCBDb2RpbmcuIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBcIkNyZWF0ZSBhIGZpbGUgKHNheSBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwid2VsY29tZS5odG1sXCIpLCBcIikgd2l0aCB0aGUgYmVsb3cgY29kZS5cIiksIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2RlU25pcHBldCwge2h0bWw6IHNuaXBwZXRCb2lsZXJwbGF0ZX0pLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiT3BlbiB0aGUgZmlsZSBpbiBicm93c2VyIGFuZCBjaGVjayBjb25zb2xlIHRvIG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gZXJyb3JzLlwiXG4gICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgXCJBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJkb3dubG9hZHMvYm9pbGVycGxhdGUuemlwXCIsIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiZG93bmxvYWQgdGhpcyBib2lsZXIgcGxhdGUgaGVyZVwiKSwgXCIuXCJcbiAgICAgICAgICAgICAgICApLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgICAgICBcIkFwYXJ0IGZyb20gaW5jbHVkaW5nIFJlYWN0SlMsIHdlIGhhdmUgaW5jbHVkZWQgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCBudWxsLCBcIkpTWFRyYW5zZm9ybWVyLmpzXCIpLCBcIiB3aGljaCB3aWxsIGlkZW50aWZ5IHRoZSBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwiPHNjcmlwdCBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcInR5cGU9XFxcInRleHQvanN4XFxcIlwiKSwgXCIgLz5cIiksIFwiIHRhZ3MgYW5kIGNvbnZlcnQgdGhlbSB0byBKYXZhU2NyaXB0IGJlZm9yZSBleGVjdXRpbmcuXCJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1NldFVwO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvYmFzaWMtc2V0dXAvYmFzaWMtc2V0dXAuanN4XG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBDb2RlU25pcHBldCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb2RlU25pcHBldFwiLFxyXG4gICAgcHJvcFR5cGVzOiB7XHJcbiAgICAgIGh0bWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7X19odG1sOiB0aGlzLnByb3BzLmh0bWx9fSlcclxuICAgIH1cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQ29kZVNuaXBwZXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2NvZGUtc25pcHBldC5qc3hcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIENydWQxID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkNydWQxXCIsXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCBudWxsLCBcIlRvIGJlIHdyaXR0ZW4uXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IENydWQxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvY3J1ZDEvY3J1ZDEuanN4XG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBDcnVkMiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDcnVkMlwiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgXCJUbyBiZSB3cml0dGVuLlwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBDcnVkMjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2NydWQyL2NydWQyLmpzeFxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgSGFuZGxpbmdGb3JtRmllbGRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkhhbmRsaW5nRm9ybUZpZWxkc1wiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgXCJUbyBiZSB3cml0dGVuLlwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGluZ0Zvcm1GaWVsZHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9oYW5kbGluZy1mb3JtLWZpZWxkcy9oYW5kbGluZy1mb3JtLWZpZWxkcy5qc3hcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIHJlcXVpcmVTbmlwcGV0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY3VzdG9tLXJlcXVpcmVzJykucmVxdWlyZVNuaXBwZXQ7XHJcbnZhciBDb2RlU25pcHBldCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvZGUtc25pcHBldC5qc3gnKTtcclxudmFyIHNuaXBwZXRIZWxsb1dvcmxkID0gcmVxdWlyZVNuaXBwZXQoJy4vMS9oZWxsb3dvcmxkLzEuc25pcHBldCcpO1xyXG52YXIgc25pcHBldEpTWENvZGUgPSByZXF1aXJlU25pcHBldCgnLi8xL2hlbGxvd29ybGQvMi5zbmlwcGV0Jyk7XHJcbnZhciBzbmlwcGV0VHJhbnNmb3JtZWRUb0pTQ29kZSA9IHJlcXVpcmVTbmlwcGV0KCcuLzEvaGVsbG93b3JsZC8zLnNuaXBwZXQnKTtcclxuXHJcbnZhciBIZWxsb1dvcmxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkhlbGxvV29ybGRcIixcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkxldCB1cyB3cml0ZSBIZWxsb1dvcmxkIHByb2dyYW0uIE1vZGlmeSB5b3VyIGJvaWxlciBwbGF0ZSBhcyBmb2xsb3dpbmcuLlwiKSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvZGVTbmlwcGV0LCB7aHRtbDogc25pcHBldEhlbGxvV29ybGR9KSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgXCJJbiB0aGUgYWJvdmUgY29kZSwgd2UgaGF2ZSBjcmVhdGVkIGEgY29tcG9uZW50IG5hbWVkIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgXCJGaXJzdENvbXBvbmVudFwiKSwgXCIgYW5kIHJlbmRlcmluZyB0aGUgY29tcG9uZW50IHRvIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgXCI8ZGl2IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiaWQ9XFxcInBhZ2UtY29udGVudFxcXCJcIiksIFwiPlwiKSwgXCIuXCJcbiAgICAgICAgICAgICAgICApLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvbFwiLCBudWxsLCBcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCIgVG8gY3JlYXRlIGEgcmVhY3QgY29tcG9uZW50LCAgd2UgdXNlIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCBudWxsLCBcIlJlYWN0LmNyZWF0ZUNsYXNzXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICksIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCBudWxsLCBcIlJlYWN0LmNyZWF0ZUNsYXNzXCIpKSwgXCIgd291bGQgZXhwZWN0IGFuIG9iamVjdCAoXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwieyB9XCIpKSwgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwicmVuZGVyKClcIikpLCBcIiBpcyBtYW5kYXRvcnkgZm9yIGFueSBSZWFjdCBjb21wb25lbnQuXCJcbiAgICAgICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwicmVuZGVyKClcIikpLCBcIiBzaG91bGQgcmV0dXJuIGEgdmFsaWQgUmVhY3QgZWxlbWVudCBBbmQgYWxsIHZhbGlkIEhUTUwgZWxlbWVudHMgYXJlIHZhbGlkIFJlYWN0IGVsZW1lbnRzLiBXZSBhcmUgcmV0dXJuaW5nIGEgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwiPGgxIC8gPlwiKSksIFwiIHRhZyBpbiB0aGUgYWJvdmUgY29tcG9uZW50LlwiXG4gICAgICAgICAgICAgICAgICAgICksIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbVwiLCBudWxsLCBcIlJlYWN0LnJlbmRlcigpXCIpKSwgXCIgd291bGQgcmVuZGVyIGEgUmVhY3QgZWxlbWVudCB0byBhIERPTSBlbGVtZW50LlwiXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICksIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJJZiB5b3UgYXJlIHdvbmRlcmluZyBob3cgdGhlIEpTWCB0byBKUyB0cmFuc2Zvcm1lZCBjb2RlIHdvdWxkIGxvb2sgbGlrZSwgY29weSB0aGUgSlNYIGNvZGUgYW5kIHRyeSB0aGUgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2pzeC1jb21waWxlci5odG1sXCIsIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiSlNYIGNvbXBpbGVyIHNlcnZpY2VcIiksIFwiLiBGb3IgcXVpY2sgdmlldywgbG9vayBhdCB0aGUgYmVsb3cgY29kZXMuXCIpLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMTJcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge2NsYXNzTmFtZTogXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtYm9yZGVyZWRcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiSlNYIENvZGVcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJUcmFuc2Zvcm1lZCB0byBKYXZhU2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChDb2RlU25pcHBldCwge2h0bWw6IHNuaXBwZXRKU1hDb2RlfSkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29kZVNuaXBwZXQsIHtodG1sOiBzbmlwcGV0VHJhbnNmb3JtZWRUb0pTQ29kZX0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBIZWxsb1dvcmxkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvaGVsbG93b3JsZC9oZWxsb3dvcmxkLmpzeFxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgSW5saW5lU3R5bGVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIklubGluZVN0eWxlc1wiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgXCJUbyBiZSB3cml0dGVuLlwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBJbmxpbmVTdHlsZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9pbmxpbmUtc3R5bGVzL2lubGluZS1zdHlsZXMuanN4XG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBJbnRybyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJJbnRyb1wiLFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhpcyBwYWdlIGlzIGFuIGVmZm9ydCB0byBnaXZlIGEgbGlzdCBvZiBjb2RlIGV4YW1wbGVzIG9mIFJlYWN0SlMgYWxvbmcgd2l0aCBleHBsYW5hdGlvbnMuXCIpLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCIsIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiUmVhY3QuanNcIiksIFwiIGlzIGEgSmF2YVNjcmlwdCBsaWJyYXJ5IHRvIGNyZWF0ZSByZXVzYWJsZSBVSSBjb21wb25lbnRzLlwiKSwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIldlIHdyaXRlIHRoZSBSZWFjdC5qcyBjb21wb25lbnRzIHVzaW5nIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwczovL2pzeC5naXRodWIuaW8vXCIsIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiSlNYIGxhbmd1YWdlXCIpLCBcIi4gSlNYIGlzIGEgY29tYmluYXRpb24gb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC4gVXNpbmcgc29tZSBKU1ggVHJhbnNmb3JtZXIsIHdlIHdpbGwgY29udmVydCB0aGUgSlNYIGNvZGUgdG8gSlMgYmVmb3JlIGV4ZWN1dGluZyBpbiBicm93c2VyXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBJbnRybztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbGVzc29ucy8xL2ludHJvL2ludHJvLmpzeFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgTmVzdGluZ0NvbXBvbmVudHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTmVzdGluZ0NvbXBvbmVudHNcIixcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIFwiVG8gYmUgd3JpdHRlbi5cIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTmVzdGluZ0NvbXBvbmVudHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9uZXN0aW5nLWNvbXBvbmVudHMvbmVzdGluZy1jb21wb25lbnRzLmpzeFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vMS9iYXNpYy1zZXR1cC8xLnNuaXBwZXRcIjogMjMsXG5cdFwiLi8xL2hlbGxvd29ybGQvMS5zbmlwcGV0XCI6IDI0LFxuXHRcIi4vMS9oZWxsb3dvcmxkLzIuc25pcHBldFwiOiAyNSxcblx0XCIuLzEvaGVsbG93b3JsZC8zLnNuaXBwZXRcIjogMjZcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbGVzc29ucyBeXFwuXFwvLipcXC5zbmlwcGV0JFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwiaGlnaGxpZ2h0ZXJfNjA1MTcyXFxcIiBjbGFzcz1cXFwic3ludGF4aGlnaGxpZ2h0ZXIgIFxcXCI+PHRhYmxlIGJvcmRlcj1cXFwiMFxcXCIgY2VsbHBhZGRpbmc9XFxcIjBcXFwiIGNlbGxzcGFjaW5nPVxcXCIwXFxcIj48dGJvZHk+PHRyPjx0ZCBjbGFzcz1cXFwiZ3V0dGVyXFxcIj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEgaW5kZXgwIGFsdDJcXFwiPjE8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjIgaW5kZXgxIGFsdDFcXFwiPjI8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjMgaW5kZXgyIGFsdDJcXFwiPjM8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjQgaW5kZXgzIGFsdDFcXFwiPjQ8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjUgaW5kZXg0IGFsdDJcXFwiPjU8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjYgaW5kZXg1IGFsdDFcXFwiPjY8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjcgaW5kZXg2IGFsdDJcXFwiPjc8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjggaW5kZXg3IGFsdDFcXFwiPjg8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjkgaW5kZXg4IGFsdDJcXFwiPjk8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEwIGluZGV4OSBhbHQxXFxcIj4xMDwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTEgaW5kZXgxMCBhbHQyXFxcIj4xMTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTIgaW5kZXgxMSBhbHQxXFxcIj4xMjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTMgaW5kZXgxMiBhbHQyXFxcIj4xMzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTQgaW5kZXgxMyBhbHQxXFxcIj4xNDwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTUgaW5kZXgxNCBhbHQyXFxcIj4xNTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTYgaW5kZXgxNSBhbHQxXFxcIj4xNjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTcgaW5kZXgxNiBhbHQyXFxcIj4xNzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTggaW5kZXgxNyBhbHQxXFxcIj4xODwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTkgaW5kZXgxOCBhbHQyXFxcIj4xOTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjAgaW5kZXgxOSBhbHQxXFxcIj4yMDwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjEgaW5kZXgyMCBhbHQyXFxcIj4yMTwvZGl2PjwvdGQ+PHRkIGNsYXNzPVxcXCJjb2RlXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMSBpbmRleDAgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7IURPQ1RZUEUgaHRtbD4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMiBpbmRleDEgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5odG1sPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIzIGluZGV4MiBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+aGVhZDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNCBpbmRleDMgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnRpdGxlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PldlbGNvbWUgdG8gUmVhY3RKUyZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj50aXRsZTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNSBpbmRleDQgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmxpbms8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPmhyZWY8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCI8YSBocmVmPVxcXCJodHRwOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy4yL2Nzcy9ib290c3RyYXAubWluLmNzc1xcXCI+aHR0cDovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3M8L2E+XFxcIjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+cmVsPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwic3R5bGVzaGVldFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Lz4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNiBpbmRleDUgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5oZWFkPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI3IGluZGV4NiBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+Ym9keTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyOCBpbmRleDcgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmRpdjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+aWQ8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCJwYWdlLWNvbnRlbnRcXFwiPC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj5jbGFzczwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcImNvbnRhaW5lclxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjkgaW5kZXg4IGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj5XZWxjb21lIHRvIFJlYWN0SlMgPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTAgaW5kZXg5IGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+ZGl2PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxMSBpbmRleDEwIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImNvbW1lbnRzXFxcIj4mbHQ7IS0tIFNjcmlwdHMgLS0+PC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTIgaW5kZXgxMSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj50eXBlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwidGV4dC9qYXZhc2NyaXB0XFxcIjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+c3JjPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTIuMS4zLm1pbi5qc1xcXCI+aHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTIuMS4zLm1pbi5qczwvYT5cXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5zY3JpcHQ8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEzIGluZGV4MTIgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+dHlwZTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcInRleHQvamF2YXNjcmlwdFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnNyYzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcIjxhIGhyZWY9XFxcImh0dHA6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjIvanMvYm9vdHN0cmFwLm1pbi5qc1xcXCI+aHR0cDovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuMi9qcy9ib290c3RyYXAubWluLmpzPC9hPlxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTQgaW5kZXgxMyBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj50eXBlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwidGV4dC9qYXZhc2NyaXB0XFxcIjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+c3JjPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMC4xMy4zL3JlYWN0LXdpdGgtYWRkb25zLm1pbi5qc1xcXCI+aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMC4xMy4zL3JlYWN0LXdpdGgtYWRkb25zLm1pbi5qczwvYT5cXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5zY3JpcHQ8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjE1IGluZGV4MTQgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+dHlwZTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcInRleHQvamF2YXNjcmlwdFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnNyYzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcIjxhIGhyZWY9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzAuMTMuMy9KU1hUcmFuc2Zvcm1lci5qc1xcXCI+aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMC4xMy4zL0pTWFRyYW5zZm9ybWVyLmpzPC9hPlxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTYgaW5kZXgxNSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj50eXBlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwidGV4dC9qc3hcXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNyBpbmRleDE2IGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImNvbW1lbnRzXFxcIj4vLyBSZWFjdC5KUyBjb2RlIGdvZXMgaGVyZSA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxOCBpbmRleDE3IGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxOSBpbmRleDE4IGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+Ym9keTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjAgaW5kZXgxOSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5odG1sPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvYmFzaWMtc2V0dXAvMS5zbmlwcGV0XG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJoaWdobGlnaHRlcl8xNjgzMTNcXFwiIGNsYXNzPVxcXCJzeW50YXhoaWdobGlnaHRlciAgXFxcIj48dGFibGUgYm9yZGVyPVxcXCIwXFxcIiBjZWxscGFkZGluZz1cXFwiMFxcXCIgY2VsbHNwYWNpbmc9XFxcIjBcXFwiPjx0Ym9keT48dHI+PHRkIGNsYXNzPVxcXCJndXR0ZXJcXFwiPjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMSBpbmRleDAgYWx0MlxcXCI+MTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMiBpbmRleDEgYWx0MVxcXCI+MjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMyBpbmRleDIgYWx0MlxcXCI+MzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNCBpbmRleDMgYWx0MVxcXCI+NDwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNSBpbmRleDQgYWx0MlxcXCI+NTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNiBpbmRleDUgYWx0MVxcXCI+NjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNyBpbmRleDYgYWx0MlxcXCI+NzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyOCBpbmRleDcgYWx0MVxcXCI+ODwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyOSBpbmRleDggYWx0MlxcXCI+OTwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTAgaW5kZXg5IGFsdDFcXFwiPjEwPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxMSBpbmRleDEwIGFsdDJcXFwiPjExPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxMiBpbmRleDExIGFsdDFcXFwiPjEyPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxMyBpbmRleDEyIGFsdDJcXFwiPjEzPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNCBpbmRleDEzIGFsdDFcXFwiPjE0PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNSBpbmRleDE0IGFsdDJcXFwiPjE1PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNiBpbmRleDE1IGFsdDFcXFwiPjE2PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNyBpbmRleDE2IGFsdDJcXFwiPjE3PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxOCBpbmRleDE3IGFsdDFcXFwiPjE4PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxOSBpbmRleDE4IGFsdDJcXFwiPjE5PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyMCBpbmRleDE5IGFsdDFcXFwiPjIwPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyMSBpbmRleDIwIGFsdDJcXFwiPjIxPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyMiBpbmRleDIxIGFsdDFcXFwiPjIyPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyMyBpbmRleDIyIGFsdDJcXFwiPjIzPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyNCBpbmRleDIzIGFsdDFcXFwiPjI0PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyNSBpbmRleDI0IGFsdDJcXFwiPjI1PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyNiBpbmRleDI1IGFsdDFcXFwiPjI2PC9kaXY+PC90ZD48dGQgY2xhc3M9XFxcImNvZGVcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxIGluZGV4MCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDshRE9DVFlQRSBodG1sPiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyIGluZGV4MSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmh0bWw8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjMgaW5kZXgyIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5oZWFkPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI0IGluZGV4MyBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+dGl0bGU8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+V2VsY29tZSB0byBSZWFjdEpTJmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnRpdGxlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI1IGluZGV4NCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+bGluazwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+aHJlZjwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcIjxhIGhyZWY9XFxcImh0dHA6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIj5odHRwOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy4yL2Nzcy9ib290c3RyYXAubWluLmNzczwvYT5cXFwiPC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj5yZWw8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCJzdHlsZXNoZWV0XFxcIjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4vPiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI2IGluZGV4NSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmhlYWQ8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjcgaW5kZXg2IGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5ib2R5PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI4IGluZGV4NyBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+ZGl2PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj5pZDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcInBhZ2UtY29udGVudFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPmNsYXNzPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiY29udGFpbmVyXFxcIjwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyOSBpbmRleDggYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOzwvY29kZT4mbmJzcDs8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEwIGluZGV4OSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmRpdjwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTEgaW5kZXgxMCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJjb21tZW50c1xcXCI+Jmx0OyEtLSBTY3JpcHRzIC0tPjwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEyIGluZGV4MTEgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+dHlwZTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcInRleHQvamF2YXNjcmlwdFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnNyYzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcIjxhIGhyZWY9XFxcImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0yLjEuMy5taW4uanNcXFwiPmh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0yLjEuMy5taW4uanM8L2E+XFxcIjwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxMyBpbmRleDEyIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5zY3JpcHQ8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnR5cGU8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCJ0ZXh0L2phdmFzY3JpcHRcXFwiPC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj5zcmM8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCI8YSBocmVmPVxcXCJodHRwOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy4yL2pzL2Jvb3RzdHJhcC5taW4uanNcXFwiPmh0dHA6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjIvanMvYm9vdHN0cmFwLm1pbi5qczwvYT5cXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5zY3JpcHQ8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjE0IGluZGV4MTMgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPiZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+dHlwZTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcInRleHQvamF2YXNjcmlwdFxcXCI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnNyYzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj08L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+XFxcIjxhIGhyZWY9XFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzAuMTMuMy9yZWFjdC13aXRoLWFkZG9ucy5qc1xcXCI+aHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMC4xMy4zL3JlYWN0LXdpdGgtYWRkb25zLmpzPC9hPlxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTUgaW5kZXgxNCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwiY29sb3IxXFxcIj50eXBlPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwidGV4dC9qYXZhc2NyaXB0XFxcIjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcImNvbG9yMVxcXCI+c3JjPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PTwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiPGEgaHJlZj1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QvMC4xMy4zL0pTWFRyYW5zZm9ybWVyLmpzXFxcIj5odHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC8wLjEzLjMvSlNYVHJhbnNmb3JtZXIuanM8L2E+XFxcIjwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+c2NyaXB0PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxNiBpbmRleDE1IGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5zY3JpcHQ8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJjb2xvcjFcXFwiPnR5cGU8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj49PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJzdHJpbmdcXFwiPlxcXCJ0ZXh0L2pzeFxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjE3IGluZGV4MTYgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInVuZGVmaW5lZCBzcGFjZXNcXFwiPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+dmFyPC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPkZpcnN0Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3MoeyA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxOCBpbmRleDE3IGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj5yZW5kZXI6IDwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+ZnVuY3Rpb248L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4oKXsgPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMTkgaW5kZXgxOCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5yZXR1cm48L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+aDE8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+SGVsbG8sIHdvcmxkISZsdDsvPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5oMTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjAgaW5kZXgxOSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+fSA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyMSBpbmRleDIwIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj59KTsgPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjIgaW5kZXgyMSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7PC9jb2RlPiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjMgaW5kZXgyMiBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+UmVhY3QucmVuZGVyKCZsdDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPkZpcnN0Q29tcG9uZW50PC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPi8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+J3BhZ2UtY29udGVudCc8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4pKTsgPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjQgaW5kZXgyMyBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnNjcmlwdDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj4gPC9jb2RlPjwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyMjUgaW5kZXgyNCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Jmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmJvZHk8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4+IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjI2IGluZGV4MjUgYWx0MVxcXCI+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7LzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+aHRtbDwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj48L2NvZGU+PC9kaXY+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvaGVsbG93b3JsZC8xLnNuaXBwZXRcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcImhpZ2hsaWdodGVyXzU2MDcyM1xcXCIgY2xhc3M9XFxcInN5bnRheGhpZ2hsaWdodGVyICBcXFwiPjx0YWJsZSBib3JkZXI9XFxcIjBcXFwiIGNlbGxwYWRkaW5nPVxcXCIwXFxcIiBjZWxsc3BhY2luZz1cXFwiMFxcXCI+PHRib2R5Pjx0cj48dGQgY2xhc3M9XFxcImd1dHRlclxcXCI+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxIGluZGV4MCBhbHQyXFxcIj4xPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyIGluZGV4MSBhbHQxXFxcIj4yPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIzIGluZGV4MiBhbHQyXFxcIj4zPC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI0IGluZGV4MyBhbHQxXFxcIj40PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI1IGluZGV4NCBhbHQyXFxcIj41PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI2IGluZGV4NSBhbHQxXFxcIj42PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI3IGluZGV4NiBhbHQyXFxcIj43PC9kaXY+PC90ZD48dGQgY2xhc3M9XFxcImNvZGVcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIxIGluZGV4MCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+dmFyPC9jb2RlPiA8Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPkZpcnN0Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3MoeyA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyIGluZGV4MSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+cmVuZGVyOiA8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmZ1bmN0aW9uPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+KCl7IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjMgaW5kZXgyIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnJldHVybjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4mbHQ7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj5oMTwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPj5IZWxsbywgd29ybGQhJmx0Oy88L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmgxPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+PiA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI0IGluZGV4MyBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+fSA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI1IGluZGV4NCBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPn0pOyA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI2IGluZGV4NSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7PC9jb2RlPiZuYnNwOzwvZGl2PjxkaXYgY2xhc3M9XFxcImxpbmUgbnVtYmVyNyBpbmRleDYgYWx0MlxcXCI+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj5SZWFjdC5yZW5kZXIoJmx0OzwvY29kZT48Y29kZSBjbGFzcz1cXFwia2V5d29yZFxcXCI+Rmlyc3RDb21wb25lbnQ8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKDwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj4ncGFnZS1jb250ZW50JzwvY29kZT48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPikpOzwvY29kZT48L2Rpdj48L2Rpdj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2xlc3NvbnMvMS9oZWxsb3dvcmxkLzIuc25pcHBldFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwiaGlnaGxpZ2h0ZXJfNTk1ODMzXFxcIiBjbGFzcz1cXFwic3ludGF4aGlnaGxpZ2h0ZXIgIFxcXCI+PHRhYmxlIGJvcmRlcj1cXFwiMFxcXCIgY2VsbHBhZGRpbmc9XFxcIjBcXFwiIGNlbGxzcGFjaW5nPVxcXCIwXFxcIj48dGJvZHk+PHRyPjx0ZCBjbGFzcz1cXFwiZ3V0dGVyXFxcIj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEgaW5kZXgwIGFsdDJcXFwiPjE8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjIgaW5kZXgxIGFsdDFcXFwiPjI8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjMgaW5kZXgyIGFsdDJcXFwiPjM8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjQgaW5kZXgzIGFsdDFcXFwiPjQ8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjUgaW5kZXg0IGFsdDJcXFwiPjU8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjYgaW5kZXg1IGFsdDFcXFwiPjY8L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjcgaW5kZXg2IGFsdDJcXFwiPjc8L2Rpdj48L3RkPjx0ZCBjbGFzcz1cXFwiY29kZVxcXCI+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjEgaW5kZXgwIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJrZXl3b3JkXFxcIj52YXI8L2NvZGU+IDxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+Rmlyc3RDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IDwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiRmlyc3RDb21wb25lbnRcXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+LCA8L2NvZGU+PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXIyIGluZGV4MSBhbHQxXFxcIj48Y29kZSBjbGFzcz1cXFwidW5kZWZpbmVkIHNwYWNlc1xcXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+cmVuZGVyOiA8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPmZ1bmN0aW9uPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+KCl7IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjMgaW5kZXgyIGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPnJldHVybjwvY29kZT4gPGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj5SZWFjdC5jcmVhdGVFbGVtZW50KDwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiaDFcXFwiPC9jb2RlPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+LCA8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPm51bGw8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4sIDwvY29kZT48Y29kZSBjbGFzcz1cXFwic3RyaW5nXFxcIj5cXFwiSGVsbG8sIHdvcmxkIVxcXCI8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4pIDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjQgaW5kZXgzIGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj59IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjUgaW5kZXg0IGFsdDJcXFwiPjxjb2RlIGNsYXNzPVxcXCJwbGFpblxcXCI+fSk7IDwvY29kZT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJsaW5lIG51bWJlcjYgaW5kZXg1IGFsdDFcXFwiPjxjb2RlIGNsYXNzPVxcXCJ1bmRlZmluZWQgc3BhY2VzXFxcIj4mbmJzcDs8L2NvZGU+Jm5ic3A7PC9kaXY+PGRpdiBjbGFzcz1cXFwibGluZSBudW1iZXI3IGluZGV4NiBhbHQyXFxcIj48Y29kZSBjbGFzcz1cXFwicGxhaW5cXFwiPlJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEZpcnN0Q29tcG9uZW50LCA8L2NvZGU+PGNvZGUgY2xhc3M9XFxcImtleXdvcmRcXFwiPm51bGw8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCg8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInN0cmluZ1xcXCI+J3BhZ2UtY29udGVudCc8L2NvZGU+PGNvZGUgY2xhc3M9XFxcInBsYWluXFxcIj4pKTs8L2NvZGU+PC9kaXY+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9sZXNzb25zLzEvaGVsbG93b3JsZC8zLnNuaXBwZXRcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLXN5bnRheGhpZ2hsaWdodGVyL2xpYi9zdHlsZXMvc2hDb3JlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtc3ludGF4aGlnaGxpZ2h0ZXIvbGliL3N0eWxlcy9zaENvcmVEZWZhdWx0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9