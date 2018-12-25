function reverseString(str) {
  let a = [];
  let revStr = "";

  for (let i = 1; i <= str.length; i++) {
    a.push(str[str.length - i]);
  }

  revStr = a.join('');
  console.log(revStr);
  return revStr;
}

//example
reverseString("hello"); 
