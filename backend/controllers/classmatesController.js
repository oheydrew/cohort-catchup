const Classmate = require('../models/Classmate');

// get ALL classmates
function getAllClassmates( req, res ) {
  Classmate.find().sort('-dateAdded')
  .then(classmates => {
    res.status(200).json( classmates );
    res.set('Content-Type', 'application/json');
    console.log('getAllClassmates successful, all classmates returned');
  })
  .catch( err => {
    res.status(500).json( { error: err.message } );
  });
}

// get ONE classmate
function getClassmate( req, res ) {
  let classmateId = req.params.id;
  Classmate.findOne( { _id: classmateId } )
  .then( classmate => {
    res.status(200).json( classmate );
    console.log(`getClassmate successful, classmate ID: ${ classmate.id } returned`);
  })
  .catch( err => {
    res.status(500).json( { error: err.message } );
  });
}

// post NEW classmate
function postClassmate( req, res ) {
  let classmate = new Classmate(req.body);
  classmate.save()
  .then( classmate => {
    res.status(201).json( classmate );
    console.log(`postClassmate successful, classmate ID: ${ classmate.id } created`);
  })
  .catch( err => {
    res.status(500).json( {error: err.message } );
  });
}

function deleteClassmate( req, res ) {
  //TODO: Delete logic :D
}

module.exports = {
  getAllClassmates: getAllClassmates,
  getClassmate: getClassmate,
  postClassmate: postClassmate,
  deleteClassmate: deleteClassmate
};