import express from 'express'


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("This is home page")
})
app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})


app.listen(8082, () => {
    console.log("server created!!!")
})