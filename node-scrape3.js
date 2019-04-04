// the purpose of this app is to read a file of numbers
// and return a file with the numbers added to the end of a string

// Requiring fs module in which readFile function is defined. 
var readline = require('readline');
var fs = require('fs');
const request = require('request');
// const request = require('request-promise');

var myInterface = readline.createInterface({
  input: fs.createReadStream('./SerialNumbers.csv')
});

let serialNumberArray = [];

myInterface
    .on('line', async(line) => {
    let url = ('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
    await serialNumberArray.push(url);
        // console.log(url);
    })

console.log(serialNumberArray)

// const parseURLs = async (urls) => urls.map(url => {
//     return Promise.resolve(url);
// })

// Promise.all()
// serialNumberArray.map(function(serialNumberArray){(
//     request($url, (body) => {
//         const $ = cheerio.load(body);
//         const td = $('table tr td table tr td table tr:nth-child(4)');
//         console.log(td);
//         })
//     )}
// )


//     return url;

// CODE DOWN HERE WORKS!!! I'm experimenting...
// let serialNumberArray = [];
// myInterface.on('line', function (line) {
//     serialNumberArray.push('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
// // These console.logs tell us that the fetchess are working   
//   console.log('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
// }
// );
//   console.log(serialNumberArray);

