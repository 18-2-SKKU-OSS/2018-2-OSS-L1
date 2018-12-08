import fibonacci from '../CounterClockWise';

describe('CounterClockWise', () => {
    it('should calculate CounterClockWise correctly', () => {
        
    expect(CounterClockWise(1,1,2,2,3,3)).toEqual(0);
    expect(CounterClockWise(1,1,2,2,3,1)).toEqual(-1);
    expect(CounterClockWise(1,1,2,2,1,3)).toEqual(1);
  });
});
