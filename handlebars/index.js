function initHandlebars() {
    // import hbs directly
    const hbs = require("hbs");

    // register a helper
    hbs.registerHelper("increment", function (num, options) {
        return num + 1;
    });
}

module.exports = initHandlebars;
