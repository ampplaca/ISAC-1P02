var nouns = new Array();
nouns=["Fungus","Food", "Jeff", "Yawn", "Sauce"]

var adjectives = new Array();

adjectives=["Numberless", "Full", "Dreary", "Direful", "Exuberant"]

function generate(){
  var nounsNum = Math.round(Math.random()*4);
    var adjectivesNum = Math.round(Math.random()*4);

number1=String(nouns[nounsNum]);
number2=String(adjectives[adjectivesNum])

document.getElementById('output').innerHTML+="\nwhat a " + number2 + " " + number1 + " ";

}
