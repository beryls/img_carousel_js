window.onload = function() {

  var carousel = document.getElementById('carousel');

  // Buttons
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  carousel.style.marginLeft = 0;
  var leftAmount = 0;

  var toRight = function() {
    leftAmount -= 612;
    carousel.style.marginLeft = (-1 * Math.abs(leftAmount%1836)) + "px";
  }

  var toLeft = function() {
    leftAmount -= 1224;
    carousel.style.marginLeft = (-1 * Math.abs(leftAmount%1836)) + "px";
  }

  next.onclick = function(event) {
    toRight();
  }

  previous.onclick = function(event) {
    toLeft();
  }

  next.onmouseover = function(event) {
    this.style.opacity = 0.2;
  }

  next.onmouseout = function(event) {
    this.style.opacity = 0.5;
  }

  previous.onmouseover = function(event) {
    this.style.opacity = 0.2;
  }

  previous.onmouseout = function(event) {
    this.style.opacity = 0.5;
  }
  // Create mouseoveer and mouseexit events for the buttons
  // to change their opacity from .5 to .2

  // Create onclick events to advance the images

}