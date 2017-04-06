var keys = require('./key.js');
var Twitter = require('Twitter');
var request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');
var client = new Twitter(keys.twitterKeys);
// twitter
function fetchTweets(tweets) {
    var params = { screen_name: 'brad_ucf', count: 20 };
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

// omdb 
function fetchMovie() {

    request(queryUrl, function(error, response, body) {


        if (!error && response.statusCode === 200) {


            var body = JSON.parse(body)
            console.log(body.Title);
            console.log(body.Year);
            console.log(body.Rated);
            console.log(body.Country);
            console.log(body.Language);
            console.log(body.Plot);
            console.log(body.Actors);
            console.log(body.Ratings[1]);

        }
    });
}
//Spotify
function fetchSongs() {

    var spotifyApi = new SpotifyWebApi({
        clientId: keys.spotifyKeys.clientId,
        clientSecret: keys.spotifyKeys.clientSecret,
        redirectUri: keys.spotifyKeys.redirectUri,
    });


    spotifyApi.searchTracks(trackName)
        .then(function(data) {
            console.log(data.body.tracks.items[0].artists[0].name);
            console.log(data.body.tracks.items[0].name);
            console.log(data.body.tracks.items[0].preview_url);
            console.log(data.body.tracks.items[0].album.name);

        }, function(err) {
            console.error(err);
        });

}
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "=&plot=short&r=json";
var userinput = process.argv[2];
var movieName = process.argv[3];
var trackName = process.argv[3];

// calling functions based on input
switch (userinput) {
    case "my-tweets":
        fetchTweets();
        break;

    case "movie-this":
        fetchMovie(queryUrl);
        break;

    case "spotify-this-song":
        fetchSongs(trackName);
        break;
}
