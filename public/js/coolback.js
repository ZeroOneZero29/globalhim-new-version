document.getElementById('coolback').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;
    var message = document.getElementById('message').value;
   
    alert('Сообщение отправлено!');
    this.reset();
  });