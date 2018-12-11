---
layout: post
title:  "sleepSort"
author: Kim Min ki
categories: [ Javascript, Algorithm, Sorting  ]
image: assets/images/sleep-sort-algorithm.jpg
---
***
슬립소트 알고리즘을 추가하였습니다.
algorithm의 sort 파트에 있다.

***
#### What is sleepSort?

The super amazing sleep sort. For those of you who want an O(n) sort with no side effects!

It is almost guaranteed not to take longer than the largest number in your list of milliseconds.

The implementation is beautiful, Go supports easily spawning off coroutines that can wait until it is their turn to enter the list, therefore it is ideal for making a super multithreaded sorting algorithm such as this!

Unfortunately, it can only sort integers at the moment, but as soon as I acquire a new flux capacitor, capabilities for sorting floating point numbers may be added.

***
#### 참조(References)

- [DEV](https://dev.to/sishaarrao/sleep-sort-where-theory-meets-sobering-reality-b3m)
- [Prinston](https://www.cs.princeton.edu/courses/archive/fall13/cos226/lectures/52Tries.pdf)
***

#### ReadMe 파일

##### Sleep sort

In general, sleep sort works by starting a separate task for each item to be sorted, where each task sleeps for an interval corresponding to the item's sort key, then emits the item. Items are then collected sequentially in time.

Task: Write a program that implements sleep sort. Have it accept non-negative integers on the command line and print the integers in sorted order. If this is not idomatic in your language or environment, input and output may be done differently. Enhancements for optimization, generalization, practicality, robustness, and so on are not required.

Sleep sort was presented anonymously on 4chan and has been discussed on Hacker News

##### Complexity
Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, where an elementary operation takes a fixed amount of time to perform. Thus the amount of time taken and the number of elementary operations performed by the algorithm differ by at most a constant factor.

Then we can't talk about the runtime complexity of this algorithm because time which the elementary operations take is so vastly different, that the time taken would differ by more than a constant factor.
***
##### References

[Rosettacode](https://www.rosettacode.org/wiki/Sorting_algorithms/Sleep_sort)
***
##### Pullrequest

[pullrequest](https://github.com/18-2-SKKU-OSS/2018-2-OSS-L1/pull/23)
***