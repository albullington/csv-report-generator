var message = { firstName: 'Joshie',
  lastName: 'Wyattson',
  county: 'San Mateo',
  city: 'San Mateo',
  role: 'Broker',
  sales: 1000000,
  children: 
   [ { firstName: 'Beth Jr.',
       lastName: 'Johnson',
       county: 'San Mateo',
       city: 'Pacifica',
       role: 'Manager',
       sales: 2900000,
       children: [] },
     { firstName: 'Beth',
       lastName: 'Johnson',
       county: 'San Francisco',
       city: 'San Francisco',
       role: 'Broker/Sales Person',
       sales: 7500000,
       children: [] } ] 
};

var createMessage = function(messageObject) {
	var columnNames = [];
	var columnValues = [];

	var recurse = function(childObject) {
		var tempColumnValues = [];
	  for (var key in message) {
	  	//this is the work that I need to repeat in recursion
	  	if (key !== 'children') {
	  		columnNames.push(key);
	  		columnValues.push(message[key]);
	  	} 
	  	var children = message.children;
	  	for (var i = 0; i < children.length; i++) {
		  	if (!Array.isArray(children)) {
	  		  tempColumnValues.push(children[i]);
		  	} else {
					tempColumnValues = tempColumnValues.concat(recurse(children[i]));
		  	}
	  	} 
	  }
	  console.log('these columns: ', columnNames);
		console.log('these values: ', columnValues);
	};
  recurse(messageObject);
  return columnNames + columnValues;
}
	
createMessage(message);

