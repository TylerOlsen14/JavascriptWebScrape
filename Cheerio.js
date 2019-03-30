const request = require('request');
const cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10690166', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);

        const td = $('td');

        const output = td.find('Mailing Address').text();


        console.log(output);
    } else {
        console.log('ERROR!!!!!');
    }
});