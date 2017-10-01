function Responder() {
  this.response = ""
}

Responder.prototype.message = function(msg = window.prompt("Hello, what do you want to ask Rick?", "Hello")){
  var text;
  switch(msg){
    case "Bye":
    text = "Running away *burrp*";
    break;
    case "adventure":
    text = "Adventure Time *burrp*";
    break;
    default:
    text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!"
  }
  this.response = text
  // document.getElementById("demo").innerHTML = text;
  return text;
}

Responder.prototype.updateView = function() {
  document.getElementById("demo").innerHTML = this.response
}
