## 技術

### 言語

・TypeScript | ver^5

### フレームワーク

・Next.js | ver13 (app router)

### css

・Tailwind css | ver^3

### test

・vitest | ver^2.1.4

### CI

・GitHub Actions

### deploy

・vercel

## Git

### issue

ある程度のまとまりを持たせて作成する

### branch の作業粒度

issue ごと

### commit メッセージの prefix について　

・add: コードの新規追加  
・fix: 既存コードの編集削除

### commit メッセージで留意する点

ライブラリインストール時（npm i ~）は「〜インストール」と書くようにする（後で確認しやすいように）

### pull request で留意する点

コミットごとに何をしたのか簡潔に記載する。ただし冗長な場合は記載しない。UI 構築の際は画面動画も掲載

## CI

以下をプルリク時に確認する

・テスト がパスしたか  
・eslint がパスしたか  
・prettier がパスしたか
