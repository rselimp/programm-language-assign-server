
//1.npm install express
//2.install cors for resource sharing
//3.give port in the 5000
//4. get api and use call back funtion
//5. request information (req,res)

const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json')
const languageDetails = require('./data/languageDetails.json');
const { request } = require('express');

app.get('/',(req,res) =>{
    res.send('langugage api running');
});

app.get('/language-categories',(req,res) =>{
    res.send(categories)
});



app.get('/category/:id',(req,res) =>{
    const id =req.params.id;
    const category_languageDetails = languageDetails.filter(ld =>ld.category_id ===id)
    res.send(category_languageDetails)
        
})

app.get('/languageDetails', (req,res) =>{
    res.send(languageDetails)
})


app.get('/languageDetails/:id', (req,res) =>{
    const id =req.params.id;
    const selectedLanguageDetails =languageDetails.find(ld => ld._id ===id)
    res.send(selectedLanguageDetails)
})



app.listen(port,() =>{
    console.log('server running on port',port)
})
module.exports = app;