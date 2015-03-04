// jshint esnext:true
import stripMargin from './stripMargin';

export default {
  print () {
    var recipient = 'world';

    var message = stripMargin(`Hello,
      |${recipient}.
      |<3!`);

    return message;
  },
  sum (a, b) {
    return a + b;
  }
};
