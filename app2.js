//Part 2:

const fs = require('fs')
const fish = require('./json-file-reader.js')//require the file-reader
const countryInput = process.argv[2]

function dataProcess(array) { // fileReader content passed onto (parseData) parameter
	for (i = 0; i < array.length; i++) //use loop for accessing data
		if (countryInpunt === array[i].name) { //enter name and array will be read 
			console.log('Country: ' + array[i].name)
			console.log('TLD: ' + array[i].topLevelDomain)
		}
	}

fish.fileRead('countries.json', dataProcess);