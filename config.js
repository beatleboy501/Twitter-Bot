const fs = require('fs');
let content;

content = fs.readFileSync('config.txt', 'utf-8').split("\n");

module.exports = {
  consumer_key: content[0],
  consumer_secret: content[1],
  access_token_key: content[2],
  access_token_secret: content[3]
};




