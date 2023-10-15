const express = require('express')
const cors  = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 8082

const app = express()

app.use(express.json())
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

app.get("/", (req, res) => {
    res.send("This is home page")
})

app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})

app.listen(PORT, () => {
    console.log(`server created!!! ${PORT}` )
})