require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyparser = require('body-parser'); //read the code input
const cors = require('cors'); //for data-transfer b/w different browsers/servers - I assume for communicating between code and then live feed?
const pusher = require('pusher'); //refers to Pusher Channels - for literally updating the live feed?

const app = express();

const pusher = new pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log('Express running -> PORT ${server.address().port}');
});


