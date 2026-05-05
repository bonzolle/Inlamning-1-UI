
const express = require('express');
const path = require('path')
const app = express();
const readHTML = require('./readHTML.js');
// defienierar vad applikationen kommer använda
app.use(express.static('./public'));

// läser in routers

app.get('/', function (request, response) {

    response.write(readHTML('./masterframe/head.html'))
    response.write(readHTML('./masterframe/header.html'))
    response.write(readHTML('./masterframe/nav.html'))
    response.write(readHTML('./masterframe/main.html'))
    response.write(readHTML('./masterframe/aside.html'))
    response.write(readHTML('./masterframe/footer.html'))
    response.end()
});


// bestämmer port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
