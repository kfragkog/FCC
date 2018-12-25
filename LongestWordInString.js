function findLongestWordLength(str) {
  
    let a = [];
    
    a = str.split(" ");
    
    let winner = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i].length > winner) {
        winner = a[i].length;
      }
    }
  
    return winner;
  }
  
  //example
  findLongestWordLength("The quick brown fox jumped over the lazy dog");