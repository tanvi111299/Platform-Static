//Progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Sliding content upward while we scroll downward
//Collapsible Buttons
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Active button on platform navbar
var btnContainer = document.getElementById("myTab1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activebtn");
    current[0].className = current[0].className.replace("activebtn", "");
    this.className += " activebtn";
  });
}

//Read more button in professional services
function myFunctionbtn() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

var wh = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log(wh);
if (wh < 500) {
  document.getElementById('btn1').innerHTML = "1";
  document.getElementById('btn2').innerHTML = "2";
  document.getElementById('btn3').innerHTML = "3";
  document.querySelector('.technav1').classList.add('col-1');
  document.querySelector('.technav1').classList.remove('col-4');
  document.querySelector('.technav2').classList.add('col-1');
  document.querySelector('.technav2').classList.remove('col-4');
  document.querySelector('.technav3').classList.add('col-1');
  document.querySelector('.technav3').classList.remove('col-4');
  document.querySelector('#myTab1').style.marginLeft = 30 + "px";
}
