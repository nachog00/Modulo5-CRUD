/* External requires */
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

/* Model require */
const model = require(path.resolve(__dirname, '..','data','products.model'));

/* utils */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* form Validation */
// const validation = require('../middlewares/formValidation');
const { validationResult } = require('express-validator');
const validation = require('../middlewares/formValidation');

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
	create: (req, res, next) => {
		res.render('product-create-form', {})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// get errors from the form input
		let errors = validationResult(req);

		// res.send(JSON.stringify(errors.mapped(), null, 2));

		if (errors.isEmpty()) {
			let data = req.body;
			data.image = ['img', ... data.name.toLowerCase().split(" ")].join('-') + '.jpg'
			let obj = model.addEntry(data);
			res.redirect(`/products/${obj.id}`);
		} else {
			res.render('product-create-form', { errors: errors.mapped() , old: req.body })
		}
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id;
		res.render('product-edit-form', {
			productToEdit: model.getEntry( id ),
		})
	},

	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let data = req.body;

		model.editEntry( id, data);

		res.redirect(`/products/${id}`);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		model.deleteEntry( id );

		res.redirect(`/products`);
	}
};

module.exports = controller;