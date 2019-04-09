import React, { Component, useState } from 'react';

const fs = require('fs');
const readline = require('readline');
const URL = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial='
let serial = './SerialNumbers.csv'

async function processLineByLine(URL, serial) {
  const fileStream = fs.createReadStream(serial);
  const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      newSerialURL.push(URL + `${line}`)
      console.log(URL + `${line}`);
    }
  }


class newSerialURL extends Component {
  render(){
    return(
      <div>
        <h5>{newSerialURL}</h5>
      </div>
    )
  }
}
processLineByLine(URL, serial)

var newURL = processLineByLine(newSerialURL)
console.log(newURL)

module.exports = newSerialURL