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
		card.removeClass('flipped');
	});

});


// ------------------------  HANDLE THE TILE TABLE  ------------------------ //
var tiles;

var organizeTiles = function () {
	$('#tile-table').children().detach();

	var per_row = 3;
	if ($(window).width() < 750)
	{
		per_row = 2;
	}
	if ($(window).width() < 450)
	{
		per_row = 1;
	}

	var row = $('<div class="row"></div>');
	var current_row = 0;
	tiles.each(function () {
		var tl = $(this);
		tl.css('width', 100/per_row + '%');
		row.append($(this));
		current_row += 1;

		if (current_row === per_row)
		{
			$('#tile-table').append(row);
			row = $('<div class="row"></div>');
			current_row = 0;
		}
	});
};

$(window).load(function () {
	tiles = $('#tile-table').children();
	tiles.detach();
	organizeTiles();

	$(window).resize(organizeTiles);
});


