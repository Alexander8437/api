const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
dotenv.config()

const PORT = process.env.PORT || 8082

app.get("/", (req, res) => {
    res.send("This is home page")
})

app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT} and DB connected.`))

// mongoose.connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true, useUnifiedTopology: true,
// })
//     .catch((error) => console.log(error));

