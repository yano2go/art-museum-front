const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

const REACT_APP_APIKEY = process.env.REACT_API_APIKEY

app.use(express.static('build'))

app.get('*', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/build/index.html`))
})

app.listen(PORT, ()=>{
    console.log('art front')
})