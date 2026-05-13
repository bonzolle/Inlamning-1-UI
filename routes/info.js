const express = require('express');
const readHTML = require('../readHTML.js');
const router = express.Router();

router.use(express.static('./public'));

// --------------------- Default-sida -------------------------------
router.get('/', function (request, response) {



    response.render('default', { page: 'pages/home'
   
    })
});

// --------------------- Läs en specifik info-sida -------------------------------
router.get('/:infotext', function (request, response) {
const infotext = request.params.infotext;

    response.render('default', { page: `pages/${infotext}` });

});
module.exports = router;