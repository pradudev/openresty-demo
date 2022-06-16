const request = require('request');

const get_url = 'http://localhost:8080/';

request(get_url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log(request.head);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});