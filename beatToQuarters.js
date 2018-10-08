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

var cards = ["1H", "1S", "1C", "1D", "2H", "2S", "2C", "2D", "3H", "3S", "3C", "3D", "4H", "4S", "4C", "4D", "5H", "5S", "5C", "5D", "6H", "6S", "6C", "6D", "7H", "7S", "7C", "7D", "8H", "8S", "8C", "8D", "9H", "9S", "9C", "9D", "0H", "0S", "0C", "0D", "JH", "JS", "JC", "JD", "QH", "QS", "QC", "QD", "KH", "KS", "KC", "KD"];

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
  '0H': true,
  '0S': true,
  '0C': true,
  '0D': true,
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

function doesPCWinTest(gmDraws, pcDraws, pcHelp, unskilled) {
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

  if (unskilled) {
    pcResults.ordinary = pcResults.perfect + pcResults.critical + pcResults.ordinary;
    pcResults.perfect = 0;
    pcResults.critical = 0;
  }

  if (!gmResults.critical &&
      !gmResults.ordinary &&
      !pcResults.perfect  &&
      !pcResults.critical &&
      !pcResults.ordinary ) return doesPCWinTest(gmDraws, pcDraws, pcHelp);

  if (pcResults.perfect !== gmResults.perfect){
    return pcResults.perfect > gmResults.perfect;
  }
  else if (pcResults.critical !== gmResults.critical) {
    return pcResults.critical > gmResults.critical;
  }
  else if (pcResults.ordinary !== gmResults.ordinary) {
    return pcResults.ordinary > gmResults.ordinary;
  }
  else if (!pcResults.ordinary && !gmResults.ordinary) {
    // IMO if they tie only on crits, PC should win
    return true;
  }
  else return tiebreaker(gmHand, pcHand, cardOfFate[1]);
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

function tiebreaker(gmHand, pcHand, cofSuit) {
  var pcRanks = pcHand.filter(function(card){return card[1] === cofSuit;}).map(getRankNumber),
    pcHighRank = Math.max(...pcRanks),
    gmRanks = gmHand.filter(function(card){return card[1] === cofSuit;}).map(getRankNumber),
    gmHighRank = Math.max(...gmRanks);

  return pcHighRank >= gmHighRank;
}

function getRankNumber(card) {
  var rank = card[0],
    faceToNumber = {'J': 11, 'Q': 12, 'K': 13, '0': 10};
  if (faceToNumber[rank]) {rank = faceToNumber[rank];}
  return parseInt(rank, 10);
}


// console.log(countSuccesses(['3H','JOKER','4D','QS'],'3S'));
// console.log(correctSuit('3H', 'H'));
// console.log(correctSuit('3S', 'H'));
// console.log(getRankNumber('3D'));
// console.log(getRankNumber('QD'));
// console.log(getRankNumber('0S'));
// console.log(tiebreaker(['QD','3S','0D'],['5D','4C','KC','7D'],'D'));
// console.log(tiebreaker(['QD','3S','0D'],['QD','4C','KC','7D'],'D'));

// console.log(doesPCWinTest(5, 5, 2));

function createOddsTable(n) {
  // gm static test for Heroic Effort = 9
  // scan of NPCs reveals one with a 7 skill
  // want columns being PC increasing cards
  // rows being GM increasing cards
  var headerStart = 'Odds of PC winning, over ' + n + ' tests:  ';
  var columnHeaderStart = 'PC draws--> ';

  var table = [headerStart, columnHeaderStart];

  for (var gm = 1; gm < 10; gm++) {
    var resultRow = 'GM draws: ' + gm + ' ';

    for (var pc = 1; pc < 9; pc++) {
      if (gm === 1) {table[1] = table[1] + '|  ' + pc + '  ';}

      var pcWins = 0,
        counter = n;

      while (counter) {
        if (doesPCWinTest(gm, pc, 0)) {pcWins++;}
        counter--;
      }
      var odds = ((pcWins/n)*100).toFixed(0);
      if (odds.length < 2) {odds = ' ' + odds;}
      resultRow = resultRow + '| ' + odds + '% ';
    }
    table.push(resultRow);
  }
  console.log(table.join('  \n'));
}

createOddsTable(10000);