process.env.CHROME_BIN = '/usr/bin/chromium-browser'
module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" },
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["progress", "karma-typescript"],
        port: 9876,
        // colors: true,
        browsers: ["ChromiumHeadless"],
        singleRun: false,
        // karmaTypescriptConfig: {
        //     bundlerOptions: {
        //         transforms: [
        //             require("karma-typescript-es6-transform")({
        //             presets: [
        //                             ["env"]
        //                         ]
        //                         })
        //         ]
        //     }
        // }

    });
};
