
var start = new Date();
var startMilli = start.getTime();

console.log(startMilli)

function stoptime() {

  var end = new Date();
  var endMilli = end.getTime();
var diffMilli = endMilli - startMilli
var diffsec = diffMilli/1000

alert( "the number of seconds is " + diffsec)
}
