describe('String', () => {
  describe('stripMargin', () => {
    it('should remove leading characters of a string up until |', () => {
      var stripMargin = require('mout/string/stripMargin');

      expect(stripMargin('   |foo','|')).toBe('foo');
    });

    it('should remove leading characters of a multi-line string up until |', () => {
      var stripMargin = require('mout/string/stripMargin');
      var subject = `foo
        |noob
        |bar`;

      expect(stripMargin(subject, '|')).toBe('foo\nnoob\nbar');
    });
  });
});
