const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-25%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translateX(-50%)';
      e.target.classList.add("active");
    }
      else if (e.target.classList.contains("fourth")) {
        slides.style.transform = "translateX(-75%)";
        e.target.classList.add("active");
      }
    }
  
});




let icon = document.getElementById('icon');

icon.addEventListener('click', function(){ 
  mobileMenu.classList.toggle('show');
  
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars'); 
});



// Slider 
jQuery(document).ready(function ($) {

  var interval = setInterval(function () {
        moveRight();
    }, 3000);
  
  var slideCount= $('#slider #slides li').length;
  var slideWidth = $('#slider #slides li').width();
  var slideHeight = $('#slider #slides li').height();
  
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
  $('#slider #slides').css({
    width: sliderUlWidth, marginLeft: - slideWidth
  });

	
  $('#slider #slides li:last-child').prependTo('#slider slides');
  function moveLeft() {
    $('#slider #slides').animate({
      left: + slideWidth
    }, 200, function () {
      $('#slider #slides li:last-child').prependTo('#slider #slides');
      $('#slider #slides').css('left', '');
    });
  };

  
  function moveRight() {
    $('#slider #slides').animate({
      left: - slideWidth
    }, 200, function () {
      $('#slider #slides li:first-child').appendTo('#slider #slides');
      $('#slider #slides').css('left', '');
    });
  };


    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
  
    //Stop the carousel on click
    $('#slider #slides').click(function() {
      clearInterval(interval);
  });
});    
