const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const output = document.getElementById('output');
  output.innerHTML = '';

  const formData = new FormData();
  const fileInput = document.getElementById('file');
  formData.append('file', fileInput.files[0]);

  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState !== request.DONE) return;
    if (request.status !== 200) return;

    const response = JSON.parse(request.responseText);
    output.innerHTML =
`<div class="well">
  <samp>{<br>&nbsp;&nbsp;"name": "${response.name}",<br>&nbsp;&nbsp;"size": ${response.size}<br>}</samp>
</div>`;
  };
  request.open('POST', '/upload', true);
  request.send(formData);

  e.preventDefault();
}, false);
