import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).alko_temp = ((s as any).alko ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'qwBarPolet', 'intro');
  (s as any).orderDrink = ((s as any).pcs_drank ?? 0);
  if (((s as any).MartinTalkDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinTalkDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinTalkDay = 0;
  }
  if (((s as any).MartinSexDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinSexDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinSexDay = 0;
  }
  if (((s as any).MartinPrezikDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinPrezikDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinPrezik = 0;
  }
  if (((s as any).BillHourDay ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).BillHourDay = ((s as any).daystart ?? 0);
    (s as any).VicArt_BillDay = 0;
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).temp ?? 0) === 1) {
      (s as any).PBB_BillDay = 0;
    }
  }
  if (((s as any).knowMartin ?? 0) === 0  &&  ((s as any).RabotnikFirst ?? 0) === 0) {
    (s as any).RabotnikFirst = 1;
  }
  scene.text('<center><b>Bar "Rabotnik"</b></center>');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  scene.text('As you enter the bar, you see that about a dozen regular tables and stools take up most of the room. A bar counter, right in front of you, dominates the center of the establishment. At the far end of it, near a door leading to the toilet, a doorway with a curtain leads to the obligatory pool table that rounds off the furniture.');
  // TODO-QSP: dynamic text: This place has a rowdy air about it: The smell of spilled beer, schnaps, and a h...
  scene.text('This place has a rowdy air about it: The smell of spilled beer, schnaps, and a hint of vomit and blood are hard to miss, and some of the stools and billiard cues look like they\'ve been used in fights before. It is obviously a worker pub and not trying to be anything fancier than that, but that gives it an odd charm and coziness of its own\' + iif(hour >= 16, \', and despite the hints of shadiness, you can hear plenty of laughter and friendly conversation\', \') + \'. You doubt you\'ll get a fancy cocktail in here, though.');
  scene.actions([
    { label: 'Exit to the street', goto: ['city_industrial', ''] },
    { label: 'Approach the bar', goto: ['qwBarPolet', 'bar'] },
    { label: 'Go to the toilet', goto: ['qwBarPoletToilet', ''] },
  ]);
  scene.build();
}

function enterBar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orderDrink ?? 0) < ((s as any).pcs_drank ?? 0)) {
    (s as any).orderDrink = ((s as any).pcs_drank ?? 0);
    scene.actions([{ label: 'Continue', goto: ['qwbarPolet', 'DrinkingBooze'] }]);
  }
  scene.text('<center><b>Bar "Rabotnik"</b></center>');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  if (((s as any).BillHour ?? 0) !== ((s as any).hour ?? 0)) {
    (s as any).BillHour = ((s as any).hour ?? 0);
    // TODO-QSP: :bill_loop
    (s as any).bill_rand = Math.floor(Math.random() * 6) + 1;
    if (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).VicArt_BillDay ?? 0) === 1) {
      // TODO-QSP: jump 'bill_loop'
    }
    if (((s as any).bill_rand ?? 0) === 1  &&  ((s as any).PBB_BillDay ?? 0) === 1) {
      // TODO-QSP: jump 'bill_loop'
    }
  }
  scene.text('Your eyes wander towards the backroom with the billiard table.');
  if (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).Jaska_Ev ?? 0) === 0) {
    scene.text('You notice some guys are playing billiards in the backroom. They seem know each other well and are playing for quite a bit of money, from what you can tell, so you don\'t want to interrupt right now.');
  } else {
    scene.text('You notice the guys Jaska played against are in the backroom with the billiard table, having a friendly match. Maybe you could play a round with them?');
    if (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).Jaska_Friend_Bill ?? 0) < 4) {
      scene.text('You notice that Jaska\'s friends, Victor and Artyom, are in the backroom with the billiard table, having a friendly match. You could join them, if you wanted to.');
    } else {
      (s as any).temp = Math.floor(Math.random() * 4) + 1;
      if (((s as any).temp ?? 0) === 1) {
        scene.text('You notice that Jaska\'s friends, Victor and Artyom, are in the backroom with the billiard table, but they don\'t seem to be alone: A woman you don\'t know is with them, and judging by the looks Artyom is giving her, she has offered them something other than money as a wager…');
      } else {
        scene.text('You notice that Jaska\'s friends, Victor and Artyom, are alone in the backroom with the billiard table, having a friendly match. You could join them, if you wanted to.');
      }
      if (((s as any).PBB_Met ?? 0) !== 0  &&  ((s as any).bill_rand ?? 0) === 1) {
        (s as any).PBB_BillDay = 1;
        scene.text('The guy you played billiards with before seems to be playing against a pair of women who are looking increasingly distressed as he pockets one ball after the other. You can see quite a bit of money sitting on the side of the table and you are pretty sure he is about to win it all.');
        if (((s as any).PBB_Met ?? 0) === 2) {
          scene.text('You wonder if he offered them the same \'money or blowjob\' deal he offered you…');
        }
      } else {
        (s as any).PBB_BillDay = 1;
        scene.text('A stranger seems to be playing billiards with a pair of women who are looking increasingly distressed as he pockets one ball after the other. You can see quite a bit of money sitting on the side of the table and you are pretty sure he is about to win it all.');
        if (((s as any).bill_rand ?? 0) === 2) {
          scene.text('The backroom seems to be empty at the moment, the billiard table deserted. Looks like there\'s nobody you could play with.');
        } else {
          scene.text('You notice that some people are playing some billiards. Maybe you could join them?');
        }
        if (((s as any).bill_rand ?? 0) > 2  ||  (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).Jaska_Ev ?? 0) !== 0  &&  (((s as any).Jaska_Friend_Bill ?? 0) < 4  ||  ((s as any).temp ?? 0) !== 1))) {
          scene.actions([
            { label: 'Go play billiards', handler: (st: GameState) => {
    if (((s as any).bill_rand ?? 0) === 0) {
      (s as any).VicArt_BillDay = 1;
    }
  }, goto: ['qwBarBilliard', 'billiard_ev2'] },
          ]);
        }
        if ((((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)  &&  ((((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) >= 45))) {
          scene.text('The bar is emptying quickly as its owner is telling the few patrons who are left that he\'s closing for the night. Within minutes, even those who you thought were too drunk to even understand what "leaving" means are gone and only the bartender himself remains.');
          if (((s as any).npc_rel ?? 0)?.['A216'] < 20) {
            scene.text('Guess you had better head out, too.');
          }
        } else {
          scene.text('It\'s no small feat to get people to leave a bar when they don\'t have to work the next day, but this bartender seems used to the hassle, exchanging friendly words with some, being a little more curt with others, and helping the drunks who would have slept through the night on one of the tables out the door, until only the barman himself remains.');
          if (((s as any).npc_rel ?? 0)?.['A216'] < 20) {
            scene.text('Guess you had better head out, too.');
          }
          if (((s as any).hour ?? 0) < 21  &&  ((s as any).week ?? 0) < 7) {
            scene.text('Far from empty already, the bar keeps filling at an astounding rate as people get off work in the various surrounding factories, looking to have a beer with their friends before heading home, or to get piss drunk to take their mind off their problems.');
          } else {
            scene.text('Far from empty already, the bar keeps filling at an astounding rate as people look to spend their day off in the familiar comfort of the bar they visit every other day of the week, where the barman is burly, the men rowdy and the women ugly, but at least the beer tastes less like piss than it does in most other bars in the area.');
            if (((s as any).hour ?? 0) >= 21  &&  (((s as any).hour ?? 0) <=23  &&  ((s as any).minut ?? 0) < 45)  &&  (((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)) {
              scene.text('With the hour getting late and tomorrow being a workday, you are not surprised to see people trickle out of the bar, some walking straight, some stumbling, but all heading home. Still, what people are left manage to be fairly loud. A group of men playing billiards seems to be mainly responsible for it, but among the men who are quietly drinking and talking among themselves, there are some louder, less inhibited and supposedly drunker specimens.');
            } else {
              scene.text('The hour may be getting late, but few of the people here seem concerned with going home anytime soon, enjoying the weekend the best way they can: With friends, at a bar, and well on their way to getting shitfaced, so it doesn\'t come as a surprise that the bar is one of the noisiest places on the block right now. A group of men playing billiards seems to be mainly responsible for the racket, but even in the main room, the men who are quietly drinking and talking among themselves are in the minority tonight.');
            }
            scene.text('The bartender, a tough-looking guy with a scarred face and more tattoos than you can count, greets most of the men by name as they come in and prepares their usual drinks before they have even reached the counter.');
            if (((s as any).knowMartin ?? 0) === 0) {
              scene.text('He, along with some of the regulars, shoot you a quick glance and you realize that young women are probably a rare sight around here. You spot a handful of women, spread out over all the occupied tables, but judging by how they are treated, most of the men they\'re with seem to see them as "one of the guys", and judging by the muscular build some of them have, you can see why.');
            }
          }
          if (((s as any).hour ?? 0) >= 16) {
            if (((s as any).MartinSexTalk ?? 0) === 1) {
              scene.text('After how things went with Martin the other night, you are really not in the mood to talk to him with people around. It would be best to wait until he closes the bar, so you can talk to him in private and sort this out.');
              if (((s as any).MartinSexTalkDay ?? 0) < (((s as any).daystart ?? 0) - 7)) {
                scene.text('But honestly, you don\'t want to talk to him at all right now - you are still too angry for that.');
              }
            }
          }
          if (((s as any).npc_rel ?? 0)?.['A216'] > 20  &&  (((s as any).hour ?? 0) < 16  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) >= 45))  &&  ((s as any).MartinTalkVar ?? 0) > 3  &&  ((s as any).MartinSexDay ?? 0) === 0) {
            scene.img('images/locations/city/industrial/bar/emptybar.jpg');
            scene.text('With the bar closing, Martin is cleaning up, taking stock and doing whatever else he has to do to keep the place running smoothly. Since you are more or less alone with him, now might be the perfect time to talk to him in private…');
            if (((s as any).MartinSexTalk ?? 0) !== 1) {
              scene.actions([
                { label: 'Have a private chat with Martin', goto: ['MartinSex', ''] },
              ]);
            } else {
              scene.text('But you are still too angry at him to even think about talking to him. He\'s wrong! Maybe he\'ll see that if you give it a few more days.');
              scene.text('Now that some time has passed, maybe you can talk to Martin. Surely, you could convince him of your point of view. Unless… unless you want to apologize?');
              scene.actions([
                { label: 'Have a private chat with Martin', goto: ['MartinSex', ''] },
              ]);
            }
          }
          scene.actions([
            { label: 'Leave the bar', goto: ['qwBarPolet', ''] },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Order from the bar (0:05)', goto: ['qwBarPolet', 'Ordering'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bar':
      enterBar(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const qwBarPolet: LocationDef = {
  name: 'qwBarPolet',
  title: 'Bar "Rabotnik"',
  region: 'other',
  locationType: 'public_indoors',
  description: ['As you enter the bar, you see that about a dozen regular tables and stools take up most of the room. A bar counter, right in front of you, dominates the center of the establishment. At the far end of it, near a door leading to the toilet, a doorway with a curtain leads to the obligatory pool table that rounds off the furniture.'],
  enter: enter,
};
