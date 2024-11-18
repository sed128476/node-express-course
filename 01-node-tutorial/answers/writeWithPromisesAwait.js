const { writeFile, readFile } = require("fs").promises; 
const first  = "This is the first line of Async Function";
const second = "This is the second line of Async Function";
const third  = "This is the third line of Async Function";


async function writer() {
    try {
        await writeFile('temp.txt', `${first}\n ${second}\n ${third}`, 'utf8');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

async function reader() {
    try {
        const data = await readFile('temp.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error reading from file:', err);
    }
}

async function readWrite() {
    await writer();
    await reader();
}
console.log("The Async Function start");

readWrite();

console.log('The Async Function  End');
