function bouncer(arr) {
    // Don't show a false ID to this bouncer.
  
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == false || arr[i] == null || arr[i] == 0 
         || arr[i] == "" || arr[i] == undefined || Number.isNaN(arr[i])) {
           console.log(arr[i])
        arr.splice(i, 1);
        i--;
      }
    }
  
    console.log(arr)
  
    return arr;
  }
  
  //example
  bouncer([1, null, NaN, 2, undefined]);