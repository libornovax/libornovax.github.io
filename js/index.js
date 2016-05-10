//
// Libor Novak
// 8.5.2016
//


// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Recursive for loop with timeout between callings
function timeout(cards, i) {
	if (i >= cards.length)
	{
		shuffle(cards);
		i=0;
	}

    setTimeout(function () {
        var card = $('#' + cards[i]);
		var card_narrow = $('#n' + cards[i]);

        // If the element has hover on it, we do not want to flip it
        if (!card.hasClass('hovered') && !card_narrow.hasClass('hovered'))
        {
			card.toggleClass('flipped');
			card_narrow.toggleClass('flipped');
		}

        // create a recursive loop
        timeout(cards, i+1);
    }, 2000);
}


$(document).ready(function () {

	// ------------------------  HANDLE THE TILE DESCRIPTION  ------------------------ //
	// On mouseover on the tile show the description
	$('.tile').on('mouseover', function () {
		// Forbid the flipping
		$(this).addClass('hovered');

		var tile = $(this).children('.tile-desc');

		tile.css('display', 'table'); // Display table because of the vertical align
		tile.width($(this).width());
		tile.height($(this).height());

	});

	// On mouse out of the description hide the description
	$('.tile-desc').on('mouseout', function () {
		// Allow flipping again
		$(this).parent().removeClass('hovered');

		// Hide the description
		$(this).css('display', 'none');
	});


	// -------------------------  HANDLE THE TILE FLIPPING  ------------------------- //
	// Start randomly flipping cards
	// I will do this in a very simple way
	var cards = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

	shuffle(cards);
	timeout(cards, 0);
});

