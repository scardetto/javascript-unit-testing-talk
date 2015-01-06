var User = function() {
  this.firstName = null;
  this.lastName = null;
};

User.prototype.setFirstName = function(name) {
  this.firstName = name;
};

User.prototype.setLastName = function(name) {
  this.lastName = name;
};
