const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var client = new Twitter({
    consumer_key: 'wHv0iDcVfRoCTUGNkYKVjaviB',
    consumer_secret: 'eynoHFrMERu6W31DBRBMeMBotJpVx5L3Yxe7BbgzB5XVBRYYIa',
    access_token_key: '1230283755400634369-DAUClB1Qu5xc5Eo2DbrmoIDAxw6eFX',
    access_token_secret: 'vkgwS4a0XAFMQPeKHgkWNiJVCzmG9RC83gYLlOemQz4gJ'
})




var params = {screen_name: 'wesley74338302'};

app.get('/', function (req, res) {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            res.json(tweets)
        }
      });
 });


 app.listen(3000, () => {
    console.log('Servidor Rodando');
})