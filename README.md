# beatToQuarters
Implementation of the rules of Neil Gow's RPG "Beat to Quarters"

I'll be running a game of Beat To Quarters at a convention.  Somehow, years ago, I found the RPG, and I like cards in systems and I love tall ships.  However, I'm not certain how the odds work out, and so I made this javascript implementation of the rules so that I could run a bunch of simulations and get the odds without having to do math.  Also possibly my players will want quicker resolution than drawing cards affords...  Though of course the romance of cards has its own appeal.  

For n = 10000: | unskilled PC 
--- | ---  
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
--- | --- | --- | --- | --- | --- | --- | --- | ---  
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

Odds of PC winning with one help card, each number from 10000 tests:

PC draws--> | 1+1 | 2+1 | 3+1 | 4+1 | 5+1 | 6+1 | 7+1 | 8+1
--- | --- | --- | --- | --- | --- | --- | --- | ---  
GM draws: 1 | 71% | 81% | 86% | 90% | 92% | 93% | 95% | 96%
GM draws: 2 | 56% | 68% | 75% | 80% | 85% | 88% | 90% | 92%
GM draws: 3 | 45% | 57% | 66% | 73% | 78% | 82% | 85% | 89%
GM draws: 4 | 37% | 49% | 58% | 66% | 73% | 77% | 81% | 84%
GM draws: 5 | 32% | 43% | 52% | 59% | 66% | 72% | 76% | 81%
GM draws: 6 | 27% | 38% | 47% | 55% | 61% | 67% | 72% | 76%
GM draws: 7 | 23% | 34% | 42% | 49% | 56% | 63% | 68% | 72%
GM draws: 8 | 21% | 30% | 38% | 45% | 53% | 60% | 64% | 68%
GM draws: 9 | 18% | 27% | 34% | 41% | 49% | 56% | 61% | 66%

Odds of PC winning with two help cards from same deck, each number via 10000 tests:

PC draws--> | 1+2 | 2+2 | 3+2 | 4+2 | 5+2 | 6+2 | 7+2 | 8+2
--- | --- | --- | --- | --- | --- | --- | --- | ---
GM draws: 1 | 81% | 86% | 90% | 92% | 94% | 95% | 96% | 97%
GM draws: 2 | 68% | 75% | 81% | 84% | 87% | 90% | 92% | 93%
GM draws: 3 | 57% | 66% | 72% | 78% | 82% | 86% | 88% | 90%
GM draws: 4 | 49% | 58% | 66% | 72% | 77% | 82% | 84% | 87%
GM draws: 5 | 43% | 53% | 60% | 66% | 71% | 77% | 80% | 83%
GM draws: 6 | 38% | 46% | 55% | 61% | 68% | 72% | 76% | 80%
GM draws: 7 | 33% | 43% | 50% | 56% | 63% | 68% | 72% | 76%
GM draws: 8 | 29% | 38% | 44% | 52% | 58% | 64% | 70% | 73%
GM draws: 9 | 27% | 35% | 42% | 48% | 55% | 60% | 64% | 70%

Hm, I'm not sure I trust my code; I'd expect that other people's cards are more helpful than more of your own cards, because other people might be lending you a perfect success.  That's not how the odds are coming out, though.
