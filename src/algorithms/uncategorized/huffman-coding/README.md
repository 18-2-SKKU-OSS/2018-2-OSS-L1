# Huffman Coding Algorithm

In computer science and information theory, 
a Huffman code is a particular type of optimal prefix code
that is commonly used for lossless data compression. 
The process of finding and/or using such a code proceeds by means of Huffman coding, an algorithm developed by David A. Huffman while he was a Sc.D. student at MIT, and published in the 1952 paper "A Method for the Construction of Minimum-Redundancy Codes".

The output from Huffman's algorithm can be viewed as a variable-length code table for encoding a source symbol (such as a character in a file). The algorithm derives this table from the estimated probability or frequency of occurrence (weight) for each possible value of the source symbol. As in other entropy encoding methods, more common symbols are generally represented using fewer bits than less common symbols. Huffman's method can be efficiently implemented, finding a code in time linear to the number of input weights if these weights are sorted.

![Constructing a Huffman Tree](https://en.wikipedia.org/wiki/Huffman_coding#/media/File:HuffmanCodeAlg.png)


<<Basic Two functio>>

'Encode : Compression'
The simplest construction algorithm uses a priority queue where the node with lowest probability is given highest priority:

1. Create a leaf node for each symbol and add it to the priority queue.
2. While there is more than one node in the queue:
    1. Remove the two nodes of highest priority (lowest probability) from the queue
    2. Create a new internal node with these two nodes as children and with probability equal to the sum of the two nodes' probabilities.
    3. Add the new node to the queue.
3. The remaining node is the root node and the tree is complete.
Since efficient priority queue data structures require O(log n) time per insertion, and a tree with n leaves has 2n−1 nodes, this algorithm operates in O(n log n) time, where n is the number of symbols.

If the symbols are sorted by probability, there is a linear-time (O(n)) method to create a Huffman tree using two queues, the first one containing the initial weights (along with pointers to the associated leaves), and combined weights (along with pointers to the trees) being put in the back of the second queue. This assures that the lowest weight is always kept at the front of one of the two queues:

1. Start with as many leaves as there are symbols.
2. Enqueue all leaf nodes into the first queue (by probability in increasing order so that the least likely item is in the head of the queue).
3. While there is more than one node in the queues:
    1. Dequeue the two nodes with the lowest weight by examining the fronts of both queues.
    2. Create a new internal node, with the two just-removed nodes as children (either node can be either child) and the sum of their weights as the new weight.
    3. Enqueue the new node into the rear of the second queue.
4. The remaining node is the root node; the tree has now been generated.



'Decode : Decompression'






<!-- https://upload.wikimedia.org/wikipedia/commons/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif -->
<!--With `3` disks, the puzzle can be solved in `7` moves. The minimal -->
<!-- https://en.wikipedia.org/wiki/File:HuffmanCodeAlg.png -->
<!-- https://en.wikipedia.org/wiki/Huffman_coding#/media/File:HuffmanCodeAlg.png -->

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Huffman_coding)
- [GitHub](https://gist.github.com/1995eaton/86f10f4d0247b4e4e65e)
