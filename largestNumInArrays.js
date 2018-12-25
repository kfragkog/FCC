function largestOfFour(arr) {
  // You can do this!
  // KF: my solution covers any number of subarrays - not   just four
  
  let maxNumArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let maxNum = arr[i][0];

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) {
        maxNum = arr[i][j];
      }
    }

    maxNumArr.push(maxNum);
    maxNum = 0;
  }

  return maxNumArr;
  
}

//example
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);