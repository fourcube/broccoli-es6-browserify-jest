module.exports = {
  print () {
    var recipient = 'world';
    var stripMargin = require('mout/string/stripMargin');

    var message = stripMargin(`Hello,
      |${recipient}.
      |<3!`);

    console.log(message);
  },
  sum (a, b) {
    return a + b;
  }
}
