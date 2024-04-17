
const mongoose = require("mongoose");
const Category = require("../models/event-category");
const Stats = require("../controllers/stats");

module.exports = {
	/**
	 * Function to create a new Category, save and return an object of the category ID
	 * Calls Stats.add counter to update count
	 * @param {*} req 
	 * @param {*} res 
	 */
    createCategory: async function (req, res) {
		let newCategory = new Category({ name: req.body.name, description: req.body.description, image: req.body.image , 
			date :req.body.date, categoryID:req.body.categoryID });
        console.log(newCategory);      
		let category;
		try {
			category = new Category(newCategory);
			await category.save();
			await Stats.addCounter(req, res);
		} catch (err) {
			res.status(400).json({ error: "Invalid Data" });
			return;
		}
		res.status(200).json(category);
	
	}, 
	/**
	 * Function to get all categories added into the collection 
	 * @param {*} req 
	 * @param {*} res 
	 */
	getAllCategory : async function (req, res) {

		let categories = await Category.find({})
		// .populate("eventsList");
		res.status(200).json(categories);
	},

	getOneCategory: async function (req, res) {
		let cat = await Category.findOne({ categoryID: req.body.categoryId })
		  .exec();
		res.json(cat);
	  },
	/**
	 * Function to delete a category by looking for the categoryID which corresponds to the given categoryID
	 * Incerement when category is deleted
	 * @param {} req 
	 * @param {*} res 
	 */
	deleteCategorybyId : async function (req, res) {
		let categoryId = req.params.categoryId; 
		console.log(categoryId)
		const obj = await Category.deleteOne({ categoryID : categoryId});
		res.json(obj);
		if(obj){
			await Stats.deleteCounter(req, res);
		}
	},
	/**
	 * Function to update a Category's attributes from given input
	 * Increment update counts when update is successful 
	 * @param {} req 
	 * @param {*} res 
	 * @returns Returns status of action
	 */
	updateCategorybyId : async function (req, res){
		let categoryId = req.body.categoryId;
		let newName = req.body.name;
		let newDescription = req.body.description;
		let newImage = req.body.image;
		const updatedCategory = await Category.findOneAndUpdate(
			{ categoryID: categoryId },
			{ name: newName, description: newDescription, image: newImage },
			{ new: true } 
		);
		if (!updatedCategory) {
			return res.status(404).json({ status: 'ID not found' });
		}
		await Stats.updateCounter(req, res);
		res.status(200).json({ status: 'Update successful' });
	},

	getCategoryDisplay : async function (req, res){
		let categoryId = req.params.categoryId;
		console.log(categoryId)
		const category = await Category.findOne({ categoryID: categoryId });
		
		console.log(category);
		res.json(category);
	}
};