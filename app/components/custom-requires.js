var requireLesson = require.context("./lessons", true, /^\.\/.*\.jsx$/);
var requireSnippet = require.context("./lessons", true, /^\.\/.*\.snippet$/);
var requireComponent = require.context("./", true, /^\.\/.*\.snippet$/);
module.exports = {
    requireLesson: requireLesson,
    requireSnippet: requireSnippet
}