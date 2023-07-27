const mongoose = require('mongoose');
const db=process.env.DB
const username= process.env.ATLAS_USERNAME
const password =process.env.ATLAS_PASSWORD
const cluster=process.env.ATLAS_CLUSTER




const connectionString=`mongodb+srv://${username}:${password}@mongodb.8rxzxxv.mongodb.net/${db}`;


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(()=>console.log("ESTABLISHED CONNECTION TO DATABASE"))
    .catch(err=>console.log("Mongo connection failed!", err))