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
        var card = document.getElementById(cards[i]);
		card.classList.toggle('flipped');

        // create a recursive loop
        timeout(cards, i+1);
    }, 2000);
}


window.onload = function () {
	// Start randomly flipping cards
	// I will do this in a very simple way
	var cards = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

	shuffle(cards);
	timeout(cards, 0);
};