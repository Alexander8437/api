// const express = require('express');
import express from 'express'

const PORT = process.env.PORT || 8082

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("This is home page")
})
app.get("/home", (req, res) => {
    res.json("Home!!!!!!!")
})


app.listen(PORT, () => {
    console.log("server created!!!")
})