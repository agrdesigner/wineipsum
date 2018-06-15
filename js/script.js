$(document).ready(function () {
  var body = $('body');
  var toggleNav = $('.js--toggle-nav');
  var mobileTray = $('.js--mobile-tray');

  body.css('background-color', '#FDF9F6');

  toggleNav.click(function (event) {
    event.preventDefault();
    mobileTray.toggleClass('mobile-tray--opened');
    body.toggleClass('no-scroll');
  });
});
