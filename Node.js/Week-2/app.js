const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const ejs = require('ejs');

const App = require('./models/App');
const CRUDController = require('./controllers/CRUDController')
const PageController = require('./controllers/PageController')

const app = express();

// MongoDB - Application Connection

mongoose.connect(`mongodb+srv://taha:6381992@pcatcluster.bhewm.mongodb.net/pcatCluster?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => 
{
    console.log("Everything is okey.")
}).catch((err) => 
{
    console.log(err)
})

app.set("view engine","ejs")

// MIDDLEWARE Operations 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))

// Paths
app.get('/', CRUDController.GETAllBlogPosts)
app.get('/about',PageController.GETAboutPage)
app.get('/add', PageController.GETAddPage)

app.get('/posts/:id', CRUDController.GETBlogPost)
app.get('/posts/update/:id', CRUDController.PUTBlogPost)

app.post('/posts', CRUDController.POSTBlogPost)
app.put('/posts/:id', CRUDController.PUTBlogPost)
app.delete('/posts/:id', CRUDController.DELETEBlogPost)

const port = process.env.PORT || 5000;

// Listening Server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
});