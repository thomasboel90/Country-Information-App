const fs = require('fs')

exports.fileRead = function(filename, callback) { //so you can read this in another file
	fs.readFile(fileName, function (err, data){
		if (err){throw error}
		item = JSON.parse(data)
		callback(item)
	})
}