# next-cloudwatch-rum-example

1. infra 配下で `cdk deploy` を実行してインフラ構築する
2. CloudWatch RUM のアプリケーションモニターをさくせいする
3. CloudWatch RUM のスニペットから script タグを取り除いたものを pages/src/public/rum.js をして保存する
4. infra 配下で `cdk deploy` を実行して rum.js をアップロードする
