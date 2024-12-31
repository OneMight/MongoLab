const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const  routes  = require('./routes/index.js');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,

}));
app.use(express.json());
app.use('/api',routes)
app.disable('x-powered-by');
const PORT = 5000
const URL = 'mongodb://localhost:27017/'
mongoose.connect(URL)
.then((res) => console.log('connected to MongoDB'))
.catch((err) => console.log(err))
app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log(`Server is started: http://localhost:${PORT}`);
})

  