function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    let lengthT = target.length;
  
    let slicedS = str.slice(str.length - lengthT,           str.length + 1);
    
    if (slicedS == target) {
      return true;
    }
    else {
      return false;
    }
  
  }
  
  //example
  confirmEnding("Bastian", "n");