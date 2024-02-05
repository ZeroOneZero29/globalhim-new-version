document.getElementById('coolback').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('mail').value;
  var tel = document.getElementById('tel').value;
  var message = document.getElementById('message').value;

  fetch("/message", {
    method: "POST",
    body: JSON.stringify({
      name, email, tel, message
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  alert('Сообщение отправлено!');
  this.reset();
});