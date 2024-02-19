## リポジトリ概要

ゆめみのフロントエンド課題

## アーキテクチャ

## ディレクトリ構成

- src
  - components
    - commons 共通コンポーネント
    - features
      - featureA →機能A
        - hooks.ts
        - index.tsx
        - types.ts
        - api.ts
      - featureB
        - hooks.ts
        - index.tsx
        - types.ts
        - api.ts
  - constants 定数系の定義
  - pages
    - PageA.tsx
    - PageB.tsx
  - utils

## 各ディレクトリの説明

### features

各機能毎の、UIやロジックをまとめる

- hooks.ts カスタムhooksの定義をする
- index.tsx　UIコンポーネント
- api.ts　api通信を行う。hooks.tsでimportして使う。
- type.ts featureのみで使う型定義ファイル

### pages

ページをまとめたディレクトリ。必要なコンポーネントをimportして使う。
※pages→pagesのimportは禁止

### constants

定数を定義する
