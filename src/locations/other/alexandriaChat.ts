import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  scene.build();
}

function enterLate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/alexandria.jpg');
  scene.text('DONG! DONG! DONG! DONG! DONG! DONG! DONG! DONG!');
  scene.text('The bells in the Victorian clock rumble, silencing anything that you or Aleksei were saying and he looks reflectively at the clock hands before continuing the conversation.');
  // TODO-QSP: dynamic text: Aleksei stands and signals towards the door. "Well <<$pcs_lastname>>, it's getti...
  scene.text(`Aleksei stands and signals towards the door. "Well ${((s as any).pcs_lastname || '')}, it's getting late. Time for you to go." He walks towards the door, expecting you to follow.`);
  // TODO-QSP: end
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
      scene.text(`"Remember, I… don't dislike your presence in my home ${((s as any).pcs_lastname || '')}, but… you must respect my need for solitude."`);
      scene.text('Aleksei doesn\'t seems too vexed from your question and waits patiently for an answer.');
      scene.text('"So… maybe it would be better if I ask you another time?"');
      // TODO-QSP: dynamic text: "Ask if you must <<$pcs_lastname>>, but my answer will be the same… or not."
      scene.text(`"Ask if you must ${((s as any).pcs_lastname || '')}, but my answer will be the same… or not."`);
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
      scene.text(`"Yes indeed, ${((s as any).pcs_lastname || '')}. The post-European Renaissance colonial and imperial periods affected both sides of The Veil, so it was inevitable that some terminology drift happened. Wizards aren't immune to the globalization effects, but I leave to you to decide if that's good or bad."`);
    } else {
      if (((s as any).random_event ?? 0) === 2) {
        scene.text('"If magic can make those exposed to it go mad, is The Council driving world leaders insane?"');
        scene.text('An uncharacteristic snort escapes Aleksei\'s nostrils at your question.');
        scene.text('"What?! No! If The Council needs something it uses secrets, money and lawyers just like everybody else. When magic is needed, it\'s only used indirectly. Mediocrity is a characteristic common to the <i>penpushers</i> on both sides of The Veil."');
      } else {
        if (((s as any).random_event ?? 0) === 3) {
          scene.text('As Aleksei is about to say something, a barely audible buzzing sound interrupts him and he stops to look at the offender… a Roomba doing its work.');
          scene.text('"A fascinating device, is it not? I marvel at how mundane laziness can push technological development. Worth every ruble I paid for it."');
          scene.text('He continues looking at the little robot for another minute before returning to your conversation.');
        } else {
          if (((s as any).random_event ?? 0) === 4) {
            scene.text('"Pavlovsk Palace? That brings back some good memories from my dear friends Sophie and Grigory. The time we spent talking about well, everything, was great succor during my tenure in The Council."');
            scene.text('Sophie? Grigory? Pavlovsk?');
            scene.text('"Are you talking about Catherine the Great and Grigory Potemkin?!"');
          } else {
            if (((s as any).random_event ?? 0) === 5) {
              // TODO-QSP: dynamic text: "Yes indeed. Time has changed the courtship's customs, <<$pcs_lastname>>. In my ...
              scene.text(`"Yes indeed. Time has changed the courtship's customs, ${((s as any).pcs_lastname || '')}. In my time, the first thing you did before dating a girl was to show the value of your stallion to her father."`);
            } else {
              if (((s as any).random_event ?? 0) === 6) {
                scene.text('"You know Putin? Vladimir Vladimirovich Putin, the President of the Russian Federation?"');
                scene.text('Aleksei continues looking at you unimpressed as you ask him about the most powerful <i>mundane</i> man in Russia.');
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>, why I must care about <i>another</i> penpusher?"
                scene.text(`"${((s as any).pcs_lastname || '')}, why I must care about <i>another</i> penpusher?"`);
              } else {
                if (((s as any).random_event ?? 0) === 7) {
                  scene.text('"So, do you miss those times? The Great Game?"');
                  scene.text('Aleksei stops and thinks of his answer over a drag of his cigarette.');
                  scene.text('"Hm… The Great Game itself? No, it was a useful tool to distract the empires from The Council\'s activities, but in the end it was a waste of resources in the hands of amateurs."');
                } else {
                  if (((s as any).random_event ?? 0) === 8) {
                    scene.text('"Seriously?! Your nemesis?!"');
                    scene.text('His words come out with a half-smile and far-away look in his eyes.');
                    scene.text('"Yes indeed! I would have gotten away with my plans for the Italian Peninsula had it not been for that meddling Leonardo da Vinci and his stupid coterie of artists!"');
                  } else {
                    if (((s as any).random_event ?? 0) === 9) {
                      scene.text('"But you must know something!"');
                      scene.text('Aleksei look at you exasperated.');
                      // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I have seen the dawn of millennia, travelled the world and h...
                      scene.text(`"${((s as any).pcs_lastname || '')}, I have seen the dawn of millennia, travelled the world and have access to incredible sources of information, but even with that, the Earth is a big place. It's impossible for me to participate or even know about every single development in the world."`);
                    } else {
                      if (((s as any).random_event ?? 0) === 10) {
                        scene.text('"How accurate are the history books?"');
                        scene.text('Aleksei grimace as he thinks of an answer.');
                        scene.text('"Mostly accurate, but is difficult to gauge with our efforts to hide the magical events from mundane record keeping. If you are interested, The Council have well-kept historical archives that can be accessed without too many problems."');
                      } else {
                        if (((s as any).random_event ?? 0) === 11) {
                          scene.text('"What did you do about his betrayal after their deaths?"');
                          scene.text('Aleksei smirks and a shiver runs down your spine.');
                          scene.text('"I waited thirty years to return at that dammed kingdom, to stand young and powerful before that decrepit and weak old man. After explaining the opportunity he had wasted, I burned down his castle and erased all records of his existence…"');
                        } else {
                          if (((s as any).random_event ?? 0) === 12) {
                            scene.text('"That sound… anticlimatic."');
                            scene.text('Aleksei seems confused by your words.');
                            scene.text('"And what was a wet-behind-the-ears farmboy going to do against an experienced warlord? I was a powerful wizard! So, I killed the tyrant, crowned the kid and spent ten years teaching him how to rule."');
                          } else {
                            if (((s as any).random_event ?? 0) === 13) {
                              scene.text('"Hm… You think that the world has improved?"');
                              scene.text('Puffs of smoke leave Aleksei\'s mouth as he thinks about the answer.');
                              // TODO-QSP: dynamic text: "During the Battle of Crecy, tens of thousands of soldiers of all status and con...
                              scene.text(`"During the Battle of Crecy, tens of thousands of soldiers of all status and conditions died, with some <i>sages</i> only lamenting the nobles that fell to <i>men of no value</i>. In the U.S.A, political careers can be done and undone from a single KIA. What do you think about that, ${((s as any).pcs_lastname || '')}?"`);
                            } else {
                              if (((s as any).random_event ?? 0) === 14) {
                                // TODO-QSP: dynamic text: "<<$pcs_lastname>>, you can't begin to imagine the power and resources that the ...
                                scene.text(`"${((s as any).pcs_lastname || '')}, you can't begin to imagine the power and resources that the monopoly over magic gives The Council. It's, without a doubt, the most powerful government in this world, but even with that power, the magic-users don't govern the world. We leave that headache to the Illuminati."`);
                                scene.text('You are silent for a minute before asking "What do you mean by the Illuminati?"');
                              } else {
                                if (((s as any).random_event ?? 0) === 15) {
                                  scene.text('You snorts in amusement. "Nobody can be that stupid…"');
                                  scene.text('Aleksei try to suppress another laugh before continuing.');
                                  // TODO-QSP: dynamic text: "You would be surprised, <<$pcs_lastname>>. So, we rounded up the so-called <i>d...
                                  scene.text(`"You would be surprised, ${((s as any).pcs_lastname || '')}. So, we rounded up the so-called <i>deathseekers</i> and this smug, white-haired bastard explained to <i>me</i> that they can only be judged by their <i>peers</i>. I let them have their trial, and the spineless fools promptly dismissed the charges… only for me to explain to ALL of them, that The Council isn't tied by any local resolution. The look on their faces was priceless."`);
                                } else {
                                  if (((s as any).random_event ?? 0) === 16) {
                                    scene.text('You are enthralled with Alexandria\'s memories of his younger days.');
                                    // TODO-QSP: dynamic text: "It was another age, <<$pcs_lastname>>. You only needed an iron spear, a strong ...
                                    scene.text(`"It was another age, ${((s as any).pcs_lastname || '')}. You only needed an iron spear, a strong horse and a few spells to be a powerful man, back when the world was bigger and you didn't know what awaited over the next hill." He sighs, "To be young again! I miss those times, but not much."`);
                                  } else {
                                    if (((s as any).random_event ?? 0) === 17) {
                                      scene.text('"So is anything interesting happening in the magical world?"');
                                      scene.text('Aleksei shrugs and gives you an unimpressive report.');
                                      scene.text('"Another zombie outbreak in the USA, Sedna is awakening in the Arctic, something weird is coming out of Hong Kong <i>again</i> and there are rumors that Baba Yaga is planning to kill the Pope. In general, it\'s a normal day."');
                                    } else {
                                      if (((s as any).random_event ?? 0) === 18) {
                                        scene.text('"I assume that after a certain power level, mundanes cease to be an issue?"');
                                        scene.text('Dragging on his cigarette, Aleksei looks out at the distance.');
                                        // TODO-QSP: dynamic text: "You assume too much, <<$pcs_lastname>>. There was this millennia-old sorcerer c...
                                        scene.text(`"You assume too much, ${((s as any).pcs_lastname || '')}. There was this millennia-old sorcerer called Lo-Pan, who for hundreds of years evaded The Council's wrath. When our agents finally moved against him, he was killed with a parlor trick by a mundane too stupid to be affected by The Veil."`);
                                      } else {
                                        if (((s as any).random_event ?? 0) === 19) {
                                          scene.text('"Its just… that I was expecting another ending."');
                                          scene.text('Aleksei looks at you, somewhat startled at your utterance.');
                                          // TODO-QSP: dynamic text: "And what I was supposed to do, <<$pcs_lastname>>? He had the superiority, tacti...
                                          scene.text(`"And what I was supposed to do, ${((s as any).pcs_lastname || '')}? He had the superiority, tactically and in numbers, and we both knew it. So, when he came to gloat at my tent… I killed him and ended the war!"`);
                                        } else {
                                          if (((s as any).random_event ?? 0) === 20) {
                                            scene.text('"So, what\'s the truth? What\'s the big secret? How do <i>Fairy Tales</i> really end?"');
                                            scene.text('Aleksei gives you a somewhat sad half-smile and a conspiratory answer.');
                                            scene.text('"The truth is… They don\'t…"');
                                          } else {
                                            if (((s as any).random_event ?? 0) === 21) {
                                              scene.text('You watch, fascinated, as Aleksei extends his hands and moves every phalange independently from one another, in a strange and somewhat creepy display of muscle and nerve control.');
                                              // TODO-QSP: dynamic text: "Remember <<$pcs_lastname>>, your limits are not set in stone. With enough train...
                                              scene.text(`"Remember ${((s as any).pcs_lastname || '')}, your limits are not set in stone. With enough training and willpower, there is nothing that you can't achieve."`);
                                            } else {
                                              if (((s as any).random_event ?? 0) === 22) {
                                                scene.text('"But… He\'s dead, like really dead, isn\'t he?"');
                                                scene.text('The tale was gruesome to say the least. A recording of the strange world you now inhabit.');
                                                // TODO-QSP: dynamic text: "Yes <<$pcs_lastname>>, but it is a fascinating case. How was it possible that a...
                                                scene.text(`"Yes ${((s as any).pcs_lastname || '')}, but it is a fascinating case. How was it possible that a pedophilic serial killer, without an ounce of Fae blood, managed to contact some unheard <i>Dream Demons</i> and torment a city for more than a decade?"`);
                                              } else {
                                                if (((s as any).random_event ?? 0) === 23) {
                                                  scene.text('"Some would call those war crimes."');
                                                  scene.text('You don\'t know what made you to say that to Aleksei\'s face, but he looks at you like a second head has sprouted from your neck.');
                                                  scene.text('"The Legions were retiring and the druids had free reign! Better for the Britons to die fighting The White Dragon Army and The Last Roman than being sacrificed at The Red Dragon\'s altar!"');
                                                } else {
                                                  if (((s as any).random_event ?? 0) === 24) {
                                                    scene.text('"Most people say that earning an academic title is worth the time."');
                                                    scene.text('Dancing his cigarette over the ashtray, Aleksei explains himself.');
                                                    // TODO-QSP: dynamic text: "You misunderstand my words, <<$pcs_lastname>>. Obtaining a title is indeed some...
                                                    scene.text(`"You misunderstand my words, ${((s as any).pcs_lastname || '')}. Obtaining a title is indeed something to be proud of, but you are now a wizard and will have all the time in the world to follow the Path of Knowledge. Why rush? Just enjoy the road."`);
                                                  } else {
                                                    if (((s as any).random_event ?? 0) === 25) {
                                                      scene.text('"So… there is a history with the crucifix?"');
                                                      scene.text('You signal towards the Latin crucifix that always hangs over Aleksei\'s chest and he looks at you in silence before speaking to you with something akin to… nostalgia.');
                                                      // TODO-QSP: dynamic text: "You want to know if I am a devotee, <<$pcs_lastname>>? It was a gift from a dea...
                                                      scene.text(`"You want to know if I am a devotee, ${((s as any).pcs_lastname || '')}? It was a gift from a dear friend, but… beyond that… well, maybe another time."`);
                                                    } else {
                                                      if (((s as any).random_event ?? 0) === 26) {
                                                        scene.text('"Well… not exactly a history for The Twilight\'s fans."');
                                                        scene.text('Retrieving the files that the two of you had been reading, Aleksei gives a contented drag to his cigarette.');
                                                        // TODO-QSP: dynamic text: "Indeed <<$pcs_lastname>>. After the Flesh Cathedral debacle in New York and the...
                                                        scene.text(`"Indeed ${((s as any).pcs_lastname || '')}. After the Flesh Cathedral debacle in New York and the bloodbath from that sarcophagus in L.A, The Council launched an investigation over all the U.S.A Vampires, and even today, heads are rolling."`);
                                                      } else {
                                                        if (((s as any).random_event ?? 0) === 27) {
                                                          scene.text('"Have you any advice for a novice wizard?"');
                                                          scene.text('Wisps of smoke drift between the two of you as Aleksei thinks of an answer.');
                                                          scene.text('"Yes. Watch your back, shoot straight, conserve mana and never, ever cut a deal with a trickster."');
                                                        } else {
                                                          if (((s as any).random_event ?? 0) === 28) {
                                                            scene.text('"That sound strange. Romantic, but strange."');
                                                            scene.text('Aleksei tries to stop himself from showing a smug smile by hitting his cigarette, but it\'s evident in his tone that he is failing.');
                                                            // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I must admit. Dancing under the moonlight to the sound of <i...
                                                            scene.text(`"${((s as any).pcs_lastname || '')}, I must admit. Dancing under the moonlight to the sound of <i>Por Una Cabeza</i> with a thousand-year-old dead princess is difficult to surpass."`);
                                                          } else {
                                                            if (((s as any).random_event ?? 0) === 29) {
                                                              scene.text('"So… If secret global conspiracies like The Council and The Veil are a reality, there must be others out there, like the MIB and Area 51."');
                                                              scene.text('Disappointed eyes meet yours before Aleksei picks up a laptop and shows you a video of some men throwing up their guts between yellow gas.');
                                                              // TODO-QSP: dynamic text: "Please <<$pcs_lastname>>, don't follow that logic. These idiots did that and us...
                                                              scene.text(`"Please ${((s as any).pcs_lastname || '')}, don't follow that logic. These idiots did that and used their magical talents to infiltrate The Pentagon, only to find that those tales are the purview of tinfoil lunatics and a 20 year jail sentence. If you want conspiracies, read Wikileaks."`);
                                                            } else {
                                                              if (((s as any).random_event ?? 0) === 30) {
                                                                scene.text('"That sounds a lot like the A-Team."');
                                                                scene.text('Aleksei raises a hand in a dismissing gesture, only to stop halfway as realization crosses his eyes.');
                                                                // TODO-QSP: dynamic text: "I suppose? I can see the similarities, <<$pcs_lastname>>. A Warband of brothers...
                                                                scene.text(`"I suppose? I can see the similarities, ${((s as any).pcs_lastname || '')}. A Warband of brothers always on the road, enemies at our back and new horrors in the future. Obviously, it wasn't as romantic as it sounds, but… my friends would have loved that comparison."`);
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
    scene.text('…');
    scene.text('And that way you both chat during the next half hour.');
    scene.actions([
      { label: 'Continue chatting', goto: ['alexandriaChat', 'chat'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  // TODO-QSP: dynamic text: "My favorite discipline! Ask away <<$pcs_lastname>>."
  scene.text(`"My favorite discipline! Ask away ${((s as any).pcs_lastname || '')}."`);
  if (((s as any).hour ?? 0) > 19) {
    scene.actions([
      { label: 'The clock strikes', goto: ['alexandriaChat', 'late'] },
    ]);
  } else {
    if (qspFunc(s, 'succubus', 'active', 5)) {
      scene.actions([
        { label: 'Succubae', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      // TODO-QSP: dynamic text: "The Succubae… Yes, your new <i>sisterhood</i>. I'm not happy about that develop...
      scene.text(`"The Succubae… Yes, your new <i>sisterhood</i>. I'm not happy about that development ${((s as any).pcs_lastname || '')}, but remember my apprentice, they are the ones that need you."`);
    } else {
      // TODO-QSP: dynamic text: "The Succubae… Yes, your new <i>sisterhood</i>. I'm not happy about that develop...
      scene.text(`"The Succubae… Yes, your new <i>sisterhood</i>. I'm not happy about that development ${((s as any).pcs_lastname || '')}, but… I didn't have much hope in you anyway."`);
    }
    scene.text('Even with the evident derision in Aleksei\'s words, you don\'t feel any hostility against The Succubae.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, it's obvious that I don't exactly approve of your new… <i>li...
    scene.text(`"${((s as any).pcs_lastname || '')}, it's obvious that I don't exactly approve of your new… <i>lifestyle</i>, but like others, Succubae are chained by their own needs, so I try to be sympathetic. No… What I don't like is that most of your brethren seem to lose sight of the extraordinary powers they inherit in a quest for more… decadent experiences. You're probably waiting for me to spill some of their secrets, but I'm not going to do that. Your trickster is doing the work for me, but I will tell you a tidbit."`);
    scene.text('"Thanks to an ancient curse, The Succubae are chained to The High Sidhe reproductive cycle. That is what gives you an extraordinary leeway and let your brethren act like royalty. Some try to act on that like idealized <i>Faeric Ladies</i>, but most fail, enjoying the perks but ignoring any responsibility, and this is a potential danger, and opportunity, for you."');
    scene.text('"You have suddenly entered an exclusive club, jumping the figurative line, and most Succubae will react to that, in diverse, sometimes dangerous ways. At least until they find the next shiny toy, leaving you in that nebulous place between where those on their way up meet those on their way down, a place of vast potential."');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Magic schools & Minor arts', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/chair.jpg');
    scene.text('"At its most basic, schools and arts are academic disciplines that help a wizard learn how to manipulate mana and cast spells. As with all crafts in our world, most wizards need to specialize to attain any measure of power, truly multi-mathematical masters are unheard of."');
    scene.text('"Magic schools are general areas where magic seems to work without clear limits, and beyond some basic spells that form their core teachings, a wizard can pass hundreds of years exploring its applications. The schools are Air, Earth, Electric, Fire and Water"');
    scene.text('"Arts, on the other hand, are more specialized, without the academic deepness and power that the schools\' possess. However, they are less mana exhausting, with an undetermined number of specializations. As a clarification, the term <i>minor</i> is a misnomer used by the uneducated. The arts are in themselves powerful tools, and their lower mana cost compared with the schools makes them more attractive to the less powerful of our brethren. As an example, your acquaintance that practices the flesh-crafting or body-modding art."');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Magic Vs Technology', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"First and foremost, you must understand that it isn\'t a <i>Magic Vs Technology</i> issue. If magic were an anti-technology force, we all would be living in the middle of the forest without electricity. The answer is a lot more complex."');
    scene.text('"Everything in our universe that exists follows certain universal parameters. If these parameters were different, then reality would have followed a different path. Magic, for reasons unknown, seems to have the capacity to <i>rewrite</i> these universal parameters in a… let\'s say <i>unnatural</i> way, giving the mage the tools to shape the world to its taste, and this is the conflict point."');
    scene.text('"Technology, <i>work</i> with the universal laws in a <i>natural</i> way, to shape the world. As magic and technology use different methodologies, they can\'t be combined. You can use one or the other for the same effect, but they can\'t be mixed."');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Mutants & Psychics', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"The so-called mutants and psychics, if we must use a modern vulgarism, form an interesting phenomenon in The Council\'s periphery. They are normally grouped under The Wizards\' chair, as they lack magical power or a unifying agenda."');
    scene.text('"Mutants are in general any lifeform that has been altered through magical means that let them perceive beyond The Veil. You and I aren\'t considered mutants because our magical talents give us full-wizard status. Those, that lack magical talent fall into this category. Beyond that, there isn\'t a unifying factor, as mutants can go from wretched beings that must be euthanized to erase their suffering, to the more… <i>fortunate</i> that win some magical enhancements, like your acquaintance, Gustav."');
    scene.text('"Psychics, on the other hand, are the brown dwarfs of the magical world. Born with enough magic to see beyond The Veil, but lacking enough strength to manipulate mana, At best, they will have some minor magical talents, like seeing the dead, talking to goldfish or predicting the weather."');
    scene.text('"Mutants and Psychics live in a nebulous zone on the edge of The Veil, their relationship with both sides varying in a case-by-case scenario. Most of them live relatively normal lives, beyond the interest of The Council. Of course, there are exceptions that, for one reason or another, end up entangled in magical matters, but they are the exceptions to the rule."');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Personality', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"Archetype, Ethos or Personality are some names for a relatively extended magical practice that originated in the mask-wearing on <i>mundane</i> magical and religious rituals. Of course, true wizards don\'t need masks to invoke their powers, but they can help magic-users to channel their powers better."');
    scene.text('"At its core is the knowledge that the human mind can\'t hope to grasp all the power that magic offers, and the risk, to be changed back in a magical mismatch. Taking into certain vital philosophies, behaviors and taboos, the wizards shield themselves from these dangers, which lets them tap into more power."');
    scene.text('"Not all wizards follow this tradition, that not without reason give us certain… let\'s say eccentric fame. If you want to know, I follow <i>The Autarch Ethos</i>."');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'The Veil', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"The Veil is a global, self-sustained, delusional magical effect that hijacks the pattern recognization capacity on the mundanes\' brains, so the affected look for alternative explanations to any perceived magical event. As this method isn\'t perfect, there is a veritable risk that continued exposure to magic will damage the mental health of any given observer. As a side note, The Veil only affects humans."');
    scene.text('"The original proposal came from the High Sidhe around the 10th century, who wanted to <i>veil</i> their holdings from mundane influences and promised magical knowledge and gifts to those that helped them. From this came a centuries-long collaboration between hundreds of high-level wizards, me and Rikudo included, that ended with decades-long rituals. Around 1350, The Veil was fully functional, and we began to see the unwanted side-effects."');
    scene.text('"What was the cause? Nobody is sure, the most likely cause is, that we somehow exceeded our goals or that somebody altered the ritual. The most likely candidates were the High Sidhe or Rikudo, but nobody is sure."');
    scene.text('"And to end, the answer to the questions all youngsters ask; Yes, we can take down The Veil, but it would require a significant effort similar to its creation as a rushed job would have apocalyptic consequences and there isn\'t political support in The Council for this idea. The reason for this is that most of us see The Veil as actually being a good thing. We, the wizards, can continue our quest for knowledge without the pestering masses interfering. As for them, look at what humanity has achieved after the European Renaissance. What new peaks will they reach now that we have distracted them with quantum theory?"');
    scene.actions([
      { label: 'Continue talking about magic', goto: ['alexandriaChat', 'magic'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPeople(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  // TODO-QSP: dynamic text: "So, it is gossiping time. What a <i>marvellous</i> experience <<$pcs_lastname>>...
  scene.text(`"So, it is gossiping time. What a <i>marvellous</i> experience ${((s as any).pcs_lastname || '')}…"`);
  if (((s as any).hour ?? 0) > 19) {
    scene.actions([
      { label: 'The clock strikes', goto: ['alexandriaChat', 'late'] },
    ]);
  } else {
    if (((s as any).AlexandriaQW ?? 0) > 19) {
      scene.actions([
        { label: 'Est potentia ex testamento', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, <i>Est potentia ex testamento</i>, was the motto from the ho...
    scene.text(`"${((s as any).pcs_lastname || '')}, <i>Est potentia ex testamento</i>, was the motto from the honorably disbandment <i>Council Army Forces</i>, a force that I have the privilege to command."`);
    scene.text('Aleksei smile at those words obviously, they mean much to him, and during a long moment, he looks to the ceiling lost in his thoughts, before continuing.');
    // TODO-QSP: dynamic text: "I will not explain in deep all the details, <<$pcs_lastname>>, but what I will ...
    scene.text(`"I will not explain in deep all the details, ${((s as any).pcs_lastname || '')}, but what I will give you is this: We were the iron fist of The Council, enforcers of their will, and for a thousand years, the <i>Creme de la creme</i> of the world military forces. We used all to win, martial training, the last technology, and the more powerful magics all bend to our will to spill the blood of our enemies. I will not taint our history with lies, we did some of the most atrocious war crimes in the name of the uncaring High Sidhe, but thanks to us, today there are a lot fewer monsters waiting in the shadows of the world."`);
    scene.text('He takes a deep drag from his cigarette, a proud smirk on his lips that soon turns into a gesture of absolute ruthlessness.');
    // TODO-QSP: dynamic text: "I must say <<$pcs_lastname>>, that that girl, has committed a serious mistake t...
    scene.text(`"I must say ${((s as any).pcs_lastname || '')}, that that girl, has committed a serious mistake taking our legacy in vain, as even now, decades after our disbandment, those words - <i>Est potentia ex testamento</i> - carry a lot of weight in our corner of the world."`);
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Gustav', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Ah, the parahuman. I must admit that he is the only acquaintance of yours that ...
    scene.text(`"Ah, the parahuman. I must admit that he is the only acquaintance of yours that I don't have problems with, ${((s as any).pcs_lastname || '')}. A remarkable achievement on its own."`);
    scene.text('Indeed, that remark is surprising as Aleksei seems to be a pretty antisocial person who ignores or outright detests everybody around him.');
    scene.text('"I am embarrassed to say that I disregarded Gustav as that trickster\'s personal lapdog, as something below my notice. An error that shocked me when he, using only observational and deductive skills, found me! I have a millennia of experience over him!"');
    scene.text('He then looks at you with a puzzled expression, as if something is playing in his head.');
    scene.text('"After realizing this, I offered him an employment opportunity, and again, Gustav surprised me by rejecting it, even when I asked his price! He didn\'t seem happy about it, but he left it in the air and returned in a sort of misguided loyalty to that woman!"');
    scene.text('"My advice is that you learn all you can from Gustav, and as a personal favor, try to explain to him that for all his efforts to slow her fall, that woman eventually will cross the point of no return and transform into a danger for all of you."');
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Rikudo', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('The mere mention of that name makes Aleksei grit his teeth, and his posture grows more tense.');
    scene.text('"Rikudo… No name in this world can fill my heart with so much hate… The creator of The Talisman of Power, an item destined to give the <i>man</i> that acquired it, powers beyond the reach of the High Sidhe… Hmpf… I believed myself smarter than that supreme trickster, and in my hubris, ended up cursed to be a <i>woman</i> and have my prize forever beyond my reach."');
    scene.text('Aleksei drags his cigarette, trying to calm himself, but the vitriol soon returns to his voice.');
    // TODO-QSP: dynamic text: "So, you want information about him/her/it/them? There isn't any… Rikudo is an e...
    scene.text(`"So, you want information about him/her/it/them? There isn't any… Rikudo is an enigma, the essence of chaos, one of the <i>old guards</i> appearing and disappearing randomly, wearing many masks, and helping or hindering us in aid of an unknown goal. Some call Rikudo the Keyser Soze of the magical world and doubt its existence. Some youngsters even look at him as some kind of Promethean figure. You want my opinion ${((s as any).pcs_lastname || '')}?"`);
    scene.text('He then looks at you fiercely, making you shiver under his gaze.');
    scene.text('"Rikudo is real! Very real. I have met <i>HIM</i>, been tricked by <i>HER</i>, been cursed by <i>IT</i> and even killed a pair of <i>THEM</i>. There will be a reckoning someday and Rikudo\'s name will be erased by my hand, but until that time, if you hear about Rikudo, just run and pray that you don\'t end up entangled in another of Rikudo\'s mad schemes."');
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Reinhold', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Let's begin with some basic information <<$pcs_lastname>>. Reinhold is a high-l...
    scene.text(`"Let's begin with some basic information ${((s as any).pcs_lastname || '')}. Reinhold is a high-level agent for The Council, under the aegis of The Wizards' chair, who has been lucky enough to claim oversight over your case. He isn't only a master of the Time art, but a hero in every definition of the term, as he has fought against forces beyond the mouth of madness and won. We made the same oaths to protect the inhabitants of this world, and even if we don't see them in the same light, he has won my respect."`);
    scene.text('Aleksei bends slightly towards you, with a conspiratory smile.');
    scene.text('"And here is the part where I take away the blindfold from your eyes and explain some details. Reinhold is playing with your welfare. His intentions maybe altruistic, but most people will only see him trying to disrupt The Council\'s status quo in favor of The Wizards\' chair. The problem? Reinhold has decided on a hands-off approach where any magical knowledge can only be filtered down through his apprentice, limiting your growth, and making you… less desirable to the powers-that-be. That plan has imploded, but what hasn\'t changed is that you are mostly alone, as nobody is going to risk a confrontation to save you from any mismatch you can walk uninformed."');
    scene.text('After saying this, he reclines in his chair, letting the smoke drift from his nostrils like an ancient dragon.');
    // TODO-QSP: dynamic text: "What do you think about your <i>handler's</i> actions <<$pcs_lastname>>?"
    scene.text(`"What do you think about your <i>handler's</i> actions ${((s as any).pcs_lastname || '')}?"`);
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Tatiana', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"Yes, let\'s talk about the wannabe trickster. It\'s not like we can talk about something better…"');
    scene.text('Sarcasm drips from his voice as Aleksei lets you know his feelings for Tatiana.');
    scene.text('"I suppose that we can lose some semi-valuable minutes talking about your <i>teacher</i>. She is Reinhold\'s apprentice, older than she looks, a flesh crafter and a trickster, or… pardon me… a <i>body modding wizard</i> and <i>prankster</i>… and now we can jump to a more in-depth analysis."');
    scene.text('Aleksei pauses to put the now burned-out cigarette in an ashtray, and lights another before continuing.');
    scene.text('"That woman\'s limited magical potential makes her a little bird under the wing of a bigger one, and smart enough to not make waves so more powerful predators evade her for fear of Reinhold\'s retribution, but she is ambitious and wants more. Her plan to use her charms to entice Reinhold and use him for her own advancement has failed, but now she has another opportunity in you. That woman is leeching your magical power to raise her own at the same time. She latches to your case, waiting for an opportunity to advance in status. Under other circumstances, I would applaud her ambition, but she is a trickster, and they don\'t understand anything about loyalty or morals. Her betrayal is inevitable, so remember to keep your friends close and her closer."');
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'The Council', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, you must understand this. Civilizations have risen and crumb...
    scene.text(`"${((s as any).pcs_lastname || '')}, you must understand this. Civilizations have risen and crumbled, history made and forgotten, but The Council has existed in one form or another under the High Sidhe leadership from as early as the last glacial period. They have rewritten history, altered landscapes and are behind the greatest lie ever created. Impressive feats for an organization to which the average wizard only gives lip service."`);
    scene.text('Aleksei reclines in his chair and looks to the ceiling before continuing.');
    scene.text('"The Council is supposed to be a democratic quorum for the magically gifted, a place to settle disputes without bloodshed and a bridle for the unruly horse that is the standard wizard. It\'s divided into Chairs that represent and care for the needs of specific magical subspecies, the most prominent The High Sidhe, <i>primus inter pares</i> with the right to veto, but largely uncaring about political affairs. The Succubae happily try to reign in their place with great opposition from The Wizards, the most numerous group. In short terms, The Council is the governing body of the magical world."');
    scene.text('He sighs. "I may sound bitter, but my tenure with them wasn\'t happy. Like all governments, The Council is a cesspool of drama and backroom deals, a place for the undistinguished penpushers of our society to feel important. My job was going from crisis to crisis without help or acknowledgment, siphoning away my resources and time from more worthy undertakings. In the end, I quit without remorse."');
    // TODO-QSP: dynamic text: "In general, I must say that the common wizard doesn't care or even give any tho...
    scene.text(`"In general, I must say that the common wizard doesn't care or even give any thought about their decisions, and beyond maintaining The Veil or stopping Existential Threats, The Council tends to delegate any policing action to the local magical or mundane authority. This is something that you youngsters must understand, The Council WILL NOT intervene to save the miscreants from any lynching mob triggered by their foolishness, not even you ${((s as any).pcs_lastname || '')}."`);
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'The Lilith', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (qspFunc(s, 'succubus', 'active', 5)) {
      scene.text('"Your <i>Queen</i>? Conqueror of high and low beds? You want to know about your clique\'s role model?"');
      scene.text('You lick your dry lips at the word <i>Queen</i>, your instinct telling you that this title would be better attached to your name, and whatever Aleksei can tell you about The Lilith could be useful to take it for your own.');
    } else {
      scene.text('"Ah yes, the self-proclaimed <i>Queen</i> of the Succubae, conqueror of high and low beds. Why can\'t you youngsters think with something above your waist?"');
      scene.text('You lick your dry lips as Aleksei\'s words trigger your memories of the alien woman, something in the back of your head wanting to know everything about the Faeric lady.');
    }
    scene.text('He sighs. "Well, the first thing you must know is how seriously she takes her duties in The Council, as that name is a joke. Somebody began to use it around two hundred years ago and it stuck. Childishly, I assume, because it sounds somewhat <i>mystical</i> to the bunch of hicks that run towards her so-called <i>court</i> but let\'s be merciful. It\'s evident that trying to reign over her notoriously unruly sisterhood is a hard job, so she passes the days <i>socializing</i> and <i>entertaining</i> The High Sidhe, milking their influence and trying to convince them to break the chains that their ancestors, in all their wisdom, imposed on the Succubae."');
    scene.text('Woah, that sounds bitter, and it seems that he hasn\'t stopped.');
    scene.text('"So now I explain where she offended me on a personal level. During my tenure, she was constantly dismissing my efforts, ignoring Rikudo\'s threat and loading me with jobs that nobody seemed to like. That I can understand, in the sort of backstabbing atmosphere The Council seems to promote. My problem is that she dismissed my curse, as that <i>name</i>… Alexandria… was her idea!"');
    scene.actions([
      { label: 'Continue talking about people', goto: ['alexandriaChat', 'people'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTraining(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  // TODO-QSP: dynamic text: "Remember <<$pcs_lastname>>, this is only a first step into a larger world."
  scene.text(`"Remember ${((s as any).pcs_lastname || '')}, this is only a first step into a larger world."`);
  if (((s as any).hour ?? 0) > 19) {
    scene.actions([
      { label: 'The clock strikes', goto: ['alexandriaChat', 'late'] },
    ]);
  } else {
    qspCall(s, 'spellList', 'teacherActions', '$electSpells', 'alexandriaChat', 'training');
    if (((s as any).willpowermax ?? 0) < 100) {
      scene.actions([
        { label: 'Meditation(Willpower training)', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/alexandria/meditation.jpg');
    scene.text('Under Aleksei\'s expert guidance, you sit on the carpet in the lotus pose and begin a series of breathing exercises to the sound of the clock, the magical smoke in the room filling your lungs.');
    scene.text('In-Out');
    scene.text('Tick-Tock');
    scene.text('In');
    scene.text('Tick…');
    scene.text('Out');
    scene.text('…Tock');
    scene.text('Your mind drifts as the magical weed that he smokes puts all your nerves on alert, opening a way for thoughts to go faster… Letting you find your center… and clear your path…');
    scene.actions([
      { label: 'You awake with a strengthened resolve', goto: ['alexandriaChat', 'training'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"I want to learn more magic"', goto: ['alexandriaChat', 'electric3'] },
      { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterElectric1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.text('"Yes, I can\'t wait to guide you in this journey as my apprentice."');
    scene.text('Smirking, Aleksei opens a drawer and pulls out some papers that he then passes to you. These are reports from Tatiana about your magical progress.');
  } else {
    scene.text('"Yes, I will teach you, but remember that this is a <i>Quid pro quo</i> thing, so don\'t make me regret it."');
    scene.text('Aleksei opens a drawer and pulls out some papers that he silently reads before sighing in exasperation and looking at you.');
  }
  // TODO-QSP: dynamic text: "Reinhold had the initiative to send some interesting data about your training <...
  scene.text(`"Reinhold had the initiative to send some interesting data about your training ${((s as any).pcs_lastname || '')}. I don't know why he tolerates this nonsense as the teaching technique of his ex-apprentice is obviously sub-par. That or they are actively stalling your growth, so you are chained to them. Of course, in the likely event that both theories are true, you are fortunate to have found me."`);
  scene.text('He then leans back in his chair, hands interlocked under his chin, eyes looking at the ceiling, silent. He is lost in his thoughts for several minutes before deciding with a resigned sigh.');
  // TODO-QSP: dynamic text: "<<$pcs_lastname>>, under normal circumstances, teaching the basic magical theor...
  scene.text(`"${((s as any).pcs_lastname || '')}, under normal circumstances, teaching the basic magical theory takes years, even decades, until somebody with minimal talent can actually learn a Magical School, but neither of us has that kind of time in our hands. At this point, I feel I must re-teach you all the basics and I only see one solution. Let me see your hands."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Extend your hands', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    scene.text('Aleksei grabs some wet wipes from a drawer and begins to carefully clean your wrist before grabbing it, and after examining your hands in concentration, sends a wave of mana up your arms, tickling your bones, flesh and skin.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, this spell is used to create an <i>apprentice link</i>, a li...
    scene.text(`"${((s as any).pcs_lastname || '')}, this spell is used to create an <i>apprentice link</i>, a limited empathic vinculum that lets the magical knowledge flow easily from teacher to student. It's something that was used in past centuries when the teaching was a more personalized affair. Don't worry, it isn't dangerous, most people say that it's actually enjoyable. After it's formed, I will teach you Electric Shock, the first spell of the Electric School."`);
    scene.text('Indeed, the sensations traveling through your body are making you squirm, but not in disgust, as the tickling is beginning to make you giggle, a reaction that seems to amuse the serious wizard sitting before you.');
    scene.text('Your giggles quickly explode into full belly laughs, and you are barely aware that your hands are grabbing the confused Aleksei\'s ones.');
    scene.text('"Oh! Alexandria! This is going to be so fun!"');
    scene.text('You speak in a sing-song voice that you don\'t recognize before some kind of spell manifests between the two of you. After that comes a confusing series of images as Alexandria takes you somewhere else.');
    scene.actions([
      { label: 'You awake in somewhere else', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'nice1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaSex', 'grumpy1'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterElectric2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/alexandria3.jpg');
  if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
    scene.text('Aleksei is silent for a moment, eyeing you from top to bottom, and hiding a smile behind a drag of his cigarette before getting up and walking towards you.');
    scene.text('"Come with me my apprentice, it\'s time for your lesson."');
    scene.text('He then grabs your hand and drags you towards some other part of the house, taking off his tie and initiating your mutual undressing.');
  } else {
    scene.text('Aleksei is silent for a moment, eyeing you from top to bottom, before sighing loudly, getting up and walking towards you.');
    scene.text('"Put this on."');
    scene.text('A set of bondage ropes land at your feet that you, after undressing obediently, put on. After undressing himself, he drags you towards a bare-bones room with tools on a table.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Begin the lesson(Long Version)', goto: ['alexandriaSex', 'long'] },
    { label: 'Begin the lesson(Short Version)', goto: ['alexandriaSex', 'short'] },
  ]);
  scene.build();
}

function enterElectric3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AlexandriaQW ?? 0) === 7) {
    scene.actions([{ label: 'Continue', goto: ['alexandriaChat', 'electric1'] }]);
  } else {
    if (((s as any).AlexandriaQW ?? 0) < 12  ||  ((s as any).AlexandriaQW ?? 0) > 19  &&  ((s as any).AlexandriaQW ?? 0) < 23) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaChat', 'electric2'] }]);
    } else {
      if (((s as any).AlexandriaQW ?? 0) === 12) {
        scene.img('images/characters/city/alexandria/saber.jpg');
        scene.text('Aleksei\'s answer, is a photo, in it, over red cloth, there is an old-looking saber.');
        // TODO-QSP: dynamic text: "That <<$pcs_lastname>>, is a Pattern 1796 Heavy Cavalry Sword, that until recen...
        scene.text(`"That ${((s as any).pcs_lastname || '')}, is a Pattern 1796 Heavy Cavalry Sword, that until recently was in a Bratva's Pakhan possession. Fortunately for me, it seems that his stinginess with bribes has finally made the police move against him, so that this beautiful piece of history, can end in more deserving hands."`);
        scene.text('You examine the image, but can\'t discern anything special about the saber "So… if I bring you back this?"');
        // TODO-QSP: dynamic text: "Yes <<$pcs_lastname>>, bring it back to me, and after a proper teaching lesson,...
        scene.text(`"Yes ${((s as any).pcs_lastname || '')}, bring it back to me, and after a proper teaching lesson, I will open to you the secrets of the Lighting spell, and getting clear… This isn't some fetch quest for some valuable magical item, you don't want to hear the terms <i>valuable</i> and <i>magical</i> in the same sentence… No… It's only calls of interest is my need to add this item to my personal collection, and don't worry about the price, I've paid it ten times in bribes."`);
        scene.text('With that, Aleksei pass you a business card with the name <i>Filipp Kudashov</i> and The City Courthouse\'s direction.');
        scene.actions([
          { label: 'Talk about other things', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 13;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['alexandriaHome', 'study'] },
        ]);
      } else {
        if (((s as any).AlexandriaQW ?? 0) < 16) {
          scene.text('<center><b>Aleksei</b></center>');
          scene.img('images/characters/city/alexandria/alexandria3.jpg');
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>, aren't you supposed to be looking for my sword?"
          scene.text(`"${((s as any).pcs_lastname || '')}, aren't you supposed to be looking for my sword?"`);
          scene.actions([
            { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
          ]);
        } else {
          if (((s as any).pregChem ?? 0) > 1800  &&  (!((s as any).knowpreg ?? 0))) {
            scene.text('<center><b>Aleksei</b></center>');
            scene.img('images/characters/city/alexandria/alexandria2.jpg');
            // TODO-QSP: dynamic text: Aleksei is silent at your question, looking at you with curiosity "You dodn't kn...
            scene.text(`Aleksei is silent at your question, looking at you with curiosity "You dodn't know… Isn't it ${((s as any).pcs_lastname || '')}?"`);
            scene.text('"Know what? Is there a problem?"');
            // TODO-QSP: dynamic text: An amused smirk creeps into Aleksei's face as he deigns to answer "<<$pcs_lastna...
            scene.text(`An amused smirk creeps into Aleksei's face as he deigns to answer "${((s as any).pcs_lastname || '')}, that depends on your point of view at the prospect of being pregnant."`);
            scene.text('You take a moment to process those words. Are you really with child? Well… it seems that you must ask for a medical appointment.');
            scene.actions([
              { label: 'Talk about other things', handler: (st: GameState) => {
    (st as any).thinkpreg = 1;
    (st as any).knowpreg = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['alexandriaHome', 'study'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A241'] === 0  &&  ((s as any).pregChem ?? 0) > 1800  &&  ((s as any).knowpreg ?? 0) === 1) {
              scene.text('<center><b>Aleksei</b></center>');
              scene.img('images/characters/city/alexandria/alexandria2.jpg');
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>, taking into consideration the nature of our <i>training less...
              scene.text(`"${((s as any).pcs_lastname || '')}, taking into consideration the nature of our <i>training lessons</i>, I think is better to not submit your <i>pregnant</i> body to that stress level."`);
              scene.actions([
                { label: 'Talk about other things', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['alexandriaHome', 'study'] },
              ]);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A241'] === 0  &&  ((s as any).pcs_sweat ?? 0) >= 20) {
                scene.text('<center><b>Aleksei</b></center>');
                scene.img('images/characters/city/alexandria/alexandria2.jpg');
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>, at risk to embarrass you, I think is better if first you tak...
                scene.text(`"${((s as any).pcs_lastname || '')}, at risk to embarrass you, I think is better if first you take a shower."`);
                scene.actions([
                  { label: 'Talk about other things', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['alexandriaHome', 'study'] },
                ]);
              } else {
                scene.text('<center><b>Aleksei</b></center>');
                scene.img('images/characters/city/alexandria/alexandria3.jpg');
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>, you aren't ready for the next lesson(PLACEHOLDER until I wri...
                scene.text(`"${((s as any).pcs_lastname || '')}, you aren't ready for the next lesson(PLACEHOLDER until I write the next part)."`);
                scene.actions([
                  { label: 'Talk about other things', goto: ['alexandriaHome', 'study'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSword(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) === 14) {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).AlexandriaQW = 15;
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/alexandria3.jpg');
    scene.text('"It\'s seems that Mr.Kudashov, has put it in a security box and… well… sold the key to a woman called Ana, and… she had challenged me for its possession…"');
    scene.text('You grimace as those words fill the room, and a suddenly very tense Aleksei, raises an eyelid. The next moments lengthen as you can feel the wizard\'s displeasure.');
    // TODO-QSP: dynamic text: "Interesting, <<$pcs_lastname>>. Please, explain to me in detail what happened."
    scene.text(`"Interesting, ${((s as any).pcs_lastname || '')}. Please, explain to me in detail what happened."`);
    scene.text('You… follow with your <i>encounter</i> with Filipp Kudashov, his double cross, and finally Ana\'s call. During it, he takes out a tablet and seems to look for something, and even when you end your tale, he takes some minutes loss in… whatever he is doing.');
    scene.text('"Ehm… what now?"');
    scene.text('"Sigh… <i>Mr</i>.Kudashov\'s accounts are going to be audited and for that woman… Ana… Your new task is to accept the challenge and learn all you can about her… Hm… I want the saber, but now is secondary."');
    scene.actions([
      { label: 'Continue', goto: ['alexandriaHome', 'study'] },
    ]);
  } else {
    if (((s as any).AlexandriaQW ?? 0) === 16) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'npc_relationship', 'set', 'A241', 0);
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/alexandria/saber.jpg');
      scene.text('As you deliver those words, Aleksei put a package over his desk, and begin to open it. Inside, shrouded in red cloth, is the sword.');
      // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>, let's talk about this sword, that that little nuisance ...
      scene.text(`"Yes, ${((s as any).pcs_lastname || '')}, let's talk about this sword, that that little nuisance has sent me with a detailed and <i>colurfull</i> description of your actions."`);
      // TODO-QSP: dynamic text: You freeze, as Aleksei fixes his gaze into yours… He seems <i>superficially</i> ...
      scene.text(`You freeze, as Aleksei fixes his gaze into yours… He seems <i>superficially</i> calm, but if eyes are a window to the soul… Well… It has been good to know you ${((s as any).pcs_nickname || '')}.`);
      // TODO-QSP: dynamic text: "Let's be clear <<$pcs_lastname>>. I am old, I know betrayal in all forms and co...
      scene.text(`"Let's be clear ${((s as any).pcs_lastname || '')}. I am old, I know betrayal in all forms and colors, and even with that, it always surprises me, human pettiness… It seems that putting my confidence in you was… unwise. In time you will help me to find those who are behind this travesty, but until then, our <i>study methodology</i> must be re-evaluated."`);
      scene.text('He then, stands up and walks menacingly behind you… put his hands over your shoulders… and let fall into your hands some leather straps…');
      // TODO-QSP: dynamic text: "Let's start now <<$pcs_lastname>>."
      scene.text(`"Let's start now ${((s as any).pcs_lastname || '')}."`);
      scene.actions([
        { label: 'There is no escape', goto: ['alexandriaSex', 'grumpy2'] },
      ]);
    } else {
      if (((s as any).AlexandriaQW ?? 0) > 16) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.img('images/characters/city/alexandria/saber.jpg');
        scene.text('As you deliver those words, Aleksei put a package over his desk, and begin to open it. Inside, shrouded in red cloth, is the sword.');
        // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>, let's talk about this sword, that that little nuisance ...
        scene.text(`"Yes, ${((s as any).pcs_lastname || '')}, let's talk about this sword, that that little nuisance has sent me with a detailed and <i>colurfull</i> description of your actions."`);
        scene.text('You can only frown in silence at the item, that has given you so many troubles, from your silent reaction, Aleksei, take advantage dragging into his cigar and continuing.');
        // TODO-QSP: dynamic text: "This, <<$pcs_lastname>>, is war. Let me explain something to you, people like m...
        scene.text(`"This, ${((s as any).pcs_lastname || '')}, is war. Let me explain something to you, people like me are just plain simply too powerful. When there is some kind of irreparable rift between parties, we can't just sort this out with a backstreet brawl… too much collateral damage… That is a reason for The Council continued existence, but not all of us accept their arbitration… and some of the most imaginative of our brethren, resort to these acts of pettiness to settle any perceived grievance."`);
        scene.text('"Ok… so… what now?"');
        scene.text('Alex rises from his chair and paces up and down around the room, seemingly lost in his thought before turning towards you and giving an exasperated sigh.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/alexandria2.jpg');
    // TODO-QSP: dynamic text: "Now <<$pcs_lastname>>, I must search the miasma that are my so-called <i>enemie...
    scene.text(`"Now ${((s as any).pcs_lastname || '')}, I must search the miasma that are my so-called <i>enemies</i>, looking for the idiot that has decided to waste our precious time on this childish <i>attack</i>."`);
    scene.text('"You don\'t have an idea of who can be behind this?"');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, that isn't the question, no, take this lesson to heart… When...
    scene.text(`"${((s as any).pcs_lastname || '')}, that isn't the question, no, take this lesson to heart… When you are as old and powerful as I am, the problem is to crib through the cesspit of incompetence that rise regularly against you… is not that I don't have an idea about who is behind this, no… my problem is that I have, <i>too many ideas</i>, but… let's leave this for later, we must talk about your actions aftermatch."`);
    scene.text('Aleksei takes a long drag from his cigar, to calm himself before continuing.');
    if (((s as any).npc_rel ?? 0)?.['A241'] === 0  &&  ((s as any).AlexandriaMissionQW ?? 0) >= 12) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'npc_relationship', 'set', 'A241', 1);
      qspCall(s, 'stat', '');
      scene.text('<center><b>Aleksei</b></center>');
      scene.img('images/characters/city/alexandria/alexandria3.jpg');
      // TODO-QSP: dynamic text: "As I told you <<$pcs_lastname>>, <i>you lack the maturity and will that are req...
      scene.text(`"As I told you ${((s as any).pcs_lastname || '')}, <i>you lack the maturity and will that are required to master the high arts</i>, but… seeing your performance in this last endeavor, I am inclined to rethink our relationship."`);
      scene.text('Aleksei, then walk towards you, smirking, and grab delicately your chin, so you can see into his hard eyes.');
      // TODO-QSP: dynamic text: "You have done well my new <i>apprentice</i>. Now, <<$pcs_lastname>>, come with ...
      scene.text(`"You have done well my new <i>apprentice</i>. Now, ${((s as any).pcs_lastname || '')}, come with me, is time that I teach you the secrets of the Lighting spell."`);
      scene.text('Saying this, Aleksei, grab your hand and pull, taking you out his study… towards his bedroom.');
      scene.actions([
        { label: 'Follow your master', goto: ['alexandriaSex', 'nice2'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).AlexandriaQW ?? 0) === 19) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Aleksei</b></center>');
        scene.img('images/characters/city/alexandria/alexandria2.jpg');
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>, at risk of sounding ill-bred, I want to ask you a question… ...
        scene.text(`"${((s as any).pcs_lastname || '')}, at risk of sounding ill-bred, I want to ask you a question… Why you decided to lie with the little nuisance?"`);
        scene.text('The air freezes as he says those words, and you try to find a satisfactory answer, to the question asked by the irascible wizard. Fortunately, before you can mess this a little more, Aleksei, choose to throw you a bone.');
        // TODO-QSP: dynamic text: "Ehm… <<$pcs_lastname>>, maybe you find my question… <i>inpropper</i>… is not li...
        scene.text(`"Ehm… ${((s as any).pcs_lastname || '')}, maybe you find my question… <i>inpropper</i>… is not like I want to be privy of your <i>affairs</i>, but that woman is an agent for, at the moment, a unknow enemy, whose objectives are at best nebulous."`);
        scene.text('Aleksei, then walk towards you, put his hands on your shoulders, and push you towards the studio\'s exit.');
        // TODO-QSP: dynamic text: "Is evident, that I must to up your training <<$pcs_lastname>>, first teaching y...
        scene.text(`"Is evident, that I must to up your training ${((s as any).pcs_lastname || '')}, first teaching you the secrets of the Lighting spell, and then helping you to take away the idea of another dalliance with that <i>woman</i>."`);
        scene.actions([
          { label: 'Follow your master', goto: ['alexandriaSex', 'nice2'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).AlexandriaQW ?? 0) === 18) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.text('<center><b>Aleksei</b></center>');
          scene.img('images/characters/city/alexandria/alexandria2.jpg');
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>, at risk to sound ill-bred, I want to ask you a question… Why...
          scene.text(`"${((s as any).pcs_lastname || '')}, at risk to sound ill-bred, I want to ask you a question… Why you didn't lie with the little nuisance?"`);
          scene.text('You look confused at the irascible wizard. "I was supposed to do it?" Aleksei locks his eyes on yours, as he stands there letting the cigar burn away.');
          // TODO-QSP: dynamic text: "Of course no! <<$pcs_lastname>> you did the correct! I just thought that…" He s...
          scene.text(`"Of course no! ${((s as any).pcs_lastname || '')} you did the correct! I just thought that…" He stops in his tracks and seems to consider his answer before continuing. "Well ${((s as any).pcs_lastname || '')}, it doesn't matter, is evident that as my apprentice you have the <i>Gravitas</i>, to do the correct and ignore the siren's call from some loose moral woman, that obviously is working for one of my so-called enemies."`);
          scene.text('Aleksei, then walk towards you, put his hands on your shoulders, and lead you outside his home… towards a waiting limousine?');
          // TODO-QSP: dynamic text: "Is evident, that I must to up your training <<$pcs_lastname>>, teaching you the...
          scene.text(`"Is evident, that I must to up your training ${((s as any).pcs_lastname || '')}, teaching you the secrets of the Lighting spell, but first… I think a little shopping is necessary."`);
          scene.actions([
            { label: 'Mon Cheri?!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 13;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/boutique/butik.jpg');
    scene.text('A silent and somewhat sullen Aleksei, take you in the limousine towards the city center and a… very high class <i>women</i>\'s clothes boutique, the sort, that entertain the shoppers with champagne and have shoes in the one hundred thousand rubles rank.');
    // TODO-QSP: dynamic text: "I admit, <<$pcs_lastname>>, that I wasn't expecting for me to come to this esta...
    scene.text(`"I admit, ${((s as any).pcs_lastname || '')}, that I wasn't expecting for me to come to this establishment, but… you need a recompense, and sadly, my curse acting through the <i>apprentice link</i>, will, without doubt, end in a more <i>girly</i> outcome so… we will need to ride the wave and find something of good taste that you can wear, without embarrassing both of us."`);
    scene.text('Saying this, he made a gesture, and the boutique\'s staff surge towards you.');
    scene.actions([
      { label: 'Try on the gowns the retainers bring to you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).loop_counter = 0;
    // TODO-QSP: :markbuycloalexandria
    (s as any).loop_counter = ((s as any).loop_counter ?? 0) + (1);
    scene.text('<center><b>Aleksei</b></center>');
    scene.img('images/characters/city/alexandria/alexandria.jpg');
    if (((s as any).loop_counter ?? 0) === 300) {
      scene.text('You spend the next 30 minutes trying on various gowns, with the full complement of the shop\'s staff fuzzing all over you, and making you feel like a <i>pretty princess</i>. Aleksei on his part seems somewhat mortified at the staff\'s attention, that doesn\'t seem to understand what exactly is your relationship, and don\'t know how to treat him. That attention is cut short after somebody calls him… <i>Miss</i>, triggering a seething glade that makes the staff blanch… promptly making them put all their attention on you, but you are unable to find any that you either don\'t already own or that you are willing to wear. This seems to amuse Aleksei - and fright the shop\'s staff - that takes you back towards the limousine.');
      // TODO-QSP: dynamic text: "Sorry <<$pcs_lastname>>, that was a waste of our valuable time, that could have...
      scene.text(`"Sorry ${((s as any).pcs_lastname || '')}, that was a waste of our valuable time, that could have been used for more worthy endeavors… sigh… let get that for late and indulge us on something more worthy of our time."`);
      scene.text('The rest of the trip towards his home, go without problems, and when you arrive, Aleksei don\'t lose time in taking you to his room.');
    } else {
      (s as any).numrand = Math.floor(Math.random() * 100) + 1;
      qspCall(s, 'clothing_attributes', 'moncheri_gown', ((s as any).numrand ?? 0));
      if (((s as any).CloBimbo ?? 0) === 1) {
        // TODO-QSP: jump 'markbuycloalexandria'
      }
      if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
        // TODO-QSP: jump 'markbuycloalexandria'
      }
      if (qspFunc(s, 'clothing', 'is_owned', 'moncheri_gown', ((s as any).numrand ?? 0))) {
        // TODO-QSP: jump 'markbuycloalexandria'
      } else {
        qspCall(s, 'clothing', 'add_item', 'moncheri_gown', ((s as any).numrand ?? 0));
        scene.img(`images/pc/items/moncheri/gown/${((s as any).numrand || '')}.jpg`);
      }
    }
    scene.text('You spend the next 30 minutes trying on various gowns, with the full complement of the shop\'s staff fuzzing all over you, and making you feel like a <i>pretty princess</i>. Aleksei on his part seems somewhat mortified at the staff\'s attention, that doesn\'t seem to understand what exactly is your relationship, and don\'t know how to treat him. That attention is cut short after somebody calls him… <i>Miss</i>, triggering a seething glare that makes the staff blanch… promptly making them put all their attention on you until you find a gown that seems to <i>complement your eyes</i>, a somewhat quickly - but extremely polite - Aleksei and you are accompanied towards the limousine.');
    // TODO-QSP: dynamic text: "That was… interesting <<$pcs_lastname>>, but sadly a necessity, as is inescapab...
    scene.text(`"That was… interesting ${((s as any).pcs_lastname || '')}, but sadly a necessity, as is inescapable that you, as my apprentice, will be required to attempt certain societal gatherings where… so-called <i>masters</i> will judge you based only on your appearance… sigh… let get that for late and indulge us on something more worthy of our time."`);
    scene.text('The rest of the trip towards his home, go without problems, and when you arrive, Aleksei don\'t lose time in taking you to his room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 13;
  }, goto: ['alexandriaSex', 'nice2'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).AlexandriaQW ?? 0) === 17) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            scene.text('<center><b>Aleksei</b></center>');
            scene.img('images/characters/city/alexandria/alexandria3.jpg');
            // TODO-QSP: dynamic text: "Is evident, that I must to up your training <<$pcs_lastname>>, teaching you the...
            scene.text(`"Is evident, that I must to up your training ${((s as any).pcs_lastname || '')}, teaching you the secrets of the Lighting spell."`);
            scene.text('Aleksei, then walk towards you, put his hands on your shoulders, and push you towards the studio\'s exit.');
            scene.actions([
              { label: 'Continue', goto: ['alexandriaSex', 'nice2'] },
            ]);
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            scene.text('<center><b>Aleksei</b></center>');
            scene.img('images/characters/city/alexandria/alexandria3.jpg');
            // TODO-QSP: dynamic text: "Is evident, that I must to up your training <<$pcs_lastname>>, teaching you the...
            scene.text(`"Is evident, that I must to up your training ${((s as any).pcs_lastname || '')}, teaching you the secrets of the Lighting spell."`);
            scene.text('Aleksei, then walk towards you, put his hands on your shoulders, and push you towards the studio\'s exit.');
            scene.actions([
              { label: 'Continue', goto: ['alexandriaSex', 'grumpy2'] },
            ]);
          }
        }
      }
    }
  } },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        if (((s as any).AlexandriaMissionQW ?? 0) > 1) {
          (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) - (1);
        }
        qspCall(s, 'stat', '');
        scene.text('<center><b>Aleksei</b></center>');
        scene.img('images/characters/city/alexandria/chair.jpg');
        // TODO-QSP: dynamic text: "Yes, <<$pcs_lastname>>?"
        scene.text(`"Yes, ${((s as any).pcs_lastname || '')}?"`);
        scene.text('"Hum… I haven\'t made much progress to recover it."');
        scene.text('Aleksei just raises an eyebrow, looking nonplussed, and answers somewhat drily…');
        // TODO-QSP: dynamic text: "And… What is impeding you to find this child <<$pcs_lastname>>? Sigh… She will ...
        scene.text(`"And… What is impeding you to find this child ${((s as any).pcs_lastname || '')}? Sigh… She will be around the city center during the weekend, and the challenge will be physical, so… you better dress accordingly."`);
        scene.text('You keep quiet. You should start looking for Ana straight away. You don\'t know how much time you have, and… Aleksei won\'t be happy if you procrastinate.');
        scene.actions([
          { label: 'Continue', goto: ['alexandriaHome', 'study'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTractatus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).tractatus = ((s as any).AlexandriaMissionQW ?? 0);
  (s as any).AlexandriaMissionQW = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Aleksei</b></center>');
  scene.img('images/characters/city/alexandria/chair.jpg');
  // TODO-QSP: dynamic text: Aleksei is already sitting in his chair in the studio, some kind of leatherbound...
  scene.text(`Aleksei is already sitting in his chair in the studio, some kind of leatherbound book on his lap. "I find myself in a conundrum ${((s as any).pcs_lastname || '')}, as now you are irretrievably tangled in this childish feud. If you were one of my agents, I would have spirited you away from the current situation, but, alas, is evident that even if The Council isn't involved in the current mess, they are going to limit any reasonable option, so… I must lend this to you."`);
  scene.text('Aleksei passes you the text, that now you realize isn\'t a book. In fact, is a set of yellowish sheets, sewn together, written elegantly in… <i>Latin</i>? and keep in some kind of leather portfolio. The set seems <i>handcrafted</i> and <i>centuries</i> old, but well preserved, with a tingle of magic.');
  scene.text('"This - written by me - <i>tractatus</i>, is and advanced <i>discourse</i> on unarmed combat. I am not sure when exactly it turned magical, but that is the nature of magic… unpredictable. It\'s primary power, is that in exchange for some mana, it will train your unarmed combat skills without the need to do the physical part, letting you grow - let\'s hope - in the security of your home… additionally, you don\'t need to know Latin to understand it. It\'s limitation is somewhat confusing, the number of <i>lessons</i> are variable but seems related to your performance on any task related to me. I assume that this last adventure will have granted you some uses."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['alexandriaHome', 'study'] },
  ]);
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
    case 'magic':
      enterMagic(s, scene);
      break;
    case 'people':
      enterPeople(s, scene);
      break;
    case 'training':
      enterTraining(s, scene);
      break;
    case 'electric1':
      enterElectric1(s, scene);
      break;
    case 'electric2':
      enterElectric2(s, scene);
      break;
    case 'electric3':
      enterElectric3(s, scene);
      break;
    case 'sword':
      enterSword(s, scene);
      break;
    case 'tractatus':
      enterTractatus(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const alexandriaChat: LocationDef = {
  name: 'alexandriaChat',
  title: 'Aleksei',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
