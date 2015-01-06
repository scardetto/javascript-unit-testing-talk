var helloWorld = {
  init: function() {
    $('#sayHello').click(function() {
      $('#greeting').text("Hello, " + $('#name').val());
    });

    $('#sayHelloAsync').click(function() {
      setTimeout(function() {
        $('#greetingAsync').text("Hello, " + $('#name').val());
      });
    });
  }
};
