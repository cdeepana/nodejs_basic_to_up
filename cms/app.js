const express = require('express');
const app = express();
const path = require('path');
const exphandlebars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphandlebars({ defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res)=>{
    res.render('home/index');
});

app.listen(4500, ()=> {

    console.log(`Server listening port 4500 `);
});