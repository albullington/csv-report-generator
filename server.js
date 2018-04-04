const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', (req, res) => console.log('request received'));

app.post('/', (req, res) => {
	const message = JSON.parse(req.body.message);
  console.log('this is the body', message);

	var columnNames = [];
	var columnValues = [];

  for (var key in message) {
  	if (key !== 'children') {
  		columnNames.push(key);
  		columnValues.push(message[key]);
  	}
  };
		console.log('these columns: ', columnNames);
		console.log('these values: ', columnValues);
	
	var data = (columnNames.join(', ') + ', ' + columnValues.join(', ')).toString();
    //console.log('the data', data);
	res.send(data);
});

app.listen(5000, (err) => console.log('Listening on port 5000'));
	// for (var key in req.body) {
	// 	if (key !== 'children') {
	// 		columnNames.push(key);
	// 		columnValues.push(req.body[key]);
	// 	}
	// }