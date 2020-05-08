const hbs = require("hbs");

function initHandlebars() {
    // register a helper
    hbs.registerHelper("increment", function (num, options) {
        return num + 1;
    });
}

module.exports = initHandlebars;
