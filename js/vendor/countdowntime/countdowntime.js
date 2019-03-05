(function ($) {
    "use strict";

    $.fn.extend({ 

      countdown100: function(endTime) {

        return this.each(function() {
          var obj = $(this);

          initializeClock(endTime);

          function initializeClock(endTime) { 

            var monthsSpan = $(obj).find('.months');
            var daysSpan = $(obj).find('.days');
            var hoursSpan = $(obj).find('.hours');
            var minutesSpan = $(obj).find('.minutes');
            var secondsSpan = $(obj).find('.seconds');

            function updateClock() {
              var deadlineMoment = moment(endTime);
              var remainingDuration = moment.duration(deadlineMoment.diff(moment()));

              monthsSpan.html(remainingDuration.months());
              daysSpan.html(remainingDuration.days());
              hoursSpan.html(remainingDuration.hours());
              minutesSpan.html(remainingDuration.minutes());
              secondsSpan.html(remainingDuration.seconds())

              if (remainingDuration.asSeconds() <= 0) {
                clearInterval(timeinterval);
              }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
          }
        });
      }
    });

    

})(jQuery);