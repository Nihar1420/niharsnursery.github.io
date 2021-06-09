
// So today we will make a website of Granite Factory using Javascript , CSS and Pug and will make a good design this time.


const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactfarmhouse', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 80;

const contactSchema = new mongoose.Schema({
    name: String,
    site: String,
    typeof: String,
    email: String,
    number: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    res.status(200).render('index.pug');

});

app.get('/home', (req, res) => {

    res.status(200).render('home.pug');

});

app.get('/contact', (req, res) => {

    res.status(200).render('contact.pug');

});

app.post('/contact', (req, res) => {

    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    })

});

app.listen(port, () => {

    console.log("Project is getting started");

});
