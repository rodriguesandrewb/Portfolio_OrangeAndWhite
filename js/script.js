var main = function() {
	$('#plusButton').click(function() {
		$('#drop').toggle('slow');
		console.log('in');
	});

	$(document).scroll(function() {
		$('#drop').hide('slow');
	});

	$('#me').effect('slide', {times:3}, 1000);
		
	// $('#naviTop').hide();

	function filter() {
		$('input[type="button"]').on('click', function() {
			var filterValue = $(this).val();
			console.log(filterValue);
			
			$('#gallery img').each(function() {
				var thisValue = $(this).attr('alt');
				console.log(thisValue);
				if(thisValue != filterValue) {
					$(this).css('display','none');
				}
			});
		});
	}

	filter();

}

$(document).ready(main());