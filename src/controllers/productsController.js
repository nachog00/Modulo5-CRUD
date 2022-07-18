/* External requires */
const fs = require('fs');
const path = require('path');

/* Model require */
const model = require(path.join(__dirname, '../data/products.model'));

/* utils */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = model.getData();
		res.render('products', {products , toThousand});
	},
	
	// Detail - Detail from one product
	detail: (req, res) => {
		let products = model.getData();
		res.render('detail', {
			product : products.filter(product => product.id == req.params.id)[0],
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form', {})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let data = req.body;
		model.addEntry(data);
		res.redirect('/');		
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;