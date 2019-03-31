var fs = require('fs');
var csv = require('fast-csv');


var SerialNumbers = fs.createReadStream('./SerialNumbers.csv')
    .pipe(csv())
    .on("data", function(data){
        var SerialNumbers = parseInt(data[1]);
        // return SerialNumbers;
        console.log(SerialNumbers);
    })
    .on('end', function(){
        console.log('Read finished.');
    });
// var SerialNumbers = data()
// console.log(SerialNumbers)

console.log(SerialNumbers);