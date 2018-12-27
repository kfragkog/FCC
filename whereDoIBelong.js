function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  let newArr = [arr[0]];
  let numIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= newArr[0]) {
      newArr.unshift(arr[i]);
    }
    else if (arr[i] >= newArr[newArr.length - 1]) {
      newArr.push(arr[i]);
    }
    else {
      for (let j = 0; j < newArr.length; j++) {
        if (arr[i] >= newArr[j] && arr[i] < newArr[j + 1]) {
          newArr.splice(j + 1, null, arr[i]);

          break;
        }
      }
    }
  }

  if (num <= newArr[0]) {
    numIndex = 0;
  }
  else if (num >= newArr[newArr.length - 1]) {
    numIndex = newArr.length;
  }
  else {
    for (let k = 0; k < newArr.length; k++) {
      if (num > newArr[k] && num < newArr[k + 1]) {
        numIndex = k + 1;
      }
      else if (num == newArr[k]) {
        numIndex = k;
      }
    }
  }
      
  return numIndex;
}

getIndexToIns([5, 3, 20, 3, 8, 50, 1, 27], 5);

// LAURAS SOLUTION for the 2nd step
// numIndex = newArr.length;
//     for (let k = 0; k < newArr.length; k++) {
//       if (num <= newArr[k]) {
//         numIndex = k;
//         break;
//       }
//     }
