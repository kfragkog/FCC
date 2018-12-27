function findElement(arr, func) {
  
  let num = 0;
  let highValue = 0;
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];

    if (func(num) == true) {
      highValue = arr[i];
      break;
    }
  }
  
  if (highValue != 0) {
    return highValue;
  }
  else {
    return undefined;
  }
  
}

//example
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });