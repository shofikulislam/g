(function ($){
	"use strict";

	$(document).ready(function(){

    /*========Preloader Setup========*/
    setTimeout(function(){
        $('.preloader').addClass('loaded');
    }, 1000);

 	/* ----------------------------------------------------------- */
   /*  Hero Area
  /* ----------------------------------------------------------- */
  $(".hero-area").owlCarousel({
  		items: 1,
  		autoplay: false,
  		autoplayHoverPause:true,
  		loop: true,
  		nav: true,
  		dots: false,
  		mauseDrag: true,
  		touchDrag: true,
  		smartSpeed: 800,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  		});


 	/* ----------------------------------------------------------- */
   /*  Service Area
  /* ----------------------------------------------------------- */
  $(".service-list").owlCarousel({
  		items: 3,
  		autoplay: false,
  		loop: true,
  		nav: true,
  		dots: false,
      margin:7,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }
  		});

  /* ----------------------------------------------------------- */
   /*  Counter UP
  /* ----------------------------------------------------------- */
      $(".counter").counterUp({
        delay: 10,
        time: 1000
      });

  	/* ----------------------------------------------------------- */
   /*  Testimonial Area
  /* ----------------------------------------------------------- */

  $(".single-testimonial").owlCarousel({
  		items: 1,
  		// autoplay: true,
  		loop: true,
  		nav: true,
  		dots: false,
  		smartSpeed: 800,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  		});
  
    /* ----------------------------------------------------------- */
    /*                         ScrollIt Setup
    /* ----------------------------------------------------------- */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -68 // offste (in px) for fixed top navigation
    });

    /* ----------------------------------------------------------- */
    /*                         Contact Form
    /* ----------------------------------------------------------- */
   $('#contact-form').submit(function () {

      var $form = $(this),
         $error = $form.find('.error-container'),
         action = $form.attr('action');

      $error.slideUp(750, function () {
         $error.hide();

         var $name = $form.find('.form-name'),
            $phone = $form.find('.form-phone'),
            $email = $form.find('.form-email'),
            $message = $form.find('.form-message');

         $.post(action, {
               name: $name.val(),
               phone: $phone.val(),
               email: $email.val(),
               message: $message.val()
            },
            function (data) {
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $phone.val('');
                  $email.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });

	});

}(jQuery));
