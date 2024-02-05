const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log(3000)
})


app.get('/', function(req, res) {
    res.render('index');
});

app.get("/product/:name", function(req, res) {;
    res.render(`products/${req.params.name}`)
});

app.post('/message', (req, res) => {
    fs.appendFileSync('requests.txt', `${JSON.stringify(req.body)}, `)
    res.sendStatus(200);
})

