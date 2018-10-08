# beatToQuarters
Implementation of the rules of Neil Gow's RPG "Beat to Quarters"

I'll be running a game of Beat To Quarters at a convention.  Somehow, years ago, I found the RPG, and I like cards in systems and I love tall ships.  However, I'm not certain how the odds work out, and so I made this javascript implementation of the rules so that I could run a bunch of simulations and get the odds without having to do math.  Also possibly my players will want quicker resolution than drawing cards affords...  Though of course the romance of cards has its own appeal.  

For n = 10000: | unskilled PC  
GM draws: 1 | 52%  
GM draws: 2 | 33%  
GM draws: 3 | 22%  
GM draws: 4 | 15%  
GM draws: 5 | 10%  
GM draws: 6 | 8%  
GM draws: 7 | 6%  
GM draws: 8 | 4%  
GM draws: 9 | 3%  
  
This seems slightly variable, but not more than 1% (just eyeballing run vs run)

Odds of PC winning, over 10000 tests:  
PC draws--> |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  
GM draws: 1 | 54% | 72% | 80% | 86% | 90% | 93% | 93% | 96%  
GM draws: 2 | 37% | 56% | 67% | 75% | 81% | 85% | 88% | 91%  
GM draws: 3 | 28% | 45% | 56% | 66% | 73% | 79% | 82% | 86%  
GM draws: 4 | 22% | 38% | 50% | 59% | 66% | 72% | 77% | 82%  
GM draws: 5 | 17% | 31% | 43% | 52% | 60% | 67% | 73% | 77%  
GM draws: 6 | 15% | 27% | 38% | 47% | 55% | 62% | 67% | 73%  
GM draws: 7 | 12% | 24% | 34% | 42% | 50% | 56% | 63% | 69%  
GM draws: 8 | 11% | 21% | 30% | 38% | 46% | 53% | 60% | 65%  
GM draws: 9 |  9% | 19% | 27% | 35% | 42% | 48% | 55% | 61%  

The above is just with one PC deck in play.
