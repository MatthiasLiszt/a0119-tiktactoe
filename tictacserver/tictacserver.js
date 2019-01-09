
var express = require('express');
var app = express();

var BoardData=['.','.','.','.','.','.','.','.','.'];


app.get('/getboard', function (req, res) {
  //res.send('Hello World!');
  var i=Number(req.param('field'));
  if( i === undefined ){res.send('error : invalid value');} 
  else
   {let x=BoardData[i];
    res.send(x.toString());
    //res.send(req.param('field'));
   }
});  

app.get('/putboard', function (req, res) {
  //res.send('Hello World!');
  var i=Number(req.param('field'));
  var v=Number(req.param('value'));
  if( i === undefined ){res.send('error : invalid value');} 
  else
   {BoardData[i]=v;
    res.send('changed value to '+v);
   }
});  

app.listen(3000, function () {
  console.log('TicTacServer listening on port 3000!');
});

