var fs = require('fs');

module.exports = {
	name: 'login',
	usage: 'login("email", "password")',
	description: 'log in as that user you like so much',
  alias: [
		'login'
  ],
  execute: function(yodle, email, password) {
	  return yodle.login(email, password).then(function(data) {

	      global.yodle.config.TOKEN = data.token;

	      return 'done';
	    });
	}
};