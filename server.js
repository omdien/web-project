import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import mongoose from 'mongoose'

const app = express()
const port = 3000

// design file
app.use(express.static("public"));

// connect
mongoose.connect('mongodb://localhost:27017/bppmhkp')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',    
    title: 'Home',
})
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',    
    title: 'About',
})
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',    
    title: 'Contact',
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})