// DOM definitions
var nightModeToggleButton = document.querySelector(".nightModeButton");
var lightModeToggleButton = document.querySelector(".lightModeButton");
var container = document.querySelector(".container");
var para = document.querySelector(".paragraph");
var header = document.querySelector(".header");
var body = document.querySelector("body");


// Night mode
nightModeToggleButton.onclick = function () {
  $(body).css("background-color","black");
  $(body).css("color", "white");
};

// Light mode
lightModeToggleButton.onclick = function () {
  $(body).css("background-color","white");
  $(body).css("color", "black");
};
