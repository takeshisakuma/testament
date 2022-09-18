# testament

Web 制作用のボイラープレート

- Pug、Sass(Dart-Sass)、TypeScript のコンパイル
- テスト
- CSS、JavaScript のコード整形
- 画像ファイルの圧縮

## 準備

```
$ git clone https://github.com/takeshisakuma/testament.git
$ cd testament
$ npm ci
$ npx simple-git-hooks
```

## 使用

### 制作時

```
$ npm run watch:all
```

/src/配下の Pug、SCSS、TypeScript のファイルを編集、画像の追加をします。

### コード整形

```
$ npm run format:all
```

### テスト(Jest)

```
$ npm run test
```

## 公開

### minify

```
$ npm run prepare:all
```

### アップロード

dist 配下のファイルをそのままアップロード

## Qiita

https://qiita.com/takeshisakuma/items/34db1aa11a4e25508f66
