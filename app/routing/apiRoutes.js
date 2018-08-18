var friendobj = require('../data/friends.js')
var path = require('path');
module.exports = function(app){
  
  

  app.get('/api/friends', function(req, res) {
		res.json(friendobj);
	});

	
	app.post('/api/friends', function(req, res) {
		console.log(req.body)
		var userInput = req.body;
		

		var userResponses = userInput.scores;
	
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;  

		for (var i = 0; i < friendobj.length; i++) {
			
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendobj[i].scores[j] - userResponses[j]);
			}
		
			if (diff < totalDifference) {
			

				totalDifference = diff;
				matchName = friendobj[i].name;
				matchImage = friendobj[i].photo;
			}
		}

		friendobj.push(userInput);
		res.json({status: 'OK', name: matchName, image: matchImage});
	});
};