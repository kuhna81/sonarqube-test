const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
	res.json({
		message: `Hello from port ${ port }`,
		timestamp: new Date()
	});
});

app.listen(port, () => {
	console.log(`Node server running on localhost:${ port }`);
});
