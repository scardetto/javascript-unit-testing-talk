QUnit.test("Setting the properties of a User", function(assert) {
  // Arrange
  var user = new User();

  // Act
  user.setFirstName("Robert");
  user.setLastName("Scaduto");

  // Assert
  assert.ok(user.getFirstName() === "Robert", "First name should be set");
  assert.ok(user.getLastName() === "Scaduto", "Last name should be set");
});
