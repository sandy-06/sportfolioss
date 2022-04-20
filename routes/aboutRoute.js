
const router = require('express').Router();



//.....................about...........

//get about user
router.get('/about', (req, res)=> {
    res.send('hello from about router')
})



//add about user
router.post('/about', (req, res)=>{
    res.send('hello from post router')
})


//get specific user by id
router.get('/about/:id', (req, res)=>{
    res.send('hello from specific post router')
})

//update specific user by id
router.post('/about/update/:id', (req, res)=>{
    res.send('hello from updated post router')
})

//delete specific user by id
router.delete('/about/:id', (req, res)=>{
    res.send('hello from updated delete router')
})


module.exports = router;