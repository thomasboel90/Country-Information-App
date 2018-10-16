// Deel 1:

var fileReader = require("./json-file-reader"); //

fileReader.fileReader("./countries.json", function(parsedData){

	for (var i = 0; i < parsedData.length; i++) {		
		var country = process.argv[2];
		if (country === parsedData[i].name) {
			console.log('Country: ' + parsedData[i].name);
			console.log('Top Level Domain: ' + parsedData[i].topLevelDomain);
		}
	}
})

/* 
Will give output: 

Country: <country name>
Top Level Domain: <tld>
*/