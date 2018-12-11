---
layout: post
title:  "Edit Distance Algorithm"
author: 류민재
categories: [ Javascript, Algorithm, Set ]
image: assets/images/EditDistance1.png
---

# Edit Distance

In computational linguistics and computer science, edit distance is a way of quantifying how dissimilar two strings (e.g., words) are to one another by counting the minimum number of operations required to transform one string into the other. Edit distances find applications in natural language processing, where automatic spelling correction can determine candidate corrections for a misspelled word by selecting words from a dictionary that have a low distance to the word in question. In bioinformatics, it can be used to quantify the similarity of DNA sequences, which can be viewed as strings of the letters A, C, G and T.

Different definitions of an edit distance use different sets of string operations. The Levenshtein distance operations are the removal, insertion, or substitution of a character in the string. Being the most common metric, the Levenshtein distance is usually what is meant by "edit distance".

# Edit Distance Example
![walking]({{ site.baseurl }}/assets/images/EditDistance2.jpg)

# Time Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Edit Distance**     | mn              | mn                  | mn                  | mn        | Yes       |           |

# Reference
Wikipedia(https://en.wikipedia.org/wiki/Edit_distance)