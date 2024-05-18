/*****************************
Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
****************************/

const peopleArr = [
    { name: "Habib", age: 25, gender: "male" },
    { name: "Samia", age: 15, gender: "female" },
    { name: "Rony", age: 35, gender: "male" },
    { name: "Jannat", age: 19, gender: "female" },
    { name: "Arisha", age: 22, gender: "female" },
    { name: "Farhad", age: 20, gender: "male" },
  ];
  
  const filteredAllNames  = (arr) => {
    const filterName = arr.filter((person) => person.gender !== "female");
    const arrOfNames = filterName.map((item) => item.name);
    return arrOfNames;
  };
  
  const result = filteredAllNames(peopleArr);
  console.log(result);
  