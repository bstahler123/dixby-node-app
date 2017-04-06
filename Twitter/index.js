var Twitter = require("twitter");
var keys = require("./key");
var client = new Twitter(keys.twitterKeys);
 
module.exports = function fetchTweets(tweets){ 
	var params = {screen_name: 'brad_ucf'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
  			for (var i = 0; i < tweets.length; i++) {
  				tweets[i];
  				console.log(tweets[i].text);
  			}
		    
		}
		console.log(error)
		  	});
}