"format cjs";

var wrap = require('word-wrap');
var map = require('lodash.map');
var longest = require('longest');
var rightPad = require('right-pad');

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function (options) {

    var types = options.types;

    var length = longest(Object.keys(types)).length + 1;
    var choices = map(types, function (type, key) {
        var paddedName;

        // Ignore the blank type
        if (key === '') {
            paddedName = ' ' + type.description;
        } else {
            paddedName = rightPad(key + ':', length) + ' ' + type.description;
        }
        
        return {
            name: paddedName,
            value: key
        };
    });

    return {
        // When a user runs `git cz`, prompter will
        // be executed. We pass you cz, which currently
        // is just an instance of inquirer.js. Using
        // this you can ask questions and get answers.
        //
        // The commit callback should be executed when
        // you're ready to send back a commit template
        // to git.
        //
        // By default, we'll de-indent your commit
        // template and will keep empty lines.
        prompter: function (cz, commit) {
            console.log('\nLine 1 will be cropped at 72 characters. All other lines will be wrapped after 72 characters.\n');

            // Let's ask some questions of the user
            // so that we can populate our commit
            // template.
            //
            // See inquirer.js docs for specifics.
            // You can also opt to use another input
            // collection library if you prefer.
            cz.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'Select the type of change that you\'re committing:',
                    choices: choices
                }, {
                    type: 'input',
                    name: 'subject',
                    message: 'Write a short, present-imperative tense description of the change:\n'
                }, {
                    type: 'input',
                    name: 'body',
                    message: 'Provide a longer description of the change:\n'
                }, {
                    type: 'input',
                    name: 'footer',
                    message: 'List any breaking changes or issues closed by this change:\n'
                }
            ]).then(function (answers) {

                var maxLineWidth = 72;

                var wrapOptions = {
                    trim: true,
                    newline: '\n',
                    indent: '',
                    width: maxLineWidth
                };

                var headMsg;

                // Ignore the blank type && Hard limit this line
                if (answers.type == "") {
                    headMsg = (answers.subject.trim()).slice(0, maxLineWidth);
                } else {
                    headMsg = (answers.type + " " + answers.subject.trim()).slice(0, maxLineWidth);
                }

                var head = headMsg;

                // Wrap these lines at 100 characters
                var body = wrap(answers.body, wrapOptions);
                var footer = wrap(answers.footer, wrapOptions);

                commit(head + '\n\n' + body + '\n\n' + footer);
            });
        }
    };
};
