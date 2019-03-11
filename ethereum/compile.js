const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build'); // get the build folder path
fs.removeSync(buildPath); //remove entire build folder

const campaignPath = path.resolve(__dirname, 'Contracts', 'Campaign.sol'); // get the source file path
const source = fs.readFileSync(campaignPath, 'utf8'); // read contract source code
const output = solc.compile(source, 1).contracts; //compile contract source code, and from AIB, read only contract object.

//console.log(solc.compile(source, 1));

fs.ensureDirSync(buildPath); // create the build directory which was deleted previously

for (let contract in output) {
    let name = contract.replace(':','');
    fs.outputJsonSync(
        path.resolve(buildPath, name + '.json'),
        output[contract]
    );
}