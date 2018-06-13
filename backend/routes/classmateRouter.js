// require express, and create a router
const express = require('express');
const router = express.Router();

// import the relevant controller here, so the router can point to it
const classmatesController = require('../controllers/classmatesController');

// define the routes on the router:
// ie 'get', points to the "getAllClassmates" function 
// in the classmatesController
router.route('/classmates')
  .get(classmatesController.getAllClassmates) // get all classmates
  .post(classmatesController.postClassmate) // post a classmate

router.route('/classmates/:id')
  .get(classmatesController.getClassmate) // get a single classmate
  .delete(classmatesController.deleteClassmate) // delete a classmate

module.exports = router;