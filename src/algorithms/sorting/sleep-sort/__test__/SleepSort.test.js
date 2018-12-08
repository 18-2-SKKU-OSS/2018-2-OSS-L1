import SleepSort from '../SleepSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 50;
const NOT_SORTED_ARRAY_VISITING_COUNT = 50;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 50;
const EQUAL_ARRAY_VISITING_COUNT = 50;

describe('SleepSort', () => {
    it('should sort array', () => {
        SortTester.testSort(ShellSort);
    });
    
    it('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(ShellSort);
    });
    
    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(ShellSort);
      });
    
    it('should visit EQUAL array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
            ShellSort,
            equalArr,
            EQUAL_ARRAY_VISITING_COUNT,
        );
    });
    it('should visit SORTED array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
          ShellSort,
          sortedArr,
          SORTED_ARRAY_VISITING_COUNT,
        );
      });
    
      
      
      
  });
