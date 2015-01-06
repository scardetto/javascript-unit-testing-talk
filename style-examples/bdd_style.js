describe("A User", function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("should set the first name", function() {
    user.setFirstName("Robert");

    expect(user.getFirstName()).toEqual("Robert");
  });

  it("should set the last name", function() {
    user.setLastName("Scaduto");

    expect(user.getLastName()).toEqual("Scaduto");
  });
});
