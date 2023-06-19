const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//* Template engine
app.engine(
   'hbs',
   handlebars.engine({
       defaultLayout: 'main',
       extname: '.hbs',
   }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/page', (req, res) => {
  res.render('news');
})
//  npm i prettier lint-staged husky --save-dev

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})