var readline = require('readline');
var fs = require('fs');
const request = require('request');
// const request = require('request-promise');

var myInterface = readline.createInterface({
  input: fs.createReadStream('./SerialNumbers.csv')
});

let serialNumberArray = [];

myInterface
    .on('line', (line) => {
    let url = ('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
    serialNumberArray.push(url);
        console.log(url);
    })
    // let url = ('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);

// function fetchURL(url) {
//     return fetch(url)
//     .then( request => request.text())
//     .then(text => {
//         return console.log(fetchURL(text));
//     });
// }
    
console.log(serialNumberArray)
