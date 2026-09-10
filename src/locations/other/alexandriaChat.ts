import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/alexandria.jpg');
  scene.text('DONG! DONG! DONG! DONG! DONG! DONG! DONG! DONG!');
  scene.text('The bells in the Victorian clock rumble, silencing anything that you or Aleksei were saying and he looks reflectively at the clock hands before continuing the conversation.');
  // TODO-QSP: dynamic text: Aleksei stands and signals towards the door. "Well <<$pcs_lastname>>, it's getti...
  scene.text(`Aleksei stands and signals towards the door. "Well ${((s as any).pcs_lastname ?? 0)}, it's getting late. Time for you to go." He walks towards the door, expecting you to follow.`);
  scene.actions([
    { label: 'Leave', goto: ['city_suburbs', 'start'] },
    { label: '"Can I sleep here tonight?"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 0) {
      scene.text('He turns his head without slowing and dispassionately says "No."');
      scene.text('Aleksei leaves the room and it would be wise to follow him.');
    } else {
      scene.text('He stops mid-stride and turns his head to look at you for a moment, seemingly about to refuse before rethinking whatever he was going to say.');
      // TODO-QSP: dynamic text: "Remember, I… don't dislike your presence in my home <<$pcs_lastname>>, but… you...
      scene.text(`"Remember, I… don't dislike your presence in my home ${((s as any).pcs_lastname ?? 0)}, but… you must respect my need for solitude."`);
      scene.text('Aleksei doesn\'t seems too vexed from your question and waits patiently for an answer.');
      scene.text('"So… maybe it would be better if I ask you another time?"');
      // TODO-QSP: dynamic text: "Ask if you must <<$pcs_lastname>>, but my answer will be the same… or not."
      scene.text(`"Ask if you must ${((s as any).pcs_lastname ?? 0)}, but my answer will be the same… or not."`);
      scene.text('Smiling slightly, Aleksei leaves the room and it would be wise to follow him.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_suburbs', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = Math.floor(Math.random() * 30) + 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 11) + 0);
  (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  scene.text('You decide to have a little chat with Aleksei. He seems amused at your interest, and decides to share some of his hard-earned knowledge with you.');
  scene.text('…');
  if (((s as any).hour ?? 0) > 19) {
    scene.actions([
      { label: 'The clock strikes', goto: ['alexandriaChat', 'late'] },
    ]);
  } else {
    if (((s as any).random_event ?? 0) === 1) {
      scene.text('"It\'s just that this is weirding me out. Magic seems too <i>European</i>."');
      scene.text('Aleksei\'s head rises and falls in an affirmative gesture.');
      // TODO-QSP: dynamic text: "Yes indeed, <<$pcs_lastname>>. The post-European Renaissance colonial and imper...
      scene.text(`"Yes indeed, ${((s as any).pcs_lastname ?? 0)}. The post-European Renaissance colonial and imperial periods affected both sides of The Veil, so it was inevitable that some terminology drift happened. Wizards aren't immune to the globalization effects, but I leave to you to decide if that's good or bad."`);
    } else {
      scene.text('"If magic can make those exposed to it go mad, is The Council driving world leaders insane?"');
      scene.text('An uncharacteristic snort escapes Aleksei\'s nostrils at your question.');
      scene.text('"What?! No! If The Council needs something it uses secrets, money and lawyers just like everybody else. When magic is needed, it\'s only used indirectly. Mediocrity is a characteristic common to the <i>penpushers</i> on both sides of The Veil."');
      if (((s as any).random_event ?? 0) === 3) {
        scene.text('As Aleksei is about to say something, a barely audible buzzing sound interrupts him and he stops to look at the offender… a Roomba doing its work.');
        scene.text('"A fascinating device, is it not? I marvel at how mundane laziness can push technological development. Worth every ruble I paid for it."');
        scene.text('He continues looking at the little robot for another minute before returning to your conversation.');
      } else {
        scene.text('"Pavlovsk Palace? That brings back some good memories from my dear friends Sophie and Grigory. The time we spent talking about well, everything, was great succor during my tenure in The Council."');
        scene.text('Sophie? Grigory? Pavlovsk?');
        scene.text('"Are you talking about Catherine the Great and Grigory Potemkin?!"');
        if (((s as any).random_event ?? 0) === 5) {
          // TODO-QSP: dynamic text: "Yes indeed. Time has changed the courtship's customs, <<$pcs_lastname>>. In my ...
          scene.text(`"Yes indeed. Time has changed the courtship's customs, ${((s as any).pcs_lastname ?? 0)}. In my time, the first thing you did before dating a girl was to show the value of your stallion to her father."`);
        } else {
          scene.text('"You know Putin? Vladimir Vladimirovich Putin, the President of the Russian Federation?"');
          scene.text('Aleksei continues looking at you unimpressed as you ask him about the most powerful <i>mundane</i> man in Russia.');
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>, why I must care about <i>another</i> penpusher?"
          scene.text(`"${((s as any).pcs_lastname ?? 0)}, why I must care about <i>another</i> penpusher?"`);
          if (((s as any).random_event ?? 0) === 7) {
            scene.text('"So, do you miss those times? The Great Game?"');
            scene.text('Aleksei stops and thinks of his answer over a drag of his cigarette.');
            scene.text('"Hm… The Great Game itself? No, it was a useful tool to distract the empires from The Council\'s activities, but in the end it was a waste of resources in the hands of amateurs."');
          } else {
            scene.text('"Seriously?! Your nemesis?!"');
            scene.text('His words come out with a half-smile and far-away look in his eyes.');
            scene.text('"Yes indeed! I would have gotten away with my plans for the Italian Peninsula had it not been for that meddling Leonardo da Vinci and his stupid coterie of artists!"');
            if (((s as any).random_event ?? 0) === 9) {
              scene.text('"But you must know something!"');
              scene.text('Aleksei look at you exasperated.');
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I have seen the dawn of millennia, travelled the world and h...
              scene.text(`"${((s as any).pcs_lastname ?? 0)}, I have seen the dawn of millennia, travelled the world and have access to incredible sources of information, but even with that, the Earth is a big place. It's impossible for me to participate or even know about every single development in the world."`);
            } else {
              scene.text('"How accurate are the history books?"');
              scene.text('Aleksei grimace as he thinks of an answer.');
              scene.text('"Mostly accurate, but is difficult to gauge with our efforts to hide the magical events from mundane record keeping. If you are interested, The Council have well-kept historical archives that can be accessed without too many problems."');
              if (((s as any).random_event ?? 0) === 11) {
                scene.text('"What did you do about his betrayal after their deaths?"');
                scene.text('Aleksei smirks and a shiver runs down your spine.');
                scene.text('"I waited thirty years to return at that dammed kingdom, to stand young and powerful before that decrepit and weak old man. After explaining the opportunity he had wasted, I burned down his castle and erased all records of his existence…"');
              } else {
                scene.text('"That sound… anticlimatic."');
                scene.text('Aleksei seems confused by your words.');
                scene.text('"And what was a wet-behind-the-ears farmboy going to do against an experienced warlord? I was a powerful wizard! So, I killed the tyrant, crowned the kid and spent ten years teaching him how to rule."');
                if (((s as any).random_event ?? 0) === 13) {
                  scene.text('"Hm… You think that the world has improved?"');
                  scene.text('Puffs of smoke leave Aleksei\'s mouth as he thinks about the answer.');
                  // TODO-QSP: dynamic text: "During the Battle of Crecy, tens of thousands of soldiers of all status and con...
                  scene.text(`"During the Battle of Crecy, tens of thousands of soldiers of all status and conditions died, with some <i>sages</i> only lamenting the nobles that fell to <i>men of no value</i>. In the U.S.A, political careers can be done and undone from a single KIA. What do you think about that, ${((s as any).pcs_lastname ?? 0)}?"`);
                } else {
                  // TODO-QSP: dynamic text: "<<$pcs_lastname>>, you can't begin to imagine the power and resources that the ...
                  scene.text(`"${((s as any).pcs_lastname ?? 0)}, you can't begin to imagine the power and resources that the monopoly over magic gives The Council. It's, without a doubt, the most powerful government in this world, but even with that power, the magic-users don't govern the world. We leave that headache to the Illuminati."`);
                  scene.text('You are silent for a minute before asking "What do you mean by the Illuminati?"');
                  if (((s as any).random_event ?? 0) === 15) {
                    scene.text('You snorts in amusement. "Nobody can be that stupid…"');
                    scene.text('Aleksei try to suppress another laugh before continuing.');
                    // TODO-QSP: dynamic text: "You would be surprised, <<$pcs_lastname>>. So, we rounded up the so-called <i>d...
                    scene.text(`"You would be surprised, ${((s as any).pcs_lastname ?? 0)}. So, we rounded up the so-called <i>deathseekers</i> and this smug, white-haired bastard explained to <i>me</i> that they can only be judged by their <i>peers</i>. I let them have their trial, and the spineless fools promptly dismissed the charges… only for me to explain to ALL of them, that The Council isn't tied by any local resolution. The look on their faces was priceless."`);
                  } else {
                    scene.text('You are enthralled with Alexandria\'s memories of his younger days.');
                    // TODO-QSP: dynamic text: "It was another age, <<$pcs_lastname>>. You only needed an iron spear, a strong ...
                    scene.text(`"It was another age, ${((s as any).pcs_lastname ?? 0)}. You only needed an iron spear, a strong horse and a few spells to be a powerful man, back when the world was bigger and you didn't know what awaited over the next hill." He sighs, "To be young again! I miss those times, but not much."`);
                    if (((s as any).random_event ?? 0) === 17) {
                      scene.text('"So is anything interesting happening in the magical world?"');
                      scene.text('Aleksei shrugs and gives you an unimpressive report.');
                      scene.text('"Another zombie outbreak in the USA, Sedna is awakening in the Arctic, something weird is coming out of Hong Kong <i>again</i> and there are rumors that Baba Yaga is planning to kill the Pope. In general, it\'s a normal day."');
                    } else {
                      scene.text('"I assume that after a certain power level, mundanes cease to be an issue?"');
                      scene.text('Dragging on his cigarette, Aleksei looks out at the distance.');
                      // TODO-QSP: dynamic text: "You assume too much, <<$pcs_lastname>>. There was this millennia-old sorcerer c...
                      scene.text(`"You assume too much, ${((s as any).pcs_lastname ?? 0)}. There was this millennia-old sorcerer called Lo-Pan, who for hundreds of years evaded The Council's wrath. When our agents finally moved against him, he was killed with a parlor trick by a mundane too stupid to be affected by The Veil."`);
                      if (((s as any).random_event ?? 0) === 19) {
                        scene.text('"Its just… that I was expecting another ending."');
                        scene.text('Aleksei looks at you, somewhat startled at your utterance.');
                        // TODO-QSP: dynamic text: "And what I was supposed to do, <<$pcs_lastname>>? He had the superiority, tacti...
                        scene.text(`"And what I was supposed to do, ${((s as any).pcs_lastname ?? 0)}? He had the superiority, tactically and in numbers, and we both knew it. So, when he came to gloat at my tent… I killed him and ended the war!"`);
                      } else {
                        scene.text('"So, what\'s the truth? What\'s the big secret? How do <i>Fairy Tales</i> really end?"');
                        scene.text('Aleksei gives you a somewhat sad half-smile and a conspiratory answer.');
                        scene.text('"The truth is… They don\'t…"');
                        if (((s as any).random_event ?? 0) === 21) {
                          scene.text('You watch, fascinated, as Aleksei extends his hands and moves every phalange independently from one another, in a strange and somewhat creepy display of muscle and nerve control.');
                          // TODO-QSP: dynamic text: "Remember <<$pcs_lastname>>, your limits are not set in stone. With enough train...
                          scene.text(`"Remember ${((s as any).pcs_lastname ?? 0)}, your limits are not set in stone. With enough training and willpower, there is nothing that you can't achieve."`);
                        } else {
                          scene.text('"But… He\'s dead, like really dead, isn\'t he?"');
                          scene.text('The tale was gruesome to say the least. A recording of the strange world you now inhabit.');
                          // TODO-QSP: dynamic text: "Yes <<$pcs_lastname>>, but it is a fascinating case. How was it possible that a...
                          scene.text(`"Yes ${((s as any).pcs_lastname ?? 0)}, but it is a fascinating case. How was it possible that a pedophilic serial killer, without an ounce of Fae blood, managed to contact some unheard <i>Dream Demons</i> and torment a city for more than a decade?"`);
                          if (((s as any).random_event ?? 0) === 23) {
                            scene.text('"Some would call those war crimes."');
                            scene.text('You don\'t know what made you to say that to Aleksei\'s face, but he looks at you like a second head has sprouted from your neck.');
                            scene.text('"The Legions were retiring and the druids had free reign! Better for the Britons to die fighting The White Dragon Army and The Last Roman than being sacrificed at The Red Dragon\'s altar!"');
                          } else {
                            scene.text('"Most people say that earning an academic title is worth the time."');
                            scene.text('Dancing his cigarette over the ashtray, Aleksei explains himself.');
                            // TODO-QSP: dynamic text: "You misunderstand my words, <<$pcs_lastname>>. Obtaining a title is indeed some...
                            scene.text(`"You misunderstand my words, ${((s as any).pcs_lastname ?? 0)}. Obtaining a title is indeed something to be proud of, but you are now a wizard and will have all the time in the world to follow the Path of Knowledge. Why rush? Just enjoy the road."`);
                            if (((s as any).random_event ?? 0) === 25) {
                              scene.text('"So… there is a history with the crucifix?"');
                              scene.text('You signal towards the Latin crucifix that always hangs over Aleksei\'s chest and he looks at you in silence before speaking to you with something akin to… nostalgia.');
                              // TODO-QSP: dynamic text: "You want to know if I am a devotee, <<$pcs_lastname>>? It was a gift from a dea...
                              scene.text(`"You want to know if I am a devotee, ${((s as any).pcs_lastname ?? 0)}? It was a gift from a dear friend, but… beyond that… well, maybe another time."`);
                            } else {
                              scene.text('"Well… not exactly a history for The Twilight\'s fans."');
                              scene.text('Retrieving the files that the two of you had been reading, Aleksei gives a contented drag to his cigarette.');
                              // TODO-QSP: dynamic text: "Indeed <<$pcs_lastname>>. After the Flesh Cathedral debacle in New York and the...
                              scene.text(`"Indeed ${((s as any).pcs_lastname ?? 0)}. After the Flesh Cathedral debacle in New York and the bloodbath from that sarcophagus in L.A, The Council launched an investigation over all the U.S.A Vampires, and even today, heads are rolling."`);
                              if (((s as any).random_event ?? 0) === 27) {
                                scene.text('"Have you any advice for a novice wizard?"');
                                scene.text('Wisps of smoke drift between the two of you as Aleksei thinks of an answer.');
                                scene.text('"Yes. Watch your back, shoot straight, conserve mana and never, ever cut a deal with a trickster."');
                              } else {
                                scene.text('"That sound strange. Romantic, but strange."');
                                scene.text('Aleksei tries to stop himself from showing a smug smile by hitting his cigarette, but it\'s evident in his tone that he is failing.');
                                // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I must admit. Dancing under the moonlight to the sound of <i...
                                scene.text(`"${((s as any).pcs_lastname ?? 0)}, I must admit. Dancing under the moonlight to the sound of <i>Por Una Cabeza</i> with a thousand-year-old dead princess is difficult to surpass."`);
                                if (((s as any).random_event ?? 0) === 29) {
                                  scene.text('"So… If secret global conspiracies like The Council and The Veil are a reality, there must be others out there, like the MIB and Area 51."');
                                  scene.text('Disappointed eyes meet yours before Aleksei picks up a laptop and shows you a video of some men throwing up their guts between yellow gas.');
                                  // TODO-QSP: dynamic text: "Please <<$pcs_lastname>>, don't follow that logic. These idiots did that and us...
                                  scene.text(`"Please ${((s as any).pcs_lastname ?? 0)}, don't follow that logic. These idiots did that and used their magical talents to infiltrate The Pentagon, only to find that those tales are the purview of tinfoil lunatics and a 20 year jail sentence. If you want conspiracies, read Wikileaks."`);
                                } else {
                                  scene.text('"That sounds a lot like the A-Team."');
                                  scene.text('Aleksei raises a hand in a dismissing gesture, only to stop halfway as realization crosses his eyes.');
                                  // TODO-QSP: dynamic text: "I suppose? I can see the similarities, <<$pcs_lastname>>. A Warband of brothers...
                                  scene.text(`"I suppose? I can see the similarities, ${((s as any).pcs_lastname ?? 0)}. A Warband of brothers always on the road, enemies at our back and new horrors in the future. Obviously, it wasn't as romantic as it sounds, but… my friends would have loved that comparison."`);
                                }
                                scene.text('…');
                                scene.text('And that way you both chat during the next half hour.');
                                scene.actions([
                                  { label: 'Continue chatting', goto: ['alexandriaChat', 'chat'] },
                                  { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
                                ]);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'late':
      enterLate(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    default:
      enterLate(s, scene);
      break;
  }
}

export const alexandriaChat: LocationDef = {
  name: 'alexandriaChat',
  title: 'Aleksei',
  region: 'other',
  locationType: 'public_indoors',
  description: ['DONG! DONG! DONG! DONG! DONG! DONG! DONG! DONG!'],
  enter: enter,
};
