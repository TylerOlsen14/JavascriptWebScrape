var fs = require('fs');
var csv = require('fast-csv');
var rp = require('request-promise');
const request = require('request');
const $ = require('cheerio');
const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10040014003';

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
// console.log(SerialNumbersArray)

rp(url)
  .then(function(html){
    //success!
    // console.log(html);
  })
  .catch(function(err){
    //handle error
  });

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10690166', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const td = $('td');

        const output = td.find('Mailing Address').text();
        console.log(output);
    } else {
        console.log('ERROR!!!!!');
    }
});