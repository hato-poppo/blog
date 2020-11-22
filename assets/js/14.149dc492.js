(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),a("p",[s._v("以前の記事\n[https://hato-poppo.hatenablog.jp/entry/2020/09/27/111250:embed]\nで挙げていた項目の中でも一番最初にやっておきたいこと")]),s._v(" "),a("p",[s._v("ここでは公開鍵認証についての説明はしないが、以下の記事が参考になると思う"),a("br"),s._v("\n→　[https://qiita.com/angel_p_57/items/2e3f3f8661de32a0d432:title]")]),s._v(" "),a("h3",{attrs:{id:"環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#環境"}},[s._v("#")]),s._v(" 環境")]),s._v(" "),a("ul",[a("li",[s._v("ローカル環境\n"),a("ul",[a("li",[s._v("OS：Windows 10")]),s._v(" "),a("li",[s._v("ターミナル：Git bash")])])]),s._v(" "),a("li",[s._v("サーバー環境\n"),a("ul",[a("li",[s._v("OS：Ubuntu Server 18.04 LTS")])])])]),s._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("本記事の手順はパスワード認証でサーバーに接続出来る状態であることが条件"),a("br"),s._v("\n後述する手順の「サーバーに公開鍵登録」で以下のようなエラーが出る場合はサーバー側の設定でパスワード認証が無効になっている可能性がある")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("サーバーIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Permission denied "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publickey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])])]),a("p",[s._v("また、パスワード認証を許可する際は特定されやすいユーザー名、パスワードは厳禁"),a("br"),s._v("\n例）ユーザー名とパスワードが両方とも "),a("code",[s._v("user")])]),s._v(" "),a("p",[s._v("これらに加えてデフォルトポート (22) を使用していると、簡単に不正アクセスされてしまう（実体験）")]),s._v(" "),a("h3",{attrs:{id:"手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手順"}},[s._v("#")]),s._v(" 手順")]),s._v(" "),a("h4",{attrs:{id:"キーペア生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#キーペア生成"}},[s._v("#")]),s._v(" キーペア生成")]),s._v(" "),a("p",[s._v("下記コマンドを実行する")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])])]),a("p",[s._v("ファイル名の入力を促されるが、デフォルト（id_rsa）で良い場合はそのまま Enterキー を押下")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Enter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/c/Users/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n")])])]),a("p",[s._v("パスフレーズ（ssh接続する際にパスワードの入力を要求されるようになる）も設定できるが、今回は設定しないのでそのまま Enterキー を押下")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Enter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nEnter same passphrase again:\n")])])]),a("p",[s._v("※パスフレーズの使用/不使用について調べたが、気休め程度だという意見もあって入力の手間に見合う効果が得られるかどうかが分からないので調べている最中。")]),s._v(" "),a("p",[s._v("処理が終わるとログインユーザーのホームディレクトリ直下に"),a("code",[s._v(".ssh/id_rsa")]),s._v("と"),a("code",[s._v(".ssh/id_rsa.pub")]),s._v("が生成される。")]),s._v(" "),a("p",[s._v("※鍵の保存先やファイル名を指定する場合")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ファイルパス"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("オプションの"),a("code",[s._v("-b 4096")]),s._v("は鍵長を4096bitに指定する為に付与している"),a("br"),s._v("\n※参考"),a("br"),s._v("\n→　 "),a("a",{attrs:{href:"https://qiita.com/wnoguchi/items/a72a042bb8159c35d056",target:"_blank",rel:"noopener noreferrer"}},[s._v("2017年版 SSH公開鍵認証で使用する秘密鍵ペアの作り方"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"サーバーに公開鍵登録"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#サーバーに公開鍵登録"}},[s._v("#")]),s._v(" サーバーに公開鍵登録")]),s._v(" "),a("p",[s._v("公開鍵の保存先とファイル名がデフォルト ("),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(") の場合")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続先IP or ホスト名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("ファイル名を指定する場合はこっち")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ssh-copy-id -i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("公開鍵 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".pubファイル"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" のパス"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続先IP or ホスト名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h4",{attrs:{id:"接続確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接続確認"}},[s._v("#")]),s._v(" 接続確認")]),s._v(" "),a("p",[s._v("デフォルトの場合")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続先IP or ホスト名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("ファイルを指定する場合")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ファイルパス"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続ユーザー名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("接続先IP or ホスト名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"備考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#備考"}},[s._v("#")]),s._v(" 備考")]),s._v(" "),a("p",[s._v("ConoHaのVPSでは"),a("br"),s._v(" "),a("code",[s._v("https://support.conoha.jp/v/vps_sshkey/")]),a("br"),s._v("\nに記載されている手順で出来るらしい")])])}),[],!1,null,null,null);t.default=e.exports}}]);