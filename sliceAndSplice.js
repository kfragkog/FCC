function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
  
    let newArr = [...arr2];
  
    newArr.splice(n, null, ...arr1);
    console.log("final", newArr);
  
    return newArr;
  }
  
//example
frankenSplice([1, 2, 3], [4, 5, 6], 1);
  