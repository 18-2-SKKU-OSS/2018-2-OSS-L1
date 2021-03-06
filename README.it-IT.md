# Algoritmi e strutture dati JavaScript

[![Build Status](https://travis-ci.org/trekhleb/javascript-algorithms.svg?branch=master)](https://travis-ci.org/trekhleb/javascript-algorithms)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Questo repository contiene esempi basati su JavaScript di molti
algoritmi e strutture dati popolari.

Ogni algoritmo e struttura dati ha il suo README separato
con spiegazioni e collegamenti correlati per ulteriori letture (comprese quelle
ai video di YouTube).

_Leggi questo in altre lingue:_
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_한국어_](README.ko-KR.md),
[_Polski_](README.pl-PL.md),
[_Français_](README.fr-FR.md),
[_Español_](README.es-ES.md),
[_Português_](README.pt-BR.md)

*☝ Si noti che questo progetto è pensato per essere utilizzato per scopi di apprendimento e ricerca
solo e **non** è pensato per essere utilizzato per la produzione.*

## Strutture dati

Una struttura dati è un modo particolare di organizzare e archiviare i dati in un computer in modo che possa
essere accessibili e modificati in modo efficiente. Più precisamente, una struttura dati è una raccolta di dati
valori, le relazioni tra loro e le funzioni o le operazioni a cui è possibile applicare
i dati.

`B` - Principiante, `A` - Avanzate

* `B` [Lista collegata](src/data-structures/linked-list)
* `B` [Lista Doubly Linked](src/data-structures/doubly-linked-list)
* `B` [Coda](src/data-structures/queue)
* `B` [Pila](src/data-structures/stack)
* `B` [Tabella hash](src/data-structures/hash-table)
* `B` [Mucchio](src/data-structures/heap) - max and min heap versions
* `B` [Coda prioritaria](src/data-structures/priority-queue)
* `A` [prova](src/data-structures/trie)
* `A` [Albero](src/data-structures/tree)
  * `A` [Albero di ricerca binario](src/data-structures/tree/binary-search-tree)
  * `A` [Albero AVL](src/data-structures/tree/avl-tree)
  * `A` [Albero rosso-nero](src/data-structures/tree/red-black-tree)
  * `A` [Albero del segmento](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  * `A` [Albero di Fenwick](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
* `A` [Grafico](src/data-structures/graph) (both directed and undirected)
* `A` [Set disgiunto](src/data-structures/disjoint-set)
* `A` [Filtro Bloom](src/data-structures/bloom-filter)

## algoritmi

Un algoritmo è una specifica inequivocabile su come risolvere una classe di problemi. È
un insieme di regole che definiscono con precisione una sequenza di operazioni.

`B` - Principiante, `A` - Avanzate

### Algoritmi per argomento

* **Matematica**
  * `B` [Manipolazione bit](src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  * `B` [Fattoriale](src/algorithms/math/factorial) 
  * `B` [Numero di Fibonacci](src/algorithms/math/fibonacci) - classic and closed-form versions
  * `B` [Test di primalità](src/algorithms/math/primality-test) (trial division method)
  * `B` [Algoritmo euclideo](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  * `B` [Minimo comune multiplo](src/algorithms/math/least-common-multiple) (LCM)
  * `B` [Setaccio di Eratostene](src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  * `B` [È il potere di due](src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  * `B` [Triangolo di Pascal](src/algorithms/math/pascal-triangle)
  * `B` [Numero complesso](src/algorithms/math/complex-number) - complex numbers and basic operations with them
  * `B` [Radian & Degree](src/algorithms/math/radian) - radians to degree and backwards conversion
  * `B` [Alimentazione veloce](src/algorithms/math/fast-powering)
  * `A` [Partizione intera](src/algorithms/math/integer-partition)
  * `A` [Algoritmo di Liu Hui π](src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  * `A` [Trasformata di Fourier discreta](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up 
* **Sets**
  * `B` [Prodotto cartesiano](src/algorithms/sets/cartesian-product) - product of multiple sets
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  * `A` [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
  * `A` [permutazioni](src/algorithms/sets/permutations) (with and without repetitions)
  * `A` [combinazioni](src/algorithms/sets/combinations) (with and without repetitions)
  * `A` [La più lunga successiva in comune](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Il più lungo aumento successivo](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Short Supersequence più breve](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Problema dello zaino](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  * `A` [Subarray massimo](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  * `A` [Somma combinata](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **stringhe**
  * `B` [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  * `A` [Algoritmo di Knuth-Morris-Pratt](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  * `A` [Z Algoritmo](src/algorithms/string/z-algorithm) - substring search (pattern matching)
  * `A` [Rabin Karp Algoritmo](src/algorithms/string/rabin-karp) - substring search
  * `A` [La sottostringa comune più lunga](src/algorithms/string/longest-common-substring)
  * `A` [Corrispondenza delle espressioni regolari](src/algorithms/string/regular-expression-matching)
* **ricerche**
  * `B` [Ricerca lineare](src/algorithms/search/linear-search)
  * `B` [Salta ricerca](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  * `B` [Ricerca binaria](src/algorithms/search/binary-search) - search in sorted array
  * `B` [Ricerca di interpolazione](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Ordinamento**
  * `B` [Bolla Ordinare](src/algorithms/sorting/bubble-sort)
  * `B` [Selezione Ordina](src/algorithms/sorting/selection-sort)
  * `B` [Inserimento Ordina](src/algorithms/sorting/insertion-sort)
  * `B` [Ordinamento heap](src/algorithms/sorting/heap-sort)
  * `B` [Unisci Ordina](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Conteggio Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Elenchi collegati**
  * `B` [Traversata diritta](src/algorithms/linked-list/traversal)
  * `B` [Inverso trasversale](src/algorithms/linked-list/reverse-traversal)
* **Alberi**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Larghezza prima ricerca](src/algorithms/tree/breadth-first-search) (BFS)
* **grafici**
  * `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Algoritmo di Kruskal](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Dijkstra Algoritmo](src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * `A` [Bellman-Ford Algoritmo](src/algorithms/graph/bellman-ford) - finding shortest paths to all graph vertices from single vertex
  * `A` [Floyd-Warshall Algoritmo](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Rileva il ciclo](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  * `A` [Prim’s Algoritmo](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * `A` [Ordinamento topologico](src/algorithms/graph/topological-sorting) - DFS method
  * `A` [Punti di articolazione](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  * `A` [ponti](src/algorithms/graph/bridges) - DFS based algorithm
  * `A` [Sentiero Euleriano e Circuito Euleriano](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  * `A` [Ciclo hamiltoniano](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  * `A` [Componenti fortemente connessi](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  * `A` [Problema del commesso viaggiatore](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Crittografia**
  * `B` [Hash polinomiale](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
* **Non categorizzato**
  * `B` [Torre di Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Rotazione a matrice quadrata](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  * `B` [Salta il gioco](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples 
  * `B` [Percorsi unici](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples 
  * `B` [Terrazze di pioggia](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  * `B` [Scala ricorsiva](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algoritmi di Paradigm

Un paradigma algoritmico è un metodo o approccio generico alla base del design di una classe
di algoritmi. È un'astrazione superiore alla nozione di algoritmo, proprio come a
l'algoritmo è un'astrazione più alta di un programma per computer.

* **Brute Force** - guarda tutte le possibilità e seleziona la soluzione migliore
  * `B` [Ricerca lineare](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - intrappolando il problema dell'acqua piovana
  * `B` [Scala ricorsiva](src/algorithms/uncategorized/recursive-staircase) - contare il numero di modi per raggiungere la cima
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Problema del commesso viaggiatore](src/algorithms/graph/travelling-salesman) - il percorso più breve possibile che visita ciascuna città e ritorna alla città di origine
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompone una funzione del tempo (un segnale) nelle frequenze che lo compongono
* **Greedy** - scegli l'opzione migliore al momento attuale, senza alcuna considerazione per il futuro
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `A` [Problema dello zaino non legato](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algoritmo](src/algorithms/graph/dijkstra) - trovare il percorso più breve per tutti i vertici del grafico
  * `A` [Prim’s Algoritmo](src/algorithms/graph/prim) - trovare Minimum Spanning Tree (MST) per il grafico ponderato non orientato
  * `A` [Algoritmo di Kruskal](src/algorithms/graph/kruskal) - trovare Minimum Spanning Tree (MST) per il grafico ponderato non orientato
* **Dividi e Conquista** - dividi il problema in parti più piccole e poi risolvi quelle parti
  * `B` [Ricerca binaria](src/algorithms/search/binary-search)
  * `B` [Torre di Hanoi](src/algorithms/uncategorized/hanoi-tower)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Algoritmo euclideo](src/algorithms/math/euclidean-algorithm) - calcola il più grande divisore comune (GCD)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `A` [Permutazione](src/algorithms/sets/permutations) (con e senza ripetizioni)
  * `A` [Combinazioni](src/algorithms/sets/combinations) (con e senza ripetizioni)
* **Programmazione dinamica** - crea una soluzione utilizzando sub-soluzioni trovate in precedenza
  * `B` [numero di Fibonacci](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Percorsi univoci](src/algorithms/uncategorized/unique-paths)
  * `B` [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - intrappolando il problema dell'acqua piovana
  * `B` [Scala ricorsiva](src/algorithms/uncategorized/recursive-staircase) - contare il numero di modi per raggiungere la cima
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - distanza minima di modifica tra due sequenze
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Supersequence comune più breve](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Algoritmo Bellman-Ford](src/algorithms/graph/bellman-ford) - trovare il percorso più breve per tutti i vertici del grafico
  * `A` [Floyd-Warshall Algoritmo](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** - similmente alla forza bruta, prova a generare tutte le possibili soluzioni, ma ogni volta che generi la prossima soluzione prova
se soddisfa tutte le condizioni, e solo allora continua a generare soluzioni successive. Altrimenti, torna indietro e vai su a
percorso diverso per trovare una soluzione. Normalmente viene utilizzata la traversata DFS dello spazio degli stati.
  * `B` [Jump Game](src/algorithms/uncategorized/jump-game)
  * `B` [Percorsi univoci](src/algorithms/uncategorized/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set) - tutti i sottoinsiemi di un set
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visita ogni vertice esattamente una volta
  * `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens)
  * `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour)
  * `A` [somma combinata](src/algorithms/sets/combination-sum) - trova tutte le combinazioni che formano la somma specifica
* **Branch & Bound** - ricorda la soluzione più economica trovata in ogni fase del backtracking
cerca e utilizza il costo della soluzione più economica trovata fino a un limite inferiore sul costo di
una soluzione meno costosa al problema, al fine di scartare soluzioni parziali con costi maggiori del
soluzione più economica trovata finora. Normalmente attraversamento di BFS in combinazione con attraversamento DFS di stato-spazio
albero viene utilizzato.

## Come utilizzare questo repository

**Installa tutte le dipendenze**
```
npm install
```

**Esegui ESLint**

Si consiglia di eseguirlo per verificare la qualità del codice.

```
npm run lint
```

**Esegui tutti i test**
```
npm test
```

**Esegui test per nome**
```
npm test -- 'LinkedList'
```

**Playground**

Puoi giocare con strutture dati e algoritmi nel file `./src/playground/playground.js`  e scrivere
prova per questo in `./src/playground/__test__/playground.test.js`.

Quindi basta semplicemente eseguire il seguente comando per verificare se il codice del tuo parco giochi funziona come previsto:

```
npm test -- 'playground'
```

## Informazioni utili

### Riferimenti

[▶ Strutture dati e algoritmi su YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

*La notazione O grande* viene utilizzata per classificare gli algoritmi in base a come il loro tempo di esecuzione oi requisiti di spazio aumentano con l'aumentare delle dimensioni di input.
Nella tabella sottostante è possibile trovare gli ordini di crescita più comuni degli algoritmi specificati nella notazione Big O.

![Grafici Big Os](./assets/big-o-graph.png)

Fonte: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Di seguito è riportato l'elenco di alcune delle notazioni Big O più utilizzate e dei relativi confronti delle prestazioni rispetto a diverse dimensioni dei dati di input.


| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | 1         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |