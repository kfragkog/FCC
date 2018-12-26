function truncateString(str, num) {
    // Clear out that junk in your trunk
  
    let newStr = "";
  
    console.log(num);
  
    if (str.length > num){
      newStr = str.slice(0, num) + "...";
      return newStr;
    }
    else {
      return str;
    }
  
  }
  
  //example
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);