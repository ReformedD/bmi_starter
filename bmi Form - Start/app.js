const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.urlencoded({extend:true}));

app.set('view engine', 'ejs');

app.use(express.static(_dirname + "/bmi_calculator"));

app.get('/',(req, res) => {

    res.sendFile(_dirname + "/bmi_calculator/bmi.html");
});
//get age,weight,height and calculate bmi
app.post('/', function(req, res) {
    var age = req.body.age;
    var weight = Number(req.body.weight);
    var height = Number(req.body.height) / 100
    var bmi = weight / (height * height);
    res.render('result', {age: age, weight: weight, height: Math.round(height*100,1),
    bmi: bmi.toFixed(1)});

});

app.listen(port, () => {
    console.log('The application is running on localhost:3000 :)')
});


