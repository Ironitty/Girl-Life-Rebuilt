import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).nichTanyaPic ?? 0)}`);
  (s as any).nichTanya['PropDate'] = 0;
  (s as any).nichTanya['PropSex'] = 0;
  if (((s as any).nichGalaKnowsPT ?? 0) === 10) {
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 0) {
      (s as any).nichGalaKnowsPT = 11;
      scene.actions([{ label: 'Continue', goto: ['nichTanya', 'bedroomTanya'] }]);
    } else {
      scene.text('Gala ordered you to break up with Tanya. Maybe you should talk with her. But if you do so you risk losing her.');
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 2) {
        if (((s as any).nichTanya ?? 0)?.['FuckCounter'] > Math.floor(Math.random() * 11) + 30  &&  ((s as any).nichTanya ?? 0)?.['FuckToday'] === 0) {
          scene.text('As you approach her she greets you with a smile. She walks over to her bed and sits down on the edge. Apparently she expects you to sit next to her.');
          // TODO-QSP: dynamic text: Once you'he settled down she says with a serious voice "<<$pcs_nickname>>, we ha...
          scene.text(`Once you'he settled down she says with a serious voice "${((s as any).pcs_nickname ?? 0)}, we have to talk."`);
          scene.text('"You remember the boy I told you about? Well, we went out for a few dates. He is a really great guy and I think he genuinely loves me."');
          scene.text('She hesitates for a few seconds. "And since you told me that you are not interested in something longlasting…"');
          scene.text('She stops for another few seconds. She obviously feels uncomfortable to speak out what she has to say.');
          scene.text('"Well… he is my boyfriend now. And I am his girlfriend."');
          scene.text('"So you are saying…"');
          scene.text('"Yes. I\'m afraid our time of having fun together is over. Don\'t get me wrong, I really enjoyed it. But it\'s time for me to move on now. You understand that, do you?"');
          (s as any).nichNTRelation = 10;
          scene.actions([
            { label: 'Sure', handler: (st: GameState) => {
    (s as any).nichTanya['Relationship'] = 6;
    qspCall(s, 'npc_relationship', 'set', 'A218', 50);
    qspCall(s, 'stat', '');
    scene.text('"Of course."');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, I hoped you'd say that." She hugs you.
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, I hoped you'd say that." She hugs you.`);
    if (((s as any).nichTanya ?? 0)?.['Uni'] >= 100) {
      scene.text('"You will meet Vlad shortly. I\'m sure you will like him. He is a really nice guy."');
      (s as any).nichTanya['BF'] = 1;
    } else {
      scene.text('"You will meet Grigory shortly. I\'m sure you will like him. You two have much in common."');
      (s as any).nichTanya['BF'] = 2;
    }
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('As you approach her she greets you with a smile.');
          (s as any).nichTanya['PropSex'] = 1;
          (s as any).nichTanya['PropDate'] = 1;
        }
      } else {
        if (((s as any).nichTanya ?? 0)?.['FuckCounter'] > Math.floor(Math.random() * 4) + 22  &&  ((s as any).nichTanya ?? 0)?.['FuckToday'] === 0) {
          scene.text('As you approach her she greets you with a smile. She walks over to her bed and sits down on the edge. Apparently she expects you to sit next to her.');
          // TODO-QSP: dynamic text: Once you'he settled down she says with a serious voice "<<$pcs_nickname>>, we ha...
          scene.text(`Once you'he settled down she says with a serious voice "${((s as any).pcs_nickname ?? 0)}, we have to talk."`);
          scene.text('You look at her. Her face does\'t give away her thoughts.');
          scene.text('"I really enjoy our… well… special times. I really do. And I really really like you. But there is somebody… ehm… I guess…"');
          scene.text('"So there is this guy who asked me out for a date… and he is really cute and so…"');
          scene.text('"I really didn\'t know what to tell him. I don\'t have the feeling that you think our friendship is more than just a friendship. Please tell me if I am wrong!"');
          scene.actions([
            { label: 'Lets stay friends with benefits', handler: (st: GameState) => {
    scene.text('"You\'re right, Tanya. I really like you, but I\'d like things to stay casual."');
    scene.text('She looks a tiny bit disappointed. "Oh, that\'s ok. So you wouldn\'t mind if I brought a boy over here?"');
    scene.text('"No, of course not."');
    scene.text('"Well… that\'s good… you have given me a lot to think about. Would you mind letting me think everything over?"');
    (s as any).nichTanya['Relationship'] = 2;
    scene.actions([
      { label: 'Of course not (Leave her)', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
            { label: 'I love you', handler: (st: GameState) => {
    scene.text('"Actually, Tanya, I wish we could be so much more than just friends."');
    scene.text('"Really?" She beams. "I feel the same way! I was only afraid…"');
    scene.text('She is silenced by your kiss.');
    scene.text('Once she is able to talk again she jumps up and hugs you. "Oh, this is so great. I am so happy now. Does this mean you are my girlfriend now?"');
    scene.text('"I guess so."');
    scene.text('Tanya looks overjoyed. Unable to find any more words to express her emotions she starts to hug and kiss you again.');
    (s as any).nichTanya['Relationship'] = 3;
    (s as any).nichNTRelation = 10;
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'adore');
    scene.actions([
      { label: 'Fuck her', goto: ['nichTanya', 'sexL'] },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('As you approach her she greets you with a smile.');
          (s as any).nichTanya['PropSex'] = 1;
          (s as any).nichTanya['PropDate'] = 1;
        }
        if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
          if (((s as any).nichTanya ?? 0)?.['FuckLast'] < ((s as any).daystart ?? 0) - 5) {
            scene.text('As you approach her she greets you with a smile. "Hello sweety. Why didn\'t you visit me lately? Have you been busy?"');
          } else {
            scene.text('As you approach her she greets you with a smile. "Hello sweety. Are you back for another round?"');
            scene.text('As you approach her she greets you with a smile. "Hello sweety. How are you doing?"');
          }
          (s as any).nichTanya['PropSex'] = 1;
          (s as any).nichTanya['PropDate'] = 1;
        }
        if (((s as any).nichTanya ?? 0)?.['PropSex'] === 1) {
          scene.actions([
            { label: 'Propose having sex', handler: (st: GameState) => {
    if (((s as any).nichTanya ?? 0)?.['FuckToday'] >= 3) {
      qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
      scene.text('As you propose going for yet another round Tanya slowly shakes her head.');
      // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>. I'm really exhausted. Doing it four times a day i...
      scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}. I'm really exhausted. Doing it four times a day is too much for me. But we can cuddle if you'd like."`);
      scene.actions([
        { label: 'Cuddle', goto: ['nichTanya', 'cuddle'] },
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A218', 'like');
      scene.text('"Hey Tanya. I was wondering if you are in the mood to have some fun."');
      scene.text('"Of course! Just give me a minute."');
      scene.actions([
        { label: 'Wait for her', goto: ['nichTanya', 'sexL'] },
      ]);
    }
  } },
          ]);
        }
        if (((s as any).nichTanya ?? 0)?.['PropDate'] === 1  &&  (((s as any).nichTanya ?? 0)?.['DateLast'] !== ((s as any).daystart ?? 0)  ||  ((s as any).nichDebug ?? 0) === 1)) {
          qspCall(s, 'nichTanya', 'date_proposal');
        }
        (s as any).nichTanya['PropDate'] = 0;
        (s as any).nichTanya['PropSex'] = 0;
        scene.actions([
          { label: 'Talk with her', goto: ['nichTanya', 'chat'] },
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      }
      scene.actions([
        { label: 'Talk with her', handler: (st: GameState) => {
    scene.text('"Tanya, I have to talk with you…"');
    scene.text('You tell her how her mother demanded you to break up with her.');
    scene.text('After you finished you look at Tanya waiting for her reaction.');
    if (((s as any).nichTanya ?? 0)?.['Relationship'] === 2) {
      scene.text('She does not appear to be very upset.');
      scene.text('"Well, maybe she is right. After all you told me that you don\'t want something more meaningful with me."');
      scene.text('She hesitates for a second.');
      scene.text('"And I really don\'t want you to get into trouble with my mother. I think it would be for the best if stopped… well… whatever it is we are having."');
      scene.text('You are about to object but Tanya seems to have made up her mind. So you can only nod and turn away.');
      (s as any).nichTanya['Relationship'] = 5;
      (s as any).nichGalaKnowsPT = 11;
      qspCall(s, 'npc_relationship', 'set', 'A218', 30);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      scene.text('She does not appear to be very upset.');
      scene.text('"Well, maybe she is right. I mean I wouldn\'t have dreamt of being with a girl before I met you. And except for you I feel more attracted to men anyways."');
      scene.text('She hesitates for a second.');
      scene.text('"And I really don\'t want you to get into trouble with my mother. I think it would be for the best if stopped… well… whatever it is we are having."');
      scene.text('You are about to object but Tanya seems to have made up her mind. So you can only nod and turn away.');
      (s as any).nichTanya['Relationship'] = 5;
      (s as any).nichGalaKnowsPT = 11;
      qspCall(s, 'npc_relationship', 'set', 'A218', 30);
      if (((s as any).nichTanya ?? 0)?.['Relationship'] === 3) {
        scene.text('She appears very upset.');
        scene.text('"What?! How can she…" she begins to sob. Trying to comfort her you embrace her.');
        scene.actions([
          { label: 'Break up', handler: (st: GameState) => {
    scene.text('"Tanya, I think you mother is right. It would be for the best if we broke up."');
    scene.text('Hearing your words she pushes you away. Her eyes are watery but now she has an angry expression on her face.');
    scene.text('"How can you?!" she yells at you. "Do I mean so little to you?! Get out of my room! Right! Now!"');
    (s as any).nichTanya['Relationship'] = 4;
    (s as any).nichGalaKnowsPT = 11;
    qspCall(s, 'npc_relationship', 'set', 'A218', 10);
    scene.actions([
      { label: 'Leave', goto: ['nichApartment', ''] },
    ]);
  } },
          { label: 'Continue in secret', handler: (st: GameState) => {
    scene.text('"Tanya, I don\'t want to leave you. But we have to be careful. At least until your mother accepts us."');
    scene.text('Tanya sobs again. Then she nods.');
    scene.text('You continue comforting her for a few minutes until she appears to be fine again. You kiss her passionately before leaving her.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).nichGalaKnowsPT = 12;
    qspCall(s, 'npc_relationship', 'modify', 'A218', 'dislike');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
          { label: 'Defy Gala', handler: (st: GameState) => {
    scene.text('"Tanya, I don\'t want to leave you. And you mother can\'t force us apart. You are an adult and Nicholas won\'t fire me because of this. There is nothing Gala can really do to us."');
    scene.text('Tanya sobs again. "I… I don\'t know. Do you really think so? I mean I don\'t want to lose you. Shouldn\'t we just try to meet in secret?"');
    scene.text('"No, we don\'t have to. Don\'t worry. Everything will be just fine. You will see."');
    scene.text('You continue comforting her for a few minutes until she appears to be fine again. You kiss her passionately before leaving her.');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).nichGalaKnowsPT = 14;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t tell her', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 13;
    scene.text('You decide that it\'s better not to upset Tanya with her mothers wishes.');
    scene.actions([
      { label: 'Further', goto: ['nichTanya', 'bedroomTanya'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const nichTanya: LocationDef = {
  name: 'nichTanya',
  title: 'You greet her. "Hi Tanya, I\'ve been thinking and would like ',
  region: 'other',
  enter: enter,
};
