describe('pingpong', function() {
  it("is false for any input including A-Za-z", function() {
    expect("cat").to.not.be.true;
  });

  it("is true for userInput that are greater than 0", function() {
    expect(20).to.not.be.false;
  });

  it("is false for userInput that are equal to 0", function() {
    expect(0).to.not.be.true;
  });

});
