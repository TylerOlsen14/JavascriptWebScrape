var fs = require('fs');
var csv = require('fast-csv');
var rp = require('request-promise');
const request = require('request');
const $ = require('cheerio');
const cheerio = require('cheerio');
const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10040014003';

let SerialNumbersArray = [];

SerialNumbersArray = fs.createReadStream('./SerialNumbers.csv')
    .pipe(csv())
    .on("data", function(data){
        var SerialNumbersArray = parseInt(data[1]);
        for (let i = 0; i < SerialNumbersArray.length; i ++){
            // SerialNumbersArray.push(row[i]);
            request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + [i], (error, response, body) => {
                if(!error && response.statusCode === 200){
                    const $ = cheerio.load(body);
                    for (let i = 0; i < SerialNumbersArray.length; i ++){
                        const td = $('table tr td table tr td table tr:nth-child(4)');
                    // Showing our result on the console
            }
    }})
        }
        console.log(td.text());
        // console.log(SerialNumbersArray);
        return SerialNumbersArray;
    })
    .on('data', function(SerialNumbersArray){

    })
    .on('end', function(){
        console.log('Read finished.');
    });
    // console.log(SerialNumbersArray);
    
// console.log(SerialNumbersArray)

