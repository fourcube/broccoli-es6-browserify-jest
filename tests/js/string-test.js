// jshint esnext:true
describe('String', () => {
  describe('stripMargin', () => {
    jest.dontMock('../lib/stripMargin');

    it('should remove leading characters of a string up until |', () => {
      var stripMargin = require('../lib/stripMargin');

      expect(stripMargin('   |foo')).toBe('foo');
    });

    it('should remove leading characters of a multi-line string up until |', () => {
      var stripMargin = require('../lib/stripMargin');
      var subject = `foo
        |noob
        |bar`;

      expect(stripMargin(subject)).toBe('foo\nnoob\nbar');
    });
  });
});
