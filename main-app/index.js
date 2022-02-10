const newConnection = require('./SQL/databaseConnection');
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser("secret stuff"))

app.use(express.urlencoded({
  extended: true
}))

app.get('/user-login', (req, res) => {




})