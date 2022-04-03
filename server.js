const config = {
	PORT: 4001
}
const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
	res.send('index.html');
});
app.listen(config.PORT, (req, res) => {
	console.log('server running at:  ' + config.PORT);
});

