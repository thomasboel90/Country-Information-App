// Deel 2:

function fileReader (filename, callback) {
	var fs = require("fs"); //require fs library
	fs.readFile(filename, "utf-8", function(err, data){ //check if error
		if (err) { 
			console.log('Foutje, bedankt!');
			throw err; 
		} 
		else

			var parsedData = JSON.parse(data); //parse data
			callback(parsedData);
		})
}

exports.fileReader = fileReader;

//export function to app countries.js file
//read countries.json, write to another file, console log