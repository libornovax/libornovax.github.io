//
// Libor Novak
// 8.5.2016
//


$(document).ready(function () {

	// ------------------------  HANDLE THE TILE FLIPPING  ------------------------ //
	// On mouseover on the tile show the description
	$('.tile').on('mouseover', function () {
		// Flip the card
		$(this).addClass('flipped');

		var back = $(this).find('.back');
		back.width($(this).width());
		back.height($(this).height());
	});

	// On mouse out of the description hide the description
	$('.tile').on('mouseleave', function () {
		// Flip back
		var card = $(this);
		setTimeout(function () {
			card.removeClass('flipped');
		}, 1000);
	});

});

