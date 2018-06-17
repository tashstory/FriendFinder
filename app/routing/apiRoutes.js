var friendobj = require('../data/friends.js')

module.exports = function(app){
   
    app.get('/api/friends', function(req,res){
      res.json(friendobj);
    });
  
    app.post('/api/friends', function(req,res){
     
      console.log(req.body.scores)
      var FriendScores = req.body.scores;
      var scores = [];
      var friends = 0;
      var bestFriend = 0;
  
      
      
    });
  };