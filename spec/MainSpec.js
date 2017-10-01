describe("Responder", function() {

  // beforeEach(function() {
    var responder = new Responder;
    var text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!";
  // });

  it("should exist as a constructor", function() {
    var responder = new Responder;
    expect(responder.constructor.name).toEqual("Responder");
  });

  it("should respond to message", function() {
    var responder = new Responder;
    var text = "Hi, I'm *burrp* Rick, the most *burrp* intelligent being in the universe!";
    expect(responder.message()).toEqual(text)
  });

  it("should respond to Bye with a different message", function() {
    var responder = new Responder;
    var msg = "Bye"
    expect(responder.message(msg)).toEqual("Running away *burrp*")
  });

  it("should respond to adventure with a different message", function() {
    var responder = new Responder;
    var msg = "adventure"
    expect(responder.message(msg)).toEqual("Adventure Time *burrp*")
  });

});
