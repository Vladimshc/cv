var express = require('express');
var router = express.Router();
var mg = require('../module/mailgun');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/views/index.html');
});

router.get('/angular.js', function(req, res, next) {
    res.sendfile('node_modules/angular/angular.js');
});

router.get('/angular-ui-router.js', function(req, res, next) {
    res.sendfile('node_modules/angular-ui-router/release/angular-ui-router.js');
});

router.post('/sendmessage', function(req, res, next) {
    var data = {
        from: 'From cv <' + req.body.email +'>',
        to: 'vladimshc@gmail.com',
        subject: 'cv-message-form ' + req.body.name,
        html: `<h1>You have new submission</h1>
	            <p>Name: <b>${req.body.name}</b></p>
	            <p>Email: <b>${req.body.email}</b></p>
	            <p>Message: <b>${req.body.message}</b></p>
                <p>Submitted at: ${(new Date()).toLocaleString("ru")}</p>`
    };
    mg.messages().send(data, function (error, body) {
        if (error) {
            console.log(error);
            res.sendStatus(502);
        }
        console.log(body);
        res.sendStatus(200);
    });
});

module.exports = router;

