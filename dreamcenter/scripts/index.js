console.log("javascript loaded.");
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
    $(".groupnav").each(function(){
    if (($(this).children().hasClass("active"))){
        $(this).find(".subgroup-ul").css("display", "block");
        console.log("if triggered");
    }
    else{
        $(this).find(".subgroup-ul").css("display", "none");
        console.log("else triggered");
    }
    });
})

// var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
// dataSpyList.forEach(function (dataSpyEl) {
//   bootstrap.ScrollSpy.getInstance(dataSpyEl)
//     .refresh()
// })



// window.addEventListener("scroll", function() {
    
// });

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
//   };
  
//   window.addEventListener("scroll", function() {
//     var section1 = document.getElementById("section-1");
//     var section2 = document.getElementById("section-2");

//     if ((window.scrollY > (section1.offsetTop - section1.offsetHeight)) && (window.scrollY < (section2.offsetTop - section2.offsetHeight))) {
//         $("#subgroup-1").css("display", "block");
//     }
//     else {
//         $("#subgroup-1").css("display", "none");
//     }
//     });