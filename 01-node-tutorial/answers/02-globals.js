// __dirname  --path to current folder(directory)
// __filename  --file name
// moudle --info about  current moudle (file)
// requier -- function to use moudle (commonJs)
// process -- info about enviroment where the program is being executed
console.log(module);
console.log(__dirname);
console.log(module.path);
console.log(__filename);
console.log(module.filename);
setInterval(() => {
    console.log(`hello world`);
}, 1000);