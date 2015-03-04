module.exports = function (str) {
  var regexp = new RegExp('^.*\\|', 'gm');
  return str.replace(regexp, '');
};
