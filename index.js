const express = require('express')
const cors  = require('cors')

const PORT = process.env.PORT || 8082

const app = express()

const router = express.Router()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("This is home page")
})

app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})

// app.use("/.netlify/functions/api", router)

// module.exports.handler = ServerlessHttp(app)

app.listen(PORT, () => {
    console.log(`server created!!! ${PORT}` )
})