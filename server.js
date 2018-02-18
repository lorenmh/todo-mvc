const express = require('express');

const PORT = 3000,
  CWD = process.cwd();

const app = express();
app.get('/', function(req,res){
  res.sendFile(CWD + '/index.html');
})

app.use('/public', express.static('public'));


app.listen(PORT, function(){console.log('listening on '+ PORT)});