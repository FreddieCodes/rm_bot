describe("Responder", function() {

  // // beforeEach(function() {
  //   var responder = new Responder;
  //   var text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!";
  // // });

  it("should exist as a constructor", function() {
    var responder = new Responder;
    expect(responder.constructor.name).toEqual("Responder");
  });

  it("should respond to message", function() {
    var responder = new Responder;
    var text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!";
    responder.message()
    expect(responder.response).toEqual(text)
  });

  it("should respond to Bye with a different message", function() {
    var responder = new Responder;
    var msg = "Bye"
    responder.message(msg)
    expect(responder.response).toEqual("Running away *burrp*")
  });

  it("should respond to adventure with a different message", function() {
    var responder = new Responder;
    var msg = "adventure"
    responder.message(msg)
    expect(responder.response).toEqual("Adventure Time *burrp*")
  });



});
