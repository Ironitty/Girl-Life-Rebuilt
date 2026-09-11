import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).motherworry ?? {})[1] = ((s as any).daystart ?? 0);
  qspCall(s, 'core_library', 'setloc', 'bedrPar', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] === 0) {
    ((s as any).ml_performance ?? {})['max_perform_minutes'] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0);
  }
  if (((s as any).locat ?? 0)?.['Mother'] === 26  &&  ((s as any).prevloc ?? 0) === 'bedrPar'  &&  qspFunc(s, 'homes_properties', 'can_live_here')) {
    scene.img('images/characters/pavlovsk/resident/mom/prost1.jpg');
    if (((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  (Math.floor(Math.random() * 3) + 1) === 1  &&  ((s as any).mom ?? 0)?.['condoms'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['mother', 'condom_find'] }]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 0  &&  ((s as any).motherQW ?? 0)?.['seen_dildos'] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
        scene.actions([{ label: 'Continue', goto: ['mother', 'dildo_find'] }]);
      } else {
        if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  ((s as any).analPlugIn ?? 0) === 0  &&  ((s as any).motherQW ?? 0)?.['seen_plug'] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
          scene.actions([{ label: 'Continue', goto: ['mother', 'plug_find'] }]);
        } else {
          scene.text('You walk into your bedroom and find your mother sweeping and dusting the room, folding clothes and putting them away and making the beds.');
          scene.actions([
            { label: 'Access wardrobe', goto: ['wardrobe', 'start'] },
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
          ]);
        }
      }
    }
  } else {
    if (((s as any).ParrotQW ?? 0)?.['Level'] === 2  &&  qspFunc(s, 'homes_properties', 'is_current_home')) {
      // TODO-QSP: dynamic text: As soon as you enter the room, you rush over to <<$ParrotQW['Name2']>>'s cage an...
      scene.text(`As soon as you enter the room, you rush over to ${((s as any).ParrotQW ?? 0)?.['Name2']}'s cage and pour the contents of the vial into his water bowl. You hope this will work and keep him from spilling you and your sister's bedroom secrets.`);
      ((s as any).ParrotQW ?? {})['Level'] = 3;
      ((s as any).ParrotQW ?? {})['Day'] = 3;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).ParrotQW ?? 0)?.['SisterReleaseParrotDay'] + 3 < ((s as any).daystart ?? 0)  &&  ((s as any).ParrotQW ?? 0)?.['Level'] === 1  &&  qspFunc(s, 'homes_properties', 'is_current_home')) {
        // TODO-QSP: dynamic text: When you enter the room, you notice <<$ParrotQW['Name2']>>'s cage is open and he...
        scene.text(`When you enter the room, you notice ${((s as any).ParrotQW ?? 0)?.['Name2']}'s cage is open and he's gone.`);
        scene.text('Anya must have released him since you weren\'t able to find a solution in time.');
        ((s as any).ParrotQW ?? {})['Owned2'] = 0;
        ((s as any).ParrotQW ?? {})['Level'] = 0;
        ((s as any).ParrotQW ?? {})['Day'] = 2;
        ((s as any).ParrotQW ?? {})['Failed'] = 0;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  ((s as any).tobiQW ?? 0) === 0  &&  ((s as any).locat ?? 0)?.['Anya_inroom'] === 0  &&  qspFunc(s, 'homes_properties', 'can_live_here')) {
          scene.actions([{ label: 'Continue', goto: ['tobiQW', 'start'] }]);
        } else {
          if (((s as any).locat ?? 0)?.['Anya'] === 11  &&  qspFunc(s, 'homes_properties', 'can_live_here')) {
            scene.actions([{ label: 'Continue', goto: ['sisterQW', 'sisboyQW_expel'] }]);
          } else {
            if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1  &&  ((s as any).ParrotQW ?? 0)?.['Owned2'] === 1  &&  ((s as any).ParrotQW ?? 0)?.['SisKeepParrot'] === 0  &&  qspFunc(s, 'homes_properties', 'is_current_home')) {
              scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
              // TODO-QSP: dynamic text: "What is that?" Anya asks while pointing at <<$ParrotQW['Name2']>> in his cage.
              scene.text(`"What is that?" Anya asks while pointing at ${((s as any).ParrotQW ?? 0)?.['Name2']} in his cage.`);
              scene.text('"I went to the mall and bought this bird. Isn\'t he the cutest?"');
              if (((s as any).npc_rel ?? 0)?.['A33'] > 50) {
                scene.text('"Not really, but I can see this is something you really want. As long as he doesn\'t make too much noise, I don\'t really care."');
                ((s as any).ParrotQW ?? {})['SisKeepParrot'] = 1;
              }
              if (((s as any).npc_rel ?? 0)?.['A33'] <= 50) {
                scene.text('"No he isn\'t cute, and I suggest you get it out of here. I\'m not sharing my room with a bird!"');
                scene.text('You\'re somewhat upset, but you understand. You should have asked her before buying it.');
                scene.text('You go to the window, open it and release the bird.');
                ((s as any).ParrotQW ?? {})['Owned2'] = 0;
              }
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
              ]);
            } else {
              if (qspFunc(s, 'homes_properties', 'can_live_here')) {
                scene.text('<center><b>Your bedroom</b></center>');
              } else {
                scene.text('<center><b>Your old bedroom</b></center>');
              }
              scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
              if (qspFunc(s, 'homes_properties', 'is_current_home')) {
                scene.text('This is the small bedroom you share with your sister, Anya. On one side of the room is a <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> where you can choose outfits and organise your clothing.');
                // TODO-QSP: dynamic text: Your <a href="exec:gt 'bed', 'start'">bed</a> stands opposite the wardrobe, and ...
                scene.text('Your <a href="exec:gt \'bed\', \'start\'">bed</a> stands opposite the wardrobe, and your <a href="exec:gt \'stol\' ,\'start\'">desk</a> is next to it\'+iif(mc_inventory[\'strapon\'] = 1, \'. You keep your strapon inside it.\', \'.\')+\' Your sister\'s bed is in the other corner.');
              } else {
                scene.text('This small bedroom you used to share with your sister, Anya. The furniture is old and basic.');
              }
              if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
                scene.text('Your guitar rests on its stand next to your bed.');
              }
              if (((s as any).ParrotQW ?? 0)?.['Owned2'] === 1  &&  qspFunc(s, 'homes_properties', 'is_current_home')) {
                // TODO-QSP: dynamic text: <a href="exec:gt 'popu','start2'"><<$ParrotQW['Name2']>></a> is sitting in his c...
                scene.text(`<a href="exec:gt 'popu','start2'">${((s as any).ParrotQW ?? 0)?.['Name2']}</a> is sitting in his cage`);
                if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 10) {
                  // TODO-QSP: dynamic text: <<$ParrotQW['Name2']>> starts squawking at you when you enter the room.
                  scene.text(`${((s as any).ParrotQW ?? 0)?.['Name2']} starts squawking at you when you enter the room.`);
                } else {
                  if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 20) {
                    // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. It sounds almost lik...
                    scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. It sounds almost like he is saying "<b>Hello ${((s as any).pcs_nickname ?? 0)}!</b>"`);
                  } else {
                    if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 30) {
                      // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is clearly saying...
                      scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is clearly saying "<b>Hello ${((s as any).pcs_nickname ?? 0)}!</b>"`);
                    } else {
                      if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 35) {
                        // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b><<$...
                        scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>${((s as any).pcs_nickname ?? 0)} very pretty!</b>"`);
                      } else {
                        if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 40) {
                          // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Gre...
                          scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Great body, ${((s as any).pcs_nickname ?? 0)}!</b>"`);
                        } else {
                          if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 50) {
                            // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>You...
                            scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>You're the best, Anya!</b>"`);
                          } else {
                            if (((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] <= 55) {
                              // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Yea...
                              scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Yeah, that's it Anya! Swallow it all!</b>"`);
                            } else {
                              if (((s as any).ParrotQW ?? 0)?.['Level'] < 3) {
                                // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>You...
                                scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Your pussy tastes great, Anya!</b>"`);
                              } else {
                                (s as any).parfixrand = Math.floor(Math.random() * 10) + 0;
                                if ((!((s as any).parfixrand ?? 0))) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Wha...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>What did you say to me?</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 1) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>3.1...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>3.1415926535897932384…</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 2) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Com...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Come closer, my friend.</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 3) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Her...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Here kitty, kitty!</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 4) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>I j...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>I just met you, and this is crazy!</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 5) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Bow...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Bow before me!</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 6) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>He'...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>He's just a friend, honest!</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 7) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Wha...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>What did you do to my socks?</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 8) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Tha...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>That's what she said!</b>"`);
                                }
                                if (((s as any).parfixrand ?? 0) === 9) {
                                  // TODO-QSP: dynamic text: When <<$ParrotQW['Name2']>> sees you, he starts 'speaking'. He is saying "<b>Hel...
                                  scene.text(`When ${((s as any).ParrotQW ?? 0)?.['Name2']} sees you, he starts 'speaking'. He is saying "<b>Help! They've turned me into a parrot!</b>"`);
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
              if (qspFunc(s, 'homes_properties', 'can_live_here')) {
                scene.text('<table><tr><td valign="top">');
                // TODO-QSP: func('alarmclock', 'base_alarmclock_text')
                if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
                  scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> is hidden in one of your desk drawers, as are your <a href="exec:gt \'stol\', \'bc\'">condoms</a>.');
                } else {
                  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
                    scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> is hidden in one of your desk drawers.');
                  } else {
                    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
                      scene.text('Your <a href="exec:gt \'stol\', \'bc\'">condoms</a> are hidden in one of your desk drawers.');
                    }
                  }
                }
                if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 4  &&  ((s as any).hour ?? 0) < 9  &&  ((s as any).detention_set ?? 0) === 1  &&  ((s as any).detention_warning ?? 0) !== ((s as any).daystart ?? 0)) {
                  (s as any).detention_warning = ((s as any).daystart ?? 0);
                }
                if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
                  scene.text('Your <a href="exec: gt \'komp\',\'start\'">computer</a> is on your desk.');
                }
                if (((s as any).npc_QW ?? 0)?.['A33'] > 10) {
                  ((s as any).npc_QW ?? {})['A33'] = 10;
                }
              }
              if (((s as any).locat ?? 0)?.['Anya_Gad'] === 0) {
                if (((s as any).sisboyparty_day ?? 0) + 1 === ((s as any).daystart ?? 0)  &&  ((s as any).sisboyparty ?? 0) === -1  &&  ((s as any).hour ?? 0) === 22) {
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  qspCall(s, 'stat', '');
                  scene.img(`images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_6_${Math.floor(Math.random() * 7) + 1}.jpg`);
                  scene.text('Anya bursts into the room, drunk and disheveled. You notice that her hair and clothes are covered in cum, but she doesn\'t seem to care as she falls onto her bed and instantly falls asleep.');
                  (s as any).sisboyparty = 1;
                  scene.actions([
                    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
                  ]);
                } else {
                  (s as any).sisterdialog = 1;
                  if (((s as any).locat ?? 0)?.['Anya'] === 26  ||  (((s as any).locat ?? 0)?.['Anya'] === 1  &&  ((s as any).locat ?? 0)?.['Anya_party_day'] >= ((s as any).daystart ?? 0) - 1)) {
                    if (((s as any).sisboypartyQW ?? 0) === 1) {
                      (s as any).sisboypartyQW = 2;
                    }
                    if (((s as any).sisboyparty ?? 0) === -1) {
                      (s as any).sisboyparty = 1;
                    }
                    scene.text('A drunken <a href="exec:gt \'sistersleep\', \'drunk_after_party\'">Anya</a> is sound asleep in her bed.');
                  } else {
                    if (((s as any).locat ?? 0)?.['Anya'] === 1) {
                      scene.text('<a href="exec:gt \'sistersleep\', \'sister_sleep\'">Anya</a> is asleep in her bed.');
                    } else {
                      if (((s as any).locat ?? 0)?.['Anya'] === 4) {
                        (s as any).sisterdialog = 3;
                        scene.text('<a href="exec:gt \'sister_chat\', \'talking\'">Anya</a> is getting ready to go out.');
                      } else {
                        if (((s as any).locat ?? 0)?.['Anya'] === 15) {
                          if (((s as any).anyaQW ?? 0)?.['bathroom_dildos'] > 0) {
                            scene.actions([{ label: 'Continue', goto: ['sister_chat', 'bathroom_dildo_talk1'] }]);
                          } else {
                            if (((s as any).sisterQW ?? 0)?.['sex_room'] > 0) {
                              scene.actions([{ label: 'Continue', goto: ['sister_chat', 'sex_room_talk1'] }]);
                            }
                          }
                          scene.text('<a href="exec:gt \'sister_chat\', \'talking\'">Anya</a> is sitting on her bed, reading a book.');
                        }
                      }
                    }
                  }
                }
              }
              qspCall(s, 'wardrobe', 'default_clothing_options');
              if (qspFunc(s, 'homes_properties', 'can_live_here')) {
                qspCall(s, 'daily_routine', 'offer_here');
                qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
                if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
                  scene.text('You have hidden your porn magazines under the mattress of your bed.');
                }
                (s as any).sis_watch = 0;
                if (((s as any).locat ?? 0)?.['Anya_inroom'] === 0  ||  ((s as any).sisboytrio ?? 0) > 0) {
                  qspCall(s, 'library_functions', 'set_read_porn_act');
                  if (((s as any).rexCarCount ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 3  &&  ((s as any).rexSmsDay ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).smsForRex ?? 0) < 13) {
                    scene.actions([
                      { label: 'Send Rex a text message', goto: ['rex_events', 'sms'] },
                    ]);
                  }
                  if (((s as any).pcs_horny ?? 0) >= 50) {
                    scene.actions([
                      { label: 'Masturbate', goto: ['selfplay', 'start'] },
                    ]);
                  }
                  if (((s as any).mc_inventory ?? 0)?.['vintage_card'] > 0) {
                    // TODO-QSP: act 'View your vintage porn cards': card_deck = 0
                    scene.actions([{ label: 'Continue', goto: ['card', ''] }]);
                  }
                  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
                    // TODO-QSP: act 'View your new porn cards': card_deck = 1
                    scene.actions([{ label: 'Continue', goto: ['card', ''] }]);
                  }
                }
                qspCall(s, 'library_functions', 'set_home_read_acts');
                if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] > 0) {
                  // TODO-QSP: dynamic text: You currently have <<mc_inventory['trinkets_home']>> trinkets to sell at the sta...
                  scene.text(`You currently have ${((s as any).mc_inventory ?? 0)?.['trinkets_home']} trinkets to sell at the station. The maximum you can carry is 30.`);
                }
                if (((s as any).locat ?? 0)?.['Anya_inroom'] === 0) {
                  qspCall(s, 'din_van', 'palelady');
                }
                qspCall(s, 'exercise', 'start');
                if (((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
                  scene.text('Your <a href="exec:gt \'sewing\',\'start\'">sewing kit</a> is stored neatly under your bed.');
                  if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
                    scene.text('You do not have any fabric.');
                  }
                  if (((s as any).pcs_sewng ?? 0) >= 80) {
                    if (((s as any).newgobelen ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
                      scene.actions([
                        { label: 'Start a new tapestry', goto: ['sewing', 'tapestry'] },
                      ]);
                    } else {
                      if (((s as any).newgobelen ?? 0) >= 1) {
                        // TODO-QSP: dynamic text: Your tapestry is <<newgobelen/10>> percent finished.
                        scene.text(`Your tapestry is ${((s as any).newgobelen ?? 0)/10} percent finished.`);
                        scene.actions([
                          { label: 'Work on the tapestry', goto: ['sewing', 'tapestry'] },
                        ]);
                      }
                    }
                  }
                  if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0) {
                    // TODO-QSP: dynamic text: You have <<mc_inventory['tapestry']>> completed tapestries.
                    scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['tapestry']} completed tapestries.`);
                  }
                }
                qspCall(s, 'internet_mobile', 'get_access');
                if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
                  qspCall(s, 'music_actions', 'not_alone');
                  if ((!((s as any).sisboytrio ?? 0))) {
                    qspCall(s, 'internet_mobile', 'add_limitation', 'noporn', 'You shouldn\'t watch porn with your sister in the room. She would notice for sure!');
                  }
                  qspCall(s, 'internet_mobile', 'add_limitation', 'nocamshow', 'You can\'t do any webcam activities with your sister in the room!');
                }
                if (((s as any).locat ?? 0)?.['Anya_inroom'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) <= 0) {
                  scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
                } else {
                  if (((s as any).kid ?? 0) >= 1  &&  ((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) <= 0) {
                    scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Unbox</a> your breast pump');
                  } else {
                    if (((s as any).locat ?? 0)?.['Anya_inroom'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1  &&  ((s as any).pcs_inhib ?? 0) > 40) {
                      scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
                    } else {
                      if (((s as any).kid ?? 0) >= 1  &&  ((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((s as any).bp_unbox ?? 0) === 1  &&  ((s as any).pcs_inhib ?? 0) > 30) {
                        scene.text('<a href="exec: gt \'lact_bp\', \'bp_unbox_event\'">Try out</a> your breast pump');
                      }
                    }
                  }
                }
                qspCall(s, 'lact_bp', 'massage');
                qspCall(s, 'blackmailer', 'open_package_act');
                scene.actions([
                  { label: 'Relax on your bed', goto: ['bed', 'start'] },
                  { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
                ]);
              }
              scene.text('</td><td width = "100" valign="top"></td><td>');
              if (qspFunc(s, 'homes_properties', 'is_current_home')) {
                qspCall(s, 'subkid', '');
              }
              scene.text('</td></tr></table>');
              qspCall(s, 'music_actions', 'start');
              scene.actions([
                { label: 'Exit the room', handler: (st: GameState) => {
    if ((((s as any).locat ?? 0)?.['Anya'] === 4  ||  ((s as any).locat ?? 0)?.['Anya'] === 15)  &&  ((s as any).daystart ?? 0) - ((s as any).ParrotQW ?? 0)?.['BuyDate'] > 55  &&  ((s as any).ParrotQW ?? 0)?.['Owned2'] === 1  &&  ((s as any).ParrotQW ?? 0)?.['SisterReleaseParrotDay'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['sister_chat', 'pargone'] }]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + (1);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

export const bedrPar: LocationDef = {
  name: 'bedrPar',
  title: 'Your bedroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
