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
        SortTester.testSort(SleepSort);
    });
    
    it('should sort array with custom comparator', () => {
        SortTester.testSortWithCustomComparator(SleepSort);
    });
    
    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(SleepSort);
      });
    
    it('should visit EQUAL array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
            SleepSort,
            equalArr,
            EQUAL_ARRAY_VISITING_COUNT,
        );
    });

    it('should visit SORTED array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
            SleepSort,
            sortedArr,
            SORTED_ARRAY_VISITING_COUNT,
        );
    });

    it('should visit NOT SORTED array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
          SleepSort,
          notSortedArr,
          NOT_SORTED_ARRAY_VISITING_COUNT,
        );
      });

    it('should visit REVERSE SORTED array element specified number of times', () => {
        SortTester.testAlgorithmTimeComplexity(
          SleepSort,
          reverseArr,
          REVERSE_SORTED_ARRAY_VISITING_COUNT,
        );
      });
      
      
      
      
  });
