function findElement(arr, func) {
  
    let num = 0;
    let highValue = 0;
    
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
  
      if (arr[i] > func) {
        highValue = arr[i];
      }
    }
    
    if (highValue != 0) {
      return highValue;
    }
    else {
      return undefined;
    }
    
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);