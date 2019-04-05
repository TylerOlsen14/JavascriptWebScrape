let url = "./SerialNumbers.csv"
// CSV Processing
let URLArray = [];
function readCsv(url) {
    var stream = fs.ReadStream(url)
    return new Promise((resolve, reject) => {
        var output = []
        const parser = csv.fromStream(Serial, {headers:true})
            .on('data', (data) => {
                parser.pause();
                c(data, output, (err) => {
                    if (err) reject(err)
                    parser.resume()
                })
            })
            .on('end', () => {
                console.log(data)
                resolve(output) // extraction/return point of the desired data
            })
        var c = (data, out, callback) => {
            out.push(data)
            callback()
        }
        console.log(output)
        URLArray.push(output)
    })
}
console.log(URLArray)