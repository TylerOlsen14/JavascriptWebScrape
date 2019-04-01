const fs = require('fs');
const parse = require('csv-parse');
const file = "./SerialNumbers.csv";
let dataFile = [];

rs = fs.createReadStream(file);
parser = parse({columns: true}, function(err, data){
  // You don't need to return anything from the callback, you give the impression that parser will be the result of getHeaders, it's not, it's a stream.
  return getHeaders(data);
});

rs.pipe(parser).on('end', function(){
  console.log(dataFile);
});

function getHeaders(file){
  // change map to each, with no return, map returns an array of the return of the callback, you return an array with the result of each push (wich is the index of the new object).
  return file.map(function(Serial_Number){
      return dataFile.push(Object.values(Serial_Number))
  })
}