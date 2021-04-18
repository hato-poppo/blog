(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{452:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git公式 ドキュメント"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),s("h3",{attrs:{id:"一時退避"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一時退避"}},[a._v("#")]),a._v(" 一時退避")]),a._v(" "),s("h4",{attrs:{id:"変更の退避"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#変更の退避"}},[a._v("#")]),a._v(" 変更の退避")]),a._v(" "),s("p",[s("code",[a._v("-u")]),a._v("オプションを付与することにより、新規追加ファイルも同時に退避してくれる")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash -u\n")])])]),s("h4",{attrs:{id:"退避した変更を一覧表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退避した変更を一覧表示"}},[a._v("#")]),a._v(" 退避した変更を一覧表示")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash list\n")])])]),s("h4",{attrs:{id:"退避した状態に戻す"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退避した状態に戻す"}},[a._v("#")]),a._v(" 退避した状態に戻す")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" stash apply stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"ロールバック系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ロールバック系"}},[a._v("#")]),a._v(" ロールバック系")]),a._v(" "),s("h4",{attrs:{id:"ローカルで変更したファイルを元に戻す"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ローカルで変更したファイルを元に戻す"}},[a._v("#")]),a._v(" ローカルで変更したファイルを元に戻す")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout HEAD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"git-add-ステージング-の取り消し"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-add-ステージング-の取り消し"}},[a._v("#")]),a._v(" git add（ステージング）の取り消し")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset HEAD "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"コミット-git-commit-の取り消し"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コミット-git-commit-の取り消し"}},[a._v("#")]),a._v(" コミット (git commit) の取り消し")]),a._v(" "),s("p",[a._v("チーム開発時でも作業用ブランチを各自で作成するので、基本的にこれで問題無いと思っている")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --soft "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("commit_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("※「過去のコミットまで戻した」という履歴を残すときに使う")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" revert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("commit_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"コミット編集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コミット編集"}},[a._v("#")]),a._v(" コミット編集")]),a._v(" "),s("h4",{attrs:{id:"コミットをまとめる"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コミットをまとめる"}},[a._v("#")]),a._v(" コミットをまとめる")]),a._v(" "),s("p",[a._v("n個前のコミットまでをまとめる")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase -i HEAD~n\n")])])]),s("p",[a._v("詳細まで自分で書くと長くなるので以下を参照"),s("br"),a._v("\nhttps://backlog.com/ja/git-tutorial/stepup/32/")]),a._v(" "),s("h3",{attrs:{id:"コメント修正系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コメント修正系"}},[a._v("#")]),a._v(" コメント修正系")]),a._v(" "),s("h4",{attrs:{id:"直前のコミットメッセージ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直前のコミットメッセージ"}},[a._v("#")]),a._v(" 直前のコミットメッセージ")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit --amend -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{message_of_after_fix}'")]),a._v("\n")])])]),s("h4",{attrs:{id:"n個前のコミットメッセージ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n個前のコミットメッセージ"}},[a._v("#")]),a._v(" n個前のコミットメッセージ")]),a._v(" "),s("p",[a._v("※push前の場合")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase -i HEAD~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修正対象コミットの pick を edit に書き換えて保存")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit --amend -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{message_of_after_fix}'")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase --continue\n")])])]),s("h3",{attrs:{id:"強制push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#強制push"}},[a._v("#")]),a._v(" 強制Push")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push --force-with-lease origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("branch_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("※チーム開発でも同一リポジトリを複数人で触ることは無いという認識なので、基本的に"),s("code",[a._v("-f")]),a._v("で良いんじゃ無いかと思っている")]),a._v(" "),s("h3",{attrs:{id:"削除系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#削除系"}},[a._v("#")]),a._v(" 削除系")]),a._v(" "),s("h4",{attrs:{id:"追跡しないファイルとして扱う-ファイルは残したまま"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#追跡しないファイルとして扱う-ファイルは残したまま"}},[a._v("#")]),a._v(" 追跡しないファイルとして扱う（ファイルは残したまま）")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"比較系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比較系"}},[a._v("#")]),a._v(" 比較系")]),a._v(" "),s("h4",{attrs:{id:"リモートリポジトリとの差分比較"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#リモートリポジトリとの差分比較"}},[a._v("#")]),a._v(" リモートリポジトリとの差分比較")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"タグ関連"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#タグ関連"}},[a._v("#")]),a._v(" タグ関連")]),a._v(" "),s("h4",{attrs:{id:"コミット済みタグ付け"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コミット済みタグ付け"}},[a._v("#")]),a._v(" コミット済みタグ付け")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag -a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{comment}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("commit_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);