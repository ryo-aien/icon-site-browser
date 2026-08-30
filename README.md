# Icon Site Browser

アイコン素材サイトを検索・カテゴリ絞り込みし、右側の iframe でプレビューする静的Webサイトです。

## Files

- `index.html`
- `styles.css`
- `script.js`

## GitHub Pages

1. GitHub の Settings → Pages を開きます。
2. Build and deployment で `Deploy from a branch` を選択します。
3. Branch を `main` / `/ (root)` にして Save します。

## 注意

外部サイト側が `X-Frame-Options` または CSP `frame-ancestors` で iframe 埋め込みを禁止している場合、右ペインには表示できません。その場合は「新しいタブで開く」を利用してください。
