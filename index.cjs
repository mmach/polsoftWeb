const express = require('express');
const path = require('path');
var compression = require('compression')
var dotenv = require('dotenv')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cheerio = require('cheerio');
const fs = require('fs');

dotenv.config()

fs.readFile('./dist/index.html', (result, data) => {
    const $ = cheerio.load(data.toString())

    fs.writeFile('./dist/index.html', $.html(), (err) => { })

})
//const $ = cheerio.load('<h2 class="title">Hello world</h2>');

const app = express();
//const root = `${__dirname}/static`

app.use(compression());//add this as the 1st middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'webcomponent')));

// mount `exampleProxy` in web server


// An api endpoint that returns a short list of 

// Handles any requests that don't match the ones above
//app.use(fallback('/www_build/index.html', { root }))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);