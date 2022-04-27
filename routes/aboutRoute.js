
const router = require('express').Router();
//const {getAbout, addAbout, getAboutId, updateAbout, deleteAbout} = require('../controllers/aboutCtrl');

const aboutSchema = require('../models/aboutModel');
//.....................about...........

//get about user
router.get('/about', async (req, res)=>{

    const about = await aboutSchema.find();
    res.json(about);
})




//add about user
router.post('/about', async (req, res)=>{

    const { about } = req.body;
    const newAbout = await AboutSchema({

        about
    })
    await newAbout.save();
    res.json(newAbout);
})



//get specific user by id
router.get('/about/:id', getAboutId)

//update specific user by id
router.post('/about/update/:id', updateAbout)

//delete specific user by id
router.delete('/about/:id', deleteAbout)




module.exports = router;