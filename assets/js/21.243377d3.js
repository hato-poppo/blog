(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{454:function(t,a,r){"use strict";r.r(a);var _=r(1),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("p",[t._v("先日、久しぶりに「まつもとゆきひろ コードの世界」の第2章を読み返した。"),r("br"),t._v("\n10年以上前の本だけど今でも十分勉強になることが書いてあるので、読んだことの無い方は一度読んでみて欲しい。")]),t._v(" "),r("p",[t._v("[https://tatsu-zine.com/books/codenosekai:embed:cite]")]),t._v(" "),r("p",[t._v("今回は「動的型付け言語のデメリットを克服する方法」について、自分の感想も交えてメモしておく。")]),t._v(" "),r("h2",{attrs:{id:"動的型付け言語のデメリットと対処方法について"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#動的型付け言語のデメリットと対処方法について"}},[t._v("#")]),t._v(" 動的型付け言語のデメリットと対処方法について")]),t._v(" "),r("h3",{attrs:{id:"エラーの発見が実行時になる"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#エラーの発見が実行時になる"}},[t._v("#")]),t._v(" エラーの発見が実行時になる")]),t._v(" "),r("p",[t._v("静的型付け言語であればコンパイル時にエラーが発見できるが、"),r("br"),t._v("\n動的型付け言語の場合は実行されるまで発見できない。")]),t._v(" "),r("h4",{attrs:{id:"対処方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#対処方法"}},[t._v("#")]),t._v(" 対処方法")]),t._v(" "),r("p",[t._v("単体テストをきっちりやる。"),r("br"),t._v("\nちゃんとテストする習慣が定着していれば、静的型付け言語のようなコンパイル時のチェックが無くてもコードの信頼性は下がらない。")]),t._v(" "),r("h4",{attrs:{id:"感想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#感想"}},[t._v("#")]),t._v(" 感想")]),t._v(" "),r("p",[t._v("テストをきっちりやることはとても重要。"),r("br"),t._v("\n問題があるとすれば、みんながみんなテストをきっちりやっているとは限らない　という点か。")]),t._v(" "),r("h3",{attrs:{id:"プログラムを読解する際のヒントが少ない"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#プログラムを読解する際のヒントが少ない"}},[t._v("#")]),t._v(" プログラムを読解する際のヒントが少ない")]),t._v(" "),r("p",[t._v("静的型付け言語であれば引数や変数の型がプログラム読解のヒントになり得るが、"),r("br"),t._v("\n動的型付け言語の場合は読解のヒントになる情報が少ない。")]),t._v(" "),r("h4",{attrs:{id:"対処方法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#対処方法-2"}},[t._v("#")]),t._v(" 対処方法")]),t._v(" "),r("p",[t._v("ドキュメントを整備する。"),r("br"),t._v("\nRuby には "),r("strong",[t._v("RDoc")]),t._v(" という標準ライブラリが用意されていて、Ruby で書かれたソースコードからドキュメントを自動生成できる。")]),t._v(" "),r("p",[t._v("[https://docs.ruby-lang.org/ja/latest/library/rdoc.html:title]"),r("br"),t._v("\n[http://ruby.gfd-dennou.org/tutorial/rdoc/:title]")]),t._v(" "),r("h4",{attrs:{id:"感想-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#感想-2"}},[t._v("#")]),t._v(" 感想")]),t._v(" "),r("p",[t._v("正直な話、動的型付け言語だから読解に困った　という経験が無い。"),r("br"),t._v("\nあった方が良いのは間違いないけど、デメリットと言うほどのものなのかどうかはよく分からない。")]),t._v(" "),r("p",[t._v("型云々の話ではないけど、プログラム読解についてはもっと別のところにポイントがある（変数に再代入しないとか）と思う。")]),t._v(" "),r("p",[t._v("それよりも気になったのが、ドキュメントの自動生成について「Ruby　ドキュメント　自動生成」で簡単に調べてみたが最近の情報は出てこなかった。"),r("br"),t._v("\n特に目新しい情報が無いからなのか、ドキュメントの自動生成という対処方法自体が主流じゃなくなったからなのか…。")]),t._v(" "),r("h3",{attrs:{id:"実行速度が遅い"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#実行速度が遅い"}},[t._v("#")]),t._v(" 実行速度が遅い")]),t._v(" "),r("p",[t._v("同様の処理を行った場合、静的型付け言語と比べると動的型付け言語の方が実行速度が遅いことが多い。"),r("br"),t._v("\n実行時の型チェックのコストも影響していると思われるが、言語処理系がインタプリタかコンパイラかという部分の影響が大きい。")]),t._v(" "),r("h4",{attrs:{id:"対処方法-ではないけど"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#対処方法-ではないけど"}},[t._v("#")]),t._v(" 対処方法（ではないけど）")]),t._v(" "),r("p",[t._v("昔よりもコンピューターの性能が向上しているので、大抵は実行効率よりも柔軟性や生産性の方が重要。")]),t._v(" "),r("h4",{attrs:{id:"感想-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#感想-3"}},[t._v("#")]),t._v(" 感想")]),t._v(" "),r("p",[t._v("動的型付け言語のメリットである、「柔軟性」と「生産性」はとても良いと思う。"),r("br"),t._v("\nただ、システムを開発する上ではユーザビリティを考えると実行速度もあった方が嬉しい。")]),t._v(" "),r("p",[t._v("この辺りは2.6で実装されたJITコンパイルがもっと実用的になることに期待する。")]),t._v(" "),r("h3",{attrs:{id:"まとめ"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),r("p",[t._v("動的型付け言語にはデメリットもあるが、ちゃんと対応すれば克服できる　という内容が書いてあった。"),r("br"),t._v("\n自分は静的型付けと動的型付けのどちらも好きだけど、言語としてはRubyが一番好きなのでこれからもRubyを使っていきたいと思っている。")])])}),[],!1,null,null,null);a.default=v.exports}}]);