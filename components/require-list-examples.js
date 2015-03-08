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