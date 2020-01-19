// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("manufacturer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (i=0; i<btn.length; i++) {
  btn[i].addEventListener('click', function() {
    modal.style.display = "block";
  }, false);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("Yes").addEventListener('click', function() {
  modal.style.display = "none";
}, false);

document.getElementById("No").addEventListener('click', function() {
  modal.style.display = "none";
}, false);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
