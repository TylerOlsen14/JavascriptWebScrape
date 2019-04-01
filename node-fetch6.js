var fs = require('fs');
var csv = require('fast-csv');

let SerialNumbersArray = []

var SerialNumbers = fs.createReadStream('./SerialNumbers.csv')
    .pipe(csv())
    .on("data", function(data){
        var SerialNumbers = parseInt(data[1]);
        for (let i = 0; i < SerialNumbers.length; i ++){
            SerialNumbersArray.push(row[i]);
        }
        // console.log(SerialNumbers);
    })
    .on('end', function(){
        console.log('Read finished.');
        return SerialNumbers;
    });
// var SerialNumbers = data()
console.log(SerialNumbersArray)

