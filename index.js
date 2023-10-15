const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8082

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


const CONNECTION_URL = "mongodb+srv://memories123:memories123@cluster0.aa9gsoh.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`)))
    .catch((error) => console.log(error));


app.get("/", (req, res) => {
    res.send("This is home page")
})

app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})

// app.listen(PORT, () => {
//     console.log(`server created!!! ${PORT}` )
// })