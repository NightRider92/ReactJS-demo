module.exports = function override(config, env) {
    // Exclude "zlib" polyfill
    config.resolve.fallback = {
      ...config.resolve.fallback,
      zlib: false,
      querystring:false,
      path:false,
      crypto:false,
      buffer:false,
      crypto:false,
      url:false,
      http:false,
      stream:false,
      util:false,
      fs: 'browserify-fs',
      net:'browserify-http',
      async_hooks: false,
      console:false
    };
    return config;
  };