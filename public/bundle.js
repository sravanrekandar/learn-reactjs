/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;

	var Routes = __webpack_require__(3);
	__webpack_require__(37);
	__webpack_require__(38);

	Router.run(Routes, Router.HashLocation, function (Root) {
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

	'use strict';

	var Router = __webpack_require__(2);
	var Link = Router.Link;
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;

	var App = __webpack_require__(4);
	var Lesson = __webpack_require__(9);

	var Default = React.createClass({
	    displayName: 'Default',

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: "jumbotron" },
	            React.createElement(
	                'h1',
	                null,
	                'Welcome to Learn React.JS!'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'This page is an effort to make programmers\' life a bit easy by providing as many examples as I can.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'If you are reading this content, it means you are already determined to learn ',
	                React.createElement(
	                    'a',
	                    { target: "_blank", href: "http://facebook.github.io/react/" },
	                    'React.JS'
	                ),
	                '.'
	            ),
	            React.createElement(
	                'p',
	                { className: "text-center" },
	                React.createElement(
	                    Link,
	                    { to: "lesson", params: { name: 'setup' }, className: "btn btn-primary btn-lg" },
	                    'Start learning'
	                )
	            )
	        );
	    }
	});

	// declare our routes and their hierarchy
	var routes = React.createElement(
	    Route,
	    { handler: App },
	    React.createElement(Route, { name: "lesson", path: "/lesson/:name", handler: Lesson }),
	    React.createElement(Router.DefaultRoute, { name: "default", handler: Default })
	);

	module.exports = routes;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var RouteHandler = Router.RouteHandler;
	var Link = Router.Link;

	var Header = __webpack_require__(5);
	var Footer = __webpack_require__(6);
	var Leftnav = __webpack_require__(7);

	var App = React.createClass({
	    displayName: 'App',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(Header, null),
	            React.createElement(
	                'div',
	                { className: "container" },
	                React.createElement(
	                    'div',
	                    { className: "row" },
	                    React.createElement(
	                        'div',
	                        { className: "col-md-9" },
	                        React.createElement(RouteHandler, null)
	                    ),
	                    React.createElement(
	                        'nav',
	                        { className: "col-md-3 bs-docs-sidebar" },
	                        React.createElement(Leftnav, null)
	                    )
	                )
	            ),
	            React.createElement(Footer, null)
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var Header = React.createClass({
	    displayName: "Header",

	    render: function render() {
	        return React.createElement(
	            "nav",
	            { className: "navbar navbar-default" },
	            React.createElement(
	                "div",
	                { className: "container-fluid" },
	                React.createElement(
	                    "div",
	                    { className: "navbar-header" },
	                    React.createElement(
	                        "button",
	                        { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "aria-expanded": "false" },
	                        React.createElement(
	                            "span",
	                            { className: "sr-only" },
	                            "Toggle navigation"
	                        ),
	                        React.createElement("span", { className: "icon-bar" }),
	                        React.createElement("span", { className: "icon-bar" }),
	                        React.createElement("span", { className: "icon-bar" })
	                    ),
	                    React.createElement(
	                        "a",
	                        { className: "navbar-brand", href: "#/" },
	                        "Learn React.JS"
	                    )
	                )
	            )
	        );
	    }
	});
	module.exports = Header;
	/*
	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
	   <ul className="nav navbar-nav">
	       <li className="active"><a href="#">Home</a></li>
	       <li><a href="#">Link</a></li>
	       <li><a href="#">Link</a></li>
	   </ul>
	</div>
	*/

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Footer = React.createClass({
	    displayName: 'Footer',

	    render: function render() {
	        return React.createElement('div', null);
	    }
	});
	module.exports = Footer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Link = Router.Link;
	var lessonsList = __webpack_require__(8);
	var LeftNav = React.createClass({
	    displayName: 'LeftNav',

	    mixins: [Router.State],
	    render: function render() {
	        var currentLessonName = this.getParams().name;
	        var items = lessonsList.map(function (el, idx) {
	            return React.createElement(
	                'li',
	                { className: "list-group-item " + (currentLessonName === el.name ? 'active' : ''),
	                    key: idx
	                },
	                React.createElement(
	                    Link,
	                    { to: "lesson", params: { name: el.name } },
	                    ' ',
	                    el.title
	                )
	            );
	        });
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'ul',
	                { className: "list-group lessons-list" },
	                items
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
			"name": "styling-elements",
			"title": "Styling Elements",
			"component": "1/styling-elements/styling-elements.jsx",
			"chapter": "1",
			"snippets": {
				"1/styling-elements/1": "lessons/1/styling-elements/1.snippet"
			},
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
			"snippets": {
				"1/handling-form-fields/1": "lessons/1/handling-form-fields/1.snippet",
				"1/handling-form-fields/2": "lessons/1/handling-form-fields/2.snippet",
				"1/handling-form-fields/3": "lessons/1/handling-form-fields/3.snippet"
			},
			"keywords": [
				"Form"
			]
		},
		{
			"name": "crud3",
			"title": "CRUD Operations (part 3) Update Individual Elements",
			"component": "1/crud3/crud3.jsx",
			"chapter": "1",
			"snippets": {},
			"keywords": [
				"essentials",
				"crud"
			]
		}
	]

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(10);
	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Link = Router.Link;
	var lessonsList = __webpack_require__(8);
	var requireLesson = __webpack_require__(11).requireLesson;

	var AasPaasLinks = React.createClass({
	    displayName: 'AasPaasLinks',

	    propTypes: {
	        current: React.PropTypes.object
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            current: lessonsList[0]
	        };
	    },
	    render: function render() {
	        var currentIndex = _.findIndex(lessonsList, this.props.current),
	            prev = currentIndex <= 0 ? '' : React.createElement(
	            Link,
	            { to: "lesson", params: { name: lessonsList[currentIndex - 1].name } },
	            React.createElement('i', { className: "glyphicon glyphicon-menu-left" }),
	            ' ',
	            lessonsList[currentIndex - 1].title
	        ),
	            next = currentIndex < 0 || currentIndex >= lessonsList.length - 1 ? '' : React.createElement(
	            Link,
	            { to: "lesson", params: { name: lessonsList[currentIndex + 1].name } },
	            lessonsList[currentIndex + 1].title,
	            ' ',
	            React.createElement('i', { className: "glyphicon glyphicon-menu-right" }),
	            ' '
	        );
	        return React.createElement(
	            'ul',
	            { className: "list-inline" },
	            React.createElement(
	                'li',
	                null,
	                prev
	            ),
	            React.createElement(
	                'li',
	                null,
	                prev !== '' && next !== '' ? '|' : ''
	            ),
	            React.createElement(
	                'li',
	                null,
	                next
	            )
	        );
	    }
	});
	var Lesson = React.createClass({
	    displayName: 'Lesson',

	    mixins: [Router.State],
	    updateLessonInfo: function updateLessonInfo(name) {
	        this.setState({
	            name: name
	        });
	    },
	    getInitialState: function getInitialState() {
	        return {
	            name: 'intro'
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.updateLessonInfo(this.getParams().name);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.updateLessonInfo(this.getParams().name);
	    },
	    render: function render() {
	        console.log(85);
	        var lesson = _.find(lessonsList, { name: this.state.name }),
	            title = lesson ? lesson.title : '',
	            Component = lesson ? requireLesson('./' + lesson.component) : undefined;
	        return React.createElement(
	            'div',
	            { className: "lesson-container" },
	            React.createElement(
	                'div',
	                { className: "clearfix" },
	                React.createElement(
	                    'h2',
	                    { className: "pull-left" },
	                    title
	                ),
	                React.createElement(
	                    'div',
	                    { className: "pull-right" },
	                    React.createElement(AasPaasLinks, { current: lesson })
	                )
	            ),
	            Component ? React.createElement(Component, null) : '',
	            React.createElement('hr', null),
	            React.createElement(AasPaasLinks, { current: lesson })
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

	"use strict";

	var requireLesson = __webpack_require__(12);
	var requireSnippet = __webpack_require__(30);
	var requireComponent = __webpack_require__(36);
	module.exports = {
	    requireLesson: requireLesson,
	    requireSnippet: requireSnippet
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1/basic-setup/basic-setup.jsx": 13,
		"./1/crud1/crud1-example.jsx": 15,
		"./1/crud1/crud1.jsx": 16,
		"./1/crud2/crud2-example.jsx": 18,
		"./1/crud2/crud2.jsx": 19,
		"./1/crud3/crud3-example.jsx": 21,
		"./1/crud3/crud3.jsx": 22,
		"./1/handling-form-fields/handling-form-fields-example.jsx": 24,
		"./1/handling-form-fields/handling-form-fields.jsx": 25,
		"./1/helloworld/helloworld.jsx": 27,
		"./1/nesting-components/nesting-components.jsx": 28,
		"./1/styling-elements/styling-elements.jsx": 29
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

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippetBoilerplate = requireSnippet('./1/basic-setup/crud1-example.jsx');
	var BasicSetUp = React.createClass({
	    displayName: 'BasicSetUp',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                React.createElement(
	                    'a',
	                    { href: "http://facebook.github.io/react/", target: "_blank" },
	                    'React.js'
	                ),
	                ' is a JavaScript library to create reusable UI components.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'We write the React.js components using ',
	                React.createElement(
	                    'a',
	                    { href: "https://jsx.github.io/", target: "_blank" },
	                    'JSX language'
	                ),
	                '. JSX is a combination of HTML and JavaScript. Using some JSX Transformer, we will convert the JSX code to JS before executing in browser. In our case, we will use ',
	                React.createElement(
	                    'a',
	                    { href: "https://babeljs.io/", target: "_blank" },
	                    'Babel'
	                ),
	                '\'s loader.'
	            ),
	            React.createElement('hr', null),
	            React.createElement(
	                'p',
	                null,
	                'Before you start developing the React.JS components, you have to collect all the dependencies, helpers and set up proper environment. There are basically three types of approaches. '
	            ),
	            React.createElement(
	                'ol',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    'Browser : Simple approach, easy to start with. But it is not feasable to maintain as the application grows.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    'AMD'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    'Common JS'
	                )
	            ),
	            React.createElement(
	                'p',
	                null,
	                'However, the suggested approach is CommonJS approach.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'If you want to just want to jump into react.js without focusing on any others, ',
	                React.createElement('br', null),
	                'Use the below boilerplate to start with React Coding. ',
	                React.createElement('br', null),
	                'You can do one of the following '
	            ),
	            React.createElement(
	                'ol',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    'Create a file (say ',
	                    React.createElement(
	                        'em',
	                        null,
	                        'welcome.html'
	                    ),
	                    ') with the below code.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: "downloads/boilerplate.zip", download: true },
	                        'Download boilerplate.zip'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: "downloads/boilerplate/boilerplate-with-cdn-links.html", download: true },
	                        'Download the html file with cdn links'
	                    )
	                )
	            ),
	            React.createElement(CodeSnippet, { html: snippetBoilerplate }),
	            React.createElement(
	                'p',
	                null,
	                'Open the file in browser and check console to make sure there are no errors.'
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Apart from including jQuery, Bootstrap and ReactJS, we have included ',
	                React.createElement(
	                    'a',
	                    { href: "https://babeljs.io/docs/usage/jsx/", target: "_blank" },
	                    React.createElement(
	                        'em',
	                        null,
	                        'Babel JSXTransformer'
	                    )
	                ),
	                ' which will identify the ',
	                React.createElement(
	                    'em',
	                    null,
	                    '<script ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'type="text/babel"'
	                    ),
	                    ' />'
	                ),
	                ' tags and convert them to JavaScript before executing.'
	            )
	        );
	    }
	});
	module.exports = BasicSetUp;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CodeSnippet = React.createClass({
	    displayName: 'CodeSnippet',

	    propTypes: {
	        html: React.PropTypes.string.isRequired,
	        title: React.PropTypes.string
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: ''
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: "code-snippet-container" },
	            React.createElement(
	                'div',
	                { className: "code-snippet-title" },
	                React.createElement(
	                    'em',
	                    { className: "text-muted" },
	                    this.props.title
	                )
	            ),
	            React.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html } })
	        );
	    }
	});
	module.exports = CodeSnippet;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var HerosGrid = React.createClass({
	    displayName: 'HerosGrid',

	    propTypes: {
	        data: React.PropTypes.array.isRequired
	    },
	    render: function render() {
	        var heros = this.props.data,
	            rows = heros.map(function (hero, idx) {
	            return React.createElement(
	                'tr',
	                { key: idx },
	                React.createElement(
	                    'td',
	                    null,
	                    idx + 1
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        hero.title
	                    ),
	                    ' (',
	                    hero.name,
	                    ')'
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    hero.city
	                )
	            );
	        });
	        return React.createElement(
	            'table',
	            { className: "table table-striped table-condensed" },
	            React.createElement(
	                'thead',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'th',
	                        null,
	                        'S.no'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'Name'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        'City'
	                    )
	                )
	            ),
	            React.createElement(
	                'tbody',
	                null,
	                rows
	            )
	        );
	    }
	});
	var App = React.createClass({
	    displayName: 'App',

	    getInitialState: function getInitialState() {
	        return {
	            superHeros: [{ title: 'Bat Man', name: 'Bruce Wayne', city: 'Gotham' }, { title: 'Hulk', name: ' Bruce Banner', city: 'Un known' }, { title: 'Iron Man', name: 'Tony Stark', city: 'New York' }]
	        };
	    },
	    addHero: function addHero() {
	        var newHero = {
	            title: 'You',
	            name: 'Your self',
	            city: 'Banglore'
	        };

	        this.state.superHeros.push(newHero);
	        this.forceUpdate();
	        // other way: this.setState({});
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'button',
	                {
	                    className: "btn btn-default btn-big",
	                    onClick: this.addHero },
	                React.createElement('i', { className: "glyphicon glyphicon-plus" }),
	                'New Hero'
	            ),
	            React.createElement(HerosGrid, { data: this.state.superHeros })
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CodeSnippet = __webpack_require__(14);
	var snippet1 = __webpack_require__(17);
	var Output = __webpack_require__(15);
	var Crud1 = React.createClass({
	    displayName: 'Crud1',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h4',
	                null,
	                'Final Output'
	            ),
	            React.createElement(
	                'div',
	                { className: "output-container" },
	                React.createElement(Output, null)
	            ),
	            React.createElement(
	                'h4',
	                null,
	                'Code:'
	            ),
	            React.createElement(CodeSnippet, { html: snippet1 })
	        );
	    }
	});
	module.exports = Crud1;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_626863\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div><div class=\"line number29 index28 alt2\">29</div><div class=\"line number30 index29 alt1\">30</div><div class=\"line number31 index30 alt2\">31</div><div class=\"line number32 index31 alt1\">32</div><div class=\"line number33 index32 alt2\">33</div><div class=\"line number34 index33 alt1\">34</div><div class=\"line number35 index34 alt2\">35</div><div class=\"line number36 index35 alt1\">36</div><div class=\"line number37 index36 alt2\">37</div><div class=\"line number38 index37 alt1\">38</div><div class=\"line number39 index38 alt2\">39</div><div class=\"line number40 index39 alt1\">40</div><div class=\"line number41 index40 alt2\">41</div><div class=\"line number42 index41 alt1\">42</div><div class=\"line number43 index42 alt2\">43</div><div class=\"line number44 index43 alt1\">44</div><div class=\"line number45 index44 alt2\">45</div><div class=\"line number46 index45 alt1\">46</div><div class=\"line number47 index46 alt2\">47</div><div class=\"line number48 index47 alt1\">48</div><div class=\"line number49 index48 alt2\">49</div><div class=\"line number50 index49 alt1\">50</div><div class=\"line number51 index50 alt2\">51</div><div class=\"line number52 index51 alt1\">52</div><div class=\"line number53 index52 alt2\">53</div><div class=\"line number54 index53 alt1\">54</div><div class=\"line number55 index54 alt2\">55</div><div class=\"line number56 index55 alt1\">56</div><div class=\"line number57 index56 alt2\">57</div><div class=\"line number58 index57 alt1\">58</div><div class=\"line number59 index58 alt2\">59</div><div class=\"line number60 index59 alt1\">60</div><div class=\"line number61 index60 alt2\">61</div><div class=\"line number62 index61 alt1\">62</div><div class=\"line number63 index62 alt2\">63</div><div class=\"line number64 index63 alt1\">64</div><div class=\"line number65 index64 alt2\">65</div><div class=\"line number66 index65 alt1\">66</div><div class=\"line number67 index66 alt2\">67</div><div class=\"line number68 index67 alt1\">68</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">HerosGrid = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">propTypes: { </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">data: React.PropTypes.array.isRequired </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">heros = </code><code class=\"keyword\">this</code><code class=\"plain\">.props.data, </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">rows = heros.map((hero, idx)=> { </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code> <code class=\"plain\">key={idx}> </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{idx+1}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>&lt;</code><code class=\"keyword\">strong</code><code class=\"plain\">>{hero.title}&lt;/</code><code class=\"keyword\">strong</code><code class=\"plain\">> ({hero.name})&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{hero.city}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">table</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"table table-striped table-condensed\"</code><code class=\"plain\">> </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>S.no&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>Name&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>City&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{rows} </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">table</code><code class=\"plain\">> </code></div><div class=\"line number29 index28 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number30 index29 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number31 index30 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number32 index31 alt1\"><code class=\"keyword\">var</code> <code class=\"plain\">App = React.createClass({ </code></div><div class=\"line number33 index32 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">getInitialState: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number34 index33 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">{ </code></div><div class=\"line number35 index34 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">superHeros: [ </code></div><div class=\"line number36 index35 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Bat Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Bruce Wayne'</code><code class=\"plain\">, city: </code><code class=\"string\">'Gotham'</code><code class=\"plain\">}, </code></div><div class=\"line number37 index36 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Hulk'</code><code class=\"plain\">, name: </code><code class=\"string\">' Bruce Banner'</code><code class=\"plain\">, city: </code><code class=\"string\">'Un known'</code><code class=\"plain\">}, </code></div><div class=\"line number38 index37 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Iron Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Tony Stark'</code><code class=\"plain\">, city: </code><code class=\"string\">'New York'</code><code class=\"plain\">}, </code></div><div class=\"line number39 index38 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">] </code></div><div class=\"line number40 index39 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number41 index40 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number42 index41 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">addHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number43 index42 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">newHero = { </code></div><div class=\"line number44 index43 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">title: </code><code class=\"string\">'You'</code><code class=\"plain\">, </code></div><div class=\"line number45 index44 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">name: </code><code class=\"string\">'Your self'</code><code class=\"plain\">, </code></div><div class=\"line number46 index45 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">city: </code><code class=\"string\">'Banglore'</code></div><div class=\"line number47 index46 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number48 index47 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number49 index48 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.push(newHero); </code></div><div class=\"line number50 index49 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.forceUpdate(); </code></div><div class=\"line number51 index50 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">// other way: this.setState({}); </code></div><div class=\"line number52 index51 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number53 index52 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number54 index53 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number55 index54 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number56 index55 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code></div><div class=\"line number57 index56 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default btn-big\"</code></div><div class=\"line number58 index57 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onClick={</code><code class=\"keyword\">this</code><code class=\"plain\">.addHero}> </code></div><div class=\"line number59 index58 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">i</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"glyphicon glyphicon-plus\"</code> <code class=\"plain\">/> </code></div><div class=\"line number60 index59 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">New Hero </code></div><div class=\"line number61 index60 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number62 index61 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number63 index62 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">HerosGrid</code> <code class=\"plain\">data={</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros} /> </code></div><div class=\"line number64 index63 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number65 index64 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number66 index65 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number67 index66 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number68 index67 alt1\"><code class=\"plain\">module.exports = App;</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	var HerosGrid = React.createClass({
	    displayName: "HerosGrid",

	    propTypes: {
	        data: React.PropTypes.array.isRequired,
	        onRemove: React.PropTypes.func.isRequired
	    },
	    removeHero: function removeHero(hero) {
	        this.props.onRemove(hero);
	    },
	    render: function render() {
	        var self = this,
	            heros = this.props.data,
	            rows = heros.map(function (hero, idx) {
	            return React.createElement(
	                "tr",
	                { key: idx },
	                React.createElement(
	                    "td",
	                    null,
	                    idx + 1
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    React.createElement(
	                        "strong",
	                        null,
	                        hero.title
	                    ),
	                    " (",
	                    hero.name,
	                    ")"
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    hero.city
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-default btn-xs",
	                            onClick: self.removeHero.bind(self, hero) },
	                        React.createElement("i", { className: "glyphicon glyphicon-remove" })
	                    )
	                )
	            );
	        });
	        return React.createElement(
	            "table",
	            { className: "table table-striped table-condensed" },
	            React.createElement(
	                "thead",
	                null,
	                React.createElement(
	                    "tr",
	                    null,
	                    React.createElement(
	                        "th",
	                        null,
	                        "S.no"
	                    ),
	                    React.createElement(
	                        "th",
	                        null,
	                        "Name"
	                    ),
	                    React.createElement(
	                        "th",
	                        null,
	                        "City"
	                    ),
	                    React.createElement("th", null)
	                )
	            ),
	            React.createElement(
	                "tbody",
	                null,
	                rows
	            )
	        );
	    }
	});
	var App = React.createClass({
	    displayName: "App",

	    getInitialState: function getInitialState() {
	        return {
	            superHeros: [{ title: 'Bat Man', name: 'Bruce Wayne', city: 'Gotham' }, { title: 'Hulk', name: ' Bruce Banner', city: 'Un known' }, { title: 'Iron Man', name: 'Tony Stark', city: 'New York' }]
	        };
	    },
	    removeHero: function removeHero(hero) {
	        var index = this.state.superHeros.indexOf(hero);

	        if (index !== -1) {
	            this.state.superHeros.splice(index, 1);
	        }

	        this.forceUpdate();
	    },
	    addHero: function addHero() {
	        var newHero = {
	            title: 'You',
	            name: 'Your self',
	            city: 'Banglore'
	        };

	        this.state.superHeros.push(newHero);
	        this.forceUpdate();
	        // other way: this.setState({});
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "button",
	                {
	                    className: "btn btn-default btn-big",
	                    onClick: this.addHero },
	                React.createElement("i", { className: "glyphicon glyphicon-plus" }),
	                "New Hero"
	            ),
	            React.createElement(HerosGrid, { data: this.state.superHeros, onRemove: this.removeHero })
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CodeSnippet = __webpack_require__(14);
	var snippet1 = __webpack_require__(20);
	var Output = __webpack_require__(18);
	var Crud2 = React.createClass({
	    displayName: 'Crud2',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h4',
	                null,
	                'Final Output'
	            ),
	            React.createElement(
	                'div',
	                { className: "output-container" },
	                React.createElement(Output, null)
	            ),
	            React.createElement(
	                'h4',
	                null,
	                'Code:'
	            ),
	            React.createElement(CodeSnippet, { html: snippet1 })
	        );
	    }
	});
	module.exports = Crud2;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_908224\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div><div class=\"line number29 index28 alt2\">29</div><div class=\"line number30 index29 alt1\">30</div><div class=\"line number31 index30 alt2\">31</div><div class=\"line number32 index31 alt1\">32</div><div class=\"line number33 index32 alt2\">33</div><div class=\"line number34 index33 alt1\">34</div><div class=\"line number35 index34 alt2\">35</div><div class=\"line number36 index35 alt1\">36</div><div class=\"line number37 index36 alt2\">37</div><div class=\"line number38 index37 alt1\">38</div><div class=\"line number39 index38 alt2\">39</div><div class=\"line number40 index39 alt1\">40</div><div class=\"line number41 index40 alt2\">41</div><div class=\"line number42 index41 alt1\">42</div><div class=\"line number43 index42 alt2\">43</div><div class=\"line number44 index43 alt1\">44</div><div class=\"line number45 index44 alt2\">45</div><div class=\"line number46 index45 alt1\">46</div><div class=\"line number47 index46 alt2\">47</div><div class=\"line number48 index47 alt1\">48</div><div class=\"line number49 index48 alt2\">49</div><div class=\"line number50 index49 alt1\">50</div><div class=\"line number51 index50 alt2\">51</div><div class=\"line number52 index51 alt1\">52</div><div class=\"line number53 index52 alt2\">53</div><div class=\"line number54 index53 alt1\">54</div><div class=\"line number55 index54 alt2\">55</div><div class=\"line number56 index55 alt1\">56</div><div class=\"line number57 index56 alt2\">57</div><div class=\"line number58 index57 alt1\">58</div><div class=\"line number59 index58 alt2\">59</div><div class=\"line number60 index59 alt1\">60</div><div class=\"line number61 index60 alt2\">61</div><div class=\"line number62 index61 alt1\">62</div><div class=\"line number63 index62 alt2\">63</div><div class=\"line number64 index63 alt1\">64</div><div class=\"line number65 index64 alt2\">65</div><div class=\"line number66 index65 alt1\">66</div><div class=\"line number67 index66 alt2\">67</div><div class=\"line number68 index67 alt1\">68</div><div class=\"line number69 index68 alt2\">69</div><div class=\"line number70 index69 alt1\">70</div><div class=\"line number71 index70 alt2\">71</div><div class=\"line number72 index71 alt1\">72</div><div class=\"line number73 index72 alt2\">73</div><div class=\"line number74 index73 alt1\">74</div><div class=\"line number75 index74 alt2\">75</div><div class=\"line number76 index75 alt1\">76</div><div class=\"line number77 index76 alt2\">77</div><div class=\"line number78 index77 alt1\">78</div><div class=\"line number79 index78 alt2\">79</div><div class=\"line number80 index79 alt1\">80</div><div class=\"line number81 index80 alt2\">81</div><div class=\"line number82 index81 alt1\">82</div><div class=\"line number83 index82 alt2\">83</div><div class=\"line number84 index83 alt1\">84</div><div class=\"line number85 index84 alt2\">85</div><div class=\"line number86 index85 alt1\">86</div><div class=\"line number87 index86 alt2\">87</div><div class=\"line number88 index87 alt1\">88</div><div class=\"line number89 index88 alt2\">89</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">HerosGrid = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">propTypes: { </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">data: React.PropTypes.array.isRequired, </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onRemove: React.PropTypes.func.isRequired </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">removeHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(hero){ </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.props.onRemove(hero); </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">self = </code><code class=\"keyword\">this</code><code class=\"plain\">, </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">heros = </code><code class=\"keyword\">this</code><code class=\"plain\">.props.data, </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">rows = heros.map((hero, idx)=> { </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code> <code class=\"plain\">key={idx}> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{idx+1}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>&lt;</code><code class=\"keyword\">strong</code><code class=\"plain\">>{hero.title}&lt;/</code><code class=\"keyword\">strong</code><code class=\"plain\">> ({hero.name})&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{hero.city}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default btn-xs\"</code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onClick={self.removeHero.bind(self, hero)}> </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">i</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"glyphicon glyphicon-remove\"</code> <code class=\"plain\">/> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number28 index27 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">table</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"table table-striped table-condensed\"</code><code class=\"plain\">> </code></div><div class=\"line number29 index28 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number30 index29 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number31 index30 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>S.no&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number32 index31 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>Name&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number33 index32 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>City&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number34 index33 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number35 index34 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number36 index35 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number37 index36 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number38 index37 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{rows} </code></div><div class=\"line number39 index38 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number40 index39 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">table</code><code class=\"plain\">> </code></div><div class=\"line number41 index40 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number42 index41 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number43 index42 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number44 index43 alt1\"><code class=\"keyword\">var</code> <code class=\"plain\">App = React.createClass({ </code></div><div class=\"line number45 index44 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">getInitialState: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number46 index45 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">{ </code></div><div class=\"line number47 index46 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">superHeros: [ </code></div><div class=\"line number48 index47 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Bat Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Bruce Wayne'</code><code class=\"plain\">, city: </code><code class=\"string\">'Gotham'</code><code class=\"plain\">}, </code></div><div class=\"line number49 index48 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Hulk'</code><code class=\"plain\">, name: </code><code class=\"string\">' Bruce Banner'</code><code class=\"plain\">, city: </code><code class=\"string\">'Un known'</code><code class=\"plain\">}, </code></div><div class=\"line number50 index49 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Iron Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Tony Stark'</code><code class=\"plain\">, city: </code><code class=\"string\">'New York'</code><code class=\"plain\">}, </code></div><div class=\"line number51 index50 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">] </code></div><div class=\"line number52 index51 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number53 index52 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number54 index53 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">removeHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(hero){ </code></div><div class=\"line number55 index54 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">index = </code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.indexOf(hero); </code></div><div class=\"line number56 index55 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number57 index56 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">if</code><code class=\"plain\">(index !== -1) { </code></div><div class=\"line number58 index57 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.splice(index, 1); </code></div><div class=\"line number59 index58 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number60 index59 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number61 index60 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.forceUpdate(); </code></div><div class=\"line number62 index61 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number63 index62 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">addHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number64 index63 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">newHero = { </code></div><div class=\"line number65 index64 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">title: </code><code class=\"string\">'You'</code><code class=\"plain\">, </code></div><div class=\"line number66 index65 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">name: </code><code class=\"string\">'Your self'</code><code class=\"plain\">, </code></div><div class=\"line number67 index66 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">city: </code><code class=\"string\">'Banglore'</code></div><div class=\"line number68 index67 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number69 index68 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number70 index69 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.push(newHero); </code></div><div class=\"line number71 index70 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.forceUpdate(); </code></div><div class=\"line number72 index71 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">// other way: this.setState({}); </code></div><div class=\"line number73 index72 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number74 index73 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number75 index74 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number76 index75 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number77 index76 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code></div><div class=\"line number78 index77 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default btn-big\"</code></div><div class=\"line number79 index78 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onClick={</code><code class=\"keyword\">this</code><code class=\"plain\">.addHero}> </code></div><div class=\"line number80 index79 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">i</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"glyphicon glyphicon-plus\"</code> <code class=\"plain\">/> </code></div><div class=\"line number81 index80 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">New Hero </code></div><div class=\"line number82 index81 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number83 index82 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number84 index83 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">HerosGrid</code> <code class=\"plain\">data={</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros} onRemove={</code><code class=\"keyword\">this</code><code class=\"plain\">.removeHero} /> </code></div><div class=\"line number85 index84 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number86 index85 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number87 index86 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number88 index87 alt1\"><code class=\"plain\">}); </code></div><div class=\"line number89 index88 alt2\"><code class=\"plain\">module.exports = App;</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	var HerosGrid = React.createClass({
	    displayName: "HerosGrid",

	    propTypes: {
	        data: React.PropTypes.array.isRequired,
	        onRemove: React.PropTypes.func.isRequired
	    },
	    removeHero: function removeHero(hero) {
	        this.props.onRemove(hero);
	    },
	    render: function render() {
	        var self = this,
	            heros = this.props.data,
	            rows = heros.map(function (hero, idx) {
	            return React.createElement(
	                "tr",
	                { key: idx },
	                React.createElement(
	                    "td",
	                    null,
	                    idx + 1
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    React.createElement(
	                        "strong",
	                        null,
	                        hero.title
	                    ),
	                    " (",
	                    hero.name,
	                    ")"
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    hero.city
	                ),
	                React.createElement(
	                    "td",
	                    null,
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-default btn-xs",
	                            onClick: self.removeHero.bind(self, hero) },
	                        React.createElement("i", { className: "glyphicon glyphicon-remove" })
	                    )
	                )
	            );
	        });
	        return React.createElement(
	            "table",
	            { className: "table table-striped table-condensed" },
	            React.createElement(
	                "thead",
	                null,
	                React.createElement(
	                    "tr",
	                    null,
	                    React.createElement(
	                        "th",
	                        null,
	                        "S.no"
	                    ),
	                    React.createElement(
	                        "th",
	                        null,
	                        "Name"
	                    ),
	                    React.createElement(
	                        "th",
	                        null,
	                        "City"
	                    ),
	                    React.createElement("th", null)
	                )
	            ),
	            React.createElement(
	                "tbody",
	                null,
	                rows
	            )
	        );
	    }
	});
	var App = React.createClass({
	    displayName: "App",

	    getInitialState: function getInitialState() {
	        return {
	            superHeros: [{ title: 'Bat Man', name: 'Bruce Wayne', city: 'Gotham' }, { title: 'Hulk', name: ' Bruce Banner', city: 'Un known' }, { title: 'Iron Man', name: 'Tony Stark', city: 'New York' }]
	        };
	    },
	    removeHero: function removeHero(hero) {
	        var index = this.state.superHeros.indexOf(hero);

	        if (index !== -1) {
	            this.state.superHeros.splice(index, 1);
	        }

	        this.forceUpdate();
	    },
	    addHero: function addHero() {
	        var newHero = {
	            title: 'You',
	            name: 'Your self',
	            city: 'Banglore'
	        };

	        this.state.superHeros.push(newHero);
	        this.forceUpdate();
	        // other way: this.setState({});
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "button",
	                {
	                    className: "btn btn-default btn-big",
	                    onClick: this.addHero },
	                React.createElement("i", { className: "glyphicon glyphicon-plus" }),
	                "New Hero"
	            ),
	            React.createElement(HerosGrid, { data: this.state.superHeros, onRemove: this.removeHero })
	        );
	    }
	});
	module.exports = App;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;

	var CodeSnippet = __webpack_require__(14);
	var snippet1 = __webpack_require__(23);
	var Output = __webpack_require__(21);
	var Crud3 = React.createClass({
	    displayName: 'Crud3',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'em',
	                null,
	                'To be writeen'
	            )
	        );
	    }
	});
	module.exports = Crud3;
	/*
	<h4>Final Output</h4>
	<div className="output-container">
	   <Output />
	</div>
	<h4>Code:</h4>
	<CodeSnippet html={snippet1} />
	*/

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_912644\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div><div class=\"line number29 index28 alt2\">29</div><div class=\"line number30 index29 alt1\">30</div><div class=\"line number31 index30 alt2\">31</div><div class=\"line number32 index31 alt1\">32</div><div class=\"line number33 index32 alt2\">33</div><div class=\"line number34 index33 alt1\">34</div><div class=\"line number35 index34 alt2\">35</div><div class=\"line number36 index35 alt1\">36</div><div class=\"line number37 index36 alt2\">37</div><div class=\"line number38 index37 alt1\">38</div><div class=\"line number39 index38 alt2\">39</div><div class=\"line number40 index39 alt1\">40</div><div class=\"line number41 index40 alt2\">41</div><div class=\"line number42 index41 alt1\">42</div><div class=\"line number43 index42 alt2\">43</div><div class=\"line number44 index43 alt1\">44</div><div class=\"line number45 index44 alt2\">45</div><div class=\"line number46 index45 alt1\">46</div><div class=\"line number47 index46 alt2\">47</div><div class=\"line number48 index47 alt1\">48</div><div class=\"line number49 index48 alt2\">49</div><div class=\"line number50 index49 alt1\">50</div><div class=\"line number51 index50 alt2\">51</div><div class=\"line number52 index51 alt1\">52</div><div class=\"line number53 index52 alt2\">53</div><div class=\"line number54 index53 alt1\">54</div><div class=\"line number55 index54 alt2\">55</div><div class=\"line number56 index55 alt1\">56</div><div class=\"line number57 index56 alt2\">57</div><div class=\"line number58 index57 alt1\">58</div><div class=\"line number59 index58 alt2\">59</div><div class=\"line number60 index59 alt1\">60</div><div class=\"line number61 index60 alt2\">61</div><div class=\"line number62 index61 alt1\">62</div><div class=\"line number63 index62 alt2\">63</div><div class=\"line number64 index63 alt1\">64</div><div class=\"line number65 index64 alt2\">65</div><div class=\"line number66 index65 alt1\">66</div><div class=\"line number67 index66 alt2\">67</div><div class=\"line number68 index67 alt1\">68</div><div class=\"line number69 index68 alt2\">69</div><div class=\"line number70 index69 alt1\">70</div><div class=\"line number71 index70 alt2\">71</div><div class=\"line number72 index71 alt1\">72</div><div class=\"line number73 index72 alt2\">73</div><div class=\"line number74 index73 alt1\">74</div><div class=\"line number75 index74 alt2\">75</div><div class=\"line number76 index75 alt1\">76</div><div class=\"line number77 index76 alt2\">77</div><div class=\"line number78 index77 alt1\">78</div><div class=\"line number79 index78 alt2\">79</div><div class=\"line number80 index79 alt1\">80</div><div class=\"line number81 index80 alt2\">81</div><div class=\"line number82 index81 alt1\">82</div><div class=\"line number83 index82 alt2\">83</div><div class=\"line number84 index83 alt1\">84</div><div class=\"line number85 index84 alt2\">85</div><div class=\"line number86 index85 alt1\">86</div><div class=\"line number87 index86 alt2\">87</div><div class=\"line number88 index87 alt1\">88</div><div class=\"line number89 index88 alt2\">89</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">HerosGrid = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">propTypes: { </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">data: React.PropTypes.array.isRequired, </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onRemove: React.PropTypes.func.isRequired </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">removeHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(hero){ </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.props.onRemove(hero); </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">self = </code><code class=\"keyword\">this</code><code class=\"plain\">, </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">heros = </code><code class=\"keyword\">this</code><code class=\"plain\">.props.data, </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">rows = heros.map((hero, idx)=> { </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code> <code class=\"plain\">key={idx}> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{idx+1}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>&lt;</code><code class=\"keyword\">strong</code><code class=\"plain\">>{hero.title}&lt;/</code><code class=\"keyword\">strong</code><code class=\"plain\">> ({hero.name})&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">>{hero.city}&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default btn-xs\"</code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onClick={self.removeHero.bind(self, hero)}> </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">i</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"glyphicon glyphicon-remove\"</code> <code class=\"plain\">/> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">td</code><code class=\"plain\">> </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number28 index27 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">table</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"table table-striped table-condensed\"</code><code class=\"plain\">> </code></div><div class=\"line number29 index28 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number30 index29 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number31 index30 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>S.no&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number32 index31 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>Name&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number33 index32 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>City&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number34 index33 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">th</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">th</code><code class=\"plain\">> </code></div><div class=\"line number35 index34 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tr</code><code class=\"plain\">> </code></div><div class=\"line number36 index35 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">thead</code><code class=\"plain\">> </code></div><div class=\"line number37 index36 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number38 index37 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{rows} </code></div><div class=\"line number39 index38 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">tbody</code><code class=\"plain\">> </code></div><div class=\"line number40 index39 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">table</code><code class=\"plain\">> </code></div><div class=\"line number41 index40 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number42 index41 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number43 index42 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number44 index43 alt1\"><code class=\"keyword\">var</code> <code class=\"plain\">App = React.createClass({ </code></div><div class=\"line number45 index44 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">getInitialState: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number46 index45 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">{ </code></div><div class=\"line number47 index46 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">superHeros: [ </code></div><div class=\"line number48 index47 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Bat Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Bruce Wayne'</code><code class=\"plain\">, city: </code><code class=\"string\">'Gotham'</code><code class=\"plain\">}, </code></div><div class=\"line number49 index48 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Hulk'</code><code class=\"plain\">, name: </code><code class=\"string\">' Bruce Banner'</code><code class=\"plain\">, city: </code><code class=\"string\">'Un known'</code><code class=\"plain\">}, </code></div><div class=\"line number50 index49 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">{title: </code><code class=\"string\">'Iron Man'</code><code class=\"plain\">, name: </code><code class=\"string\">'Tony Stark'</code><code class=\"plain\">, city: </code><code class=\"string\">'New York'</code><code class=\"plain\">}, </code></div><div class=\"line number51 index50 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">] </code></div><div class=\"line number52 index51 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number53 index52 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number54 index53 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">removeHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(hero){ </code></div><div class=\"line number55 index54 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">index = </code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.indexOf(hero); </code></div><div class=\"line number56 index55 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number57 index56 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">if</code><code class=\"plain\">(index !== -1) { </code></div><div class=\"line number58 index57 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.splice(index, 1); </code></div><div class=\"line number59 index58 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number60 index59 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number61 index60 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.forceUpdate(); </code></div><div class=\"line number62 index61 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number63 index62 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">addHero: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number64 index63 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">newHero = { </code></div><div class=\"line number65 index64 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">title: </code><code class=\"string\">'You'</code><code class=\"plain\">, </code></div><div class=\"line number66 index65 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">name: </code><code class=\"string\">'Your self'</code><code class=\"plain\">, </code></div><div class=\"line number67 index66 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">city: </code><code class=\"string\">'Banglore'</code></div><div class=\"line number68 index67 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number69 index68 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number70 index69 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros.push(newHero); </code></div><div class=\"line number71 index70 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.forceUpdate(); </code></div><div class=\"line number72 index71 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">// other way: this.setState({}); </code></div><div class=\"line number73 index72 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number74 index73 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number75 index74 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number76 index75 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number77 index76 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code></div><div class=\"line number78 index77 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default btn-big\"</code></div><div class=\"line number79 index78 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">onClick={</code><code class=\"keyword\">this</code><code class=\"plain\">.addHero}> </code></div><div class=\"line number80 index79 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">i</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"glyphicon glyphicon-plus\"</code> <code class=\"plain\">/> </code></div><div class=\"line number81 index80 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">New Hero </code></div><div class=\"line number82 index81 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number83 index82 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number84 index83 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">HerosGrid</code> <code class=\"plain\">data={</code><code class=\"keyword\">this</code><code class=\"plain\">.state.superHeros} onRemove={</code><code class=\"keyword\">this</code><code class=\"plain\">.removeHero} /> </code></div><div class=\"line number85 index84 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number86 index85 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">); </code></div><div class=\"line number87 index86 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number88 index87 alt1\"><code class=\"plain\">}); </code></div><div class=\"line number89 index88 alt2\"><code class=\"plain\">module.exports = App;</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	var App = React.createClass({
	    displayName: 'App',

	    submitForm: function submitForm(event) {
	        event.preventDefault();
	        var username = this.refs.username.getDOMNode().value,
	            password = this.refs.password.getDOMNode().value;

	        if (username === password && username !== '') {
	            alert('Login Success.');
	            this.refs.username.getDOMNode().value = '';
	            this.refs.password.getDOMNode().value = '';
	        }
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'form',
	                { onSubmit: this.submitForm },
	                React.createElement(
	                    'div',
	                    { className: "form-group" },
	                    React.createElement(
	                        'label',
	                        null,
	                        'User Name'
	                    ),
	                    React.createElement('input', { type: "text", className: "form-control", ref: "username" })
	                ),
	                React.createElement(
	                    'div',
	                    { className: "form-group" },
	                    React.createElement(
	                        'label',
	                        null,
	                        'Password'
	                    ),
	                    React.createElement('input', { type: "password", className: "form-control", ref: "password" })
	                ),
	                React.createElement(
	                    'button',
	                    { type: "submit", className: "btn btn-default" },
	                    'Submit'
	                )
	            ),
	            React.createElement(
	                'p',
	                { className: "text-info" },
	                '* login success on ',
	                React.createElement(
	                    'em',
	                    null,
	                    'username = password'
	                )
	            )
	        );
	    }
	});

	module.exports = App;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippet1 = __webpack_require__(26);

	var Output = __webpack_require__(24);

	var HandlingFormFields = React.createClass({
	    displayName: 'HandlingFormFields',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                'Let us create a simple component that provides a form with two input fields: User Name and Password. ',
	                React.createElement('br', null),
	                'The purpose of this tutorials is to explore the methods of accessing values from the fields.'
	            ),
	            React.createElement(
	                'h4',
	                null,
	                'Final Output'
	            ),
	            React.createElement(
	                'div',
	                { className: "output-container" },
	                React.createElement(Output, null)
	            ),
	            React.createElement(
	                'h4',
	                null,
	                'Code:'
	            ),
	            React.createElement(CodeSnippet, { html: snippet1 }),
	            React.createElement(
	                'h4',
	                null,
	                'Explanation:'
	            ),
	            React.createElement('p', null),
	            React.createElement(
	                'ol',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    'Assigning event to form : ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        '<form onSubmit={this.submitForm}>'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    'We have assigned ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'ref'
	                    ),
	                    ' attribute to each of the input fields :  ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'ref="username"'
	                        )
	                    ),
	                    ' and ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'ref="password"'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    'We can access the rendered HTML elements - DOM through the ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'ref'
	                    ),
	                    ' attribute: ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'username = this.refs.username.getDOMNode().value'
	                        )
	                    ),
	                    ' ',
	                    React.createElement('br', null),
	                    React.createElement(
	                        'a',
	                        { href: "https://facebook.github.io/react/docs/more-about-refs.html", target: "_blank" },
	                        'Read more about refs here'
	                    ),
	                    '.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    'Rest of the code is self explanatory :)'
	                )
	            )
	        );
	    }
	});
	module.exports = HandlingFormFields;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_128994\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div><div class=\"line number29 index28 alt2\">29</div><div class=\"line number30 index29 alt1\">30</div><div class=\"line number31 index30 alt2\">31</div><div class=\"line number32 index31 alt1\">32</div><div class=\"line number33 index32 alt2\">33</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">App = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">submitForm: </code><code class=\"keyword\">function</code><code class=\"plain\">(event){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">event.preventDefault(); </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">username = </code><code class=\"keyword\">this</code><code class=\"plain\">.refs.username.getDOMNode().value, </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">password = </code><code class=\"keyword\">this</code><code class=\"plain\">.refs.password.getDOMNode().value; </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">if</code><code class=\"plain\">(username === password && username !== </code><code class=\"string\">''</code><code class=\"plain\">) { </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">alert(</code><code class=\"string\">'Login Success.'</code><code class=\"plain\">); </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.refs.username.getDOMNode().value = </code><code class=\"string\">''</code><code class=\"plain\">; </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">this</code><code class=\"plain\">.refs.password.getDOMNode().value = </code><code class=\"string\">''</code><code class=\"plain\">; </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}, </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">form</code> <code class=\"plain\">onSubmit={</code><code class=\"keyword\">this</code><code class=\"plain\">.submitForm}> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"form-group\"</code><code class=\"plain\">> </code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">label</code><code class=\"plain\">>User Name&lt;/</code><code class=\"keyword\">label</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">input</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text\"</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"form-control\"</code> <code class=\"color1\">ref</code><code class=\"plain\">=</code><code class=\"string\">\"username\"</code> <code class=\"plain\">/> </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"form-group\"</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">label</code><code class=\"plain\">>Password&lt;/</code><code class=\"keyword\">label</code><code class=\"plain\">> </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">input</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"password\"</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"form-control\"</code> <code class=\"color1\">ref</code><code class=\"plain\">=</code><code class=\"string\">\"password\"</code> <code class=\"plain\">/> </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">button</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"submit\"</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"btn btn-default\"</code><code class=\"plain\">>Submit&lt;/</code><code class=\"keyword\">button</code><code class=\"plain\">> </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">form</code><code class=\"plain\">> </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">p</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"text-info\"</code><code class=\"plain\">>* login success on &lt;</code><code class=\"keyword\">em</code><code class=\"plain\">>username = password&lt;/</code><code class=\"keyword\">em</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">p</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number29 index28 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">) </code></div><div class=\"line number30 index29 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number31 index30 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number32 index31 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number33 index32 alt2\"><code class=\"plain\">module.exports = App;</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippetHelloWorld = requireSnippet('./1/helloworld/crud1-example.jsx');
	var snippetJSXCode = requireSnippet('./1/helloworld/2.snippet');
	var snippetTransformedToJSCode = requireSnippet('./1/helloworld/3.snippet');

	var HelloWorld = React.createClass({
	    displayName: 'HelloWorld',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                'Let us write HelloWorld program. Modify your boiler plate as following..'
	            ),
	            React.createElement(CodeSnippet, { html: snippetHelloWorld }),
	            React.createElement(
	                'p',
	                null,
	                'In the above code, we have created a component named ',
	                React.createElement(
	                    'em',
	                    null,
	                    'FirstComponent'
	                ),
	                ' and rendering the component to ',
	                React.createElement(
	                    'em',
	                    null,
	                    '<div ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'id="page-content"'
	                    ),
	                    '>'
	                ),
	                '.'
	            ),
	            React.createElement(
	                'ol',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    ' To create a react component,  we use ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'React.createClass'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'React.createClass'
	                        )
	                    ),
	                    ' would expect an object (',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            '{ }'
	                        )
	                    ),
	                    ')'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'render()'
	                        )
	                    ),
	                    ' is mandatory for any React component.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'render()'
	                        )
	                    ),
	                    ' should return a valid React element And all valid HTML elements are valid React elements. We are returning a ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            '<h1 / >'
	                        )
	                    ),
	                    ' tag in the above component.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        React.createElement(
	                            'em',
	                            null,
	                            'React.render()'
	                        )
	                    ),
	                    ' would render a React element to a DOM element.'
	                )
	            ),
	            React.createElement(
	                'p',
	                null,
	                'If you are wondering how the JSX to JS transformed code would look like, copy the JSX code and try the ',
	                React.createElement(
	                    'a',
	                    { href: "https://facebook.github.io/react/jsx-compiler.html", target: "_blank" },
	                    'JSX compiler service'
	                ),
	                '. For quick view, look at the below codes.'
	            ),
	            React.createElement(
	                'div',
	                { className: "row" },
	                React.createElement(
	                    'div',
	                    { className: "col-md-12" },
	                    React.createElement(
	                        'table',
	                        { className: "table table-condensed table-bordered" },
	                        React.createElement(
	                            'thead',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    'JSX Code'
	                                ),
	                                React.createElement(
	                                    'th',
	                                    null,
	                                    'Transformed to JavaScript'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(CodeSnippet, { html: snippetJSXCode })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(CodeSnippet, { html: snippetTransformedToJSCode })
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var NestingComponents = React.createClass({
	    displayName: 'NestingComponents',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'em',
	                null,
	                'To be written.'
	            )
	        );
	    }
	});
	module.exports = NestingComponents;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippet1 = requireSnippet('./1/styling-elements/crud1-example.jsx');
	var Output = React.createClass({
	    displayName: 'Output',

	    render: function render() {
	        var greenStyle = {
	            color: 'green',
	            fontWeight: 'bold'
	        };
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                { style: { color: 'red' } },
	                'Text styled in red color'
	            ),
	            React.createElement(
	                'p',
	                { style: greenStyle },
	                'Hellow! I am a styled paragraph.'
	            ),
	            React.createElement(
	                'p',
	                { style: { color: 'blue', textDecoration: 'underline' } },
	                'Another styled paragraph.'
	            )
	        );
	    }
	});
	var InlineStyles = React.createClass({
	    displayName: 'InlineStyles',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'p',
	                null,
	                'We are going to achieve this:'
	            ),
	            React.createElement(
	                'div',
	                { className: "output-container" },
	                React.createElement(Output, null)
	            ),
	            React.createElement(
	                'p',
	                null,
	                'Follow the below snippet and observe the changes.'
	            ),
	            React.createElement(CodeSnippet, { html: snippet1 }),
	            React.createElement(
	                'p',
	                null,
	                'The changes are as follows'
	            ),
	            React.createElement(
	                'ol',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    'We added a ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        '<style />'
	                    ),
	                    ' to the head section'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        'className'
	                    ),
	                    ': When you want to use ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'class'
	                    ),
	                    ' attribute for any element, use ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'className'
	                    ),
	                    '. The first paragraph of the component has the attribute ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'className'
	                    ),
	                    '. It is the equivalent of html\'s ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'class'
	                    ),
	                    ' attribute. The word \'class\' is reserved for other purposes in React.js.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        'Inline Styles'
	                    ),
	                    ': we have created an object named ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'greenStyle'
	                    ),
	                    '. Note that the style ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'fontWeight'
	                    ),
	                    ' is named in camelCase. To apply this style to the second paragraph, we have used  ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'style = {greenStyle}'
	                    ),
	                    '.'
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        'Evaluating expressions'
	                    ),
	                    ': To evaluate the variable ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        'greenStyle'
	                    ),
	                    ', we have enclosed the variable name with curly braces : ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        '{greenStyle}'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'strong',
	                        null,
	                        'Inline expression evaluation'
	                    ),
	                    ': The last paragraph has the style attribute. we have the object ',
	                    React.createElement(
	                        'strong',
	                        null,
	                        '{color:\'blue\', textDecoration:\'underline\'}'
	                    ),
	                    '. In order to evaluate it, we have to enclose the object in curly braces: {{color:\'blue\', textDecoration:\'underline\'}}'
	                )
	            )
	        );
	    }
	});
	module.exports = InlineStyles;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1/basic-setup/1.snippet": 31,
		"./1/helloworld/1.snippet": 32,
		"./1/helloworld/2.snippet": 33,
		"./1/helloworld/3.snippet": 34,
		"./1/styling-elements/1.snippet": 35
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
	webpackContext.id = 30;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_151272\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">meta</code> <code class=\"color1\">charset</code><code class=\"plain\">=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>ReactJS tutorials&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"lib\\bootstrap\\css\\bootstrap.min.css\"</code><code class=\"plain\">/> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Content --></code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/jquery.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/bootstrap/js/bootstrap.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/react-with-addons.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/browser.babel.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/babel\"</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_16826\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">meta</code> <code class=\"color1\">charset</code><code class=\"plain\">=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>ReactJS tutorials&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"lib\\bootstrap\\css\\bootstrap.min.css\"</code><code class=\"plain\">/> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Content --></code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/jquery.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/bootstrap/js/bootstrap.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/react-with-addons.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/browser.babel.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/babel\"</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_306073\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_653534\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({displayName: </code><code class=\"string\">\"FirstComponent\"</code><code class=\"plain\">, </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">React.createElement(</code><code class=\"string\">\"h1\"</code><code class=\"plain\">, </code><code class=\"keyword\">null</code><code class=\"plain\">, </code><code class=\"string\">\"Hello, world!\"</code><code class=\"plain\">) </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(React.createElement(FirstComponent, </code><code class=\"keyword\">null</code><code class=\"plain\">), document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_832110\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div><div class=\"line number29 index28 alt2\">29</div><div class=\"line number30 index29 alt1\">30</div><div class=\"line number31 index30 alt2\">31</div><div class=\"line number32 index31 alt1\">32</div><div class=\"line number33 index32 alt2\">33</div><div class=\"line number34 index33 alt1\">34</div><div class=\"line number35 index34 alt2\">35</div><div class=\"line number36 index35 alt1\">36</div><div class=\"line number37 index36 alt2\">37</div><div class=\"line number38 index37 alt1\">38</div><div class=\"line number39 index38 alt2\">39</div><div class=\"line number40 index39 alt1\">40</div><div class=\"line number41 index40 alt2\">41</div><div class=\"line number42 index41 alt1\">42</div><div class=\"line number43 index42 alt2\">43</div><div class=\"line number44 index43 alt1\">44</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">meta</code> <code class=\"color1\">charset</code><code class=\"plain\">=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>ReactJS tutorials&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"lib\\bootstrap\\css\\bootstrap.min.css\"</code><code class=\"plain\">/> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">style</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">.text-red{ </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">color: red; </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">style</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Content --></code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/jquery.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/bootstrap/js/bootstrap.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/react-with-addons.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/browser.babel.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/babel\"</code><code class=\"plain\">> </code></div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">App = React.createClass({ </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">greenStyle = { </code></div><div class=\"line number28 index27 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">color: </code><code class=\"string\">'green'</code><code class=\"plain\">, </code></div><div class=\"line number29 index28 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">fontWeight: </code><code class=\"string\">'bold'</code></div><div class=\"line number30 index29 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}; </code></div><div class=\"line number31 index30 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">( </code></div><div class=\"line number32 index31 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number33 index32 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">p</code> <code class=\"color1\">className</code><code class=\"plain\">=</code><code class=\"string\">\"text-red\"</code><code class=\"plain\">>Text styled </code><code class=\"keyword\">in</code> <code class=\"plain\">red color&lt;/</code><code class=\"keyword\">p</code><code class=\"plain\">> </code></div><div class=\"line number34 index33 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">p</code> <code class=\"plain\">style={greenStyle}>Hellow! I am a styled paragraph.&lt;/</code><code class=\"keyword\">p</code><code class=\"plain\">> </code></div><div class=\"line number35 index34 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">p</code> <code class=\"plain\">style={{color:</code><code class=\"string\">'blue'</code><code class=\"plain\">, textDecoration:</code><code class=\"string\">'underline'</code><code class=\"plain\">}}>Another styled paragraph.&lt;/</code><code class=\"keyword\">p</code><code class=\"plain\">> </code></div><div class=\"line number36 index35 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number37 index36 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">) </code></div><div class=\"line number38 index37 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number39 index38 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number40 index39 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number41 index40 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">App</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number42 index41 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number43 index42 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number44 index43 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./lessons/1/basic-setup/1.snippet": 31,
		"./lessons/1/helloworld/1.snippet": 32,
		"./lessons/1/helloworld/2.snippet": 33,
		"./lessons/1/helloworld/3.snippet": 34,
		"./lessons/1/styling-elements/1.snippet": 35
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
	webpackContext.id = 36;


/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);