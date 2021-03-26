# textlint-rule-ja-kyoiku-kanji

教育漢字であることをチェックするtextlintルール

- [別表　学年別漢字配当表：文部科学省](https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/001.htm)

```
1:1  error    教育漢字ではない漢字「兎」が含まれています。  ja-kyoiku-kanji
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-kyoiku-kanji

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-kyoiku-kanji": true
    }
}
```

with [TextlintRuleJaKyoikuKanjiOptions](https://github.com/textlint-ja/textlint-rule-ja-kyoiku-kanji/blob/master/src/index.ts)

```json
{
    "rules": {
        "ja-kyoiku-kanji": {
            "allowElementary1stKanjis": true,
            "allowElementary2ndKanjis": true,
            "allowElementary3rdKanjis": true,
            "allowElementary4thKanjis": false,
            "allowElementary5thKanjis": false,
            "allowElementary6thKanjis": false,
        }
    }
}
```

Via CLI

```
textlint --rule ja-kyoiku-kanji README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © Tomoyuki Hata
