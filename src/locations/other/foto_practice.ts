import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).practice_session = 1;
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Photographer</b></center>');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if (((s as any).model_job_week ?? 0) >= 2) {
    scene.text('"We\'ve already done a paid shoot with you this week, so we can\'t do another one. But would you like to get some practice in?"');
  } else {
    scene.text('"Oh, you want to practice today?"');
  }
  scene.actions([
    { label: '"Maybe not today"', goto: ['foto', 'studio'] },
    { label: '"Yes, please"', handler: (st: GameState) => {
    scene.text('"What kind of shoot would you like to do today? Fashion shoots or glamour shoots?"');
    scene.actions([
      { label: '"I\'d like to practice fashion shoots"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Alright, we can do that. What would you like to do?"');
    qspCall(s, 'foto_practice', 'fashion');
    qspCall(s, 'foto_practice', 'bikini');
    qspCall(s, 'foto_practice', 'lingerie');
    qspCall(s, 'foto_practice', 'sexy');
  } },
      { label: '"I\'d like to practice glamour shoots"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Alright, we can do that. What would you like to do?"');
    qspCall(s, 'foto_practice', 'transparent');
    qspCall(s, 'foto_practice', 'trans_ling');
    qspCall(s, 'foto_practice', 'topless');
    qspCall(s, 'foto_practice', 'nude');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFashion(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Fashion', handler: (st: GameState) => {
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
      { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 3) + 3);
    (s as any).fashionshoot = Math.floor(Math.random() * 4) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).fashionshoot ?? 0) <= 2) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/city/citycenter...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/city/citycenter/photo/fashion/${Math.floor(Math.random() * 5) + 1}.mp4"></video></center>`);
    }
    if (((s as any).fashionshoot ?? 0) >= 3  &&  ((s as any).fashionshoot ?? 0) < 5) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/citycenter/photo/fashion/<...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/city/citycenter/photo/fashion/${Math.floor(Math.random() * 14) + 1}.jpg"></center>`);
    }
    if (((s as any).fashionshoot ?? 0) < 5) {
      scene.text('You dress up in the latest in fashion wear and spend the next two hours sexily posing for the photographer.');
    }
    if (((s as any).fashionshoot ?? 0) === 5) {
      scene.img('images/locations/city/citycenter/photo/fashion4.mp4');
      scene.text('You spend two hours putting on various dresses, practicing modelling for the online catalogs of retail clothing stores. Apparently for consistency they want you to have the exact same expression on your face every time, so you spend most of the time practicing that.');
    }
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You have fun during the shoot but you can tell from the photographer\'s reactions that you\'re not doing as well as you should be.');
    scene.text('<i>I guess I need to get better at this…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBikini(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Bikini modelling', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 20) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/bikini/${Math.floor(Math.random() * 2) + 4}.mp4`);
    scene.text('Bikini modelling isn\'t too bad, but you\'d still be pretty embarrassed if you ever saw someone reading a magazine with pictures of you like this on the cover. Still, you\'re determined to work your way up to it and gain more confidence in your body and your modelling skills.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You do your best, but you still can\'t help but be self-conscious. Your movements are rigid and awkward and you really just have no idea what kind of expression it is you have on your face. You <i>hope</i> it\'s sexy…');
    scene.text('You spend the majority of the practice shoot trying to stay calm and feel more natural about exposing yourself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/bikini/${Math.floor(Math.random() * 2) + 4}.mp4`);
    scene.text('You go ahead and put on the bikini that the photographer wants to use and get to posing for him.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You\'re still not used to this whole modelling thing. The poses the photographer wants you in feel strange and unnatural. It kind of feels like writing with your non-dominant hand. It\'s good you\'re doing this because you clearly need practice.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLingerie(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Lingerie modelling', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 25) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (0);
    }
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/lingerie/${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('You\'re too embarrassed to do a shoot like this that would be released to the public, but you\'re determined to work your way up to it so put on some sexy lingerie and spend the next two hours striking various poses for a photographer.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('Even without explicit nudity, you feel exposed and self-conscious. It\'s hard to focus on getting it right when all you can think about is how much skin you\'re showing.');
    scene.text('You spend the majority of the practice shoot trying to stay calm and feel more natural about exposing yourself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    }
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/lingerie/${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('You put on some sexy lingerie and spend the next two hours striking various poses for a photographer.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('It\'s hard to show off the beauty of the lingerie without just making the shoot all about you and your body\'s physical attractiveness instead. Not that you personally mind, but the photographer says it\'s important for the companies selling the clothing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexy(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Sexy clothing', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 30) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 1);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/sexy/${Math.floor(Math.random() * 12) + 1}.jpg`);
    scene.text('Exposing your breasts for the world to see is a step up from just modelling lingerie and it still isn\'t something you\'re willing to do. But this is practice so it isn\'t going to be published anywhere and the photographers are recommending it to you so you can feel more comfortable on set.');
    scene.text('You put on some loose clothing and give it a go. The next two hours are filled with instructions from the photographer and clicks from the camera with your nipples occasionally slipping out.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You\'re having difficulty getting in the poses the photographer wants you in. You know that it\'s because you\'re subconsciously still trying to hide your breasts when the photographer wants them visible. It\'s embarrassing after all…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/sexy/${Math.floor(Math.random() * 12) + 1}.jpg`);
    scene.text('You dressed up in loose clothes and spend the next two hours striking various poses for a photographer, your nipples occasionally slipping out.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You\'re having difficulty getting in the poses the photographer wants you in. You haven\'t quite figured out the best methods of subtly exposing your breasts in a way that\'s visually appealing and not just a regular nip slip.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTransparent(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Transparent clothing that exposes your breasts', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 40) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 1);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/seethru/${Math.floor(Math.random() * 9) + 1}.jpg`);
    scene.text('In one way, this is better than actually showing your bare nipples. In another way, it\'s worse because even though the fabric covers them, the thinness of it completely exposes your breasts. Every flash from the camera feels like it pierces through you, highlighting not your body but specifically your breasts, as if you were truly naked.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/seethru/${Math.floor(Math.random() * 9) + 1}.jpg`);
    scene.text('You feel like practicing something risqué today without being completely nude. You pick out a transparent top and go to the practice set.');
    scene.text('You spend two hours posing for the photographer, learning the best ways to make a see-through top work for you and make you look even sexier.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTransLing(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Transparent Lingerie', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 55) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/ling_trans/${Math.floor(Math.random() * 3) + 1}.mp4`);
    scene.text('It\'s okay… It\'s just like a normal lingerie shoot… Except that your nipples will be clearly visible. That makes it just like a topless so it\'s fine right? Even though the transparent lace feels more exposing than being topless…');
    scene.text('You slip into the lacy underwear and spend the next two hours practicing poses with the photographer.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('Each time the camera clicks, you give a small yelp, shielding your nipples from the flash that threatens to highlight them by turning your back. The sighs of the photographer from behind the camera are very audible.');
    scene.text('You\'re going to have to work on your basic confidence as a model if you want to start confronting your confidence in your own body.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.text('You have the discipline to not turn or shy your body away from the camera to hide yourself, but your expressions are very rigid and sometimes awkward. Maybe you need to work more on your confidence in your body before you\'ll be able to progress here.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 3) + 8);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (4);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/citycenter/photo/ling_trans/${Math.floor(Math.random() * 3) + 1}.mp4`);
    scene.text('You put on some lacy underwear and spend the next two hours practicing poses with the photographer.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('As the shoot progresses, you find it difficult surprisingly difficult to use the lingerie to your advantage. Despite its inherent seductiveness, there are certain poses and postures that you need to be in to fully accentuate what you\'re trying to show off underneath. You probably need more practice.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Not for me', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTopless(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Topless', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 50) {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', 1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/model4.mp4');
    scene.text('A topless shoot without even a bikini or a loose shirt to hide your breasts… Unthinkable that you could ever do it for real! But it\'s only a practice shoot right now. You\'re not comfortable with it, but if you want to grow as a model, this is what you have to do.');
    scene.text('You put on the bottoms the photographer chose for you and omit a top leaving your breasts exposed. You spend two hours striking various poses with breasts uncovered and listen to instruction while the photographer takes pictures of you.');
    if (((s as any).pcs_inhib ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
    scene.text('You try your best to follow the photographers instructions but your nerves are palpable. Every time the camera clicks, you jolt, body rigid, panic coursing through you. If you even want to consider do a topless shoot, you need to be more bold.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 5) + 6);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/model4.mp4');
    scene.text('You put on the bottoms the photographer chose for you and omit a top leaving your breasts exposed. You spend two hours striking various poses, covering and uncovering your breasts, and listen to instruction while the photographer takes pictures of you.');
    if (((s as any).pcs_mdlng ?? 0) < 20) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('You try your best to follow the photographers instructions but your movements are more than a little stiff. You get the feeling you aren\'t being very sexy when you are hiding <i>or</i> revealing your breasts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTasteful(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterToplessNude(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNude(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Nude', handler: (st: GameState) => {
    scene.actions([
      { label: 'Maybe not today', goto: ['foto', 'studio'] },
      { label: 'Practice (2:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).modelpayfin = 0;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_inhib ?? 0) < 60) {
      scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
      scene.text('You start to step onto the set before the photographer stops you.');
      scene.text('"Hey, I\'ve been watching you from time to time and I couldn\'t help but notice that you still seem a little uncomfortable being naked in the studio. I also took the liberty of looking up your past shoots and I noticed you haven\'t done any nude shoots yet either.');
      scene.text('You blush hard, cringing a little bit and checking yourself when you unconsciously trying to cover up your exposed nipples and pussy.');
      scene.text('"Y-yeah. I guess I\'m still not used to this kind of thing. Part of why I\'m practicing these kinds of shoots is to get a little more comfortable being naked."');
      scene.text('The photographer nods. "Yeah, I thought as much. With that in mind, I thought we\'d do a confidence building exercise instead of a normal practice shoot to help you get used to being on camera. It\'ll feel a little silly, but we think you\'ll get used to being comfortable in your own body a lot faster. Sound good?"');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Thanks for the offer, but I think I\'d rather just try to practice the normal way."');
    scene.text('"Well, if you\'re sure. But I\'m telling you, it won\'t help very much until you\'re more comfortable."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 4) + 7);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/nudepractice3.mp4');
    scene.text('You hate to admit it, but he\'s right. You keep holding yourself too stiff, striking the wrong pose, not paying attention to your expression, and a myriad of other mistakes. Every time the camera flashes, you feel panic course through your entire body, and you\'re sure it shows.');
    scene.text('You spend the next couple hours training yourself to be as professional as possible and hiding your discomfort.');
    scene.actions([
      { label: 'End practice', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'mdlng', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/nudepractice2.mp4');
    if (((s as any).pcs_inhib ?? 0) >= 60) {
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (20);
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('You nod and he leads you onto the set, setting up a video camera in front.');
      scene.text('Loud music starts to pump into the room and over the noise the photographer shouts at you to start jumping up and down and dance in front of the camera.');
      scene.text('You do as he says, getting into it. Though at first you feel a bit dumb, within minutes you\'ve almost forgotten your nakedness and start having a surprising amount of fun just jumping up and down and generally being silly.');
      scene.text('The next two hours pass with intervals of resting and dancing and before you know it, your practice is over.');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        scene.text('You\'re tired and you\'re sweaty, but you also feel pretty good, and <i>a lot</i> more confident in your body.');
      }
      if (((s as any).pcs_inhib ?? 0) >= 60) {
        scene.text('The photographer comes over to you, asking how you feel it went. You start to answer him when you notice how straight you\'re standing. As you talk more and more and the discussion turns to how your breasts bounced, you realize you don\'t feel any embarrassment talking about your body. In fact, you don\'t have any desire to cover yourself up at all. The exercise worked! You\'re comfortable being naked!');
      }
      scene.actions([
        { label: 'End practice', goto: ['foto', 'end'] },
      ]);
    } else {
      scene.text('Loud music starts to pump into the room and over the noise the photographer shouts at you to start jumping up and down and dance in front of the camera.');
      scene.text('You do as he says, feeling rather silly, like he said you would. You must have had some kind of expression on your face because he shouts at you again.');
      scene.text('"Smile! Laugh! Have a good time!"');
      scene.text('You try your best to comply, breasts bouncing up and down, hair flying all over the place, still feeling dumb.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/nudepractice2.mp4');
    scene.text('As you keep dancing and more and more time passes, you realize… you\'re actually starting to enjoy yourself!');
    scene.text('Your dancing continues and you still feel silly but now in a good way. You\'re having so much fun that you suddenly realize that you forgot you were naked!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('The music stops abruptly and you lean on your knees, a bit winded. The photographer comes up to you.');
    scene.text('"So, how\'re you feeling?"');
    scene.text('Face flushed from the jumping, you smile back at him.');
    scene.text('"Great! I actually almost forgot I was naked for a minute there! This is really working!" Already, you don\'t feel as shy standing in front of him and the rest of the crew.');
    scene.text('"Glad to hear it\'s working. We\'ll take a short break now, alternating between intervals of you dancing and resting. This is just a practice shoot and we can\'t reasonably ask you to jump up and down for two hours, so take a breather. We\'ll start the music back up soon enough."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (20);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/nudepractice2.mp4');
    scene.text('You spend the rest of the two hours jumping up and down, laughing, and generally having fun. At the end of it, you\'re tired and a bit sweaty, but you also feel a lot more confident about being naked.');
    scene.actions([
      { label: 'End practice', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      qspCall(s, 'exp_gain', 'mdlng', Math.floor(Math.random() * 2) + 9);
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/citycenter/photo/nudepractice.mp4');
      scene.text('You spend a good portion of the next two hours laughing with the photographer and the rest of the staff, practicing the ridiculous and convoluted poses required for nude modelling.');
      if (((s as any).pcs_mdlng ?? 0) < 20) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.text('Without clothes, the shoot becomes all about posture. You\'re very comfortable and confident in your body, but you never realized how much of an advantage clothes were for making yourself sexier on camera and how straining it can be to pose in ways that compensate. This is going to take some getting used to.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'end'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/modelbts2.mp4');
    scene.text('The practice shoot ends and he calls you over to his computer to show you what you need to work on.');
    if (((s as any).pcs_mdlng ?? 0) >= 40  &&  (!((s as any).commercial ?? 0))) {
      scene.actions([
        { label: 'Leave', goto: ['foto_events', 'commercial'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['foto', 'end'] },
      ]);
    }
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'fashion':
      enterFashion(s, scene);
      break;
    case 'bikini':
      enterBikini(s, scene);
      break;
    case 'lingerie':
      enterLingerie(s, scene);
      break;
    case 'sexy':
      enterSexy(s, scene);
      break;
    case 'transparent':
      enterTransparent(s, scene);
      break;
    case 'trans_ling':
      enterTransLing(s, scene);
      break;
    case 'topless':
      enterTopless(s, scene);
      break;
    case 'tasteful':
      enterTasteful(s, scene);
      break;
    case 'topless_nude':
      enterToplessNude(s, scene);
      break;
    case 'nude':
      enterNude(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const foto_practice: LocationDef = {
  name: 'foto_practice',
  title: 'Photographer',
  region: 'other',
  description: ['"We\'ve already done a paid shoot with you this week, so we can\'t do another one. But would you like to get some practice in?"'],
  enter: enter,
};
