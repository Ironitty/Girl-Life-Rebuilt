import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).anushkaQW ?? 0)?.['home_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).anushkaQW['home_day'] = ((s as any).daystart ?? 0);
    (s as any).AnushkaLoc = 0;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 22) {
    scene.text('It\'s too late in the day to visit Anushka.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    scene.text('It\'s too early in the day to visit Anushka.');
    if (((s as any).locat ?? 0)?.['A144'] === 30) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
      scene.text('You stand outside the Konstantinov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Maksim. He looks you over from head to toe, obviously trying to imagine you naked. "Nush isn\'t here right now. She\'s driving around the country with the band, they went on tour, I wish I could have gone."');
      scene.text('You nod to that, you remember that now. "Right, I can\'t believe I forgot that, well hope they are having fun."');
      scene.text('"Rad is likely banging all the bitch\'s." His tone makes it sound like he is a little jealous. "Nush is likely getting gangbanged by the band or a bunch of random dude every night." He says smugly like it is some kind of joke.');
      scene.text('You shake your head. "You really shouldn\'t say that about your sister."');
      scene.text('He snorts derisively. "What are you my dad all of a sudden? Besides that\'s what Mom says."');
      scene.text('You just sigh, no point trying to talk to him about that. "Anyways do you know when they will be back?"');
      scene.text('He shrugs. "She is supposed to be back sometime in August, mom said I can\'t let any of her friends in while she is gone." Before you can even get a word in, he slowly closes the door checking you out as he does. With nothing more to do, you turn to leave.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
      scene.text('You stand outside the Konstantinov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Maksim. He looks you over from head to toe, obviously trying to imagine you naked. "Nush isn\'t here she moved out, she moved to the city with Rad and the guys, they got some apartment near the University so she can go to school." He sounds like he is about to throw up thinking about choosing to attend more school, he doesn\'t seem to like school much.');
      scene.text('You nod to that. "Oh… ok, do you have their address?"');
      scene.text('He sighs loudly like you are a huge bother. "No, Rad works at the music store in the mall, I try and stop by when I get time to go to the city. Maybe you can stop by and ask him." He makes it sound like he is real busy and traveling around doing important stuff.');
      scene.text('You snort slightly in amusement. "Your sister works there too?"');
      scene.text('He rolls his eyes. "No." He says no like you are an idiot for asking. "She works as a waitress or something at a coffee shop near where they live, like she could get a cool job like Rad, she is just some dumb waitress."');
      scene.text('You just sigh, you are briefly tempted to point out that your mom is just a waitress too. But no point trying to talk to him about that. "Anyways thanks I guess."');
      scene.text('He shrugs. "Whatever, Mom said I can\'t let any of her friends since she doesn\'t live here anymore." Before you can even get a word in, he slowly closes the door checking you out as he does. With nothing more to do, you turn to leave.');
      if (((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20))  &&  ((s as any).locat ?? 0)?.['A144'] !== 22  &&  ((Math.floor(Math.random() * 5) + 0) === 0)) {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria.jpg');
        scene.text('You stand outside the Konstantinov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anushka\'s mother.');
        scene.text('Her mother just stands there, glaring at you for a while. "Well now, don\'t just stand there. What do you want? Oh wait, let me guess you want to see Anushka? Well, the little slut isn\'t here, and I don\'t know when she\'ll be back, so why don\'t you just go bother someone else?" Before you can even get a word in, she slams the door in your face, and you hear all the locks click into place. With nothing more to do, you turn to leave.');
        scene.actions([
          { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
        ]);
      } else {
        (s as any).AnushkaLoc = 0;
        (s as any).band['practice_invite'] = 1;
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
        scene.text('Maksim answers the door instead. He looks you over from head to toe, obviously trying to imagine you naked. "Anushka\'s not here right now. She\'s down in the garage with the band, the one they turned into some sort of cool studio. They\'re likely practicing or partying with some bitches. You can wait for her in her room if you want, or you can just go down there."');
        scene.text('You shake your head, but there\'s nothing you can do about it. Should you go in and wait for her or just go? As you decide, you can feel Maksim undressing you with his eyes as he stares straight at your breasts.');
        if (((s as any).locat ?? 0)?.['A144'] === 25) {
          (s as any).AnushkaLoc = 0;
          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
          scene.text('Maksim answers the door instead. He looks you over from head to toe, obviously trying to imagine you naked. "Anushka\'s not here right now. She\'s at the disco or out sucking some guy\'s dick or something. You can wait for her in her room if you want, or you can just go there."');
          scene.text('You shake your head, but there is nothing you can do about it. Should you go in and wait for her or just go? As you decide, you can feel Maksim undressing you with his eyes as he stares straight at your tits.');
          scene.actions([
            { label: 'Leave', goto: ['pav_complex', 'start'] },
            { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
          ]);
        } else {
          qspCall(s, 'stat', '');
          qspCall(s, 'radomir_popov_schedule', '');
          qspCall(s, 'valentin_bogdanov_schedule', '');
          (s as any).nushdoor = Math.floor(Math.random() * 17) + 1;
          if (((s as any).nushdoor ?? 0) <= 3  &&  ((s as any).anushkaQW ?? 0)?.['shower_day'] !== ((s as any).daystart ?? 0)) {
            (s as any).AnushkaLoc = 7;
            (s as any).anushkaQW['shower_day'] = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
            scene.text('You stand outside the Konstantinov household and wait for Anushka to come open the door.');
            scene.text('Maksim answers the door instead. He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
            scene.text('You ignore his staring and ask "Is Anushka home?"');
            scene.text('He hooks his thumb over his shoulder to point down the hall. "She\'s taking a shower."');
            scene.actions([
              { label: 'Leave', goto: ['pav_complex', 'start'] },
              { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
              { label: 'Wait in her room', goto: ['anushapt', 'shower_wait'] },
              { label: 'Go to the bathroom', goto: ['anushapt', 'nushshower'] },
              { label: 'Ask how he knows that', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You smile a little. "How do you know she\'s taking a shower?"');
    scene.text('He blushes a little and sputters "I can hear the water."');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
      { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
      { label: 'Wait in her room', goto: ['anushapt', 'shower_wait'] },
      { label: 'Go to the bathroom', goto: ['anushapt', 'nushshower'] },
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You grin at him. "So you haven\'t been spying on her taking a shower? She told me you spy on her and her friends."');
    scene.text('He blushes red and sputters "No!" He doesn\'t seem to know what to do, so he turns and walks away. Just before he goes into his room, he adds "Fuck you, I can hear the water." Before you can reply, he goes into his room and closes the door.');
    scene.actions([
      { label: 'Wait in her room', goto: ['anushapt', 'shower_wait'] },
      { label: 'Go to the bathroom', goto: ['anushapt', 'nushshower'] },
      { label: 'Leave', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            (s as any).AnushkaLoc = 1;
            scene.img('images/characters/shared/headshots_main/big144.jpg');
            scene.text('You stand outside the Konstantinov household and hope that Anushka will open the door.');
            // TODO-QSP: dynamic text: To your relief, she opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in....
            scene.text(`To your relief, she opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come on in."`);
            if (((s as any).nushdoor ?? 0) <= 9  &&  ((s as any).anushkaQW ?? 0)?.['tv_day'] !== ((s as any).daystart ?? 0)) {
              (s as any).AnushkaLoc = 5;
              (s as any).anushkaQW['tv_day'] = ((s as any).daystart ?? 0);
              scene.img('images/characters/shared/headshots_main/big144.jpg');
              scene.text('You stand outside the Konstantinov household and hope that Anushka will open the door.');
              // TODO-QSP: dynamic text: To your relief, she opens the door, smiling. "Hey <<$pcs_nickname>>. Come in, I ...
              scene.text(`To your relief, she opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? 0)}. Come in, I was just watching some TV." As you go inside, she closes the door and heads for the living room where some action movie is playing on the TV. She practically falls down on the couch as she takes a seat.`);
              scene.actions([
                { label: 'Take a seat next to her', goto: ['anushapt', 'nushlivroom'] },
              ]);
            } else {
              (s as any).AnushkaLoc = 2;
              scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
              scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
              scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
              scene.text('You ignore his staring and ask "Is Anushka home?"');
              scene.text('With a smug look on his face, he hooks his thumb over his shoulder to point down the hall. "She\'s in her room getting pounded like the slut she is by Rad."');
              if (((s as any).nushdoor ?? 0) === 11  &&  ((s as any).locat ?? 0)?.['A158'] === 23) {
                (s as any).AnushkaLoc = 2;
                scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers the door instead.');
                scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                scene.text('You ignore his staring and ask "Is Anushka home?"');
                scene.text('With a smug look on his face, he hooks his thumb over his shoulder to point down the hall. "She\'s in her room getting fucked by Val."');
                scene.actions([
                  { label: 'Leave', goto: ['pav_complex', 'start'] },
                  { label: 'Enter', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    // TODO-QSP: dynamic text: You ignore his comments and step around him to enter the apartment. Just then, y...
    scene.text(`You ignore his comments and step around him to enter the apartment. Just then, you see Valentin walking up the hall towards the door, zipping his pants up. He gives you a huge grin and a wink. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?"`);
    scene.text('You look at him and say "What were you two doing?"');
    scene.text('He just grins a little. "Oh you know, just hanging out and having fun." He then turns to Maksim. "Are you going to come by later and help me work on my bike?"');
    scene.text('Maksim responds to Valentin. "If my dad lets me. He\'s on my ass about my homework." Val just nods at him. "Gotcha." He gives both of you a slight wave and walks out.');
    scene.text('"See?" is all Maksim says before he walks back to his room.');
    scene.actions([
      { label: 'Walk past him', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                  { label: 'Go to her room', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy, probably Valentin if Maksim is to be believed. You can\'t quite make out what they\'re saying. You lean against the door to hear better, and you hear the guy ask "You wanna fuck?"');
    qspCall(s, 'willpower', 'voyeur', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/peek.jpg');
    scene.text('Taking a little peek won\'t hurt anyone. You glance around to make sure no one can see you, then you crack the door open to just barely peek in. You can just see Anushka pulling down the pants of some guy that is lying on her bed. You can only see him from the waist down from your vantage point, so you can\'t see his face, but you do see his hard dick spring free when his pants come off.');
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
      { label: 'Watch', goto: ['anushkaev2', 'watch_nushval'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
    ]);
  } },
                ]);
              } else {
                (s as any).AnushkaLoc = 2;
                scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
                scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                scene.text('You ignore his staring to ask "Is Anushka home?"');
                scene.text('He hooks his thumb over his shoulder to point down the hall. "She\'s in her room taking some black guy\'s dick up her ass." he says with disgust.');
                (s as any).AnushkaLoc = 2;
                scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
                scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                scene.text('You ignore his staring. "Is Anushka home?"');
                scene.text('He hooks his thumb over his shoulder to point down the hall. "She\'s in her room, likely getting stoned or masturbating to porn or something."');
                if (((s as any).maksimQW ?? 0)?.['blackmail'] >= 1  &&  ((s as any).maksimQW ?? 0)?.['blackmail_flash'] <= 5) {
                  scene.text('You ignore his comments and start to step around him to enter the apartment, but he puts his arm up and blocks you from entering.');
                  scene.text('You give him a look of annoyance. "Do you mind?"');
                  scene.text('He grins. "Show me your tits!"');
                  scene.text('You know what this is about. You can\'t believe you let this little shit blackmail you. "Seriously?"');
                  scene.text('He laughs. "That\'s the price now, so pay up or fuck off."');
                  scene.text('You sigh. You know the little snitch would tell Anushka.');
                  scene.actions([
                    { label: 'Leave', goto: ['pav_complex', 'start'] },
                    { label: 'Flash Maksim', goto: ['anushkamaksim', 'hallway_flash_tits'] },
                  ]);
                } else {
                  scene.text('You ignore his comments and start to step around him to enter the apartment, but he puts his arm up and blocks you from entering.');
                  scene.text('You sigh, knowing what he wants. "Fine!" you say as you start to show him your breasts again.');
                  scene.text('He shakes his head and grins. "No, show me your pussy!"');
                  scene.text('You can\'t believe you let this little shit blackmail you. "Seriously?"');
                  scene.text('He laughs. "That\'s the price now, so pay up or fuck off."');
                  scene.text('You sigh. You know the little snitch would tell Anushka.');
                  if (((s as any).maksimQW ?? 0)?.['blackmail_flash'] > 10) {
                    scene.text('You ignore his comments and start to step around him to enter the apartment, but he puts his arm up and blocks you from entering.');
                    scene.text('You sigh, knowing what he wants. "Fine!" you say as you start to show him your pussy again.');
                    scene.text('He shakes his head and grins. "Not this time, I want to see it all! So come to my room and get naked."');
                    scene.text('You can\'t believe you let this little shit blackmail you. "Seriously?! What about your brother?"');
                    scene.text('He laughs. "Don\'t worry. That little shit is playing outside, so we have the room to ourselves."');
                    scene.text('You sigh. You know the little snitch would tell Anushka.');
                    scene.actions([
                      { label: 'Leave', goto: ['pav_complex', 'start'] },
                      { label: 'Go to Maksim\'s room', goto: ['anushkamaksim', 'maksim_room_naked'] },
                    ]);
                  } else {
                    scene.text('You ignore his comments and step around him to enter the apartment before he closes the door and heads back to his room.');
                    scene.actions([
                      { label: 'Leave', goto: ['pav_complex', 'start'] },
                      { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Leave', goto: ['pav_complex', 'start'] },
                    { label: 'Flash Maksim', goto: ['anushkamaksim', 'hallway_flash_pussy'] },
                  ]);
                }
                if ((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 22)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22)) {
                  if (((s as any).maksimQW ?? 0)?.['QWstage'] === 0) {
                    (s as any).maksimQW['QWstage'] = 1;
                    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                    scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
                    scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                    scene.text('You ignore his staring and ask, "Is Anushka home?"');
                    scene.text('"No, she\'s not here right now. She\'s probably out sucking some guy\'s dick or something, but you can go wait for her in her room if you want."');
                    scene.actions([
                      { label: 'Leave', goto: ['pav_complex', 'start'] },
                      { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
                      { label: 'Why would you say that?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
    scene.text('You are aghast that her brother would say such a thing about her. "Why would you tell people something like that?"');
    scene.text('At first, he looks a little confused, as if he\'s not sure what you mean, then just shrugs. "That\'s what mom always says when I ask where Anushka is."');
    scene.text('You shake your head, unsure what to think about this. Should you go in and wait for her or just go? Maksim just stands there staring at your tits, and you can actually feel him undressing you with his eyes.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'start'] },
      { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                    ]);
                  } else {
                    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                    scene.text('Maksim answers the door instead. He looks you over from head to toe, obviously trying to imagine you naked. "Anushka\'s not here right now. She\'s probably out sucking some guy\'s dick or something, but you can wait for her in her room if you want."');
                    scene.text('You shake your head, but there\'s nothing you can do about it. Should you go in and wait for her or just go? As you decide, you can feel Maksim undressing you with his eyes as he stares straight at your tits.');
                  }
                  scene.actions([
                    { label: 'Leave', goto: ['pav_complex', 'start'] },
                    { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
                  ]);
                } else {
                  scene.text('You knock on the door several times, but no one answers. You assume that there probably isn\'t anyone home at the moment.');
                  scene.actions([
                    { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
                  ]);
                }
                scene.actions([
                  { label: 'Leave', goto: ['pav_complex', 'start'] },
                  { label: 'Enter', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    // TODO-QSP: dynamic text: You ignore his comments and step around him to enter the apartment. Just then, y...
    scene.text(`You ignore his comments and step around him to enter the apartment. Just then, you see Marcus walking up the hall towards the door. He freezes in place, looking very embarrassed. He looks down to avoid eye contact. "Hey ${((s as any).pcs_nickname ?? 0)}, I was just hanging out… anyways I need to get going… see you at school, yeah?" Without waiting for a reply, he hurries out of the apartment.`);
    scene.text('Maksim gives him a disgusted look as he walks by, then looks at you. "She\'s so disgusting." he sneers before he walks back to his room.');
    scene.actions([
      { label: 'Walk past him', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                  { label: 'Go to her room', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy. You can\'t quite make out what they\'re saying. You lean against the door to hear better, and you hear the guy say "God, you\'re so beautiful."');
    qspCall(s, 'willpower', 'voyeur', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/peek.jpg');
    scene.text('Taking a little peek won\'t hurt anyone. You glance around to make sure no one can see you, then you crack the door open to just barely peek in. You can see a naked Anushka dropping to her knees in front of a naked black guy who has his back to you.');
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
      { label: 'Watch', goto: ['anushkaev2', 'watch_nushmar'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Leave', goto: ['pav_complex', 'start'] },
                { label: 'Enter', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    // TODO-QSP: dynamic text: You ignore his comment and step around him to enter the apartment. Just then, yo...
    scene.text(`You ignore his comment and step around him to enter the apartment. Just then, you see Radomir walking up the hall towards the door, buckling his belt back in place. He gives you a huge grin and a wink. "Hey ${((s as any).pcs_nickname ?? 0)}, bad timing because you just missed out. Nush is in her room recovering from the ass fucking I just gave her."`);
    scene.text('He then reaches over and ruffles Maksim\'s hair with his hand. "Your sister has a real nice tight ass, or at least she did." With that, he walks past both of you and leaves the apartment.');
    scene.text('"See?" Maksim sneers before walking back to his room.');
    scene.actions([
      { label: 'Walk past him', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                { label: 'Go to her room', handler: (st: GameState) => {
    (s as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy, probably Radomir if Maksim is to be believed. You can\'t quite make out what they\'re saying, so you lean against the door to hear better. You hear the guy say "Turn around and let me see that fine ass of yours."');
    qspCall(s, 'willpower', 'voyeur', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/peek.jpg');
    scene.text('Taking a little peek won\'t hurt anyone. You glance around to make sure no one can see you, then you crack the door open to just barely peek in. You can just see Anushka stripping down to her underwear inside, but you can\'t see the guy.');
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
      { label: 'Watch', goto: ['anushkaev2', 'watch_nushrad'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave them in peace and leave the apartment', goto: ['pav_complex', 'start'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Leave', goto: ['pav_complex', 'start'] },
              { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
            ]);
          }
        }
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
        ]);
      }
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  }
  scene.build();
}

export const anushapt: LocationDef = {
  name: 'anushapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  description: ['You walk up to the front door and knock.'],
  enter: enter,
};
