// the purpose of this app is to read a file of numbers
// and return a file with the numbers added to the end of a string

//'createCsvWriter' should export the array to a csv file
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'URL.csv',
    header: [
        {id: 'serial_number', title: 'Serial_Number'},
        // {id: 'lang', title: 'LANGUAGE'}
    ]
});

// Requiring fs module in which  
// readFile function is defined. 
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('serialNumbers.csv')
});

let serialNumberArray = [];

myInterface.on('line', function (line) {
    serialNumberArray.push('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);

//   console.log(serialNumberArray);
  console.log('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
});

myInterface => csvWriter(line);

console.log(myInterface);