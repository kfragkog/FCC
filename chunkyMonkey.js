function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  let slicedArr = [];
  let newArr = [];
  let iterNum = arr.length/size;

  for (let i = 0; i < iterNum; i++) {
    slicedArr = arr.splice(0, size);
    newArr.push(slicedArr);
  }
//   console.log("d", newArr)
  return newArr;
}

//example
chunkArrayInGroups(["a", "b", "c", "d"], 2);