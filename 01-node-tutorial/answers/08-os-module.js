const os = require('os');
// infi about current user
const user = os.userInfo();
console.log(user);

// method return the system upTime in secound
console.log(`The System UpTime is ${os.uptime()} Secound`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS);
