$(function(){
  $('.drawer-btn').on('click',function () {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.drawer-menu').removeClass('open');
      $('.drawer-background').removeClass('open');
    } else {
      $(this).addClass('active');
      $('.drawer-menu').addClass('open');
      $('.drawer-background').addClass('open');
    }


  });





});



