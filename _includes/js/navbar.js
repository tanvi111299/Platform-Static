/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myyFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsived";
  }
  else {
    x.className = "topnav";
  }
}

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});

var sd = $('.icon');
sd.css("color", "white");
sd.css("padding-top", "20px");
sd.css("font-size", "2em");
var ms = $(".row");
ms.css("margin-right", "0px");
ms.css("margin-left", "0px");
