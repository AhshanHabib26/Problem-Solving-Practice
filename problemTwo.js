/*****************************
Task: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
****************************/

const booksArr = [
    {
      title: "JavaScript The Definitve Guide",
      author: "David Flanagan",
      year: 1980,
    },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 1990 },
    { title: "JavaScript Cookbook", author: "Shelly Powers", year: 1995 },
  ];
  
  const allBookTitle = (arr) => {
    const bookTitle = arr.map((book) => book.title);
    return bookTitle;
  };
  
  const result = allBookTitle(booksArr)
  console.log(result)