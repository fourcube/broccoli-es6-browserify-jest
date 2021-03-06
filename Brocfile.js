var mergeTrees  = require('broccoli-merge-trees'),
  pickFiles   = require('broccoli-static-compiler'),
  fastBrowserify = require('broccoli-fast-browserify'),
  esTranspiler = require('broccoli-babel-transpiler'),
  reactify = require('broccoli-react'),
  env = require('broccoli-env').getEnv(),
  app = 'src',
  appCss,
  appHtml,
  appJs,
  browserified,
  transpiled;

console.log("Running in", env.toUpperCase() + ".");

appHtml = pickFiles(app, {
  srcDir  : '/',
  files   : ['index.html'],
  destDir : '/'
});

appJs = pickFiles(app, {
  srcDir: '/js',
  files: ['**/*.js'],
  destDir: '/'
});

appTests = pickFiles('tests', {
  srcDir: '/js',
  files: ['**/*.js'],
  destDir: '/tests'
});

jsxTransformed = reactify(appJs, {extensions: [".js"], transform: {sourceMap: true}});

transpiled = esTranspiler(jsxTransformed, {
  sourceMap: 'inline',
  modules: 'common'
});

browserified = fastBrowserify(transpiled, {
  bundleExtension: ".bundle.js",

  browserify: {
    debug: true // create source maps
  }
});

sourceTree = [appHtml, browserified];

if (env === 'development') {
  var transpiledTests = esTranspiler(appTests, {
    sourceMap: 'inline'
  });

  sourceTree.push(transpiledTests, transpiled);
}

module.exports = mergeTrees(sourceTree);
