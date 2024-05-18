/*****************************
Task: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
****************************/

const carsArr = [
    { make: "Lamborghini", model: "Model L", year: 2019 },
    { make: "Ferrari", model: "Model F", year: 2017 },
    { make: "Tesla", model: "Model S", year: 2016 },
    { make: "Toyota", model: "Model T", year: 2018 },
    { make: "BMW", model: "Model B", year: 2015 },
  ];
  
  const sortedByYear = (arr) => {
    const sortedYearData = arr
      .map((item) => item)
      .sort((a, b) => a.year - b.year);
    return sortedYearData;
  };
  
  const result = sortedByYear(carsArr);
  console.log(result);
  