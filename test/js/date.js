$('#datepicker').each(function(){
    $(this).datepicker();
});

$(document).ready(function() {
	$('#clrbtn').click(function(){
		$('#datepicker').val('');
	});
})