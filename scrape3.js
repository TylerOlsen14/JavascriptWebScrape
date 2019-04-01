const request = require('request');
const cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10690166', (error, response, body) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(body);


        const td = $('table tr td table tr td table tr:nth-child(4)');
        // Showing our result on the console
        console.log(td.text());
    }});

