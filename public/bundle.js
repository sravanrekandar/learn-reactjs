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
	__webpack_require__(26);
	__webpack_require__(27);

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
	                        { className: "col-md-10" },
	                        React.createElement(RouteHandler, null)
	                    ),
	                    React.createElement(
	                        'nav',
	                        { className: "col-md-2 bs-docs-sidebar" },
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
	        var items = lessonsList.map(function (el) {
	            return React.createElement(
	                'li',
	                { className: "list-group-item " + (currentLessonName === el.name ? 'active' : '') },
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
	var requireSnippet = __webpack_require__(21);
	module.exports = {
	    requireLesson: requireLesson,
	    requireSnippet: requireSnippet
	};

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
		"./1/nesting-components/nesting-components.jsx": 20
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
	var snippetBoilerplate = requireSnippet('./1/basic-setup/1.snippet');
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
	            React.createElement(
	                'p',
	                null,
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
	        html: React.PropTypes.string
	    },
	    render: function render() {
	        return React.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html } });
	    }
	});
	module.exports = CodeSnippet;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Crud1 = React.createClass({
	    displayName: 'Crud1',

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
	module.exports = Crud1;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Crud2 = React.createClass({
	    displayName: 'Crud2',

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
	module.exports = Crud2;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var HandlingFormFields = React.createClass({
	    displayName: 'HandlingFormFields',

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
	module.exports = HandlingFormFields;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var requireSnippet = __webpack_require__(11).requireSnippet;
	var CodeSnippet = __webpack_require__(14);
	var snippetHelloWorld = requireSnippet('./1/helloworld/1.snippet');
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var InlineStyles = React.createClass({
	    displayName: 'InlineStyles',

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
	module.exports = InlineStyles;

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1/basic-setup/1.snippet": 22,
		"./1/helloworld/1.snippet": 23,
		"./1/helloworld/2.snippet": 24,
		"./1/helloworld/3.snippet": 25
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
	webpackContext.id = 21;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_463784\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">meta</code> <code class=\"color1\">charset</code><code class=\"plain\">=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>ReactJS tutorials&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"lib\\bootstrap\\css\\bootstrap.min.css\"</code><code class=\"plain\">/> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Content --></code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/jquery.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/bootstrap/js/bootstrap.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/react-with-addons.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/browser.babel.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/babel\"</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_620272\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div><div class=\"line number8 index7 alt1\">8</div><div class=\"line number9 index8 alt2\">9</div><div class=\"line number10 index9 alt1\">10</div><div class=\"line number11 index10 alt2\">11</div><div class=\"line number12 index11 alt1\">12</div><div class=\"line number13 index12 alt2\">13</div><div class=\"line number14 index13 alt1\">14</div><div class=\"line number15 index14 alt2\">15</div><div class=\"line number16 index15 alt1\">16</div><div class=\"line number17 index16 alt2\">17</div><div class=\"line number18 index17 alt1\">18</div><div class=\"line number19 index18 alt2\">19</div><div class=\"line number20 index19 alt1\">20</div><div class=\"line number21 index20 alt2\">21</div><div class=\"line number22 index21 alt1\">22</div><div class=\"line number23 index22 alt2\">23</div><div class=\"line number24 index23 alt1\">24</div><div class=\"line number25 index24 alt2\">25</div><div class=\"line number26 index25 alt1\">26</div><div class=\"line number27 index26 alt2\">27</div><div class=\"line number28 index27 alt1\">28</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"plain\">&lt;!DOCTYPE html> </code></div><div class=\"line number2 index1 alt1\"><code class=\"plain\">&lt;</code><code class=\"keyword\">html</code><code class=\"plain\">> </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">meta</code> <code class=\"color1\">charset</code><code class=\"plain\">=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">> </code></div><div class=\"line number5 index4 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">title</code><code class=\"plain\">>ReactJS tutorials&lt;/</code><code class=\"keyword\">title</code><code class=\"plain\">> </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">link</code> <code class=\"color1\">rel</code><code class=\"plain\">=</code><code class=\"string\">\"stylesheet\"</code> <code class=\"color1\">href</code><code class=\"plain\">=</code><code class=\"string\">\"lib\\bootstrap\\css\\bootstrap.min.css\"</code><code class=\"plain\">/> </code></div><div class=\"line number7 index6 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">head</code><code class=\"plain\">> </code></div><div class=\"line number8 index7 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number9 index8 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">div</code> <code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">\"page-content\"</code> <code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">\"container\"</code><code class=\"plain\">> </code></div><div class=\"line number10 index9 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Content --></code></div><div class=\"line number11 index10 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">div</code><code class=\"plain\">> </code></div><div class=\"line number12 index11 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"comments\">&lt;!-- Scripts --></code></div><div class=\"line number13 index12 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/jquery.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number14 index13 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/bootstrap/js/bootstrap.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number15 index14 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/react-with-addons.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number16 index15 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">src</code><code class=\"plain\">=</code><code class=\"string\">\"lib/browser.babel.min.js\"</code><code class=\"plain\">>&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number17 index16 alt2\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number18 index17 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;</code><code class=\"keyword\">script</code> <code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">\"text/babel\"</code><code class=\"plain\">> </code></div><div class=\"line number19 index18 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number20 index19 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number21 index20 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number22 index21 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number23 index22 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">}); </code></div><div class=\"line number24 index23 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number25 index24 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">)); </code></div><div class=\"line number26 index25 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">script</code><code class=\"plain\">> </code></div><div class=\"line number27 index26 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">body</code><code class=\"plain\">> </code></div><div class=\"line number28 index27 alt1\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">html</code><code class=\"plain\">></code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_863212\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({ </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">&lt;</code><code class=\"keyword\">h1</code><code class=\"plain\">>Hello, world!&lt;/</code><code class=\"keyword\">h1</code><code class=\"plain\">> </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(&lt;</code><code class=\"keyword\">FirstComponent</code> <code class=\"plain\">/>, document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div id=\"highlighter_429046\" class=\"syntaxhighlighter  \"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td class=\"gutter\"><div class=\"line number1 index0 alt2\">1</div><div class=\"line number2 index1 alt1\">2</div><div class=\"line number3 index2 alt2\">3</div><div class=\"line number4 index3 alt1\">4</div><div class=\"line number5 index4 alt2\">5</div><div class=\"line number6 index5 alt1\">6</div><div class=\"line number7 index6 alt2\">7</div></td><td class=\"code\"><div class=\"container\"><div class=\"line number1 index0 alt2\"><code class=\"keyword\">var</code> <code class=\"plain\">FirstComponent = React.createClass({displayName: </code><code class=\"string\">\"FirstComponent\"</code><code class=\"plain\">, </code></div><div class=\"line number2 index1 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">render: </code><code class=\"keyword\">function</code><code class=\"plain\">(){ </code></div><div class=\"line number3 index2 alt2\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"keyword\">return</code> <code class=\"plain\">React.createElement(</code><code class=\"string\">\"h1\"</code><code class=\"plain\">, </code><code class=\"keyword\">null</code><code class=\"plain\">, </code><code class=\"string\">\"Hello, world!\"</code><code class=\"plain\">) </code></div><div class=\"line number4 index3 alt1\"><code class=\"undefined spaces\">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class=\"plain\">} </code></div><div class=\"line number5 index4 alt2\"><code class=\"plain\">}); </code></div><div class=\"line number6 index5 alt1\"><code class=\"undefined spaces\">&nbsp;</code>&nbsp;</div><div class=\"line number7 index6 alt2\"><code class=\"plain\">React.render(React.createElement(FirstComponent, </code><code class=\"keyword\">null</code><code class=\"plain\">), document.getElementById(</code><code class=\"string\">'page-content'</code><code class=\"plain\">));</code></div></div></td></tr></tbody></table></div>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);