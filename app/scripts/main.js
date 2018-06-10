$(document).ready(function() {
    console.log('sweet! page is ready to load functions');
    // listen for page scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
          // append my class to header
        $('header').addClass('sticky');
      } else {
        // remove my class when condition is not met
        $('header').removeClass('sticky');
      }
    });
    $('.js-contact').on('click', function() {
      event.preventDefault();
      $('.contact__body').toggleClass('js-show')
    });
    //end document ready
  });