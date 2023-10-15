import express from 'express'
import cors  from 'cors'
import ServerlessHttp from 'serverless-http'

// const x  = require('./src/data')
// const y = require('./src/data')

const PORT = process.env.PORT || 8082

const app = express()

const router = express.Router()

// app.use(express.json())
// app.use(cors())
// const y  = x

// console.log(x.get)
// console.log("Y function ", y)

router.get("/", (req, res) => {
    res.json("This is home page")
})

router.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})

app.use("/.netlify/functions/api", router)

module.exports.handler = ServerlessHttp(app)

app.listen(PORT, () => {
    console.log("server created!!!")
})