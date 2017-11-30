// $(function() {

// 	$('body').fadeOut(1500);

// });

$(document).ready(function() {
	
	// form switcher
	// $('button[data-src="#form-callback"]').on('click', function() {
	// 	var metrika = $(this).data('fmetrika');
	// 	var header = $(this).data('fhead');
	// 	var info = $(this).data('finfo');
	// 	$('.popup-callback').attr('onsubmit', metrika);
	// 	$('.popup-callback h3').text(header);
	// 	$('.popup-callback [name=form_subject]').val(info);
	// });

	// $('a[data-src="#form-callback"]').on('click', function() {
	// 	var metrika = $(this).data('fmetrika');
	// 	var header = $(this).data('fhead');
	// 	var info = $(this).data('finfo');
	// 	$('.popup-callback').attr('onsubmit', metrika);
	// 	$('.popup-callback h3').text(header);
	// 	$('.popup-callback [name=form_subject]').val(info);
	// });

	  // thanks modal remove
  $('.form-thanks > .thanks_wrapper > .thanks_text > .thanks_close').click(function() {
  	$('.form-thanks > .thanks_wrapper').removeClass('active');	    
		// $('.form-thanks > .thanks_wrapper').removeClass('active');	    
	});


	// form
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.form-thanks .thanks_wrapper').addClass('active');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.fancybox.close();
			}, 5000);
		});
		return false;
	});



 




 
});