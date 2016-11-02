var models = require('../models');
models.sequelize.sync();

var modelController = {
	userCreate: function(name, username, password, createdOn, profileImage, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password,
	      createdOn: createdOn,
	      profileImage: profileImage
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
	},
	userHome: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        	cb(user);
			}).catch(function(err){
				cb(err);
			});
  	}
}

module.exports = modelController;