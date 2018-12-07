/**
 * Return a CounterClockWise Value
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @return {number}
 */
export default function fibonacci(x1, y1, x2, y2, x3, y3) {
    
  let temp = x1*y2+x2*y3+x3*y1 - y1*x2-y2*x3-y3*x1;

  if (temp > 0) {
      return 1; // counter clockwise
  } else if (temp < 0) {
      return -1; // clockwise
  } else {
      return 0; //collinear
  }
}
