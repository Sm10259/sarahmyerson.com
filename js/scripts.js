function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.home') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function()
{
	$('a.scroll-link').on('click', function(e)
  {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

	$('.top-content .text').waypoint(function()
  {
		$('nav').toggleClass('navbar-no-bg');
	});

  $('.home').backstretch("/img/backgrounds/1.jpg");
  $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
  $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");

  $('#top-navbar-1').on('shown.bs.collapse', function()
  {
  	$('.home').backstretch("resize");
  });

  $('#top-navbar-1').on('hidden.bs.collapse', function()
  {
  	$('.home').backstretch("resize");
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function()
  {
  	$('.testimonials-container').backstretch("resize");
  });

  new WOW().init();
});


jQuery(window).load(function()
{
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
});
