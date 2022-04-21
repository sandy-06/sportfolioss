
const router = require('express').Router();
const {getAbout, addAbout, getAboutId, updateAbout, deleteAbout} = require('../controllers/aboutCtrl');


//.....................about...........

//get about user
router.get('/about', getAbout)




//add about user
router.post('/about', addAbout)



//get specific user by id
router.get('/about/:id', getAboutId)

//update specific user by id
router.post('/about/update/:id', updateAbout)

//delete specific user by id
router.delete('/about/:id', deleteAbout)




module.exports = router;