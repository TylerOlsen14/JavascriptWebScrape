const request = require('request');
const cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10690166', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);
        console.log(html)
        const mail = $('td');


    } else {
        console.log("There was an error!")
    }
});
// soup = BeautifulSoup(page, 'html.parser');
// targetCell = soup.find(text="Mailing Address:");
// print (targetCell.parent.parent.text); 