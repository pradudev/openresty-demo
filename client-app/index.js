const request = require('request');
const fs = require('fs');

const get_url = 'http://localhost:8080/';

const post_url = 'http://localhost:8080/upload_files';

request(get_url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log(response.headers);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'UTF8',
  'Transfer-Encoding': 'Chunked',
  'Content-Length': '0'
};

const formData = {
  name: 'Pradeep',
  avatar: fs.createReadStream(__dirname + '/devops-cycle.png'),
}

request.post({ url:post_url, headers: headers, formData: formData }, (err, res, body) => {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});