(this["webpackJsonpmtg-analyzer"]=this["webpackJsonpmtg-analyzer"]||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},17:function(e,a,t){},18:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(9),l=t.n(c),i=(t(16),t(17),t(18),t(2)),o=t(3),s=t(6),d=t(5),m=t(4),h=t(10),f=t.n(h),u=(t(22),function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={expanded:!1},e.handleToggle=e.handleToggle.bind(Object(m.a)(e)),e}return Object(o.a)(t,[{key:"handleToggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"expand",value:function(){this.setState({expanded:!0})}},{key:"render",value:function(){var e=this.props,a=e.header,t=e.children,r=e.element,c=e.className;return n.a.createElement(r,{className:"expandable ".concat(this.state.expanded?"expanded":""," ").concat(c||"")},n.a.createElement("div",{className:"meta",onClick:this.handleToggle},a),n.a.createElement(f.a,{className:"details",height:this.state.expanded?"auto":0},t))}}]),t}(n.a.PureComponent)),p=function(e){var a=Object.assign({},e);return n.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:"icon"},a),n.a.createElement("path",{d:"M53.1,73h-7.2c-1.1,0-1.9-0.9-1.9-1.9V44h11v27.1C55,72.1,54.1,73,53.1,73z"}),n.a.createElement("path",{d:"M55,39H44v-9.1c0-1.1,0.9-1.9,1.9-1.9h7.2c1.1,0,1.9,0.9,1.9,1.9V39z"}),n.a.createElement("path",{d:"M50,96C24.6,96,4,75.4,4,50S24.6,4,50,4s46,20.6,46,46S75.4,96,50,96z M50,12c-21,0-38,17-38,38s17,38,38,38s38-17,38-38   S71,12,50,12z"}))},g=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e,a=this.props,t=a.name,r=a.description,c=a.performance,l=a.performanceMethod,i=a.target,o=a.children;switch(l){case E.MINIMUM:e=c/i*100;break;case E.MAXIMUM:e=i/c*100;break;case E.BOOLEAN:console.log(l),e=i===c?100:0;break;default:e=50}var s=(e=Math.max(0,Math.min(100,e)))>75?"#FAB700":"#AC1F39";return n.a.createElement(u,{element:"li",className:e>75?"passed":"failed",header:n.a.createElement("div",{className:"meta"},n.a.createElement("div",{className:"flex wrappable"},n.a.createElement("div",{className:"flex-main name"},t),n.a.createElement("div",{className:"flex-sub perf"},n.a.createElement("div",{className:"perf-container"},n.a.createElement("div",{className:"perf-bar",style:{width:e+"%",backgroundColor:s}}))),n.a.createElement("div",{className:"flex-sub chevron"},n.a.createElement("div",null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 9",className:"icon"},n.a.createElement("path",{d:"M14.0059397,2.26485497e-14 C15.1072288,2.26485497e-14 15.3722573,0.627746582 14.5881847,1.41182411 L8.70999225,7.29005337 C8.317902,7.68214607 7.67653023,7.6764822 7.29009898,7.29005337 L1.41183294,1.41182411 C0.632099139,0.632095183 0.894513756,2.26485497e-14 1.99406028,2.26485497e-14 L14.0059397,2.26485497e-14 Z"})))))),ref:n.a.createRef()},n.a.createElement("div",{className:"row text-muted description"},n.a.createElement(p,null),n.a.createElement("div",{className:"col-md-12"},r)),n.a.createElement("div",{className:"row"},o))}}]),t}(n.a.PureComponent),w=(t(23),function(e){var a=e.children;return n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"panel-heading"},n.a.createElement("h1",null,"Habits"),n.a.createElement("small",null,"A quick overview of the habits of high-winrate drafters, and how your statistics compare to those. Optimizing these metrics isn't always right, but they may still help you identify areas for improvement.")),n.a.createElement("div",{className:"panel-body"},n.a.createElement("ul",{className:"checklist"},a)))}),v=t(7),b=function(e){var a=e.name,t=e.link;return n.a.createElement("a",{"data-tip":!0,"data-for":a,href:t},a,"x",n.a.createElement(v.a,{id:a,place:"top",effect:"solid"},n.a.createElement("img",{src:t,style:{width:"250px"}})))},y=function(e){var a=e.higherLink,t=e.higherName,r=e.pickedLink,c=e.pickedName,l=e.link;return n.a.createElement("div",null,"You picked ",n.a.createElement(b,{name:c,link:r})," over ",n.a.createElement(b,{name:t,link:a})," even though you it's graded lower: ",n.a.createElement("a",{href:l},l))},E={BOOLEAN:"BOOLEAN",MINIMUM:"MINIMUM",MAXIMUM:"MAXIMUM"},M=[];M.push(n.a.createElement(g,{name:"Prepare by making a tier list",description:n.a.createElement(n.a.Fragment,null,"75% of higher win-rate drafters on 17Lands have made their own tier list for the set. This familiarizes them with the cards and allows focus on draft-specific context while making picks. Complete this by moving cards out of TBD in your tier list here: ",n.a.createElement("a",{href:"https://www.17lands.com/card_tiers/ZNR"},"https://www.17lands.com/card_tiers/ZNR")),performance:0,performanceMethod:E.MINIMUM,target:265,children:n.a.createElement("div",null,"Cards you have ranked: 0 / 265")})),M.push(n.a.createElement(g,{name:"Follow your tier list order early on",description:"Your first several picks should usually use your tier list's ordering within a color. Below are any recent times that did not happen.",performance:"0.9",performanceMethod:E.MINIMUM,target:"0.97",children:n.a.createElement(y,{higherLink:"https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/112077b8-1514-4320-a70f-b23f3c7ce18a.jpg?1598989632",higherName:"Merfolk Windrobber",pickedLink:"https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/6/f6455009-030c-4a33-a60b-80863d8f8aaf.jpg?1599564503",pickedName:"Risen Riptide",link:"https://www.17lands.com/draft/cf5353d791c841c7a98ee8e75f9fa9db/1/4"})})),M.push(n.a.createElement(g,{name:"Move off of B cards' colors when appropriate",description:"Higher win-rate drafters are willing to pivot away from B-level picks based on what's open in their pod. You will play most of your B-level picks, but think about switching colors if your early picks aren't A's and the color is cut. Effective drafters move off of 10% of their early B-level picks",performance:"0.034",performanceMethod:E.MINIMUM,target:"0.10",children:n.a.createElement("div",null,"You moved off of 3.4% of your early B-level picks.")})),M.push(n.a.createElement(g,{name:"Use rarity blinders when evaluating cards",description:"Take commons over uncommons of the same color when they are stronger or fit your deck better. Effective drafters take commons over uncommons within the same color about 18% of the time.",performance:"0.103",performanceMethod:E.MINIMUM,target:"0.18",children:n.a.createElement("div",null,"You took commons over uncommons 10.3% of the time")})),M.push(n.a.createElement(g,{name:"Alter your pick order in pack 3",description:"Build your deck as you draft, and use you last pack to fill gaps in the build. Successful players take cards that are lower on their tier list 12% of the time in Pack 3.",performance:"0.15",performanceMethod:E.MINIMUM,target:"0.12",children:n.a.createElement("div",null,"You altered 15% of your picks in Pack 3")})),M.push(n.a.createElement(g,{name:"Only mulligan when absolutely necessary",description:"Draft, build, and play so that you rarely mulligan in limited. Higher win-rate players mulligan very infrequently, about 5%. But you should still be thoughtful about what hands can't win the game!",performance:"0.13",performanceMethod:E.MAXIMUM,target:"0.05",children:n.a.createElement("div",null,"You mulliganned 13% of the time")})),M.push(n.a.createElement(g,{name:"Play to the fast speed of this format",description:"Players with higher win-rates get more of their edge from shorter games in faster formats. Draft and build based on the speed of the set. Focus especially on winning the shorter games this set.",performance:"0.494",performanceMethod:E.MINIMUM,target:"0.57",children:n.a.createElement("div",null,"Your win-rate for games less than 9 turns: 49.4%")})),M.push(n.a.createElement(g,{name:"Make only minor sideboarding changes",description:"Don't sacrifice too much deck quality when sideboarding. Make swaps only in the rare cases when you can address a specific strategy very well, and otherwise maintain the synergy, curve, and quality of your original build.",performance:"0.75",performanceMethod:E.MAXIMUM,target:"0.33",children:n.a.createElement("div",null,n.a.createElement("div",null,"You changed 4 cards when sideboarding here: ",n.a.createElement("a",{href:"https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2"},"https://www.17lands.com/deck/3973b55b6eb344a98b65cf0b614cb384/2")),n.a.createElement("div",null,"You changed 2 cards when sideboarding here: ",n.a.createElement("a",{href:"https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1"},"https://www.17lands.com/deck/6122837c777c4d00a81b93d1beef2f20/1")),n.a.createElement("img",{src:"https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/1/112077b8-1514-4320-a70f-b23f3c7ce18a.jpg?1598989632"}))}));var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,{children:M}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement("div",{className:"container"},n.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.0a6ab658.chunk.js.map