const { writeFile, readFile } = require("fs").promises; 
const first  = "This is the first line of Async Function";
const second = "This is the second line of Async Function";
const third  = "This is the third line of Async Function";


 writeFile('temp.txt', `${first}\n`)
    .then(() => {
      return writeFile('temp.txt', `${second}\n`, { flag: 'a' }); // Append Line 2
    })
    .then(() => {
      return writeFile('temp.txt', `${third}\n`, { flag: 'a' }); // Append Line 3
    })
    .then(() => {
      return readFile('temp.txt', 'utf8'); // Read the file
    })
    .then(data => {
      console.log(data); // Log the data to the screen
    })
    .catch(error => {
      console.log("An error occurred: ", error);
    });


