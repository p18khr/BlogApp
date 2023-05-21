const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 4000
app.use(express.json())
app.use(cors());

app.use('/api',require('./routes/blogs'))

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`)
})



// Available routes

