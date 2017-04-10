
var api_key = 'key-dd58ff6f76d460014cc87dfd0dc39734';
var domain = 'sandbox3ade8d902706430f8707df809c50eeb6.mailgun.org';
var mg = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = mg;
