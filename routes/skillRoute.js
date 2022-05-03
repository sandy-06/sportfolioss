const router = require('express').Router();
const {getSkill, addSkill, getSkillId, updateSkill, delSkill} = require('../controllers/skillCtrl');


//.....................skill...........

//get skill
router.get('/skill', getSkill)

//add skill
router.post('/skill', addSkill)

//get specific skill by id
router.get('/skill/:id', getSkillId)

//update specific skill by id
router.post('/skill/update/:id', updateSkill)

//delete specific skill by id
router.delete('/skill/:id', delSkill)




module.exports = router;