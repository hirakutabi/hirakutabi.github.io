# おもいつきのつづき 公式Webサイト (hirakutabi.github.io)

「おもいつきのつづき」公式Webサイトと、Android学習アプリ「ひらくたび」の紹介・追加問題セット配布サイトです。

* **公開URL**: [https://hirakutabi.github.io/](https://hirakutabi.github.io/)
* **将来予定ドメイン**: omotsuzu.com

---

## 📁 ディレクトリ構造

```text
hirakutabi.github.io/
├── index.html                # 「おもいつきのつづき」公式トップページ
├── hirakutabi/
│   ├── index.html            # 「ひらくたび」紹介ページ
│   ├── materials.html        # 追加問題セット一覧・ダウンロードライブラリ
│   ├── support.html          # サポート & よくある質問 (Q&A)
│   ├── privacy.html          # プライバシーポリシー
│   ├── survey/
│   │   └── index.html        # 非ナビゲーション・noindex のアンケートページ
│   ├── css/                  # 共通スタイル
│   ├── js/                   # 共通スクリプト
│   ├── data/                 # 教材TSVデータ（test/ を含む）
│   └── icons/                # 教材・アプリアイコン
├── .nojekyll         # GitHub Pages Jekyll処理無効化ファイル
└── README.md         # このドキュメント
```

---

## 🚀 公開・更新手順 (GitHub Pages)

```bash
git add .
git commit -m "サイト構成をブランドTOPとひらくたび配下に整理"
git push origin main
```
