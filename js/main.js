$(function () {

  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
  });

  $(document).ready(function () {
    $("#_header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.nav-mobile,.flex-nav').toggleClass('active');
      if ($(this).hasClass('is-active')) {
        $('.btn-top').css('z-index', '1')
      } else {
        $('.btn-top').css('z-index', '2')
      }
    });

    $("#_header").on("click", ".show-menu", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    });

    $('.show-menu').click(function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('.show-menu').text('+');
        $(this).text('-');
        $(this).parent().parent().parent().find('dd').stop().slideUp();
        $(this).parent().parent().find('dd').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('dd').stop().slideUp();
      }
    })

    $("#_header").on("click", ".trd", function () {
      if ($(this).text() == '+') {
        $(this).parent().parent().parent().find('ul').stop().slideUp();
        $(this).parent().parent().parent().find('.trd').text('+');
        $(this).text('-');
        $(this).parent().parent().find('ul').stop().slideDown();
      } else {
        $(this).text('+');
        $(this).parent().parent().find('ul').stop().slideUp();
      }
    });

    /** pc hover */
    $("#_header").on("mouseenter", ".nav-right li", function () {
    });
  })
})

function loadHeader(index) {
  $('#_header').load("header.html", "", function (response, status, request) {
    $('#_header').html(response);
    $('.nav-line').css({'width':$(".nav-right li:eq(1)").width()})
    $(".nav-right li:eq(" + index + ")").addClass('active')
    
  });

}



