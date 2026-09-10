import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).sexpartkno = 1;
  qspCall(s, 'boyStat', 'A52');
  qspCall(s, 'boyStat', 'A161', 'a');
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === 'return') {
    if (((s as any).nichGentleclubDayE1 ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).nichGentleclubE1 ?? 0) === 1  &&  ((s as any).hour ?? 0) * 100 + ((s as any).minut ?? 0) >= 1745) {
      if (((s as any).hour ?? 0) * 100 + ((s as any).minut ?? 0) >= 2230) {
        scene.text('<font color = red>Nicholas asked you to attend him tonight but you are way too late.</font>');
        (s as any).nichGentleclubE1 = 2;
      } else {
        scene.text('<font color = red>You hear the voices of Nicholas and his business contact coming from the other side of the door. You were expected to attend them but now it\'s too late.</font>');
        return;
        scene.actions([{ label: 'Continue', goto: ['nichStudy', 'gentleclubE1'] }]);
        scene.actions([
          { label: 'Return to the hallway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
        ]);
      }
    }
    scene.text('<center><b>Nicholas\' Study</b></center>');
    scene.img('images/locations/city/citycenter/nichApartment/study.jpg');
    (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'study');
    (s as any).nichCleanAppropriate = 1;
    if (((s as any).nichNichPresent ?? 0) === 1) {
      scene.text('<a href="exec: gt \'nichNicholas\', \'start\'">Nicholas</a> is sitting behind his desk working on his computer.');
      (s as any).nichCleanAppropriate = 0;
    }
    if (((s as any).nichWork ?? 0) === 2) {
      if (((s as any).nichCleanAppropriate ?? 0) === 0) {
        scene.text('It wouldn\'t be appropriate to clean this room now.');
      } else {
        qspCall(s, 'nichChore', 'inspect', 'study');
      }
    }
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    scene.img('images/characters/city/nicholas/gentleclub/e1p1.jpg');
    scene.text('As you enter the study you see Nicholas sitting on his table talking to another business man.');
    // TODO-QSP: dynamic text: "Good, you are here. This is <<$pcs_firstname>>, my new maid. <<$pcs_nickname>>,...
    scene.text(`"Good, you are here. This is ${((s as any).pcs_firstname ?? 0)}, my new maid. ${((s as any).pcs_nickname ?? 0)}, this is Mister Fetisov."`);
    scene.text('You curtsy and Mister Fetisov slightly nods in your direction.');
    scene.text('For the next hour you are busy serving different kinds of refreshments to the two men. They are talking about business opportunities, the course of the industry and the global economy.');
    scene.text('You have the feeling that Mister Fetisov is inspecting your butt and your breasts whenever you are not looking.');
    scene.text('At the end of his visit Mister Fetisov looks directly at you while speaking to Nicholas.');
    scene.text('"When I came here I thought I would waste my time. But now I know that we have way more in common than I thought. Maybe doing business together is not a bad idea after all."');
    scene.text('He looks back at Nicholas. "There is a gentleman club where I am a member of. I think you would fit in there very well. Just go to this place." he hands Nicholas a business card. "He will inform the bouncer that I have invited you. Come any evening you like. And don\'t forget to bring your <i>maid</i>."');
    if (((s as any).locArgs?.[0] ?? 0) === 'reHire') {
      scene.text('<center><b>Nicholas\' Study</b></center>');
      scene.img('images/locations/city/citycenter/nichApartment/study.jpg');
      scene.actions([
        { label: 'Approach Nicholas and ask for job back.', handler: (st: GameState) => {
    scene.img('images/characters/city/nicholas/01.jpg');
    // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, what brings you here?" Nicholas asks while still reading...
    scene.text(`"Oh, ${((s as any).pcs_nickname ?? 0)}, what brings you here?" Nicholas asks while still reading his papers.`);
    // TODO-QSP: dynamic text: "'+$npc_nickname['A52']+', I was wondering if you still needed a maid?"
    scene.text('"\'+$npc_nickname[\'A52\']+\', I was wondering if you still needed a maid?"');
    qspCall(s, 'nichUtil', 'rehired');
    if (((s as any).nichSex ?? 0) >= 10) {
      scene.text('Nicholas looks from his desk at you and sees you in your maid uniform. "How fitting."');
      scene.text('He approaches you and checks you out in your maid uniform.');
      if (((s as any).succubusflag ?? 0) === 1) {
        scene.text('"You look like you never left us, you little demoness." His hand brushes your hair as his face approaches yours.');
        scene.text('You lean in to kiss your personal battery. You love his quality taste.');
      } else {
        scene.text('"You look like you never left us, you little vixen." His hand brushes your hair as his face approaches yours.');
        scene.text('You lean in and taste your master\'s lips.');
      }
      scene.text('"I missed your lips." He says as he moves away. "You are always welcome to work for me again." As he says this, he begins to unzip his pants.');
      scene.actions([
        { label: 'Smile at your master.', goto: ['nichNicholas', 'sex'] },
      ]);
    } else {
      scene.text('"Of course, we are glad to have you back."');
      scene.actions([
        { label: 'Head out.', goto: ['nichStudy', 'return'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/nicholas/01.jpg');
    scene.text('You wait in the study while Nicholas escorts Mister Fetisov to the door and says his farewell.');
    scene.text('When he returns he looks a little bit puzzled.');
    // TODO-QSP: dynamic text: "I am sorry, <<$pcs_nickname>>, I have no idea what that was about. Mister Fetis...
    scene.text(`"I am sorry, ${((s as any).pcs_nickname ?? 0)}, I have no idea what that was about. Mister Fetisov seems to have gotten some kind of impression from you."`);
    scene.text('You slowly nod.');
    scene.text('"I don\'t know what kind of club this is." He shows you the card he received. It looks very expensive with embossed blue letters on it. But there is no more information than an address.');
    scene.text('"As you might have noticed Mister Fetisov is a really important man and doing business with him would be very advantageous, not only for me, but for my whole company."');
    scene.text('"I know I am asking a lot. But would you do me the favor of accompanying me to this club? Bringing you seems to be a requirement."');
    scene.text('"I won\'t mind if you said no though. I pay you to be my maid, not to go to social events with me."');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).nichGentleclubE1 = 10;
    (s as any).nichGentleclubEnabled = 1;
    scene.text('You agree to go to the club with Nicholas. He seems to be happy about this decision.');
    scene.text('"Great. That\'s what I was hoping for. There is no hurry to get to this club. Just tell me when you want to go there."');
    scene.actions([
      { label: 'Leave', goto: ['nichStudy', 'return'] },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    (s as any).nichGentleclubE1 = (-1);
    scene.text('You tell Nicholas that you don\'t want to go to this club. There is only a very slight hint of disappointment in his face.');
    scene.text('"A pity. But as I told you, you have every right to make this decision. Let\'s not talk about this topic again."');
    scene.actions([
      { label: 'Leave', goto: ['nichStudy', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const nichStudy: LocationDef = {
  name: 'nichStudy',
  title: '<font color = red>Nicholas asked you to attend him tonight b',
  region: 'other',
  description: ['It wouldn\'t be appropriate to clean this room now.'],
  enter: enter,
};
