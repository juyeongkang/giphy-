var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dlhmS7XfvzMNEimvWxHc4N7USmPDATh8";
var query = "&q=covid";
 //var api: URL to that API
// Giphy API provides the following JSOn endpoints: search GiF by id GIFs by id translate random trending stickers
// q: parameters are name value paris that get strung togerther like q=ryan + gosling
// limit is like how many results do i get




// loadJson function is a p5.js function where i give a URL from an API
function setup() {
  noCanvas();
  var url = api + apikey + query;
  loadJSON(url, gotData);
}
// createImg function makes an HTML element becomes the source the source of that particular images tag
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
