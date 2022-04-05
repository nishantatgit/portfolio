const config = {
	PORT: 4001
}

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.send('index.html');
});
app.listen(config.PORT, (req, res) => {
	console.log('server running at:   ' + config.PORT);
});

