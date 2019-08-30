const containers = require("remark-containers");

module.exports = ({ markdownAST }) => markdownAST;
module.exports.setParserPlugins = () => [containers];

