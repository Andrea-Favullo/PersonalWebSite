// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const config = require("./config.json")

const redis = require('redis');
rejson = require('redis-rejson');

rejson(redis)
const client = redis.createClient({
   host: config.redis.host,
   port: config.redis.port,
   password: config.redis.password
});

client.on('error', err => {
   console.log('Error ' + err);
});

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response
app.get('/api', (req, res) => {
   res.send('api works');
});

app.get("/get-text/:idtext/:lang", (req, res) => {
   
   console.log("Parametri:")
   console.log(req.params)
   
   let redis_key = req.params.idtext.toString();
   let lang = req.params.lang.toString();

   client.json_get(redis_key, lang, function (err, reply) {
      console.log("Risposta:")
      console.log(reply)
      console.log("Errore:")
      console.log(err)
      res.send(reply);
   });

});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
   res.send('app works!');
   //res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => { console.log('Example app listening on port 3000!'); });
