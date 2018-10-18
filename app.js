//Part 1:

const fs = require('fs') //require fs library
const countryInput = process.argv[2]

fs.readFile('countries.json', function (err, data) { //content passed onto parameter
	if (err) { throw err}
	array = JSON.parse(data)
	console.log(array[1].name)
	console.log(array[1].topLevelDomain)

	for (i = 0; i < array.length; i++)
		if (countryInpunt === array[i].name) {
			console.log('Country: ' + array[i].name)
			console.log('TLD: ' + array[i].topLevelDomain)
		}
});