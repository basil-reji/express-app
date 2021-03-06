var express = require('express');
var router = express.Router();
var userHelper = require('../helper/userHelper');

const app_name = process.env.APP_NAME

/* GET home page. */
router.get('/', async function (req, res, next) {
    let user = req.user
    // console.log(req.session.user);
    res.render('index', {
        title: app_name,
        user
    });
});

module.exports = router;
