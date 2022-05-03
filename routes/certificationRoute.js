const router = require('express').Router();
const { getCertification, addCertification,getCertificationId, updateCertification, delCertification } = require('../controllers/certificationCtrl');


//.....................certification...........

//get certification 
router.get('/certification', getCertification)

//add certification
router.post('/certification', addCertification)


//get specific certification by id
router.get('/certification/:id', getCertificationId)

//update specific certification by id
router.post('/certification/update/:id', updateCertification)

//delete specific certification by id
router.delete('/certification/:id', delCertification)




module.exports = router;