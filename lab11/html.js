var colourArray = new Array();
colourArray = ["red", "Green", "Blue", "Yellow"];

var colour="";

function getColour(){
  var colourNum = Math.round(Math.random()*3);

  colour=String(colourArray[colourNum]);

  document.getElementById('output').innerHTML=colour;

  setTimeout(function(){document.getElementById('output').innerHTML="";},1000);
}

function pushButton(userColour){

  if(colour == userColour){
    setTimeout(function(){document.getElementById('output').innerHTML="CORRECT!";},1000);}
    setTimeout(getColour(),1000);
  }
  else{
    document.getElementById('output').innerHTML="GAME OVER!";
  }
