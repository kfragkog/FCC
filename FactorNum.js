function factorialize(num) {

  let factNum = 1;

  for (let i = 1; i <= num; i++)
  {
    factNum *= i;
  }

  return factNum;
}

//example
factorialize(5);
