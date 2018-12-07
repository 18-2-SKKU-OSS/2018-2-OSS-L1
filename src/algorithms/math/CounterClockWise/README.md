# CounterClockWise

Given three points, connecting these together makes three cases.
They are on a straight line, clockwise or counterclockwise.

![The area of the triangle](http://images.se2.naver.com/smedit/2011/6/24/gpawyh6yge4g5k.jpg)
<span class="mathjax">$$2 \times S =\begin{vmatrix} x_1 &amp;  y_1 &amp; 1 \\ x_2 &amp; y_2 &amp; 1 \\ x_3 &amp; y_3 &amp; 1 \end{vmatrix}  = (x_2 - x_1)(y_3-y_1) - (y_2-y_1)(x_3-x_1)$$</span>

Using the given formula, we can know the relationship of the three points.

![CCW](https://blogfiles.pstatic.net/20160822_71/kks227_1471868355629lRTzX_PNG/1.png)
![CW](https://blogfiles.pstatic.net/20160822_299/kks227_1471868356006BEGAC_PNG/2.png)


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Graham_scan)
