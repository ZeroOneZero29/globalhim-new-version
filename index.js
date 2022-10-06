const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.listen(3000, ()=>{
    console.log(3000)
})


app.get('/', function(req, res) {
    res.render('index');
});

app.get("/product/:name", function(req, res) {;
    res.render(`products/${req.params.name}`)
});

