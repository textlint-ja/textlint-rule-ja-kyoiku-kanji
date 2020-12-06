import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run('ja-kyoiku-kanji', rule, {
  valid: ['さとうさんはうさぎをかっています。'],
  invalid: [
    {
      text: 'さとうさんは兎をかっています。',
      errors: [
        {
          message: '教育漢字ではない漢字「兎」が含まれています。',
          line: 1,
          column: 7
        }
      ]
    }
  ]
});
