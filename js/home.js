$(document).ready(function() {
  $('.leftPanel, .rightPanel').hover(
    function () {
      $('.overlay', this).fadeIn(200, null);
    },
    function () {
      $('.overlay', this).fadeOut(200, null);
    }
  );
  $('.leftPanel, .rightPanel').click(
    function () {
      window.location = $(this).find('a').attr('href');
    }
  );

});
