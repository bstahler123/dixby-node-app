// new app
var fetchTweets = require('./Twitter');
var command = process.argv[2];
var SpotifyWebApi = require("spotify-web-api-node");



    spotifyApi.searchTracks(trackName)
        .then(function (data) {
            console.log(data.body.tracks.items[0].artists[0].name);
            console.log(data.body.tracks.items[0].name);
            console.log(data.body.tracks.items[0].preview_url);
            console.log(data.body.tracks.items[0].album.name);

            }, function (err) {
            console.error(err);
        });

}



var userinput = process.argv[2];

var movieName = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "=&plot=short&r=json";
var trackName = process.argv[3];





switch (command){
	case "my-tweets":
	fetchTweets();
	break;
	case "spotify-this-song"
	pickSong(trackName);
	break;
	
}

 

console.log(command);

