import BogoSort from '../BogoSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('BogoSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BogoSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BogoSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(BogoSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(BogoSort);
  });
});
