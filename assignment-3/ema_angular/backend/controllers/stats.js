// operationController.js
// const express = require("express");
const Operation = require("../models/operation"); 

// const router = express.Router();
module.exports = {
    getOneOperation : async function (req, res){
        const operation = await Operation.findOne({});
        res.json(operation);
    },
  /**
   * Function to find addCounter attribute and increment it 
   * @param {*} req 
   * @param {*} res 
   */
  addCounter: async function (req, res){
    await Operation.findOneAndUpdate({}, { $inc: { add_count: 1 } });
  },
  /**
   * Function to find updateCounter attribute and increment it 
   * @param {*} req 
   * @param {*} res 
   */
  updateCounter : async function (req,res){
    await Operation.findOneAndUpdate({}, { $inc: { update_count: 1 } });
  },
  /**
   * Function to find deleteCounter attribute and increment it 
   * @param {*} req 
   * @param {*} res 
   */
  deleteCounter : async function (req,res) {
    await Operation.findOneAndUpdate({}, { $inc: { delete_count: 1 } });
  }
}