// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const redis = require('redis');
const client = redis.createClient({
   host: 'redis-12570.c135.eu-central-1-1.ec2.cloud.redislabs.com',
   port: 12570,
   password: 'EjLaQaoAkRDGhrG1JjvJzSJMaDJlEOr7'
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

app.get("/get-text/:idtext", (req, res) => {
   let t = req.params.idtext.toString();

   console.log(t)
   
   client.get(t, function (err, reply) {
      console.log(reply)
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
