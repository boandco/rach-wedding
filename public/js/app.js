$('input').focus(function(event) {
	$(this).parent().find('label').addClass('active');
});
$('input').focusout(function(event) {
	if ($(this).val() == null || $(this).val() == '') {
		$(this).parent().find('label').removeClass('active');
	}
});