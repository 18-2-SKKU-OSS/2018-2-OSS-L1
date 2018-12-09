# JavaScriptアルゴリズムとデータ構造

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)


このリポジトリには、JavaScriptベースの多数のサンプル
一般的なアルゴリズムとデータ構造。

各アルゴリズムとデータ構造には独自のREADMEがあります
関連する説明と、さらに読むためのリンク (関連YouTubeのビデオも含まれてい).

_Read this in other languages:_
[_English_](https://github.com/trekhleb/javascript-algorithms/),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md)

## データ構造

データ構造は、データ値、データ値との間の関係、
そして、データを扱うことができる関数と演算の集合で、
データを特定の方法で構成して保存することで、より効率的に
アクセスして変更することができます。

`B` - 初心者, `A` - 上級

* `B` [リンクされたリスト](src/data-structures/linked-list)
* `B` [二重リンクリスト](src/data-structures/doubly-linked-list)
* `B` [キュー](src/data-structures/queue)
* `B` [スタック](src/data-structures/stack)
* `B` [ハッシュ表](src/data-structures/hash-table)
* `B` [ヒープ](src/data-structures/heap) - max and min heap versions
* `B` [優先度キュー](src/data-structures/priority-queue)
* `A` [トライ](src/data-structures/trie)
* `A` [リー](src/data-structures/tree)
  * `A` [バイナリ検索ツリー](src/data-structures/tree/binary-search-tree)
  * `A` [AVLツリー](src/data-structures/tree/avl-tree)
  * `A` [赤黒のリー](src/data-structures/tree/red-black-tree)
  * `A` [セグメントツリー](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [フェンウィック・ツリー](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [グラフ](src/data-structures/graph) (both directed and undirected)
* `A` [分離集合](src/data-structures/disjoint-set)
* `A` [ブルームフィルタ](src/data-structures/bloom-filter)

## アルゴリズム

アルゴリズムとは、問題のクラスをどのように解決するかの明確な仕様です。
一連の操作を正確に定義する一連のルールです。

`B` - 初心者, `A` - 上級

### トピック別アルゴリズム

* **数学**
  * `B` [ビット操作](src/algorithms/math/bits) - set/get/update/clear bits, 2つの乗算/除算, 否定的にする. 等
  * `B` [因果関係](src/algorithms/math/factorial) 
  * `B` [フィボナッチ数](src/algorithms/math/fibonacci) - クラシックとクローズドフォームのバージョン
  * `B` [素数性テスト](src/algorithms/math/primality-test) (trial division 方法)
  * `B` [ユークリッドアルゴリズム](src/algorithms/math/euclidean-algorithm) - 最大公約数を計算する (GCD)
  * `B` [最小公倍数](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [エラトステネスのふるい](src/algorithms/math/sieve-of-eratosthenes) - 与えられた限度まですべての素数を見つける
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - 数値が2の累乗であるかどうかを調べる（単純なアルゴリズムとビットごとのアルゴリズム）
  * `B` [パスカルの三角形](src/algorithms/math/pascal-triangle)
  * `B` [複素数](src/algorithms/math/complex-number) - 複素数とその基本演算
  * `B` [ラジアン＆度](src/algorithms/math/radian) - 度数と逆方向の変換に対するラジアン
  * `B` [高速電力供給](src/algorithms/math/fast-powering)
  * `A` [整数パーティション](src/algorithms/math/integer-partition)
  * `A` [Liu Hui π アルゴリズム](src/algorithms/math/liu-hui) - N-gonsに基づく近似π計算
  * `A` [離散フーリエ変換](src/algorithms/math/fourier-transform) - 時間（信号）の関数をそれを構成する周波数に分解する
  * **セット**
  * `B` [デカルト積 ](src/algorithms/sets/cartesian-product) - 複数の積の積
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - 有限シーケンスのランダム置換
  * `A` [パワーセット](src/algorithms/sets/power-set) - セットのすべてのサブセット（ビットごとのソリューションとバックトラッキングソリューション）
  * `A` [順列](src/algorithms/sets/permutations) （繰り返しの有無にかかわらず）
  * `A` [組み合わせ](src/algorithms/sets/combinations) （繰返しあり、繰返しなし）
  * `A` [最長共通部分列](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [最長増加サブシーケンス](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [最短共通スーパーシーケンス](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [ナップザック問題 ](src/algorithms/sets/knapsack-problem) - 「0/1」と「非結合」問題
  * `A` [最大サブアレイ](src/algorithms/sets/maximum-subarray) - 「ブルートフォース」と「ダイナミックプログラミング」（Kadane's版）
  * `A` [組み合わせ合計](src/algorithms/sets/combination-sum) - 特定の合計を構成するすべての組み合わせを見つける
  * **文字列**
  * `B` [ハミング距離](src/algorithms/string/hamming-distance) - シンボルが異なる位置の数
  * `A` [レーベンシュタイン距離](src/algorithms/string/levenshtein-distance) - 2つのシーケンス間の最小編集距離
  * `A` [Knuth-Morris-Prattアルゴリズム](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - 部分文字列検索 (pattern matching)
  * `A` [Z アルゴリズム](src/algorithms/string/z-algorithm) - 部分文字列検索 (pattern matching)
  * `A` [Rabin Karpアルゴリズム](src/algorithms/string/rabin-karp) - 部分文字列検索
  * `A` [最長共通部分文字列](src/algorithms/string/longest-common-substring)
  * `A` [正規表現マッチング](src/algorithms/string/regular-expression-matching)
  * **検索**
  * `B` [リニアサーチ](src/algorithms/search/linear-search)
  * `B` [ジャンプ検索](src/algorithms/search/jump-search) (or Block Search) - ソートされた配列で検索
  * `B` [バイナリ検索](src/algorithms/search/binary-search) - ソートされた配列で検索
  * `B` [補間探索](src/algorithms/search/interpolation-search) - 一様分布のソート配列で検索する