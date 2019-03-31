var fs = require('fs');
var csv = require('fast-csv');

var obj = csv();


fs.createReadStream('./SerialNumbers.csv')
    .pipe(csv())
    .on("data", function(data){
        var SerialNumbers = [];
        var obj = parseInt(data[1]);
        for (var i=0; i< obj.length; i++){
            obj.push(i);
            SerialNumbers.push(obj.concat());
        }
        console.log(SerialNumbers);
    })
    .on('end', function(){
        console.log('Read finished.');
    });
// var SerialNumbers = data()
// console.log(SerialNumbers)

// console.log(SerialNumbers);