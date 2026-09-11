import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).kolkaseepornday = ((s as any).daystart ?? 0);
  (s as any).bratrand = Math.floor(Math.random() * 2) + 0;
  scene.img('images/shared/home/tv/seeporn.mp4');
  scene.text('The boys watch porn and whisper to each other, casting lustful glances at you.');
  qspCall(s, 'stat', '');
  if ((!((s as any).bratrand ?? 0))) {
    (s as any).boyseeporn = ((s as any).boyseeporn ?? 0) + (1);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Zhendos suggests, "<<$pcs_nickname>>, how about putting that mouth to work? Kolk...
    scene.text(`Zhendos suggests, "${((s as any).pcs_nickname ?? 0)}, how about putting that mouth to work? Kolka told us how you entertained the guys in the park, so there's no need to act all innocent. Unless of course, you want everyone to know."`);
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).see_rand1 ?? 0) < 30) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/school/grounds/seeporn...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/school/grounds/seeporn/sex/seepornblowbang.jpg"></center>`);
    }
    if (((s as any).see_rand1 ?? 0) >= 30) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/school...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/school/grounds/seeporn/sex/seepornbro0,${Math.floor(Math.random() * 3) + 0}.mp4"></video></center>`);
    }
    scene.text('Your silence is taken as consent. Zhendos gets his dick out and pulls your face toward it, and you dutifully wrap your lips around it and begin to suck.');
    scene.text('Your brother Kolka and Mishan also get their members out and stand around you. You start to masturbate and suck dick. You find the unusual and awkward situation a little exciting.');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A58');
    qspCall(s, 'npcStat', 'A59', 'a');
    qspCall(s, 'npcStat', 'A34', 'b');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID1 ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID2 ?? 0), 'group', 'incest', 'sub');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
      (s as any).brotherQW['Sex'] = 6;
    }
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seepornbbcum.jpg');
    scene.text('The boys don\'t last long and cum right in your face. Soon, almost all of your face is covered in a layer of sperm, and it\'s dripping onto your clothes. The boys laugh, "That\'s right, good girl".');
    scene.actions([
      { label: 'Escape', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
      { label: 'Call his bluff', handler: (st: GameState) => {
    (s as any).brotherQW['refused_seeporn_bj'] = 1;
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('"Fuck off, who would believe you." Your brother looks at you then says to Zhendos, "Better luck next time."');
    scene.actions([
      { label: 'Escape', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).bratrand ?? 0) === 1) {
      qspCall(s, 'npcStat', 'A58');
      qspCall(s, 'npcStat', 'A59', 'a');
      // TODO-QSP: dynamic text: Zhendos suggests, "<<$pcs_nickname>>, are you going to serve us like you did wit...
      scene.text(`Zhendos suggests, "${((s as any).pcs_nickname ?? 0)}, are you going to serve us like you did with the kids in the park? Want to see if you can take two cocks in your mouth?"`);
      scene.text('You realize your brother could not resist and told his friends. Hopefully only them.');
      qspCall(s, 'willpower', 'bj', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'I don\'t think so! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I don\'t think so! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).brotherQW['refused_seeporn_bj'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/disgust.jpg');
    scene.text('You indignantly reject the kids. Your brother looks at you and announces, "Probably for the best, your tiny peckers would only count as one cock."');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'You can manage two little ones', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seeporndouble.jpg');
    scene.text('You dutifully kneel in front of the guys, grab their hard dicks and start to push them into your mouth.');
    scene.text('"I told you that she would take it in the mouth like a pro, and you didn\'t believe me," your brother laughs.');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
      (s as any).brotherQW['Sex'] = 6;
    }
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seeporndouble2.jpg');
    scene.text('You diligently continue to suck two dicks at the same time, the guys moaning and moving their hips trying to shove them into you deeper.');
    scene.text('Your brother is looking at you closely and with his hand down his pants, while loudly telling details about what a dirty whore you are.');
    scene.text('Just as you feel that this situation is beginning to slow, you unzip your brother\'s pants and start alternate between his cock on its own and both of his friends at the same time.');
    scene.text('The boys don\'t last long and almost simultaneously finish on your face. Seen too much damn porn, juvenile perverts.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'incest', 'sub');
    scene.actions([
      { label: 'Close your eyes', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.img(`images/locations/pavlovsk/school/grounds/seeporn/sex/seepornbjcum${Math.floor(Math.random() * 2) + 2}.jpg`);
    scene.text('Doing nothing but close your eyes, you sit humbly on your knees without disturbing them while they cum. Then it hits you, the pungent smell of sperm.');
    scene.text('You feel like a hot sticky goo covers your entire face, individual droplets falling onto your neck and hair.');
    scene.text('"This is for you, instead of face masks," laugh the boys.');
    scene.text('"Real funny." You wipe your eyes and angrily stare at them.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const seeporn: LocationDef = {
  name: 'seeporn',
  title: 'You and the boys sit down around the TV. Kolka puts on a DVD',
  region: 'other',
  description: ['The boys watch porn and whisper to each other, casting lustful glances at you.'],
  enter: enter,
};
