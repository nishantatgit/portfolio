const config = {
	PORT: 4001
}
const express = require('express');
const app = express();

app.listen(config.PORT, (req, res) => {
	console.log('server running at:  ' + config.PORT);
});

