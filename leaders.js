var leaderboard = document.getElementsByClassName("leaderboard-list")[0];

var button = document.getElementsByClassName("nav-link");

document.getElementById("beef").addEventListener('click', function() {
  var ul = document.getElementById("theList");
  var text = document.getElementById("empty");
  text.innerHTML = '';
  ul.innerHTML = '';
  var a = document.createElement("LI");
  a.style.paddingBottom = "50px";
  var atext = document.createTextNode("#1 Beef, Process: 100% suckler, GWP: 25300");

  var b = document.createElement("LI");
  b.style.paddingBottom = "50px";
  var btext = document.createTextNode("#2 Beef, Process: Lowland, GWP: 15600");

  var c = document.createElement("LI");
  c.style.paddingBottom = "50px";
  var ctext = document.createTextNode("#3 Beef, Process: Hill and upland, GWP: 16400");

  var d = document.createElement("LI");
  d.style.paddingBottom = "50px";
  var dtext = document.createTextNode("#4 Beef, Process: Non-organic, GWP: 15800");
  a.appendChild(atext);
  b.appendChild(btext);
  c.appendChild(ctext);
  d.appendChild(dtext);

  ul.appendChild(a);
  ul.appendChild(b);
  ul.appendChild(c);
  ul.appendChild(d);

}, false);

document.getElementById("lamb").addEventListener('click', function() {
  var ul = document.getElementById("theList");
  var text = document.getElementById("empty");
  text.innerHTML = '';
  ul.innerHTML = '';
  var text = document.getElementById("empty");
  text.style.marginTop = "125px";
  text.style.align = "center";
  var words = document.createTextNode("Sorry nothing here yet!");
  leaderboard.appendChild(text);
  text.appendChild(words);
}, false);

document.getElementById("poultry").addEventListener('click', function() {

  var ul = document.getElementById("theList");
  var text = document.getElementById("empty");
  text.innerHTML = '';
  ul.innerHTML = '';
  var a = document.createElement("LI");
  a.style.paddingBottom = "50px";
  var atext = document.createTextNode("#1 Chicken,	Process: Free range, GWP: 5480");

  var b = document.createElement("LI");
  b.style.paddingBottom = "50px";
  var btext = document.createTextNode("#2 Chicken,	Process: Conventional,	GWP: 4570");

  var c = document.createElement("LI");
  c.style.paddingBottom = "50px";
  var ctext = document.createTextNode("#3 Chicken,	Process: Conventional,	GWP: 2079");

  a.appendChild(atext);
  b.appendChild(btext);
  c.appendChild(ctext);

  ul.appendChild(a);
  ul.appendChild(b);
  ul.appendChild(c);

}, false);

document.getElementById("pork").addEventListener('click', function() {

  var ul = document.getElementById("theList");
  var text = document.getElementById("empty");
  text.innerHTML = '';
  ul.innerHTML = '';
  var a = document.createElement("LI");
  a.style.paddingBottom = "50px";
  var atext = document.createTextNode("#1 Pork,	Process: Conventional,	GWP: 77883");

  var b = document.createElement("LI");
  b.style.paddingBottom = "50px";
  var btext = document.createTextNode("#2 Pork, Process:	Indoor breeding, GWP:	6420");

  var c = document.createElement("LI");
  c.style.paddingBottom = "50px";
  var ctext = document.createTextNode("#3 Pork, Process:	Conventional, GWP:	6360");

  var d = document.createElement("LI");
  d.style.paddingBottom = "50px";
  var dtext = document.createTextNode("#4 Pork, Process:	Outdoor breeding, GWP:	6330");

  var e = document.createElement("LI");
  e.style.paddingBottom = "50px";
  var etext = document.createTextNode("#5 Pork, Process:	Heavier finishing, GWP:	6080");
  a.appendChild(atext);
  b.appendChild(btext);
  c.appendChild(ctext);
  d.appendChild(dtext);
  e.appendChild(etext);

  ul.appendChild(a);
  ul.appendChild(b);
  ul.appendChild(c);
  ul.appendChild(d);
  ul.appendChild(e);

}, false);
