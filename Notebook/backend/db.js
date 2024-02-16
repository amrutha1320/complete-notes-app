const mongoose = require('mongoose');
//todo2

const mongURI="mongodb+srv://ammuu1320:ammuu1320@cluster0.i1rgjh5.mongodb.net/";
const connectToMongo= async()=>{
     await mongoose.connect(mongURI);
     console.log("connected to mongo successfully");


}
module.exports=connectToMongo;

