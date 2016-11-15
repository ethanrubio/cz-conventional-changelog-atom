"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types-atom');

module.exports = engine({
  types: conventionalCommitTypes.types
});