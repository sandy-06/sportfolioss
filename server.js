require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;
//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(fileUpload({
  useTempFiles:true
}))

//routes
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/projectRoute'));
app.use('/', require('./routes/aboutRoute'));
app.use('/', require('./routes/educRoute'));
app.use('/', require('./routes/experienceRoute'));
app.use('/', require('./routes/upload'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/sportfolioss',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  );
   mongoose.set('debug', true);
   app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
       


