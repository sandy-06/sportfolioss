const mongoose = require('mongoose');



const certificationSchema = new mongoose.Schema({

certification: {
    type:String,
    required:true
}

})



module.exports = mongoose.model('certification', certificationSchema);