$(window).on('load', function () {
	$('.loading').fadeOut();
});

$('input').focus(function(event) {
	$(this).parent().find('label').addClass('active');
});
$('input').focusout(function(event) {
	if ($(this).val() == null || $(this).val() == '') {
		$(this).parent().find('label').removeClass('active');
	}
});
$('a#std').click(function() {
	$('.modal').fadeIn();
	event.preventDefault();
});
$('.close').click(function() {
	$('.modal').fadeOut();
});
$('.carousel').bind('touchstart', function() {
	$('.drag-icon').fadeOut();
});
$('.carousel').mousedown(function() {
	$('.drag-icon').fadeOut();
	var cmp = parseInt(event.clientX);
	var csl = $('.carousel').scrollLeft();
	$(this).mousemove(function() {
		var nmp = parseInt(event.clientX);
		var moveamount;
		if (csl == '0') {
			moveamount = cmp - nmp;
		} else {
			moveamount = csl + (cmp - nmp);
		}
		$('.carousel').scrollLeft(moveamount);
	});
	$(this).addClass('down');
});
$('.carousel').mouseup(function() {
	if ($('.carousel').scrollLeft() == 0) {
		$('.drag-icon').fadeIn();
	}
	$(this).unbind('mousemove');
	$(this).removeClass('down');
});

$('#rsvp-form').submit(function() {
	event.preventDefault();
	var name = encodeURIComponent($('#name').val());
	var email = encodeURIComponent($('#email').val());
	var dietary = encodeURIComponent($('#dietary').val());
	var attend = encodeURIComponent($('#attend').val());

	var entry_name = 'entry.559352220';
	var entry_email = 'entry.924465480';
	var entry_dietary = 'entry.521641686';
	var entry_attend = 'entry.877086558';

	var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSckAY7cFO9RQLJM1MnTkj_6qr37NAitFVhgWAKHr1-d3ubT4w/formResponse?';
	var submitRef = '&submit=Submit';
	var submitURL = (baseURL + entry_name + '=' + name + '&' + entry_email + '=' + email + '&' + entry_dietary + '=' + dietary + '&' + entry_attend + '=' + attend + submitRef);

	console.log(submitURL);
	$('#no-target').attr('src', submitURL);

	$.confetti.start();

	$('#rsvp-form').fadeOut();
	$('#rsvp-sub').text('Thank you for RSVP\'ing. Make sure you save the date!');
	$('.confirmation').fadeIn().css('display', 'inline-block');
	$('.rsvp-form').addClass('confirm');

	// Add change of confirmation for `No` RSVP
});