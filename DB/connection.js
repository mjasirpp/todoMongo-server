const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('mongoDB atlas connected with Server');
}).catch((err)=>{
    console.log(`connection Filed : ${err}`);
})