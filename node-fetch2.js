// import * as d3 from "d3";

// var d3 = require("d3");

// d3.csv("./SerialNumbers.csv", function(data) {
//     for ( var i = 0; i < data.length; i++) {
//         console.log(data[i].Serial_Number);
//     }
// });

// this script works, but not like I want to
var csv = require('csv');
var obj = './SerialNumbers.csv';
var serialNumbersArray = [];

obj.from.path('./SerialNumbers.csv').to.array(function(data){
    for (var index = 0; index < data.length; index++) {
        serialNumbersArray.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
    }
    console.log(MyCSV)
})

function getSerial(csv) {
    let reader = new FileReader();

    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
}

function loadHandler(event) {
    let csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    let allTextLines = csv.split('\r\n'|'\n');

    for (let i = 0; i < allTextLines.length; i ++){
        let row = allTextLines[i].split(';');
        let col = [];

        for (let j = 0; j < row.length; j++) {
            col.push(row[j]);            
        }
    serialNumbersArray.push(row);
    }
}


console.log(getSerial)