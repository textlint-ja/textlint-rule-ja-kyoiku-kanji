import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run('ja-kyoiku-kanji', rule, {
  valid: [
    'さとうさんは犬をかっています。',
    {
      text: 'さとうさんは羊をかっています。',
      options: {
        allowElementary1stKanjis: true,
        allowElementary2ndKanjis: true,
        allowElementary3rdKanjis: true,
        allowElementary4thKanjis: false,
        allowElementary5thKanjis: false,
        allowElementary6thKanjis: false,
      }
    },
    {
      text: 'さとうさんはさかなをかっています。',
      options: {
        allowElementary1stKanjis: false,
        allowElementary2ndKanjis: false,
        allowElementary3rdKanjis: false,
        allowElementary4thKanjis: false,
        allowElementary5thKanjis: false,
        allowElementary6thKanjis: false,
      }
    },
  ],
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
    },
    {
      text: 'さとうさんは羊をかっています。',
      errors: [
        {
          message: '小学校第一学年、第二学年で学習しない漢字「羊」が含まれています。',
          line: 1,
          column: 7
        }
      ],
      options: {
        allowElementary1stKanjis: true,
        allowElementary2ndKanjis: true,
        allowElementary3rdKanjis: false,
        allowElementary4thKanjis: false,
        allowElementary5thKanjis: false,
        allowElementary6thKanjis: false,
      }
    },
    {
      text: 'さとうさんは魚をかっています。',
      errors: [
        {
          message: '漢字「魚」が含まれています。',
          line: 1,
          column: 7
        }
      ],
      options: {
        allowElementary1stKanjis: false,
        allowElementary2ndKanjis: false,
        allowElementary3rdKanjis: false,
        allowElementary4thKanjis: false,
        allowElementary5thKanjis: false,
        allowElementary6thKanjis: false,
      }
    },
  ]
});
