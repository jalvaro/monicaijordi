jQuery(document).ready(function($) {

	'use strict';

        var owl = $("#owl-testimonials");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
            
        });

        var calculateTopPosition = elementName =>  $(this).scrollTop() - $(elementName).position().top;

        var setBackGroundPosition = elementName => {
          var nameSplits = elementName.split('-');
          var horizontalPos = nameSplits[nameSplits.length - 1];
          var st = calculateTopPosition(elementName);
          $(elementName).css({'background-position': horizontalPos + '% calc(25% + '+(st*.5)+'px)'});
        }

        var setBackGroundAndScrollPosition = elementName => {
          setBackGroundPosition(elementName);

          $(window).scroll(function () {
            setBackGroundPosition(elementName);
          });
        }

        setBackGroundAndScrollPosition('.move-background-scroll-30');
        setBackGroundAndScrollPosition('.move-background-scroll-50');

        var setEmail = (elementName, username) => {
          var string1 = username;
          var string2 = "@";
          var string3 = "gmail.com";
          var string4 = string1 + string2 + string3;
          $(elementName).html("<a href='" + "mail" + "to:" + string1 +
            string2 + string3 + "'>" + string4 + "</a>");
        }

        var setPhone = (elementName, firstHalf, secondHalf) => {
          var string1 = '+34 ';
          var string2 = firstHalf;
          var string3 = secondHalf;
          var string4 = string1 + string2 + string3;
          $(elementName).html("<a href='" + "te" + "l:" + string1 +
            string2 + string3 + "'>" + string4 + "</a>");
        }

        setEmail('#email-monica', 'mquintanacodina');
        setEmail('#email-jordi', 'jordi.alvaro.arques');

        setPhone('#phone-monica', '64687', '0007');
        setPhone('#phone-jordi', '68585', '6354');


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        /*$('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
          var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabgroup).children('div').hide();
          $(target).show();
        })*/



        $(".pop-button").click(function () {
            //$(".pop").fadeIn(300);
            window.location.href = 'https://forms.gle/rwZWXMwCjfzteff69'
            return false;
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});
