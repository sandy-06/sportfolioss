const router = require('express').Router();
const {getExperience, addExperience, getExperienceId, updateExperience, delExperience} = require('../controllers/experienceCtrl');


//.....................experience...........

//get experience user
router.get('/experience', getExperience)

//add experience user
router.post('/experience', addExperience)

//get specific user by id
router.get('/experience/:id', getExperienceId)

//update specific user by id
router.post('/experience/update/:id', updateExperience)

//delete specific user by id
router.delete('/experience/:id', delExperience)




module.exports = router;