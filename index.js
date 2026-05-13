
const express = require('express');
const path = require('path')
const app = express();
const readHTML = require('./readHTML.js');
// defienierar vad applikationen kommer använda
app.use(express.static('./public'));
// view table
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// läser in routers
const info = require('./routes/info');




app.get('/', function (request, response) {

response.render('default', { page: 'pages/home' });
});

// använder routers
app.use('/api/info', info);

// bestämmer port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
