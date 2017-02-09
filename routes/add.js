var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name1 = req.query.name;
	var description1 = req.query.description;

	console.log()

	res.render('newFriends',{
		'name' : name1,
		'description' : description1,
		"imageURL": "http://lorempixel.com/400/400/people"
	});

	data.friends.push(newFriends);
		
 }