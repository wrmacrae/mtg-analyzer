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
    70% of the high win-rate drafters on 17Lands have made their own tier list (vs 51% in the comparisson group). Making a tier list familiarizes you with the cards in a set, allowing you to focus on draft-specific context while making picks. Tier lists also help to grow your card evaluation skills by comparing with experts. Complete this by moving cards out of TBD in your tier list here: <a href="https://www.17lands.com/card_tiers/ZNR">https://www.17lands.com/card_tiers/ZNR</a>.
  </>)}
  performance={0}
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target={265}
  children={<div>Cards you have ranked: 0 / 265</div>}
/>);
rules.push(<Rule
  name="Follow your tier list early on"
  description="Your first several picks should usually use your tier list's ordering within a color. Below are any recent times that did not happen. Cards that are tbd on your tier list were ranked using other users' tier lists and picks."
  performance="0.107"
  performanceMethod={PERFORMANCE_METHOD.MAXIMUM}
  target="0.06"
  children={<div>
    You picked lower-ranked cards in 10.7% of your early picks. (Goal: 6%)
    <Pick higherLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/112077b8-1514-4320-a70f-b23f3c7ce18a.jpg?1598989632" higherName="Merfolk Windrobber" pickedLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/6/f6455009-030c-4a33-a60b-80863d8f8aaf.jpg?1599564503" pickedName="Risen Riptide" link="https://www.17lands.com/draft/cf5353d791c841c7a98ee8e75f9fa9db/1/4" />
    <Pick higherLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/2/f25d56f9-aa54-4657-9ac9-e93fbba3e715.jpg?1599058079" higherName="Sejiri Shelter" pickedLink="https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/8/b83cfbaa-7890-4f6f-878b-4edb45677371.jpg?1599009679" pickedName="Skyclave Apparition" link="https://www.17lands.com/draft/11375a76e01f483aa88f549f67fe9435" />
    </div>}
/>);
rules.push(<Rule
  name="Move off of B cards' colors when appropriate"
  description="High win-rate drafters pivot away from B-level cards 26% of the time (vs 23% in the comparisson group). You should play most of your B-level picks, but think about switching colors/archetypes if your early picks aren't A's and the lane seems closed in your seat."
  performance="0.248"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.26"
  children={<div>You moved off of 24.8% of your early B-level picks. (Goal: 26%)</div>}
/>);
rules.push(<Rule
  name="Use rarity blinders when evaluating cards"
  description="Take commons over uncommons of the same color when they are stronger or fit your deck better. High win-rate drafters take commons over uncommons within the same color 25% of the time (vs 24% in the comparisson group, but with a much higher sample size than the other habits)."
  performance="0.203"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.25"
  children={<div>You took commons over uncommons 20.3% of the time. (Goal: 25%)</div>}
/>);
rules.push(<Rule
  name="Alter your pick order in pack 3"
  description="Build your deck as you draft, and use you last pack to fill holes in your build. Successful players take cards that are lower on their tier list 1.2% of the time in Pack 3."
  performance="0.011"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.012"
  children={<div>You altered 1.1% of your picks in Pack 3. (Goal: 1.2%)</div>}
/>);
rules.push(<Rule
  name="Only mulligan when absolutely necessary"
  description="Draft, build, and play so that you rarely mulligan in limited. Higher win-rate players mulligan in 10.5% of games. But you should still be thoughtful about what hands can't win the game!"
  performance="0.167"
  performanceMethod={PERFORMANCE_METHOD.MAXIMUM}
  target="0.105"
  children={<div>You mulliganned 16.7% of the time. (Goal: 10.5%)</div>}
/>);
rules.push(<Rule
  name="Play to the fast speed of this format"
  description="Players with higher win-rates get more of their edge from shorter games in faster formats. Draft and build based on the speed of the set. Focus especially on winning the shorter games this set. High win-rate players had +15% win-rate over the comparisson group in games that lasted at most 9 turns (vs +11% win-rate for games that at least 13 turns). Try to improve your win-rate in short games to be 4% higher than your win rate in long games by lowering your curve and making more aggressive decks."
  performance="-0.012"
  performanceMethod={PERFORMANCE_METHOD.MINIMUM}
  target="0.04"
  children={<div>
    <div>Your win-rate is 1.2% lower in short games than in long games. (Goal: 4% higher)</div>
    <div>Your win-rate for games at most 9 turns: 49.2%</div>
    <div>Your win-rate for games at least 13 turns: 50.4%</div>
  </div>}
/>);
rules.push(<Rule
  name="Make only minor sideboarding changes"
  description="Don't sacrifice too much deck quality when sideboarding. Make swaps only in the rare cases when you can address a specific strategy very well, and otherwise maintain the synergy, curve, and quality of your original build. High win-rate drafters only substute an averge of 0.25 cards when sideboarding."
  performance="0.84"
  performanceMethod={PERFORMANCE_METHOD.MAXIMUM}
  target="0.25"
  children={<div>
    <div>You changed an average of 0.84 cards when sideboarding. (Goal: 0.25).</div>
    <div>You changed 4 cards when sideboarding here: <a href="https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2">https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2</a></div>
    <div>You changed 2 cards when sideboarding here: <a href="https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1">https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1</a></div>
  </div>}
/>);


function App() {
  return (
    <div className="App">
      <Checklist children={rules} />
      <div className="panel">
        <div className="panel-heading">
          <small>High win-rate drafters for this format is a cohort of 52 users with win-rates in Platinum/Diamond/Mythic of at least 62%. The comparisson group is 112 drafters with an average win-rate in Platinum/Diamond/Mythic of 49%. For more information on these habits, listen to <a href="https://limitedlevelups.libsyn.com/limited-level-ups-37-7-habits-of-highly-effective-drafters-with-17land-dev-viralmisnomer">Limited Level-Ups 37</a>.</small>
        </div>
      </div>
    </div>
  );
}

export default App;
