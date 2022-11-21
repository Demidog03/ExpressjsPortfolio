import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))


app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.get('/', (req, res) =>{
    res.render('index', {title: 'Main page', active: 'main'})
})
app.get('/features', (req, res) =>{
    res.render('features', {title: 'About Me', active: 'features'})
})
app.get('/services', (req, res) =>{
    res.render('services', {title: 'Services', active: 'services'})
})
app.get('/projects', (req, res) =>{
    res.render('projects', {title: 'Projects', active: 'projects'})
})
app.get('/contactme', (req, res) =>{
    res.render('contactme', {title: 'Contact Me', active: 'contactme'})
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`)
})
