$(document).ready(function(){

	//Nav Toggle//

	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('#header nav').toggleClass('active');
		
	});
});

//Scroll//

$(document).on('click', 'a[href^="#"]', function(event) {

	event.preventDefault();
 
	$('html,body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
 });
 
 
 
 
 //Sticky Header//

 $(window).scroll(function(){
	 if ($(window).scrollTop() >= 400) {
		$('#header').addClass('fixed-header');
	 }
	 else {
		$('#header').removeClass('fixed-header');
	 }
 });