module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add ignoreWarnings configuration to suppress source map warnings
        webpackConfig.ignoreWarnings = [
          (warning) =>
            warning.module &&
            warning.module.resource.includes('node_modules') &&
            warning.details &&
            warning.details.includes('source-map-loader'),
        ];
        return webpackConfig;
      },
    },
  };