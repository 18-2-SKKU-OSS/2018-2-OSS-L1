import Sort from '../Sort';

export default class BogoSort extends Sort {
    sort(originalArray) {
      const array = [...originalArray];
  
      // Go through all array elements...
      let sorted = false;
      while(sorted == false){
        array = shuffle(array);
        sorted = isSorted(array);
      }
  
      return array;
    }
    shuffle(array) {
      for(let j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
      return array;
    }
    isSorted(array) {
      for(let i = 1; i < array.length; i++){
        if (array[i-1] > array[i]) { return false; }
      }
      return true;
    }
  }
  