import React from 'react';
import './App.scss';
import Rule from './components/Rule';
import Checklist from './components/Checklist';
import Pick from './components/Pick';

export const PERFORMANCE_METHOD = {
  BOOLEAN: 'BOOLEAN',
  MINIMUM: 'MINIMUM',
  MAXIMUM: 'MAXIMUM',
};
const rules = [];

rules.push(<Rule
  name="Prepare by making a tier list"
  description={(<>
    75% of higher win-rate drafters on 17Lands have made their own tier list for the set. This familiarizes them with the cards and allows focus on draft-specific context while making picks. Complete this by moving cards out of TBD in your tier list here: <a href="https://www.17lands.com/card_tiers/ZNR">https://www.17lands.com/card_tiers/ZNR</a>
  </>)}
  performance={0}
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target={265}
  children={<div>Cards you have ranked: 0 / 265</div>}
/>);
rules.push(<Rule
  name="Follow your tier list order early on"
  description="Your first several picks should usually use your tier list's ordering within a color. Below are any recent times that did not happen."
  performance="0.9"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.97"
  children={<Pick higherLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/112077b8-1514-4320-a70f-b23f3c7ce18a.jpg?1598989632" higherName="Merfolk Windrobber" pickedLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/6/f6455009-030c-4a33-a60b-80863d8f8aaf.jpg?1599564503" pickedName="Risen Riptide" link="https://www.17lands.com/draft/cf5353d791c841c7a98ee8e75f9fa9db/1/4" />}
/>);
rules.push(<Rule
  name="Move off of B cards' colors when appropriate"
  description="Higher win-rate drafters are willing to pivot away from B-level picks based on what's open in their pod. You will play most of your B-level picks, but think about switching colors if your early picks aren't A's and the color is cut. Effective drafters move off of 10% of their early B-level picks"
  performance="0.034"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.10"
  children={<div>You moved off of 3.4% of your early B-level picks.</div>}
/>);
rules.push(<Rule
  name="Use rarity blinders when evaluating cards"
  description="Take commons over uncommons of the same color when they are stronger or fit your deck better. Effective drafters take commons over uncommons within the same color about 18% of the time."
  performance="0.103"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.18"
  children={<div>You took commons over uncommons 10.3% of the time</div>}
/>);
rules.push(<Rule
  name="Alter your pick order in pack 3"
  description="Build your deck as you draft, and use you last pack to fill gaps in the build. Successful players take cards that are lower on their tier list 12% of the time in Pack 3."
  performance="0.15"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.12"
  children={<div>You altered 15% of your picks in Pack 3</div>}
/>);
rules.push(<Rule
  name="Only mulligan when absolutely necessary"
  description="Draft, build, and play so that you rarely mulligan in limited. Higher win-rate players mulligan very infrequently, about 5%. But you should still be thoughtful about what hands can't win the game!"
  performance="0.13"
  performanceMethod={PERFORMANCE_METHOD.MAXIMUM}
  target="0.05"
  children={<div>You mulliganned 13% of the time</div>}
/>);
rules.push(<Rule
  name="Play to the fast speed of this format"
  description="Players with higher win-rates get more of their edge from shorter games in faster formats. Draft and build based on the speed of the set. Focus especially on winning the shorter games this set."
  performance="0.494"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.57"
  children={<div>Your win-rate for games less than 9 turns: 49.4%</div>}
/>);
rules.push(<Rule
  name="Make only minor sideboarding changes"
  description="Don't sacrifice too much deck quality when sideboarding. Make swaps only in the rare cases when you can address a specific strategy very well, and otherwise maintain the synergy, curve, and quality of your original build."
  performance="0.75"
  performanceMethod={PERFORMANCE_METHOD.MAXIMUM}
  target="0.33"
  children={<div>
    <div>You changed 4 cards when sideboarding here: <a href="https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2">https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2</a></div>
    <div>You changed 2 cards when sideboarding here: <a href="https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1">https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1</a></div>
  </div>}
/>);


function App() {
  return (
    <div className="App">
      <Checklist children={rules} />
    </div>
  );
}

export default App;
