console.log("javascript loaded.");
var acc = document.getElementsByClassName("accordion");
var i;
ScrollReveal().reveal('.name', {delay: 100});
ScrollReveal().reveal('.occupation', { delay: 700 });
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
window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("header");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        $("#portrait").css("opacity", "50%");
    }
    else {
        $("#portrait").css("opacity", "100%");
    }
  });

//attempts
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     var panel = this.nextElementSibling;
//     panel.style.maxHeight = panel.scrollHeight + "px";
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     if (panel.style.display === "none") {
//       panel.style.display = "block";
//     } else {
//       panel.style.display = "none";
//     }

//     if($(this).find(".plus_minus").text() == "-"){
//         $(this).find(".plus_minus").text("+");
//     }
//     else{
//         $(this).find(".plus_minus").text("-");
//     }
//   });
// }

// $(".toggle").click(function(){
//     console.log("toggle clicked.");
//     $(this).find(".workToggle").toggleClass("inactive");
//     if($(this).find(".workToggle").hasClass("inactive")){
//         $(this).find(".plus_minus").text("+");
//     }
//     else{
//         $(this).find(".plus_minus").text("-");
//     }
//     $(this).siblings(".toggle").find(".workToggle").removeClass("inactive");
//   });
   
// $(".toggle").click(function(){
//     console.log("toggle clicked.");
//     $(".workToggle").slideToggle();
//     if($(this).find(".plus_minus").text() == "-"){
//         $(this).find(".plus_minus").text("+");
//     }
//     else{
//         $(this).find(".plus_minus").text("-");
//     }
    
// });