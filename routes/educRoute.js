const router = require('express').Router();
const {getEducation, addEducation, getEducationId, updateEducation, delEducation} = require('../controllers/educationCtrl');


//.....................education...........

//get education user
router.get('/education', getEducation)

//add education user
router.post('/education', addEducation)

//get specific user by id
router.get('/education/:id', getEducationId)

//update specific user by id
router.post('/education/update/:id', updateEducation)

//delete specific user by id
router.delete('/education/:id', delEducation)




module.exports = router;