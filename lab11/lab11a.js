var colorArray = new Array();
colorArray = ["blue", "red", "yellow", "green"];

var color="";

function getColor(){
  var colorNum = Math.round(Math.random()*3);

  color=String(colorArray[colorNum]);

  document.getElementById('output').innerHTML=String(colorArray[colorNum]);

  setTimeout(function(){document.getElementById('output').innerHTML="";},1000);
}

function pushButton(userColor){

if (color == userColor){
  setTimeout(function(){document.getElementById('output').innerHTML="FUNGUS"},1000);
  setTimeout(getColor(),1000);
}

else{
  document.getElementById('output').innerHTML="you are the gay"
}

}
