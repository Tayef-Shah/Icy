var beef = document.getElementById("beef");
var beefgrades = document.getElementById("beefgrades");
var poultry = document.getElementById("poultry");
var poultrygrades = document.getElementById("poultrygrades");
var pork = document.getElementById("pork");
var porkgrades = document.getElementById("porkgrades");

beef.addEventListener('click', function(){
  beefgrades.style.display = "flex";
  poultrygrades.style.display = "none";
  porkgrades.style.display = "none";
}, false);

poultry.addEventListener('click', function() {
  poultrygrades.style.display = "flex";
  beefgrades.style.display = "none";
  porkgrades.style.display = "none";
}, false);

pork.addEventListener('click', function() {
  porkgrades.style.display = "flex";
  beefgrades.style.display = "none";
  poultrygrades.style.display = "none";
}, false);
