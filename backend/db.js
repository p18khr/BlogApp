const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/"

const connectToMongo = ()=>{
  mongoose.connect('mongodb+srv://prakhar:COSt0CPgewwLTqaB@atlascluster.5vdkams.mongodb.net/Blog?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  
    }).then(() =>{
      console.log('mongodb connected')
  })
  
}

module.exports = connectToMongo;