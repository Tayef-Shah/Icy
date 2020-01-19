var button = document.getElementsByClassName("btn-success");
for (i=0;i<button.length;i++) {
  button[i].addEventListener('click', function() {
    window.location.href = "Dashboard.html";
    }, false);
}
