const path = require("path");

/*
configuration files - 
1. main.js - Controls the generation of your Storybook
2. preview.js - Controls the rendering of your stories
  - Add global parameters and decorators
  - Import global CSS
  - Add extra polyfills

3. manager.js - Allows us to customize how Storybook’s app UI renders
*/

module.exports = {
    // location of story files
    stories: ["../src/stories/*.stories.(tsx|jsx|mdx)", "../src/**/*.stories.(tsx|jsx|mdx)"],

    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [["react-app", { flow: false, typescript: true }]],
                    },
                },
                // Automatics props for typescript
                {
                    loader: require.resolve("react-docgen-typescript-loader"),
                },
            ],
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    },
};
