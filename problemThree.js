/*****************************
Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
****************************/

const sqrNum = (n) => {
    return n * n;
  };
  
  const doubleNum = (n) => {
    return n * 2;
  };
  
  const addFiveNum = (n) => {
    return n + 5;
  };
  
  const finalOutput = (n) => {
    return addFiveNum(doubleNum(sqrNum(n)));
  };
  
  const result = finalOutput(8)
  console.log(result)
  