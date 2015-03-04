// jshint esnext:true
export default function (str) {
  var regexp = new RegExp('^.*\\|', 'gm');
  return str.replace(regexp, '');
}
