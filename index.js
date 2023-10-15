const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8082

const app = express()

app.use(express.json())
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