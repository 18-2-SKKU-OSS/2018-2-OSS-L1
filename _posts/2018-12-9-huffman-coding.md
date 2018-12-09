---
layout: post
title:  "허프만 부호화 알고리즘"
author: 김윤지
categories: [ Javascript, Algorithm, Greedy  ]
image: assets/images/huffman.png
featured: true
hidden: true
---
***
허프만 부호화 알고리즘을 추가하였습니다.
uncategorized 알고리즘으로 추가하였고,
패러다임으로 구분할 때는 Greedy 알고리즘으로 추가됩니다.


![Huffman Coding](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Huffman_tree_2.svg/1920px-Huffman_tree_2.svg.png)


***
#### 기능(function)

기능으로는 `encode`와 `decode`를 추가하였습니다.
`encode`를 통해 문자를 부호화하고, `decode`를 통해 부호화된 것을 다시 원래의 문자열로 돌려 놓을 수 있습니다.

***
#### 참조(References)

- [Wikipedia](https://en.wikipedia.org/wiki/Huffman_coding)
- [GitHub](https://gist.github.com/1995eaton/86f10f4d0247b4e4e65e)
***
***

#### ReadMe 파일

##### Huffman Coding
![Huffman Coding](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Huffman_tree_2.svg/1920px-Huffman_tree_2.svg.png)


In computer science and information theory, 
a Huffman code is a particular type of optimal prefix code
that is commonly used for lossless data compression. 
The process of finding and/or using such a code proceeds by means of Huffman coding, an algorithm developed by David A.
Huffman while he was a Sc.D. student at MIT, and published in the 1952 
paper "A Method for the Construction of Minimum-Redundancy Codes".

The output from Huffman's algorithm can be viewed as a variable-length code table 
for encoding a source symbol (such as a character in a file). 
The algorithm derives this table from the estimated probability or frequency of occurrence (weight) 
for each possible value of the source symbol. 
As in other entropy encoding methods, 
more common symbols are generally represented using fewer bits than less common symbols. 
Huffman's method can be efficiently implemented,
finding a code in time linear to the number of input weights if these weights are sorted.

###### Constructing a Huffman Tree
![Constructing a Huffman Tree](https://upload.wikimedia.org/wikipedia/commons/d/d8/HuffmanCodeAlg.png)



###### Encode : Compression

![Visualization of encoding](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Huffman_coding_visualisation.svg/1920px-Huffman_coding_visualisation.svg.png)

The simplest construction algorithm uses a priority queue where the node with lowest probability is given highest priority:

1. Create a leaf node for each symbol and add it to the priority queue.
2. While there is more than one node in the queue:
    1. Remove the two nodes of highest priority (lowest probability) from the queue
    2. Create a new internal node with these two nodes as children and with probability equal to the sum of the two nodes' probabilities.
    3. Add the new node to the queue.
3. The remaining node is the root node and the tree is complete.
Since efficient priority queue data structures require `O(log n)` time per insertion, and a tree with `n` leaves has `2n−1` nodes, this algorithm operates in `O(n log n)` time, where `n` is the number of symbols.