const request = require('request');
const cheerio = require('cheerio');

request('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10690166', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);


        const siteTable = $('tr');
        const output = siteTable
            .parent('td')
            .next()
            .text();
    console.log(output)
    console.log(siteTable)

    }
});
// soup = BeautifulSoup(page, 'html.parser');
// only_td_tags = soup.find("td");
// targetCell = soup.find(text="Mailing Address:");
// print (targetCell.parent.parent.text); 