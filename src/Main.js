function Responder() {
  this.response = ""
}

Responder.prototype.message = function(msg = window.prompt("Hello, what do you want to say?", "Hello")){
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
  document.getElementById("demo").innerHTML = text;
  return text;
}


// function myFunction() {
//     var text;
//     var message = prompt("What's your favorite cocktail drink?", "Daiquiri");
//     switch(message) {
//         case "Hello":
//         text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!";
//         break;
//     case "Daiquiri":
//         text = "Daiquiri is my favorite too!";
//         break;
//         case "Cosmopolitan":
//         text = "Really? Are you sure the Cosmopolitan is your favorite?";
//         break;
//         default:
//         text = "I have never heard of that one..";
//     }
//     document.getElementById("demo").innerHTML = text;
// }
