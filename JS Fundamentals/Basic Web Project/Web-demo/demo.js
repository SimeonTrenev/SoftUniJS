const express = require('express');
const handlebars = require('express-handlebars')

const app = express();
const port = 5001;

app.engine('hbs', handlebars({
    layoutsDir: 'views',
    extname: 'hbs'
}))

app.set('view engine', 'hbs')



app.get('/:name', function(req, res){
    let age = Math.floor(Math.random()*100)
    res.render('index', {
        layout: false,
         name: req.params.name,
         isAdult: age < 18,
         age
        });
});

app.get('/names', (req,res) => {
    res.send(`
    <h1>Some header !!!!</h1>
    <body>
    <input type="text" id="firstNum" /> +
<input type="text" id="secondNum" /> = 
<input type="text" id="sum" />
<button id="calc">Calculate</button>
<script>
  document.getElementById("calc").onclick = function() {
    document.getElementById("sum").value =
      Number(document.getElementById("firstNum").value) +
      Number(document.getElementById("secondNum").value);
  }
  alert('Hey hey')
</script>

</body>
    `);
});



app.listen(port, () => console.log(`Listening on port ${port}....`));