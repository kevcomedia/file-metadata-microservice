const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const formData = new FormData();
  const fileInput = document.getElementById('file');
  formData.append('file', fileInput.files[0]);

  const request = new XMLHttpRequest();
  request.open('POST', '/upload', true);
  request.send(formData);

  e.preventDefault();
}, false);
