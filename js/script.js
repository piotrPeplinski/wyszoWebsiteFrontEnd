/* ------------------------------- */
/* READ MORE BOXES */
/* ------------------------------- */

/* OPENING */
document.getElementById("popupLink1").onclick = function () {
  document.getElementById("popup1").style.display = "block";
};
document.getElementById("popupLink2").onclick = function () {
  document.getElementById("popup2").style.display = "block";
};
document.getElementById("popupLink3").onclick = function () {
  document.getElementById("popup3").style.display = "block";
};
document.getElementById("popupLink4").onclick = function () {
  document.getElementById("popup4").style.display = "block";
};

/* CLOSING */
document.getElementById("close1").onclick = function () {
  document.getElementById("popup1").style.display = "none";
};
document.getElementById("close2").onclick = function () {
  document.getElementById("popup2").style.display = "none";
};
document.getElementById("close3").onclick = function () {
  document.getElementById("popup3").style.display = "none";
};
document.getElementById("close4").onclick = function () {
  document.getElementById("popup4").style.display = "none";
};