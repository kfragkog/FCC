function repeatStringNumTimes(str, num) {
    // repeat after me
  
    let newStr = "";
  
    if (num > 0) {
  
      for (let i = 0; i < num; i++) {
        newStr += str;
      }
    
    }
    
    return newStr;
  }
  
  //example
  repeatStringNumTimes("abc", 3);