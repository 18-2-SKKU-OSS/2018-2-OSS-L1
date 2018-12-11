import editDistance from '../EditDistance';
import { sortedArr } from '../../../sorting/SortTester';
import QuickSort from '../../../sorting/quick-sort/QuickSort';

describe('editDistance', () => {
  it('should shuffle small arrays', () => {
    expect(editDistance([''], [''])).toEqual(['']);

    expect(editDistance([''], ['A', 'B', 'C'])).toEqual(['']);

    expect(editDistance(['A', 'B', 'C'], [''])).toEqual(['']);
  });

  it('should shuffle array randomly', () => {
    const shuffledArray = editDistance(sortedArr);
    const sorter = new QuickSort();

    expect(shuffledArray.length).toBe(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(sorter.sort(shuffledArray)).toEqual(sortedArr);
  });
});
