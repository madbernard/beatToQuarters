// In which I make a computer game out the Beat to Quarters system

// player deck is 53 cards, one of them a joker; gm deck provides the card of fate... As if GM card handed into player deck
// H, S, C, D 1-13 (11 = J, 12 = Q, 13 = K)
// match suit = success
// match number = crit
// match exact = perfect
// each rank of success beats all lower ranks

// my thought is to rand the number, then rand the suit (unless only one suit is plausible)
// store cards by number in obj

// first check if joker, flip boolean
var jokerUsed = false;
var cardsUnplayed = 3;

if (!jokerUsed) {
// if (!jokerUsed && !GM) {
  if (Math.random() < 1/cardsUnplayed) jokerUsed = true;
}


// console.log('joker is one in three, top is joker?', jokerUsed);

var cards = ["1H", "1S", "1C", "1D", "2H", "2S", "2C", "2D", "3H", "3S", "3C", "3D", "4H", "4S", "4C", "4D", "5H", "5S", "5C", "5D", "6H", "6S", "6C", "6D", "7H", "7S", "7C", "7D", "8H", "8S", "8C", "8D", "9H", "9S", "9C", "9D", "10H", "10S", "10C", "10D", "JH", "JS", "JC", "JD", "QH", "QS", "QC", "QD", "KH", "KS", "KC", "KD"];

// var deck = {};

// for (var i = 0; i < cards.length; i++) {
//   deck[cards[i]] = true;
// }

var deck = { '1H': true,
  '1S': true,
  '1C': true,
  '1D': true,
  '2H': true,
  '2S': true,
  '2C': true,
  '2D': true,
  '3H': true,
  '3S': true,
  '3C': true,
  '3D': true,
  '4H': true,
  '4S': true,
  '4C': true,
  '4D': true,
  '5H': true,
  '5S': true,
  '5C': true,
  '5D': true,
  '6H': true,
  '6S': true,
  '6C': true,
  '6D': true,
  '7H': true,
  '7S': true,
  '7C': true,
  '7D': true,
  '8H': true,
  '8S': true,
  '8C': true,
  '8D': true,
  '9H': true,
  '9S': true,
  '9C': true,
  '9D': true,
  '10H': true,
  '10S': true,
  '10C': true,
  '10D': true,
  'JH': true,
  'JS': true,
  'JC': true,
  'JD': true,
  'QH': true,
  'QS': true,
  'QC': true,
  'QD': true,
  'KH': true,
  'KS': true,
  'KC': true,
  'KD': true };

// console.log(deck);
// for (var i = 1; i < 14; i++) {
//   cards.push(i + 'H');
//   cards.push(i + 'S');
//   cards.push(i + 'C');
//   cards.push(i + 'D');
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// console.log(cards[getRandomInt(cards.length)]);

function drawSomeCards(n, thisDeck) {
  var cards = Object.keys(thisDeck),
    hand = [],
    drawn;
  while (n) {
    drawn = cards[getRandomInt(cards.length)];
    if (thisDeck[drawn]) {
      hand.push(drawn);
      delete thisDeck[drawn];
      n--;
    }
  }
  return hand;
}

// console.log(drawSomeCards(2, deck));

function doesPCWinTest(gmDraws, pcDraws, pcHelp) {
  // todo: use arguments to run two etc pcs helping this pc
  if (pcHelp) {
    var helpDeck = Object.assign({'JOKER':true}, deck);
    var helpHand = drawSomeCards(pcHelp, helpDeck);
  }

  var pcDeck = Object.assign({'JOKER':true}, deck),
    gmDeck = Object.assign({}, deck),
    gmHand = drawSomeCards(gmDraws + 1, gmDeck),
    cardOfFate = gmHand.pop(),
    pcHand = drawSomeCards(pcDraws, pcDeck);

  if (pcHelp) {pcHand = pcHand.concat(helpHand);}

  var gmResults = countSuccesses(gmHand, cardOfFate);
  var pcResults = countSuccesses(pcHand, cardOfFate);

  if () return doesPCWinTest(gm); //todo, all 0 = reroll

  if (pcResults.perfect !== gmResults.perfect){
    return pcResults.perfect > gmResults.perfect;
  }
  else if (pcResults.critical !== gmResults.critical) {
    return pcResults.critical > gmResults.critical;
  }
  else if (pcResults.ordinary !== gmResults.ordinary) {
    return pcResults.ordinary > gmResults.ordinary;
  }
  else return tiebreaker(gmHand, pcHand); // todo: make this
}

function countSuccesses(handArr, cof) {
  var successes = {
      'perfect': 0,
      'critical': 0,
      'ordinary': 0
    },
    suit = '',
    rank = '',
    cofSuit = cof[1],
    cofRank = cof[0],
    card = '';

  for (var i = 0; i < handArr.length; i++) {
    card = handArr[i];
    if (card === cof || card === 'JOKER') {
      successes.perfect++;
      continue;
    }
    suit = card[1];
    rank = card[0];
    if (suit === cofSuit) {successes.ordinary++;}
    if (rank === cofRank) {successes.critical++;}
  }
  return successes;
}

console.log(countSuccesses(['3H','JOKER','4D','QS'],'3S'));



// doesPCWinTest(5, 5, 5);



