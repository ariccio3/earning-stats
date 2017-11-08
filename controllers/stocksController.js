const db = require("../models");

module.exports = {

	createForm: function(req, res) {
    	db.Stocks
      	  .create(req.body)
      	  .then(dbModel => res.json(dbModel))
      	  .catch(err => res.status(422).json(err));
  },

	findAll: function(req, res) {
		db.Stocks
		.find({stock:req.params.stock })
	      .then(dbModel => res.json(dbModel))
	      .catch(err => res.status(422).json(err));
	}
};
