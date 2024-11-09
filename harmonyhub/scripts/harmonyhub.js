console.log("javascript loaded.");

document.querySelectorAll('.lightbox').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')


firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
    $(".groupnav").each(function(){
    if (($(this).children().hasClass("active"))){
        $(this).find(".subgroup-ul").css("display", "block");
        // console.log("if triggered");
    }
    else{
        $(this).find(".subgroup-ul").css("display", "none");
        // console.log("else triggered");
    }

    });
})


$( window ).on( "resize", function() {
    const maxwidth=960;
    const breakpoint=1336;
    console.log($(window).width())
    if ($(window).width()>breakpoint) {
        $(".content-wrapper").width(maxwidth)
        // console.log($(".content-wrapper"))
    } else {
        $(".content-wrapper").width($(window).width()*.65)
        
    }
} );


window.addEventListener("scroll", function() {
    const lastElement = document.getElementById("item-6")
    // this makes the last item get marked as active

    const lastItemIsActive = ($(window).scrollTop() >= $(document).height() - $(window).height() - lastElement.offsetHeight)
    console.log($(window).scrollTop(),">=",$(document).height(),"-",$(window).height(),"-",lastElement.offsetHeight, lastItemIsActive)
    if(lastItemIsActive){
        console.log("setting it as active");
        $( "#conclusion" ).addClass("active");
        $( "#nextsteps" ).addClass("active");
    }
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
//     $(".groupnav").each(function(){
//     if (($(this).children().hasClass("active"))){
//         $(this).find(".main-ul").addClass("active");
//     }
//     });
// })

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