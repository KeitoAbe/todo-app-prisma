# frontend_sandbox

### main ブランチについて

他の人との競合を避けるため、利用者毎に `main` ブランチを作成して利用してください。
`main` ブランチの命名規則は `<name>/main` とします。
`<name>` は自身の GitHub アカウント名などわかるものとしてください（例: `kanterbury/main`）。

1. 適当な場所に本リポジトリをクローンします．

```shell
git clone git@github.com:fuller-inc/frontend_sandbox.git
cd frontend_sandbox
```

2. 命名規則に沿ったブランチ名で新規にブランチを作成して空コミット後にブランチをプッシュしてください．

```shell
git switch -c kanterbury/main
git commit --allow-empty -m "Initial commit"
git push -u origin kanterbury/main
```

### トピックブランチについて

`main` ブランチと同様に、 `<name>/` プレフィックスをつけて作成するようにしてください（例: `kanterbury/implement-api`）。
