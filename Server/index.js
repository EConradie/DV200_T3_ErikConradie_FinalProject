const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const exp = require('constants');
const { log } = require('console');
require('dotenv/config')
const app = express();
const productRoute = require('./routes/routes')
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//Used with React!
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(productRoute)
app.use(userRoutes);
app.use(authRoutes);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'JECKnives' //Collection Name
}).then(() => {
    console.log("Connected to the DB")
})
.catch((err) => {
    console.log("No Connection. Error:" + err);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log('Server started on port', PORT)})