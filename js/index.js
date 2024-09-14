console.log("javascript loaded.");
var acc = document.getElementsByClassName("accordion");
var i;
ScrollReveal().reveal('.name', {delay: 100});
ScrollReveal().reveal('.occupation', { delay: 700 });
ScrollReveal().reveal('h5', {delay: 300});
ScrollReveal().reveal('h6', {delay: 500});
ScrollReveal().reveal('.scrollReveal');
for (i = 0; i < acc.length; i++) {
  var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    if($(this).find(".plus_minus").text() == "–"){
        $(this).find(".plus_minus").text("+");
    }
    else{
        $(this).find(".plus_minus").text("–");
    }
  }
}


$(".project").hover(
  function showProject() {
    $(this).find("#workImage").trigger("hover");
    $(this).find(".projectLink").trigger("hover");
    $(this).find(".filter").trigger("hover");
    $(this).find(".workTitle").trigger("hover");
    console.log("hover triggered");
  }
);
// $(".workTitle").hover(
//   showProject()
// );  


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
    if (window.scrollY > (header.offsetTop + header.offsetHeight)) {
        $("#portrait").css("opacity", "50%");
    }
    else {
        $("#portrait").css("opacity", "100%");
    }

  var about = document.getElementById("About Me");
  var skills = document.getElementById("Skills");
  var work = document.getElementById("Work");

  if ((window.scrollY > (about.offsetTop - about.offsetHeight)) && (window.scrollY < (skills.offsetTop - skills.offsetHeight))) {
      $("#aboutMenu").css("text-decoration", "underline");
  }
  else {
      $("#aboutMenu").css("text-decoration", "none");
  }
  if ((window.scrollY > (skills.offsetTop - skills.offsetHeight)) && (window.scrollY < (work.offsetTop - work.offsetHeight))) {
    $("#skillsMenu").css("text-decoration", "underline");
  }
  else {
    $("#skillsMenu").css("text-decoration", "none");
  }
  if ((window.scrollY > (work.offsetTop - work.offsetHeight)) && (!($("#footer").isInViewport()))) {
    $("#workMenu").css("text-decoration", "underline");
  }
  else {
    $("#workMenu").css("text-decoration", "none");
  }
  if ($("#footer").isInViewport()) {
    $("#contactMenu").css("text-decoration", "underline");
  }
  else {
    $("#contactMenu").css("text-decoration", "none");
  }
  });
