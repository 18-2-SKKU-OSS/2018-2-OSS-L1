# Sleep sort

In general, sleep sort works by starting a separate task for each item to be sorted, where each task sleeps for an interval corresponding to the item's sort key, then emits the item. Items are then collected sequentially in time.

Task: Write a program that implements sleep sort. Have it accept non-negative integers on the command line and print the integers in sorted order. If this is not idomatic in your language or environment, input and output may be done differently. Enhancements for optimization, generalization, practicality, robustness, and so on are not required.

Sleep sort was presented anonymously on 4chan and has been discussed on Hacker News




## How Sleep Sort Works


## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Sleep sort**        | O(max(input)+n)   | O(max(input)+n)   | O(max(input)+n)  | 1         | No         |           |

## References

[Rosettacode](https://www.rosettacode.org/wiki/Sorting_algorithms/Sleep_sort)