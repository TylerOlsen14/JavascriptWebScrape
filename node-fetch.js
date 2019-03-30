const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial='

function searchAddress(SerialNumber){
    return fetch(`${url}${SerialNumber}`)
        .then(response => response.text())
}

searchAddress('10690166')
    .then(body => {
        const $ = cheerio.load(body)
        $('td').each(function(i, element) {
            const $element = $(element);
            const $td = $element.find("td");
            console.log($td.text());
        })
    })


// module.exports = {
//     SerialAddress
// }