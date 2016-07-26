exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    specs: ['*.spec.js'],

    suites: {
        suite1: 'spec/suite1/*.spec.js',
        suite2: 'spec/suite2/*.spec.js'
    },

    baseURL: 'http://localhost:8080/',
    framework: 'jasmine',
};
