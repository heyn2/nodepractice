// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.listen(3000)

const express  = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> {
    res.send('<h1>hello world</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/dog', (req, res)=> {
    res.send("<a href='https://ads.naver.com/'>클릭해</a>")
})

app.get('/cat', (req, res)=> {
    res.json({'sound' : '야옹'})
})

// app.get('/dog', (req, res)=> {
//     res.json({'sound' : '멍멍'})
// })

app.get('/user/:id', (req,res) => {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q)
    res.json({'userid' : q.name})
})