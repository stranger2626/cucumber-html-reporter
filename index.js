'use strict';

var reporter = require('./lib/reporter');

function generateReport(options) {
    return reporter.generate(options);
}

module.exports = {
    generate: generateReport
};
