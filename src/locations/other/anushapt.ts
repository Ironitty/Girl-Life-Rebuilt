import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'private';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).anushkaQW ?? 0)?.['home_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['home_day'] = ((s as any).daystart ?? 0);
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
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early in the day to visit Anushka.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    } else {
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
        if (((s as any).yearstart ?? 0) > 1) {
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
          scene.text('You stand outside the Konstantinov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Maksim. He looks you over from head to toe, obviously trying to imagine you naked. "Nush isn\'t here she moved out, she moved to the city with Rad and the guys, they got some apartment near the University so she can go to school." He sounds like he is about to throw up thinking about choosing to attend more school, he doesn\'t seem to like school much.');
          scene.text('You nod to that. "Oh… ok, do you have their address?"');
          scene.text('He sighs loudly like you are a huge bother. "No, Rad works at the music store in the mall, I try and stop by when I get time to go to the city. Maybe you can stop by and ask him." He makes it sound like he is real busy and traveling around doing important stuff.');
          scene.text('You snort slightly in amusement. "Your sister works there too?"');
          scene.text('He rolls his eyes. "No." He says no like you are an idiot for asking. "She works as a waitress or something at a coffee shop near where they live, like she could get a cool job like Rad, she is just some dumb waitress."');
          scene.text('You just sigh, you are briefly tempted to point out that your mom is just a waitress too. But no point trying to talk to him about that. "Anyways thanks I guess."');
          scene.text('He shrugs. "Whatever, Mom said I can\'t let any of her friends since she doesn\'t live here anymore." Before you can even get a word in, he slowly closes the door checking you out as he does. With nothing more to do, you turn to leave.');
          scene.actions([
            { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
          ]);
        } else {
          if (((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20))  &&  ((s as any).locat ?? 0)?.['A144'] !== 22  &&  ((Math.floor(Math.random() * 5) + 0) === 0)) {
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria.jpg');
            scene.text('You stand outside the Konstantinov household knocking on the door. It\'s some time before someone answers it. In the end, it turns out to be Anushka\'s mother.');
            scene.text('Her mother just stands there, glaring at you for a while. "Well now, don\'t just stand there. What do you want? Oh wait, let me guess you want to see Anushka? Well, the little slut isn\'t here, and I don\'t know when she\'ll be back, so why don\'t you just go bother someone else?" Before you can even get a word in, she slams the door in your face, and you hear all the locks click into place. With nothing more to do, you turn to leave.');
            scene.actions([
              { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
            ]);
          } else {
            if (((s as any).locat ?? 0)?.['A144'] === 24) {
              (s as any).AnushkaLoc = 0;
              ((s as any).band = (s as any).band ?? {})['practice_invite'] = 1;
              scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
              scene.text('Maksim answers the door instead. He looks you over from head to toe, obviously trying to imagine you naked. "Anushka\'s not here right now. She\'s down in the garage with the band, the one they turned into some sort of cool studio. They\'re likely practicing or partying with some bitches. You can wait for her in her room if you want, or you can just go down there."');
              scene.text('You shake your head, but there\'s nothing you can do about it. Should you go in and wait for her or just go? As you decide, you can feel Maksim undressing you with his eyes as he stares straight at your breasts.');
              scene.actions([
                { label: 'Leave', goto: ['pav_complex', 'start'] },
                { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
              ]);
            } else {
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
                if (((s as any).locat ?? 0)?.['A144'] === 22) {
                  qspCall(s, 'stat', '');
                  qspCall(s, 'radomir_popov_schedule', '');
                  qspCall(s, 'valentin_bogdanov_schedule', '');
                  (s as any).nushdoor = (Math.floor(Math.random() * 17) + 1);
                  if (((s as any).nushdoor ?? 0) <= 3  &&  ((s as any).anushkaQW ?? 0)?.['shower_day'] !== ((s as any).daystart ?? 0)) {
                    (s as any).AnushkaLoc = 7;
                    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['shower_day'] = ((s as any).daystart ?? 0);
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
                    if (((s as any).nushdoor ?? 0) <= 6) {
                      (s as any).AnushkaLoc = 1;
                      scene.img('images/characters/shared/headshots_main/big144.jpg');
                      scene.text('You stand outside the Konstantinov household and hope that Anushka will open the door.');
                      // TODO-QSP: dynamic text: To your relief, she opens the door, smiling. "Hey <<$pcs_nickname>>. Come on in....
                      scene.text(`To your relief, she opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? '')}. Come on in."`);
                      scene.actions([
                        { label: 'Leave', goto: ['pav_complex', 'start'] },
                        { label: 'Enter', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
                      ]);
                    } else {
                      if (((s as any).nushdoor ?? 0) <= 9  &&  ((s as any).anushkaQW ?? 0)?.['tv_day'] !== ((s as any).daystart ?? 0)) {
                        (s as any).AnushkaLoc = 5;
                        ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['tv_day'] = ((s as any).daystart ?? 0);
                        scene.img('images/characters/shared/headshots_main/big144.jpg');
                        scene.text('You stand outside the Konstantinov household and hope that Anushka will open the door.');
                        // TODO-QSP: dynamic text: To your relief, she opens the door, smiling. "Hey <<$pcs_nickname>>. Come in, I ...
                        scene.text(`To your relief, she opens the door, smiling. "Hey ${((s as any).pcs_nickname ?? '')}. Come in, I was just watching some TV." As you go inside, she closes the door and heads for the living room where some action movie is playing on the TV. She practically falls down on the couch as she takes a seat.`);
                        scene.actions([
                          { label: 'Take a seat next to her', goto: ['anushapt', 'nushlivroom'] },
                        ]);
                      } else {
                        if (((s as any).nushdoor ?? 0) <= 10  &&  ((s as any).locat ?? 0)?.['A154'] === 23) {
                          (s as any).AnushkaLoc = 2;
                          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                          scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
                          scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                          scene.text('You ignore his staring and ask "Is Anushka home?"');
                          scene.text('With a smug look on his face, he hooks his thumb over his shoulder to point down the hall. "She\'s in her room getting pounded like the slut she is by Rad."');
                          scene.actions([
                            { label: 'Leave', goto: ['pav_complex', 'start'] },
                            { label: 'Enter', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    // TODO-QSP: dynamic text: You ignore his comment and step around him to enter the apartment. Just then, yo...
    scene.text(`You ignore his comment and step around him to enter the apartment. Just then, you see Radomir walking up the hall towards the door, buckling his belt back in place. He gives you a huge grin and a wink. "Hey ${((st as any).pcs_nickname ?? '')}, bad timing because you just missed out. Nush is in her room recovering from the ass fucking I just gave her."`);
    scene.text('He then reaches over and ruffles Maksim\'s hair with his hand. "Your sister has a real nice tight ass, or at least she did." With that, he walks past both of you and leaves the apartment.');
    scene.text('"See?" Maksim sneers before walking back to his room.');
    scene.actions([
      { label: 'Walk past him', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                            { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy, probably Radomir if Maksim is to be believed. You can\'t quite make out what they\'re saying, so you lean against the door to hear better. You hear the guy say "Turn around and let me see that fine ass of yours."');
    qspCall(st, 'willpower', 'voyeur', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
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
                        } else {
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
    (st as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    // TODO-QSP: dynamic text: You ignore his comments and step around him to enter the apartment. Just then, y...
    scene.text(`You ignore his comments and step around him to enter the apartment. Just then, you see Valentin walking up the hall towards the door, zipping his pants up. He gives you a huge grin and a wink. "Hey ${((st as any).pcs_nickname ?? '')}, what's up?"`);
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
    (st as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy, probably Valentin if Maksim is to be believed. You can\'t quite make out what they\'re saying. You lean against the door to hear better, and you hear the guy ask "You wanna fuck?"');
    qspCall(st, 'willpower', 'voyeur', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
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
                            if (((s as any).nushdoor ?? 0) === 12  &&  ((s as any).marcusdate ?? 0) < 1) {
                              (s as any).AnushkaLoc = 2;
                              scene.img('images/locations/pavlovsk/resident/apartment/anushapt/maksim.jpg');
                              scene.text('You stand outside the Konstantinov household and wait for Anushka to open the door, but Maksim answers instead.');
                              scene.text('He looks you over from head to toe, obviously trying to imagine you naked. "What?" he asks.');
                              scene.text('You ignore his staring to ask "Is Anushka home?"');
                              scene.text('He hooks his thumb over his shoulder to point down the hall. "She\'s in her room taking some black guy\'s dick up her ass." he says with disgust.');
                              scene.actions([
                                { label: 'Leave', goto: ['pav_complex', 'start'] },
                                { label: 'Enter', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
    scene.img('images/characters/shared/headshots_main/big146.jpg');
    // TODO-QSP: dynamic text: You ignore his comments and step around him to enter the apartment. Just then, y...
    scene.text(`You ignore his comments and step around him to enter the apartment. Just then, you see Marcus walking up the hall towards the door. He freezes in place, looking very embarrassed. He looks down to avoid eye contact. "Hey ${((st as any).pcs_nickname ?? '')}, I was just hanging out… anyways I need to get going… see you at school, yeah?" Without waiting for a reply, he hurries out of the apartment.`);
    scene.text('Maksim gives him a disgusted look as he walks by, then looks at you. "She\'s so disgusting." he sneers before he walks back to his room.');
    scene.actions([
      { label: 'Walk past him', handler: (st: GameState) => {
    (st as any).anush_enter = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
                                { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/listen.jpg');
    scene.text('As you reach Anushka\'s bedroom door, you hear voices inside. One of them is Anushka, and the other is obviously a guy. You can\'t quite make out what they\'re saying. You lean against the door to hear better, and you hear the guy say "God, you\'re so beautiful."');
    qspCall(st, 'willpower', 'voyeur', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a peek', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).AnushkaLoc = 2;
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
                            } else {
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
                                if (((s as any).maksimQW ?? 0)?.['blackmail_flash'] > 5  &&  ((s as any).maksimQW ?? 0)?.['blackmail_flash'] <= 10) {
                                  scene.text('You ignore his comments and start to step around him to enter the apartment, but he puts his arm up and blocks you from entering.');
                                  scene.text('You sigh, knowing what he wants. "Fine!" you say as you start to show him your breasts again.');
                                  scene.text('He shakes his head and grins. "No, show me your pussy!"');
                                  scene.text('You can\'t believe you let this little shit blackmail you. "Seriously?"');
                                  scene.text('He laughs. "That\'s the price now, so pay up or fuck off."');
                                  scene.text('You sigh. You know the little snitch would tell Anushka.');
                                  scene.actions([
                                    { label: 'Leave', goto: ['pav_complex', 'start'] },
                                    { label: 'Flash Maksim', goto: ['anushkamaksim', 'hallway_flash_pussy'] },
                                  ]);
                                } else {
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
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if ((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 22)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22)) {
                    if (((s as any).maksimQW ?? 0)?.['QWstage'] === 0) {
                      ((s as any).maksimQW = (s as any).maksimQW ?? {})['QWstage'] = 1;
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
                }
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

function enterHallway(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  ((s as any).anush_enter ?? 0) === 1) {
  }
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/hall.jpg');
  if (((s as any).anushkaQW ?? 0)?.['first_visit'] < 2) {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['first_visit'] = 2;
    scene.text('As you enter the Konstantinov\'s hallway, you notice there is something that\'s not quite right… the place is somewhat depressing to be in. The whole apartment feels strange and foreign and you don\'t get the loving, homey feeling that your mother strives to keep at home. All the doors are closed, but you can hear the noise of a TV blaring from one and can hear someone yelling in another.');
  } else {
    scene.text('This is the entrance hall of Anushka\'s apartment. It\'s devoid of any furniture, but has shoes and some toys pushed against one wall, leaving just enough room for a person to walk through. On the surface, things seem fine, but you can feel that there is something very off about this place. You\'re not exactly sure what it is, though. From here, you can reach all the other rooms in the house.');
  }
  if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).AnushkaLoc ?? 0) !== 1) {
    scene.text('As you walk through the dark hallway, you suddenly get the feeling that you\'re being watched. You quickly turn around, but you can\'t see anyone.');
    scene.text('"Is anyone there?" you ask. You were hoping for a response, so once again you call out. "I know you\'re there, come on out!"');
    scene.text('You stand still for a little while longer, listening for something, but nothing happens. After a while, you decide to move on, but you\'re pretty sure that it was just Anushka\'s younger brother, Maksim, spying on you.');
  }
  if (((s as any).AnushkaLoc ?? 0) !== 1) {
    scene.actions([
      { label: '<b>Leave Anushka\'s apartment</b>', goto: ['pav_complex', 'start'] },
      { label: 'Anushka\'s room', goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Bathroom', goto: ['anushapt', 'bathroom'] },
      { label: 'Anushka\'s brother\'s room', goto: ['anushaptbr', 'brotherroom'] },
      { label: 'Living room', goto: ['anushapt', 'livingroom'] },
      { label: 'Kitchen', goto: ['anushapt', 'kitchen'] },
      { label: 'Parents room', goto: ['anushapt', 'anushparents'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: Anushka is standing next to you, looking at you expectantly. "What''s up, <<$pcs...
    scene.text(`Anushka is standing next to you, looking at you expectantly. "What's up, ${((s as any).pcs_nickname ?? '')}?"`);
    scene.actions([
      { label: '<b>Leave Anushka\'s apartment</b>', goto: ['pav_complex', 'start'] },
      { label: 'Let\'s go to your room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
      { label: 'Let\'s check on your brother', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 3;
  }, goto: ['anushaptbr', 'brotherroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom.jpg');
  scene.text('The bathroom has seen better days. It looks like it hasn\'t been cleaned for quite some time, with mold growing in the corners of the walls and floor.');
  scene.text('The toilet sits along the far wall. There\'s also a bathtub with an old plastic shower curtain hanging from a rod above it. It also seems that the latch on the door is broken.');
  scene.text('You can do your hair and makeup in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['anushapt', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 5) + 0);
    if (((st as any).temp ?? 0) === 0  &&  ((((st as any).hour ?? 0) >= 20  &&  ((st as any).hour ?? 0) < 23)  ||  (((st as any).week ?? 0) > 5  &&  ((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) < 16)  ||  (((st as any).week ?? 0) > 5  &&  ((st as any).hour ?? 0) >= 18  &&  ((st as any).hour ?? 0) < 23))) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
      scene.text('Despite the pattering noise of the running water, you hear the bathroom door open. You look past the shower curtain to see Eduard walking up to the toilet and unzipping his pants.');
      if (((st as any).pcs_inhib ?? 0) >= 50) {
        scene.actions([
          { label: 'Give him a show', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showershow.jpg');
    scene.text('It seems he hasn\'t looked over to see who is in the shower yet. You decide to pull the curtain wide open and give him a proper view of your soapy naked body. "Excuse me, is this what you were looking for?" you ask him.');
    scene.text('He is a bit surprised at first. "Oh sorry… I thought you were my wife." His eyes roam up and down your naked body as he pulls out his dick and starts to piss in the toilet. "Don\'t mind me. Just get back to your shower." he adds with a smirk.');
    scene.text('You keep showering with the curtain open while glancing at him every now and then, but after his first once over, he doesn\'t really pay you much attention. Once he is done, he washes his hands and leaves. He closes the door behind him without even another glance at your naked body. You decide to continue with your shower, and you don\'t have any more surprises after that.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt', 'bathroom'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Uhm excuse me?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showergetout.jpg');
    scene.text('You pull the shower curtain tight against your body to make sure there is nothing for him to see other than your head, but you look out at him in consternation.');
    scene.text('He looks up at you when you question him. It takes him a moment to realize who you are and he quickly zips up his pants. "Shit sorry… I thought you were my wife." He turns away and hurries for the door. "I\'ll just be going… Sorry again." he says as he pulls the door closed. Unsure about what to think, you just decide to finish your shower.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt', 'bathroom'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).temp ?? 0) === 1  &&  ((st as any).maksimQW ?? 0)?.['QWstage'] >= 5) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
        scene.text('Despite the pattering noise of the running water, you hear the bathroom door creaking slightly. Looking past the shower curtain, you see the bathroom door has been cracked open a little and notice Maksim peeking in.');
        if (((st as any).pcs_inhib ?? 0) >= 50) {
          scene.actions([
            { label: 'Give him a show', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showershow.jpg');
    scene.text('Looking straight at him, you give him a smile. You pull the curtain wide open to give him the perfect view of your wet, naked body. His eyes grow wide and he wastes no time, quickly entering the bathroom and closing the door behind him. After spending a few minutes watching you, you notice him pulling out his phone and trying to take a picture.');
    scene.text('You immediately shake your head at him. "No pictures or I\'ll tell your sister that you snuck in here and started taking pictures of me in the shower."');
    scene.text('He doesn\'t say anything, but gives you a look that\'s a mixture of disgust, annoyance and fear at the mention of his sister.');
    scene.text('He just settles in, enjoying watching you shower and dry yourself off. As you start getting dressed, you shoo him out of the room before finishing up.');
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt', 'bathroom'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Yell at him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/showergetout.jpg');
    if ((!((st as any).AnushkaLoc ?? 0))) {
      scene.text('You pull the shower curtain tightly against your body to make sure there\'s nothing for him to see. "Get out of here, you little pervert!"');
      scene.text('He laughs, then quickly ducks away before you hear Anushka yelling at him. As you continue your shower, you hear a lot more yelling from behind the door, followed by a loud crash before silence suddenly descends upon the apartment.');
    } else {
      scene.text('You pull the shower curtain tightly against your body to make sure there\'s nothing for him to see. "Get out of here, you little pervert!"');
      scene.text('He just laughs at you and keeps watching.');
      scene.text('"Get out or I\'ll tell your sister! Or your dad…"');
      scene.text('You see a flicker of fear in his eyes when you mention his dad before he gives you an angry glare and closes the door, leaving you in peace.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['anushapt', 'bathroom'] },
    ]);
  } },
        ]);
      } else {
        scene.text('<center><b>Bathroom</b></center>');
        scene.img('images/shared/home/bathroom/dush.mp4');
        scene.text('You take a quick shower.');
        scene.actions([
          { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
          { label: 'Get out of the shower', goto: ['anushapt', 'bathroom'] },
        ]);
      }
    }
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
  } },
  ]);
  scene.build();
}

function enterNushshower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  (s as any).AnushkaLoc = 7;
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom/dry1.jpg');
  scene.text('As you approach the bathroom, you hear the water running. Checking the latch, you find it is still broken and push the door open. As you walk in, the water turns off. You look around and see that the bathroom has seen better days, with mold growing in the corners of the walls and floors. The place probably hasn\'t been cleaned for quite some time.');
  // TODO-QSP: dynamic text: The toilet sits along the far wall. There''s also a bathtub with an old plastic ...
  scene.text(`The toilet sits along the far wall. There's also a bathtub with an old plastic shower curtain hanging from a rod above it. Anushka peeks out from around the curtain. When she sees that it's you, she pushes it aside and grabs a towel. "Oh hey ${((s as any).pcs_nickname ?? '')}, what's up?"`);
  qspCall(s, 'arousal', 'voyeur', 2);
  // TODO-QSP: end
  scene.actions([
    { label: 'Just came over to hangout', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom/dry2.jpg');
    scene.text('"Just came over to see what you were up to." you reply.');
    scene.text('She nods as she dries off, seemingly not caring that you are in here with her. "I was debating if I wanted to do something tonight myself."');
    scene.text('"Well, now we can do something together." you tell her.');
    scene.text('"Sure, sounds good to me. What do you want to do?"');
    scene.actions([
      { label: 'We can think of something', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom/dry3.jpg');
    scene.text('You think about it for a moment. "I don\'t know, but I\'m sure we can come up with something to do."');
    scene.text('"Sounds good, so give me a few minutes to get dried off, and I will join you in my room." she tells you.');
    scene.actions([
      { label: 'Go wait for her', handler: (st: GameState) => {
    // TODO-QSP: anushkaQW['shower_photos'] = 0
  }, goto: ['anushapt', 'shower_wait'] },
      { label: 'Take her picture with your phone', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[1] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/phone/anushka/1.jpg');
    scene.text('While she is drying off, you pull out your phone. You hold it up to get a good image of her drying off and take her picture.');
    scene.text('She notices you taking her picture and pulls the towel in place. "Hey, you little perv!"');
    scene.text('You giggle at her reaction. "Oh please! Like you don\'t like showing your body off <i>all</i> the time."');
    scene.text('"Yes, when I want to. Now go on and get out of here!" she says while making a shooing motion with one of her hands.');
    scene.text('You know deep down she really doesn\'t care. She loves showing off her body too much, but maybe you should give her some privacy.');
    qspCall(st, 'willpower', 'exhib', 'force');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Show me a little skin', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Show me a little skin', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['shower_photos'] = 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[2] = 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[3] = 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[4] = 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[5] = 1;
    ((st as any).anushkaphoto = (st as any).anushkaphoto ?? {})[6] = 1;
    qspCall(st, 'willpower', 'pay', 'force');
    scene.img('images/pc/activities/phone/anushka/2.jpg');
    scene.text('You move around to get in a better spot. "Don\'t be like that. Show me a little skin. Come on, you know you want to!" you say in a teasing tone.');
    scene.text('She cracks a smile that quickly turns into a smirk as she turns away from you, dropping the towel to show off her back.');
    qspCall(st, 'arousal', 'erotic', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'That\'s better', handler: (st: GameState) => {
    scene.img('images/pc/activities/phone/anushka/3.jpg');
    scene.text('"Oh yeah, that\'s it… Work it, girl! Now show me a little more."');
    scene.text('You do your best to sound like a professional photographer getting a model to work the camera, even if all you have is your smartphone.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'More', handler: (st: GameState) => {
    scene.img('images/pc/activities/phone/anushka/4.jpg');
    scene.text('She giggles a bit and turns her side to you. She slowly opens her towel to tease you while striking a sexy pose.');
    scene.text('"Yeah, that\'s it. Give me a little more. Let\'s see that hot little bod of yours!"');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Perfect', handler: (st: GameState) => {
    scene.img('images/pc/activities/phone/anushka/5.jpg');
    scene.text('She turns towards you and fully opens the towel. Striking another sexy pose, she gives you a full frontal view while you keep taking her picture.');
    scene.text('"Woo, that\'s it! Perfect! Work that camera, girl! Now let\'s see that cute little ass of yours," you say with encouragement.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cute little ass', handler: (st: GameState) => {
    scene.img('images/pc/activities/phone/anushka/6.jpg');
    scene.text('She lets the towel completely drop away and turns to put one foot on the edge of the tub. This gives you a nice view of her backside.');
    scene.text('"Yeah that\'s it, work that cute little ass!" you tell her as you take a couple of more pictures until she throws the towel at you.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom/selfie1.jpg');
    scene.text('She steps out of the tub and looks in the mirror. "Damn, I do look hot!" She picks up her own phone and takes a nude selfie of herself. She looks over at you and waves for you to come over. "Come on, let\'s take a selfie together!"');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Selfie', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['shower_photos'] = 2;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/bathroom/selfie2.jpg');
    scene.text('You move over to stand next to her as she holds her phone up and takes a few selfies of the two of you. It has to look a little odd considering that she\'s completely naked while you\'re fully dressed, but who are you to judge?');
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to her room', goto: ['anushapt', 'shower_wait'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go wait for her', goto: ['anushapt', 'shower_wait'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerWait(s: GameState, scene: SceneBuilder): void {
  (s as any).AnushkaLoc = 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/nushbed.jpg');
  if (((s as any).anushkaQW ?? 0)?.['shower_photos'] === 0) {
    scene.text('While Anushka dries off, you go into her room to wait for her. The room is surprisingly clean, except for a little dust here and there. Her walls are covered with pictures and posters while the rest of the room is skillfully decorated with various strings of coloured lights. You take a seat on her bed as you wait for her to join you. A few minutes later, she walks in completely naked and quickly gets dressed before jumping on the bed next to you.');
  } else {
    if (((s as any).anushkaQW ?? 0)?.['shower_photos'] === 1) {
      scene.text('Having messed around a bit taking her picture while she dried off, you decide to give her some privacy and go wait in her room. The room is surprisingly clean, even if it\'s somewhat dusty. The walls are covered with pictures and posters, and the room is skillfully decorated with various strings of coloured lights. You take a seat on the bed as you wait for her to come join you. A few minutes later, she walks in completely naked and quickly gets dressed before jumping on the bed next to you.');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['shower_photos'] === 2) {
        scene.text('With the impromptu photo shoot and selfies done, the two of you head to her room, Anushka still completely naked. Once inside, she quickly gets dressed while you take a seat on her bed. Once she\'s fully dressed, she flops down on the bed next to you.');
      }
    }
  }
  qspCall(s, 'arousal', 'erotic_nudity', 2);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the bed', goto: ['anush_bedroom', 'anushroom'] },
    { label: 'Chat', goto: ['anushkachat', 'chat'] },
  ]);
  scene.build();
}

function enterSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (25);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  (s as any).snacktime = (Math.floor(Math.random() * 12) + 0);
  if (((s as any).snacktime ?? 0) <= 3) {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/kitchen.jpg');
    scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
    scene.text('As you walk into the kitchen, you see Timofey sitting at the small kitchen table looking sad. Anushka points to a cabinet and the fridge. "Chips and stuff are in there, and drinks are in the fridge; grab us some."');
    scene.text('She squats down next to her little brother and ruffles his hair. "Hey. What\'s wrong, Timo?"');
    scene.text('He looks up at her as you gather the stuff. "Maksim won\'t let me have a turn playing the games."');
    scene.text('She smiles at him. "Well, you go tell him that he better give you a turn or I\'ll tell dad he hasn\'t been doing his homework."');
    scene.text('Timofey lights up when she says that. "Really? You will?!" He seems very excited.');
    scene.text('She laughs. "No, but he doesn\'t know that. However, if he doesn\'t or he keeps being mean to you, come get me and I\'ll kick his ass for you, okay?"');
    scene.text('He nods happily and gets up from the table. He tries to dart out of the room, but she manages to give him a one armed hug that he tries his best to squirm away from. He manages to finally break free, then hurries out of the kitchen.');
    scene.text('She stands up and looks at you. "Got everything?" When you nod, she motions for you to follow her. "Sweet, let\'s go back to my room."');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } else {
    if (((s as any).snacktime ?? 0) <= 5  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)))) {
      qspCall(s, 'stat', '');
      scene.text('<center><b>Kitchen</b></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/ed_sandwich.jpg');
      scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
      scene.text('As you and Anushka walk into the kitchen, you see Eduard standing at the counter making a sandwich. He looks up and gives you both a friendly smile. "So what are you girls up to?"');
      scene.text('Anushka replies to him. "Getting some snacks to get our energy up, so we can go to an orgy later."');
      scene.text('He frowns. "That\'s not funny. You shouldn\'t even joke about stuff like that."');
      scene.text('Anushka grins. "Oh come on, it was a little funny."');
      scene.text('He just sighs and shakes his head slightly, resigned to what his daughter is like. "So, do you girls want a sandwich?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You shake your head. "No, thank you."');
    scene.text('He smiles at you, then turns to Anushka. "How about you? You should eat better and not eat so much junk!" he says while poking her in the side.');
    scene.text('She steps away and smacks at his hand. "Cut it out! I\'m not nine anymore!"');
    scene.text('He rubs his hand over the top of his head. "I\'m well aware of how old you are. See all these gray hairs? I didn\'t have any of them until you became a teenager."');
    scene.text('Anushka rolls her eyes as she gets some snacks and drinks. "Right… And mom and those brats had nothing to do with it."');
    scene.text('He smirks at her. "Okay, they may have had a little bit to do with it as well."');
    scene.text('As the two of you walk out of the kitchen and back towards her room, he follows you both out and heads for the living room. "Have fun girls, but not too much fun!"');
    scene.text('Anushka looks back. "Dad!" she says in an exacerbated tone before she leads you back into her room.');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You nod. "Yes, thank you."');
    scene.text('He smiles at you, then turns to Anushka. "How about you? You should eat better and not eat so much junk!" he says while poking her in the side.');
    scene.text('She steps away and smacks at his hand. "Cut it out! I\'m not nine anymore!"');
    scene.text('He rubs his hand over the top of his head. "I\'m well aware of how old you are. See all these gray hairs? I didn\'t have any of them until you became a teenager."');
    scene.text('Anushka rolls her eyes as she gets some snacks and drinks. "Right… And mom and those brats had nothing to do with it."');
    scene.text('He smirks at her. "Okay, they may have had a little bit to do with it as well."');
    scene.text('As the two of you walk out of the kitchen and back towards her room, he follows you both out and heads for the living room. "Have fun girls, but not too much fun!"');
    scene.text('Anushka looks back. "Dad!" she says in an exacerbated tone before she leads you back into her room.');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).snacktime ?? 0) <= 7  &&  ((s as any).anushkaQW ?? 0)?.['valeria_introduced'] === 0) {
        ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['valeria_introduced'] = 1;
        scene.text('<center><b>Kitchen</b></center>');
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria_cooking.jpg');
        scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
        scene.text('All of a sudden, the mood changes and you feel chills going down your spine. There is a woman standing there cooking.');
        scene.actions([
          { label: 'Hi! I\'m-', handler: (st: GameState) => {
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria_cooking.jpg');
    scene.text('"Yeah, yeah. I don\'t really care who you are," the woman answers sourly.');
    scene.text('Feeling uncomfortable, you stare down at the floor, but Anushka, without any hesitation, snaps back. "Can\'t you at least try to be nice to someone you just met for once? God, why are you always such a bitch?"');
    scene.text('"Listen here, sweetie. I don\'t care about being nice to your little friends. They\'re all just a nuisance to me. They\'re no better than you." The woman then sighs and looks at you. "Fine… I\'m Valeria, Anushka\'s mother."');
    scene.text('"Unfortunately…" you hear Anushka mumble under her breath.');
    scene.text('"So where did my dear daughter pick you up from?" Valeria asks obnoxiously.');
    scene.text('"W-We-" You look nervously at Anushka. "Are in the same class…"');
    scene.text('Valeria starts laughing loudly. "That\'s a good one! Anushka being in school."');
    scene.text('"At least I\'ll finish school, unlike you!" Anushka angrily retorts.');
    scene.text('Her mother ignores her comment and instead speaks to you. "So, what\'s your name?"');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria.jpg');
    // TODO-QSP: dynamic text: You know this woman just wants to pick a fight, but what else can you do? "My na...
    scene.text(`You know this woman just wants to pick a fight, but what else can you do? "My name is ${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}."`);
    scene.text('She looks surprised. "You\'re Natasha from the southern building\'s youngest daughter?"');
    scene.text('When you nod, she bursts out laughing, then shakes her head while looking at her daughter. "Only you would become friends with the daughter of the town\'s biggest slut! I bet she\'s just like her mother. The two of you must have so much in common."');
    scene.text('Anushka steps up to her mother and gets right in her face. "Shut the fuck up, you old cunt!" She looks visibly pissed off. "You say another fucking word like that to my friend, and I\'ll knock you on your fucking ass!"');
    scene.actions([
      { label: 'Look around nervously', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria_cooking.jpg');
    scene.text('The tension in the room is tremendous. Time seems to stand still, and you just want to run out of the kitchen so you can breathe normally again.');
    scene.text('After what feels like an eternity, Valeria speaks up. "You know what? You\'re lucky that you have your friend with you and that I just don\'t want to deal with you today. Leave now before I change my mind."');
    scene.text('Anushka walks over to the fridge and grabs two drinks plus a bag of chips. She grabs you by the arm and leads you out of the kitchen. As you walk out, she glances back at her mother to scream "Bitch!"');
    scene.text('"It was great to meet you. I do hope to see you again, even though I doubt you\'ll be back…" you hear Valeria sarcastically say as you\'re leaving the kitchen.');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).snacktime ?? 0) <= 7  &&  ((s as any).anushkaQW ?? 0)?.['valeria_introduced'] === 1) {
          scene.text('<center><b>Kitchen</b></center>');
          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria_cooking.jpg');
          scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
          scene.text('All of a sudden, the mood changes and you feel chills going down your spine. Valeria is standing there cooking. She glances over at the two of you as you enter and gives you a sour look, though you don\'t know who she looks more upset to see - you or her own daughter.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/kitchen.jpg');
    scene.text('Valeria scoffs in disdain. "I see you\'re still hanging out with the town whore\'s daughter."');
    scene.text('Anushka stops and gives her mom a dirty look. "Can\'t you ever just shut your fucking mouth?"');
    scene.text('Valeria turns to face Anushka and shakes a wooden spoon at her. "You watch your tone with me, young lady! It isn\'t my fault her mother is a slut and she likely takes after her!"');
    scene.text('Anushka steps up and gets in her face. "Oh please! You\'re just jealous because you\'re a used up old hag that no man except dad would ever fuck anymore!"');
    scene.text('Instead of getting angry, her mom just laughs. "You\'re one to talk. We both know you\'re a clingy, needy, little slut that will do anything to get anyone to pay attention to you. The only reason you\'re in that band of yours is because you slept your way into it and continue to be their slut just so they\'ll let you stay!"');
    scene.text('Anushka raises her hand like she might hit her mother. For a tense moment, you think she might, but then she lowers it. "You don\'t know anything about me! You\'ve never wanted to know anything about me! I fucking hate you! I wish you would just fucking leave if you hate it here so much!" With that, she turns and grabs some snacks. She pushes them into your hands so hard and fast that you\'re barely able to keep hold of them. "Come on, let\'s go."');
    scene.text('Her mother shakes her head. "That\'s right! Go running to your room and cry like you always do when faced with the truth! I can\'t believe I raised such a pathetic excuse of a daughter!"');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Defend Anushka', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Defend Anushka', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria.jpg');
    scene.text('You can\'t take listening to Valeria talk about your friend like that anymore. "You\'re wrong! Anushka is a better person than you\'ll ever be! If you would just talk to her for once instead of at her, you might realize just how great she really is!"');
    scene.text('Anushka smiles at you and obviously appreciates what you said. Her mom just gives you a look of complete disgust. "You must be another one of those disgusting lesbians," she says scornfully before shooting an equally disgusted look at her daughter. "It\'s so sinful and shameful, but I guess I can\'t expect my daughter to hang out with anyone decent." With that, she turns back to her cooking.');
    scene.text('Anushka grabs you by the arm before you can say more. "Come on, let\'s go. She just isn\'t worth it."');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Follow Anushka back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
          ]);
        } else {
          qspCall(s, 'stat', '');
          scene.text('<center><b>Kitchen</b></center>');
          scene.img('images/locations/pavlovsk/resident/apartment/anushapt/get_snacks.jpg');
          scene.text('She gets up and heads to the kitchen with you, the two of you talking and laughing the whole way.');
          scene.text('As you walk into the kitchen, Anushka points to a refrigerator. "Grab some drinks out of the fridge and anything else good."');
          scene.text('While you are doing that, she grabs a couple of snack cakes and chips from the cabinets, and once you both have your spoils from your raid on the kitchen, you head back to her room.');
          scene.actions([
            { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 2;
  }, goto: ['anush_bedroom', 'anushroom'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).livingev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).livingev = 0;
  } else {
    (s as any).livingev = 0;
  }
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).locclass = 'livingr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
  if (((s as any).livingev ?? 0) === 1  &&  ((s as any).anushkaQW ?? 0)?.['dad_mom_livingroom'] === 0  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)))) {
    (s as any).livingev_day = ((s as any).daystart ?? 0);
    scene.text('As you start to walk into the living room, you overhear some muffled voices that are getting louder and louder as they go on. You notice that the door is ajar and sneak towards it to see if you can make out what\'s being said.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
      { label: 'Listen in', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['dad_mom_livingroom'] = 1;
    (st as any).valedlisten = ((st as any).daystart ?? 0);
    scene.text('You see Valeria standing in front of the TV, yelling at Eduard. "I want to see that little bitch punished! And for real this time!!!"');
    scene.text('Eduard sighs, clearly annoyed by Valeria being in the way. "What\'s wrong now, Valeria? I just want to relax and watch the TV…"');
    scene.text('Valeria continues. "She\'s undermining me in front of the boys! She talks back to me, and the boys are picking up on it. They\'ve started doing it as well! So put a fucking stop to it, or else I\'ll do it for you!"');
    scene.text('Eduard frowns at her. "You\'ll do what?! You\'re not the better influence here, calling your own daughter a slut, a whore, and God knows what else while the boys overhear you. They repeat it to Anushka and call her names. What\'s wrong with you? God dammit, she\'s your own daughter!" Eduard screams back at her.');
    scene.text('"Like I care about that little whore… She needs to be put in her place and I want you to do something for once! Enough with this daddy\'s little princess shit!" she says scoffingly.');
    scene.text('You worry about getting caught, so you sneak away from the door without making a noise.');
    scene.actions([
      { label: 'Leave the room', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } else {
    scene.text('The room has a couple of recliners and a couch. In front of the couch is a large coffee table. Several empty beer bottles and cups are spread across the table, along with some scattered papers and a pill bottle. Opposite the couch, in front of the window, is a fairly large TV and stereo system. The room isn\'t exactly messy, but it\'s far from clean. It doesn\'t look like it\'s been dusted in months or the floor has been recently swept.');
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['first_visit'] = 1;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: You enter the living room, but before Anushka''s father reacts, Anushka greets h...
      scene.text(`You enter the living room, but before Anushka's father reacts, Anushka greets him. "Dad! This is my classmate, ${((s as any).pcs_nickname ?? '')}!"`);
      scene.text('You greet each other. His face is worn out, making him look older than he actually is. You also notice his tattoo covered arms. You heard rumors that Anushka\'s dad was this badass biker that didn\'t give a damn about anything before. "So, schoolmate eh?"');
      if (((s as any).anushkaQW ?? 0)?.['seen_ed'] === 1) {
        scene.text('He sizes you up with the knit of his brow giving away that he\'s trying to remember something, which he does. "Of course, I recognize you. I\'ve seen you hanging around the garages. You\'re Vladimir\'s step-daughter right?"');
        scene.text('You smile while nodding. "Yeah, I\'ve also seen you around there as well. You\'re fixing a bike, right? I see Valentin there sometimes with you."');
        scene.text('"Yeah, yeah. Anushka\'s bandmate Valentin. A decent guy with a decent head on his shoulders. He owns his own bike, so I help him out sometimes when it breaks down."');
        scene.text('"Can\'t really say that about the rest of them. That Arkadi kid reminds me of a friend I used to know when I was younger. He had some temper problems and would often get in fights. Don\'t get me started on Radomir, that good for nothing lout. I\'m glad you\'re standing up to him though, Nush." The last bit he says to his daughter before turning his attention back to you.');
        scene.text('He looks you over for a moment, but not in a lustful way. He\'s looking to see what kind of person you are. "You go to school with my daughter?" he asks.');
      }
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['seen_ed'] = 1;
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('Eduard begins laughing loudly. "I\'m sorry I didn\'t expect Nush to invite anyone over from school. She usually stays as far away from that place as she can."');
    scene.text('"Don\'t act so surprised! You\'ve seen my grades. They\'re not all that bad," Anushka says, a little irritated.');
    scene.text('"I know, I know. I\'m just teasing you." he says while still smiling. He then turns to you. "How about you? Are you doing well in school?"');
    scene.text('You nod, smiling slyly as you reply. "I try my best."');
    scene.text('All of a sudden, you hear a loud bang. "What are those boys up to this time? Wait here, I\'ll be right back. I haven\'t seen you in a while, so I wanted to ask you something," he says to his daughter.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('As Eduard returns, he lets out a loud sigh. "These kids will be the death of me… Or at least drive me to drinking, especially my darling daughter."');
    scene.text('Anushka rolls her eyes. "You already drink dad, and always have, so don\'t blame that on me. If you have anyone to blame, then it\'s yourself."');
    scene.text('He snorts a bit of a laugh at her retort, but you sense a bit of pride in him that she always pushes back. You wonder if he was kidding, since it would explain where Anushka got her sense of humor from. "Yeah, I used to drink beers, but you drove me to the hard stuff." She starts to give another retort, but he holds up his hand. "Truce… you never give up." He sighs, but now he looks like he has a mixture of pride and regret. "Guess it\'s better that you take after me than your mother."');
    scene.text('Anushka snorts a bit of a laugh, and even if it\'s a far more feminine snort, she sounds a lot like her dad when she does. "No shit…"');
    scene.text('Her dad glances at you for a moment, then looks back to her. "Anyway… Is everything okay with Alyona?"');
    scene.text('"Yeah, it\'s all good. She\'s alive and kicking. Why\'d you ask?" Anushka answers, but you notice she responded a bit too fast. Her father frowns as if he noticed it also, which makes you wonder why Anushka\'s father is asking about Alyona.');
    scene.text('"Nothing special. I just saw her near the garages the other day and she was pretty wasted. I was just wondering how she was doing, given the situation and all…"');
    scene.text('You hear another loud bang coming from the other room and Eduard jumps up and dashes over to Anushka\'s brothers\' room.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('Eduard returns with a beer in his hand and looks rather pissed off now. He sits down and turns on the TV.');
    // TODO-QSP: dynamic text: "We should be on our way, <<$pcs_nickname>>," Anushka whispers, then nudges you.
    scene.text(`"We should be on our way, ${((st as any).pcs_nickname ?? '')}," Anushka whispers, then nudges you.`);
    scene.text('"Sure. It was nice to meet you," you say.');
    scene.text('He raises his arm as he\'s too into the program on the TV to answer by now.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 1;
  }, goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).AnushkaLoc ?? 0) === 0  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)))) {
        scene.text('Anushka\'s dad, Eduard, is here.');
        scene.actions([
          { label: 'Talk to Eduard', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).anushkaQW ?? 0)?.['edtalk'] === 0) {
      ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['edtalk'] = ((st as any).anushkaQW['edtalk'] ?? 0) + (1);
      scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
      scene.text('You smile at Eduard. "Hello Mr. Konstantinov, is Anushka around?"');
      // TODO-QSP: dynamic text: An agitated Eduard calls you over. "Call me Ed. Come here <<$pcs_nickname>>, I n...
      scene.text(`An agitated Eduard calls you over. "Call me Ed. Come here ${((st as any).pcs_nickname ?? '')}, I need to ask you about something."`);
      scene.text('You freeze in your tracks. "Sure… What\'s up?" you cautiously ask.');
      if (((st as any).fame ?? 0)?.['pav_slut'] >= 200) {
        scene.text('Eduard grunts as he starts to speak. "I\'ve heard you and Nush are starting to get quite the reputation around town. Do I need to be worried about the two of you?"');
        scene.text('You squirm a little as he expects an answer…');
        qspCall(st, 'willpower', 'misc', 'self', 'easy');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Lie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You look him straight in the eye. "I don\'t know where those rumors came from," you coldly reply. "Someone must be talking behind our backs and trying to make us look bad. There\'s no reason for us to act like that."');
    scene.text('You\'re not sure if Eduard bought it or not, but he sighs despairingly. "I\'ll take your word for it for now, but I\'ll ask around some more to get to the bottom of this! There\'s some explaining needing done here…" he says as he cracks his knuckles.');
    scene.text('You let out a faint sigh of relief as he returns to his normal self.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Tell the truth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You laugh nervously before looking away in embarrassment. "I\'ll be honest. Nush likes to have fun, but it\'s not anything new. I think we just kind of feed off each other."');
    scene.text('Eduard sighs. "So she\'s just like her mother, sleeping around in her younger days…" he mutters under his breath.');
    scene.text('You feel the sweat drip from your forehead while you await his response. "Can\'t say I\'m not disappointed. I didn\'t want to see my daughter or you end up this way. I swear if you or anyone else hurts her, they\'re going to be in a world of hurt. But she\'s free spirited, so I really can\'t stop her…"');
    scene.text('You try to defend Anushka and yourself. "We just know what we want and we\'re not afraid to enjoy life how we want, but we\'re the ones that call the shots. We\'re not just some boy toys to be passed around."');
    scene.text('He sighs and leans back in the chair, looking a bit defeated with a worried look on his face. "Well, you\'re not my daughter, and she\'s old enough to make her own decisions. I just hope the both of you don\'t end up like…" He suddenly trails off, looking at you as if he had more to say.');
    if (((st as any).momslut ?? 0) >= 1) {
      scene.actions([
        { label: 'End up like my mom?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You look at him. "You mean like my mom? I know all about her, past and present."');
    scene.text('He nods. "Yeah. I don\'t mean anything by it, but your mom had one hell of a rep when she was younger, and it has followed her for her whole life. That\'s something I\'d like you and my daughter to avoid. I know it\'s not fair, but that\'s just the way it is."');
    scene.text('It wouldn\'t hurt to try and ease his mind a little. "Don\'t worry. We like to have fun, but we know better than to take things too far."');
    scene.text('He sighs and nods, more in acceptance of things he can\'t control than anything else.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
        ]);
      } else {
        scene.text('Eduard clears his throat. "I\'ve heard some disturbing sexual rumors about Nush, so I wanted to ask you. Are they true?"');
        qspCall(st, 'willpower', 'misc', 'self', 'easy');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Lie', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Lie', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You look him straight in the eye. "I don\'t know where those rumors came from. Someone must be talking behind her back and trying to make her look bad. There\'s no reason for her to act like that."');
    scene.text('You\'re not sure if Eduard bought it or not, but he sighs despairingly. "I\'ll take your word for it for now, but I\'ll ask around some more to get to the bottom of this! There\'s some explaining needing done here…" he says as he cracks his knuckles.');
    scene.text('You let out a faint sigh of relief as he returns to his normal self.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Tell the truth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You laugh nervously. "I\'ll be honest. Nush is wild at heart and loves to have fun. All sorts of fun…"');
    scene.text('Eduard sighs. "She\'s taking after her mother. You\'d think with how much they fight that she wouldn\'t be that way…"');
    scene.text('You stand in front of him, feeling a bit lighter now that he knows as he speaks up again. "Can\'t say I\'m not disappointed. I hate seeing my daughter let herself be used like that. She\'s got so much going for her, and she doesn\'t need this bullshit in her life. I swear if anyone hurts her…" He trails off in a menacing tone which leaves no doubt that he would seriously hurt people.');
    scene.text('You try and defend Anushka. "She knows what she wants and isn\'t afraid to enjoy life how she wants, but she never lets anyone take advantage of her. That is, unless she wants to take advantage of them."');
    scene.text('He sighs and leans back in the chair, looking a bit defeated with a worried look on his face. "Well, she is old enough to make her own decisions. I just hope she doesn\'t end up like…" He suddenly trails off, looking at you as if he has more to say.');
    if (((st as any).momslut ?? 0) >= 1) {
      scene.actions([
        { label: 'End up like my mom?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('You look at him. "You mean like my mom? I know all about her, past and present."');
    scene.text('He nods a bit. "Yeah. I don\'t mean anything by it, but your mom had one hell of a rep when she was younger, and it has followed her for her whole life. That\'s something I\'d like my daughter to avoid. I know it\'s not fair, but that\'s just the way it is."');
    scene.text('It wouldn\'t hurt to try and ease his mind a little. "Don\'t worry. She likes to have fun, but she knows better than to take things too far."');
    scene.text('He sighs and nods, more in acceptance of things he can\'t control than anything else.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((st as any).anushkaQW ?? 0)?.['edtalk'] === 1) {
        ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['edtalk'] = ((st as any).anushkaQW['edtalk'] ?? 0) + (1);
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
        scene.text('You smile at Eduard. "Hello Mr. Konstantinov, is Anushka around?"');
        scene.text('He turns to look at you and gives you a friendly smile. "Call me Ed. I have no idea where that girl is, but you can check her room if you want. If she\'s not there, then there\'s no telling where she is," he says, sounding somewhat sad and worried.');
        scene.actions([
          { label: 'Leave', goto: ['anushapt', 'hallway'] },
          { label: 'Is everything okay?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('"What? Oh, I just worry about her. She reminds me of myself when I was younger: wild, careless, doing whatever she wants whenever she wants. I know she can take care of herself, but…" He pauses as a deep frown settles on his face. "It\'s just… Well, she\'s a girl and it\'s just different for you. Guys who sleep around get high fives while, all too often, girls get reputations that follow them the rest of their lives. I know what guys are like at her age. I was one, except she won\'t be getting some girl knocked up. She\'ll <b>be</b> the one getting knocked up… or worse."');
    scene.actions([
      { label: 'Like what?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('Still curious, you continue your line of questioning. "What do you think could happen?"');
    scene.text('He looks at you for a moment, then frowns and sighs deeply. "This is what I meant. The fact that you even had to ask proves my point and makes me worry the way I do." As he talks, his tone becomes serious and maybe even a bit angry. "When I realized that Anushka was… sexually active, I knew better than to try and stop her. Instead, I made sure she got on birth control. I even remind her to get checked for STD\'s every month." When he says that last part, you hear a bit of sadness in his voice. Like most dads, he still sees his daughter as his "little girl."');
    scene.text('He shakes his head slightly. "I hope she\'s keeping up on it at least. A lot of boys your age, especially the type she hangs out with, would be all too happy to take advantage of a girl who was drunk or stoned, or even just force themselves on her." He sounds more than a bit angry when he says that. "Aside from them, there are those that will get girls strung out on drugs to turn them into whores. Those are the worst of the worst. They\'re the ones that will lure pretty things like you and my daughter into a life like theirs. It happens more often than it\'s talked about. Girls being pimped out, turned into drug mules, or sold to the highest bidder."');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('Your stomach drops, and you pale a little when you hear him make a list of all the horrible things that could happen to you with an unsettling seriousness to his voice and that knowing look in his eyes.');
    scene.text('"She\'s careful…" you say. "and I am too." You\'re not sure you even believe your own words, and judging by the look he gives you, you don\'t think he does either.');
    scene.text('"I know you\'ll look out for each other, but don\'t stress yourself out over it. You\'re young, so you\'ll bounce back from most things. You\'ll have plenty more to worry about when you\'re older, like bills and taxes!" he says with a deep laugh. "Besides, if anyone ever hurts my little girl, I\'ll kill them…" he adds as his tone suddenly shifts back to its earlier seriousness. You\'re certain he means what he says as you recall all the stories and rumors you\'ve heard about him. Up until now, you thought they were just blown way out of proportion, but after this you\'re starting to think that they\'re all true. It leaves you feeling slightly afraid of him.');
    scene.text('Seeing your reaction, he forces a small smile onto his face. "I\'m sorry about that, but I can get intense sometimes. Anyway, there\'s no telling when she might be home, but feel free to wait for her in her room if you want. Or I can tell her you stopped by next time I see her?"');
    scene.actions([
      { label: 'Tell her I stopped by', handler: (st: GameState) => {
    scene.text('You nod and know how he feels. There\'s no point in waiting for her since she could be gone for hours. "Thanks, you can just tell her I stopped by."');
    scene.actions([
      { label: 'Leave Anushka\'s apartment', goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Thanks, I\'ll wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('"Make yourself at home," he says with a small smile. "Just a bit of advice. If you can, avoid that… that…" He hesitates and grinds his teeth as he struggles to find the right words. "That woman… to put it nicely… She\'s always looking for a reason to pick a fight and argue with someone. Honestly, if it weren\'t for the kids…" He trails off before falling silent. You think he may have forgotten who he was talking to or that you\'re even in the room, but eventually his expression softens.');
    scene.text('"Just do your best to stay out of her way, alright? You seem nice, and I\'d hate to see her drive off another of Nush\'s friends, especially one that could be a good influence on her."');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Try cheering him up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('"She\'s the toughest girl I know. She can take care of herself and is way smarter than she acts sometimes."');
    scene.text('He sighs. "Yeah, but I just worry. I guess that\'s what all fathers do. At least, any of them that are worth a damn. I just hope she doesn\'t make any big mistakes before she has a chance to make a life for herself. There\'s not much I can do about it anymore."');
    scene.text('"Don\'t give up on her, because I\'m sure she\'ll come around sooner or later."');
    scene.text('He laughs a little. "Absolutely not! She reminds me of myself in my younger days when I used to cause havoc. I was hardheaded and stubborn. I had my chance to set her straight when she was younger, but I missed out. Too busy, you see, with what I thought were more important things." He sighs deeply and looks like a man that\'s carrying around more than a few regrets. You don\'t know what to say, so you let him finish his thoughts.');
    scene.text('He shakes his head. "Enough of my depressing talk. There\'s no telling when she might be home. You\'re free to wait for her in her room if you want, or I can tell her you stopped by when I see her next?"');
    scene.actions([
      { label: 'Tell her I stopped by', handler: (st: GameState) => {
    scene.text('You nod and know how he feels. There\'s no point waiting for her. She could be gone for hours. "Thanks, let her know I stopped by. Bye."');
    scene.actions([
      { label: 'Leave Anushka\'s apartment', goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Thanks I\'ll wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('"Make yourself at home," he says with a small smile. "Just a bit of advice. If you can, avoid that… that…" He hesitates and grinds his teeth as he struggles to find the right words. "That woman… to put it nicely… She\'s always looking for a reason to pick a fight and argue with someone. Honestly, if it weren\'t for the kids…" He trails off before falling silent. You think he may have forgotten who he was talking to or that you\'re even in the room, but eventually his expression softens.');
    scene.text('"Just do your best to stay out of her way, alright? You seem nice, and I\'d hate to see her drive off another of Nush\'s friends, especially one that could be a good influence on her."');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
        scene.text('You smile at Eduard. "Hello Mr. Konstantinov, is Anushka around?"');
        scene.text('He turns to look at you and gives you a friendly smile. "Call me Ed. I have no idea where that girl is, but you can check her room if you want. If she\'s not there, then there\'s no telling where she is," he says as he goes back to watching TV.');
        scene.text('You nod. "Okay thanks, sorry to have bothered you. I\'ll be quiet so you can watch your show."');
        scene.text('Eduard just laughs. "We have three kids running around here, so there\'s no need for that. Besides, if I saw you trying to be quiet and sneaking around, I\'d think you were up to something. Nush taught me long ago that if you see a kid being quiet or suddenly going quiet, it means that they\'re up to something." He shakes his head with a fond smile. "That does remind me of a time when Nush was younger…" He trails off and looks up at you. "Don\'t mind me, I\'m just reminiscing. I\'m sure you\'re not interested in hearing about that."');
        if (((st as any).anushkaQW ?? 0)?.['kidstory'] < 5) {
          scene.actions([
            { label: 'I\'d love to hear a story', goto: ['anushapt', 'nushkidstory'] },
          ]);
        }
        scene.actions([
          { label: 'Make an excuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "Sorry, but I should get going. Can I get a rain check for another time?"');
    scene.text('He nods his head. "Sure, sure. You have better stuff to do than listen to me. Go, go!"');
    scene.text('You nod before you say your goodbyes and quickly leave.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
        ]);
      }
    }
  } },
        ]);
      } else {
        if ((((s as any).AnushkaLoc ?? 0) > 0  &&  ((s as any).AnushkaLoc ?? 0) !== 5)  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23))) {
          scene.text('Anushka\'s dad, Eduard, is here watching TV. You could disturb him and talk to him, but maybe it would just be better if you snuck back out before he sees you?');
          scene.actions([
            { label: 'Sneak out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('You turn and carefully tread out of the living room while Eduard is busy watching the TV. You quietly make it to the doorway to enter the hallway. With a final glance back, you see he\'s still sitting watching TV, not having noticed you coming in at all.');
      scene.actions([
        { label: 'Leave', goto: ['anushapt', 'hallway'] },
      ]);
    } else {
      scene.text('You walk very carefully towards the door since you don\'t want to make too much noise and disturb Eduard.');
      scene.text('All of a sudden, you hear him clearing his throat. "Sneaking around, are we?"');
      scene.text('You stop in your tracks and turn towards him. "N-No, I didn\'t want to create a ruckus, so I was trying to be quiet…"');
      scene.text('Eduard goes from sternly looking to smiling in a second. "We have three kids running around here, so there\'s no need for that. It reminds me of when Nush was younger. Any time she started being quiet, it meant she was up to something…" He trails off and looks up at you. "Don\'t mind me, I\'m just reminiscing. I\'m sure you\'re not interested in hearing about that."');
      scene.actions([
        { label: 'I\'d love to hear a story', goto: ['anushapt', 'nushkidstory'] },
        { label: 'Make an excuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "Sorry, but I should get going. Can I get a rain check for another time?"');
    scene.text('He nods his head. "Sure, sure. You have better stuff to do than listen to me. Go, go!"');
    scene.text('You nod before you say your goodbyes and quickly leave.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
      ]);
    }
  } },
            { label: 'Talk to Eduard', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('You smile at Eduard. "Hello, Ed!"');
    scene.text('He turns to look at you. He gives you a friendly smile before he frowns. "Is everything okay?"');
    scene.text('You quickly nod. "Yes, Nush is just listening to some music and I got a little bored is all."');
    scene.text('He nods. "Yeah, she can be a bit obsessive about her music at times, but better that then running around at all hours doing god knows what." He sounds a bit sad and worried.');
    scene.actions([
      { label: 'She\'s a tough girl', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('"She\'s a tough girl," you tell him.');
    scene.text('He smiles a little. "Oh I know that, because when she was a little girl the boys would try to push her around. In response, she would beat their asses!" he says with a smile, as if it\'s a fond memory. His smile then fades a little. "Things are a bit different now. Men are just bigger and stronger than you girls, which is just a fact of life. I know she can take care of herself, but I\'m afraid one of these days she\'s going to get into more trouble than she can handle. Get drunk, stoned, or make the wrong call and end up pregnant. A young mother, or worse, is not the life I want for her."');
    scene.text('You smile and do you best to reassure him since he honestly seems to be worried about her. "She has a good head on her shoulders, so I\'m sure she knows just how far she can push things."');
    scene.text('He shakes his head slightly. "If only it were that easy, but you girls still don\'t know just how dangerous the world is. It only takes one mistake, even just being in the wrong place or meeting the wrong person, to change your life forever, and not in a good way."');
    scene.actions([
      { label: 'At least she has the band with her most times', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
    scene.text('"At least she has the boys in band with her most times," you point out.');
    scene.text('He barks a laugh. "Yeah, they\'re a big part of my worry. Val is a decent enough guy, so I don\'t have to worry about him too much, but Arkadi is apt to drag them all into more trouble than they can handle, and don\'t get me started on Radomir. That boy thinks girls are only there for him to have a place to stick his pecker. Too many girls your age are too blinded by the whole musician thing to see what kind of guy he really is."');
    scene.text('"You don\'t like that Nush is in the band?" you ask.');
    scene.text('He shakes his head. "No, it\'s not that. It\'s just those boys are nothing but trouble," he says as a sigh escapes his lips. "Shit, but who am I to talk? I was just like them at that age. I had no respect for girls either back then. Just the way of the world I guess."');
    scene.text('"The band needs her, she writes a lot of their songs, plays guitar, and sings some. I don\'t think they would risk losing her," you tell him, but even you\'re not completely convinced by your own words. You know all too well how boys are.');
    scene.text('"Maybe you\'re right, but if they ever hurt my little girl, they best run far and fast. If I get my hands on them, they\'ll learn what pain really means…" he says with a menacing tone and a hard glint in his eyes. It reminds you that most of the adults seem to be afraid of him and talk about how dangerous of a guy he used to be. You almost feel sorry for any boy that incurs his wrath… almost. If they do, then they\'ll likely deserve it.');
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
    scene.text('"Well, it was nice talking to you, but I should likely get back to Anushka," you tell him.');
    scene.text('He smiles a little. "Yeah, I wouldn\'t want her wondering where you got off to. You girls have fun," he says before he turns back to the TV.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('Nobody\'s here right now.');
        }
      }
    }
    scene.actions([
      { label: 'Leave the room', goto: ['anushapt', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kitchenev_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).kitchenev = 0;
  } else {
    (s as any).kitchenev = 0;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).locclass = 'kitr';
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/kitchen.jpg');
  if (((s as any).kitchenev ?? 0) === 1  &&  ((s as any).anushkaQW ?? 0)?.['dad_mom_kitchen'] === 0  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) >= 6  &&  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 23)))) {
    scene.text('As you start to enter the kitchen, you overhear some muffled voices that are getting louder and louder as they go on. You notice that the door is ajar and sneak towards it to see if you can make out what\'s being said.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
      { label: 'Listen', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['dad_mom_kitchen'] = 1;
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/edval_kitchen.jpg');
    scene.text('Valeria is standing with her hands in the air, talking loudly to Eduard. "What\'s wrong with your daughter? She always has an attitude towards me!"');
    scene.text('Eduard tries his best to keep his calm. "Well if you were a better mother, then maybe she wouldn\'t have turned out like this!"');
    scene.text('"What did you say?" Valeria then starts yelling. "She\'s just like her father, out all night and doing God knows what! Have you heard the rumors about her?!"');
    scene.text('He snorts a laugh. "Me? Well what about how you\'re poisoning our boys against their sister and girls in general? They\'re going to be a handful when they get older," he retorts.');
    scene.text('She narrows her eyes at him. "You mean just like you were at that age? I know how you were. I was there."');
    scene.text('"So what? Didn\'t you have a similar reputation when you were seeing me?" he asks.');
    scene.text('"You\'re really getting on my nerves right now, Eduard! You know what I\'m capable of doing…" She crosses her arms as she turns her eyes towards a knife that\'s lying on the kitchen counter…');
    scene.text('Feeling that this is getting out of hand, you quietly move away from the door and start walking back down the hallway as the yelling continues behinds you.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } else {
    scene.text('The room is not clean, and there are dishes on most of the available surfaces. The wooden floor is not polished and only covers the areas being used. You\'re surprised by the lack of a dining table.');
    qspCall(s, 'kit_din', 'fill_bottle');
    qspCall(s, 'kit_din', 'driwater');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
      { label: 'Look in the fridge', goto: ['anushapt', 'fridge'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).anushfood_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).anushbeer_count = 2;
    (s as any).anushvodka_count = 5;
    (s as any).anushsup_count = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).anushbeer_count ?? 0) > 1) {
    (s as any).anush_beer = ' ' + qspFunc(s, 'string', 'parse_number', ((s as any).anushbeer_count ?? 0)) + ' beers,';
  } else {
    if (((s as any).anushbeer_count ?? 0) === 1) {
      (s as any).anush_beer = ' a beer,';
    } else {
      (s as any).anush_beer = '';
    }
  }
  if (((s as any).anushvodka_count ?? 0) === 5) {
    (s as any).anush_vodka = ' a full bottle of vodka,';
  } else {
    if (((s as any).anushvodka_count ?? 0) === 3) {
      (s as any).anush_vodka = ' a half-empty bottle of vodka,';
    } else {
      if (((s as any).anushvodka_count ?? 0) === 1) {
        (s as any).anush_vodka = ' a nearly empty bottle of vodka,';
      } else {
        (s as any).anush_vodka = '';
      }
    }
  }
  if (((s as any).anushsup_count ?? 0) >= 1) {
    (s as any).anush_sup = ' some left overs';
  } else {
    (s as any).anush_sup = '';
  }
  if (((s as any).anushbeer_count ?? 0) === 0  &&  ((s as any).anushvodka_count ?? 0) === 0  &&  (!((s as any).anushsup_count ?? 0))) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holodpusto.jpg"></center><br><font color = red>empty shelves.</font>';
  }
  if (((s as any).anushbeer_count ?? 0) > 0  &&  ((s as any).anushvodka_count ?? 0) > 0  &&  ((s as any).anushsup_count ?? 0) > 0) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holod\'+rand(1, 3)+\'.jpg"></center>';
  }
  // TODO-QSP: dynamic text: You open the fridge and see:<<$anush_vodka>><<$anush_beer>><<$anush_sup>><<$r_pu...
  scene.text(`You open the fridge and see:${((s as any).anush_vodka ?? '')}${((s as any).anush_beer ?? '')}${((s as any).anush_sup ?? '')}${((s as any).r_pusto ?? '')}`);
  if (((s as any).anushbeer_count ?? 0) > 0) {
    scene.actions([
      { label: 'Have a beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).anushfood_day = ((st as any).daystart ?? 0);
    (st as any).anushbeer_count = ((st as any).anushbeer_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('You take a bottle of beer from the fridge and drink it, which quenches your thirst.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt', 'fridge'] },
    ]);
  } },
    ]);
  }
  if (((s as any).anushvodka_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink some vodka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).anushfood_day = ((st as any).daystart ?? 0);
    (st as any).anushvodka_count = ((st as any).anushvodka_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You pour some vodka in a glass and drink it. You shiver as you feel the warm, burning sensation slowly slide down your gullet.');
    scene.actions([
      { label: 'Put the bottle back in the fridge', goto: ['anushapt', 'fridge'] },
      { label: 'Drink more vodka', handler: (st: GameState) => {
    if ((!((st as any).anushvodka_count ?? 0))) {
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka0.jpg');
      scene.text('<font color = red>There\'s no vodka left. You drank it all!</font>');
    } else {
      if (((st as any).anushvodka_count ?? 0) > 0) {
        (st as any).minut = ((st as any).minut ?? 0) + 1;
        qspCall(st, 'drugs', 'alcohol', 'vodka');
        (st as any).anushvodka_count = ((st as any).anushvodka_count ?? 0) - (1);
        qspCall(st, 'stat', '');
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        scene.text('You pour yourself another glass and drain it in one gulp. Wow, that stuff is strong!');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['anushapt', 'fridge'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).anushsup_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).anushfood_day = ((st as any).daystart ?? 0);
    (st as any).anushsup_count = ((st as any).anushsup_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).fat = ((st as any).fat ?? 0) + (2);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    }
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from a ready to make meal. You wonder if anyone here knows how to cook.');
    scene.actions([
      { label: 'Continue', goto: ['anushapt', 'fridge'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['anushapt', 'kitchen'] },
  ]);
  scene.build();
}

function enterAnushparents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'anushapt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
  scene.text('The room is fairly barren. What is in here is disorganized and untidy, with everything all over the place. You see that there is a bed, a bookshelf and a dresser with a TV on it. The dresser appears to be cheaply manufactured and poorly constructed. Even though it\'s minimally furnished, the room is still quite dirty.');
  if (((s as any).hour ?? 0) < 7) {
    scene.text('You look into the bedroom and see Anushka\'s parents asleep. They\'re both on the edge of their side of the bed, as far apart as the bed allows. You don\'t want to disturb them, so you close the door and leave.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } else {
    if (((s as any).anushkaQW ?? 0)?.['valeria_introduced'] === 1  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'stat', '');
      scene.text('As you walk inside, you see Valeria lying on the bed watching some drama show on the TV while snacking on something.');
      scene.actions([
        { label: 'Greet', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/valeria.jpg');
    scene.text('Valeria turns down the volume. "Speak up. What do you want?" she asks in a harsh tone.');
    scene.actions([
      { label: 'Ask about the band', goto: ['anushapt', 'band'] },
      { label: 'Photo album', goto: ['anushapt', 'album'] },
      { label: 'Ask about Alyona', goto: ['anushapt', 'alyona_ask'] },
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
        { label: 'Leave', goto: ['anushapt', 'hallway'] },
      ]);
    } else {
      scene.text('Since nobody\'s here, you should probably leave, but you could take a look around if you\'re curious.');
      scene.actions([
        { label: 'Leave', goto: ['anushapt', 'hallway'] },
        { label: 'Look around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Anushka\'s parent\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/momsdrawer.jpg');
    scene.text('You snoop around, opening drawers and looking in the closet, but you don\'t find anything of interest. The room is too disorganized for you to find much. The only thing of note is a vibrator with a large pack of batteries in one of the night stands.');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBand(s: GameState, scene: SceneBuilder): void {
  (s as any).nush_band = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
  scene.text('She seems a bit bitchy right now. "How do you feel about Anushka being in a band with only boys?" you ask.');
  scene.text('"Hmmph… I guess it\'s okay. It\'s not like I can stop her from doing it. That little bitch is probably fucking them all anyway, along with all the other boys in the neighborhood."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Oh, really?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('Valeria turns serious. "Yeah, I mean if I were in her shoes, I wouldn\'t give two shits about the others and focus all my energy on Radomir."');
    scene.text('"Anushka is a fool for not latching onto him. Just look at him! Perfect body and he\'s a really talented musician. He\'ll probably amount to something big, so she\'s really stupid for not latching onto him before he leaves her behind."');
    scene.text('You can\'t even get a word in as she just keeps talking with a dreamy sigh. "Just think about the life she could have living with a big rock star. Hell if I was younger, I would\'ve made sure that Radomir was all mine."');
    scene.text('"What about being free and living your own life, just like she\'s doing right now?" you ask.');
    scene.text('She looks at you as if you just asked the most stupid question ever. "Who gives a fuck? I can\'t for the life of me understand why any woman would want that instead of having a man provide the perfect life. She would be free to do whatever, like just party, spend his money, and do whatever she wants."');
    if (((st as any).anushkaQW ?? 0)?.['rad_date'] === 2) {
      scene.actions([
        { label: 'Point out Radomir broke up with Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('"Um, you do know Rad broke up with Nush, not the other way around?" you reply.');
    scene.text('She gives you a look like you\'re an idiot. "I know what my darling daughter claims, but it was most likely her who was sleeping around and cheating on him."');
    scene.text('You frown. "Rad was cheating on her, and she kept forgiving him."');
    scene.text('She looks annoyed now. "No man is going to break up with a girl if she keeps forgiving him for cheating. He can have his cake and eat it too. What nonsense!"');
    scene.text('You decide to push it a bit more. "Rad is the one that told me this…"');
    scene.text('She just shakes her head. "Oh I\'m sure he did, but if she wasn\'t cheating, she probably got all clingy and smothering with him, constantly being jealous any time a girl even looked at him. Men don\'t like that and she had to know that he was going to attract girls with his talent. She should have done a better job making him happy and then he wouldn\'t have had to break up with her. If she was smart, she would do everything in her power to win him back while she can."');
    scene.text('You just sigh. You can tell there\'s nothing you can say that will convince her otherwise, so you decide it would be best to just change the topic.');
    if ((!((st as any).nush_album ?? 0))) {
      scene.actions([
        { label: 'Ask about the photo album', goto: ['anushapt', 'album'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'anushapt', 'hallway');
  } },
      { label: 'Bring up Alyona', goto: ['anushapt', 'alyona_ask'] },
      { label: 'What about the other bandmates?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('Valeria looks at you in confusion before she laughs. "You mean the other two losers in the band? Don\'t make me laugh! They\'re nothing compared to Radomir."');
    scene.text('"Maybe you should just let her choose for herself," you answer.');
    // TODO-QSP: dynamic text: "Listen here <<$pcs_nickname>>, I might not give two shits about Anushka, but th...
    scene.text(`"Listen here ${((st as any).pcs_nickname ?? '')}, I might not give two shits about Anushka, but the best outcome for me-" She stops and takes a deep breath. "For her I mean… is to hook up with Radomir and that's the end of the story."`);
    scene.text('Seeing you\'re not getting anywhere with her, you sigh, say goodbye and turn around to leave.');
    if ((!((st as any).nush_album ?? 0))) {
      scene.actions([
        { label: 'Ask about the photo album', goto: ['anushapt', 'album'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'anushapt', 'hallway');
  } },
      { label: 'Bring up Alyona', goto: ['anushapt', 'alyona_ask'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'What about the other bandmates?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('Valeria looks at you in confusion before she laughs. "You mean the other two losers in the band? Don\'t make me laugh! They\'re nothing compared to Radomir."');
    scene.text('"Maybe you should just let her choose for herself," you answer.');
    // TODO-QSP: dynamic text: "Listen here <<$pcs_nickname>>, I might not give two shits about Anushka, but th...
    scene.text(`"Listen here ${((st as any).pcs_nickname ?? '')}, I might not give two shits about Anushka, but the best outcome for me-" She stops and takes a deep breath. "For her I mean… is to hook up with Radomir and that's the end of the story."`);
    scene.text('Seeing you\'re not getting anywhere with her, you sigh, say goodbye and turn around to leave.');
    if ((!((st as any).nush_album ?? 0))) {
      scene.actions([
        { label: 'Ask about the photo album', goto: ['anushapt', 'album'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'anushapt', 'hallway');
  } },
      { label: 'Bring up Alyona', goto: ['anushapt', 'alyona_ask'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbum(s: GameState, scene: SceneBuilder): void {
  (s as any).nush_album = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
  scene.text('There\'s a photo album on the nightstand next to the bed. You walk up, open it up and look at the photos inside. "Is that your family?"');
  scene.text('In a rare occurrence, Valeria almost seems to smile as she picks up the old album and starts to look through the photos.');
  scene.text('"We all looked so happy then…" she says. "It was a whole different world back then. Come and have a look."');
  scene.text('You sit next to her as she flips through the photo album. All of a sudden, you notice something…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Point at picture', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('"Is that who I think it is?" you ask, smiling as you see a picture of a young Anushka running around completely naked.');
    scene.text('"It sure is. She\'s my firstborn. She should have been my pride and joy, but something happened that just made that girl hardheaded and stupid."');
    scene.text('She continues on. "Anushka\'s has always been quite the exhibitionist. I remember her being around two or three years old and I was trying to make her wear clothes. As soon as I turned my back, she was always taking her clothes off and running around naked. It didn\'t matter if we had someone over or if we were outside in public. She grew up, but didn\'t change. Now she whores around, instead of focusing on trying to find a man to take care of her. It doesn\'t matter what I tell her. She thinks she knows it all, the snotty little bitch!" Her tone quickly changed from friendly to anger.');
    scene.text('You debate saying anything, but feel you have to. "Maybe she wants to be her own woman and lead her own life without having to have a guy take care of her?"');
    scene.text('Valeria looks at you like you just said the stupidest thing ever. "What kind of nonsense is that? Mark my words, if she doesn\'t latch onto a good man, she\'ll end up knocked up by some boy and then end up with a no good husband along with a bunch of ungrateful kids." You can\'t help but feel that she\'s almost talking about herself.');
    scene.text('She puts down the album and turns the volume on the TV up more than is needed. You take the hint, thank her for the story, and leave. At least you learned a lot more about why Anushka acts the way she does.');
    if ((!((st as any).nush_band ?? 0))) {
      scene.actions([
        { label: 'Bring up the band', goto: ['anushapt', 'band'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'anushapt', 'hallway');
  } },
      { label: 'Bring up Alyona', goto: ['anushapt', 'alyona_ask'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlyonaAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
  scene.text('You\'re curious and decide to ask Valeria about Anushka\'s friend Alyona. Valeria looks at you as if you\'ve crossed some invisible line and instantly grows hostile towards you.');
  scene.text('"Why are you asking about that lying little cunt?" she says.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Alyona?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('She reacts as if your question somehow provoked her. "Who do you think I\'m talking about?"');
    scene.text('"What\'s wrong with her?" you ask. "She\'s Anushka\'s childhood friend, right?"');
    scene.text('"That girl is nothing but trouble. She\'s a dirty little slut that deserves all of her problems!" she sourly answers.');
    scene.actions([
      { label: 'React', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/parroom.jpg');
    scene.text('"How can you say something like that? What did she do?"');
    scene.text('"What did she do?! She\'s a lying little cunt. She lets every boy fuck her like the slut she is. She brings all her misfortune down on herself just like my daughter does. Stupid little bitches don\'t know how easy they have it. They deserve all the shit that happens to them."');
    scene.text('You stand in shock, not knowing what to say.');
    scene.text('"Look at what you\'ve done now. You\'ve gotten me all worked up! I suggest you leave this room and don\'t ask stupid questions if you want to be welcome in my home!"');
    scene.actions([
      { label: 'Leave', goto: ['anushapt', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstvisit(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  ((s as any).locat = (s as any).locat ?? {})['A144'] = 22;
  if (((s as any).hour ?? 0) < 16) {
    ((s as any).locat = (s as any).locat ?? {})['144_rand1'] = ((s as any).daystart ?? 0);
    ((s as any).locat = (s as any).locat ?? {})['144_save1'] = ((s as any).locat ?? 0)?.['144'];
  } else {
    if (((s as any).hour ?? 0) < 18) {
      ((s as any).locat = (s as any).locat ?? {})['144_rand2'] = ((s as any).daystart ?? 0);
      ((s as any).locat = (s as any).locat ?? {})['144_save2'] = ((s as any).locat ?? 0)?.['144'];
    } else {
      if (((s as any).hour ?? 0) < 20) {
        ((s as any).locat = (s as any).locat ?? {})['144_rand3'] = ((s as any).daystart ?? 0);
        ((s as any).locat = (s as any).locat ?? {})['144_save3'] = ((s as any).locat ?? 0)?.['144'];
      } else {
        if (((s as any).hour ?? 0) < 22) {
          ((s as any).locat = (s as any).locat ?? {})['144_rand4'] = ((s as any).daystart ?? 0);
          ((s as any).locat = (s as any).locat ?? {})['144_save4'] = ((s as any).locat ?? 0)?.['144'];
        }
      }
    }
  }
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj4.jpg');
  scene.text('Anushka leads you to her apartment, and the two of you talk as you go. It\'s nothing important, just idle small talk to pass the time. Once on the fourth floor of her building, she leads you to apartment 17. It\'s one of the corner apartments. You know from your own building that these are the bigger three bedroom apartments. She unlocks the door with her keys and leads you inside. "Let\'s see if my dad is home," she tells you as she leads you to the living room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).AnushkaLoc = 5;
  }, goto: ['anushapt', 'livingroom'] },
  ]);
  scene.build();
}

function enterNushlivroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/living.jpg');
  scene.text('The room has a couple of recliners and a couch where Anushka is sitting. In front of the couch is a large coffee table. Several empty beer bottles and cups are spread across the table. There are also some scattered papers and a pill bottle sitting on the table. Opposite the couch but in front of the window is a fairly large TV playing an action movie of some sort and a stereo system. The room isn\'t exactly messy, but it\'s far from clean. It doesn\'t look like it\'s been dusted in months or the floor has been recently swept. You walk over and sit down next to Anushka.');
  scene.text('You notice that you don\'t hear anything else. "Where\'s everyone else?" you ask her.');
  scene.text('She shrugs. "Dad took them out to eat and go see a movie, so I have the place to myself for a change."');
  if (((s as any).strapNumber ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
    if (((s as any).strapNumber ?? 0) < 5) {
      scene.actions([
        { label: 'Pull out your strap-on', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap1.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('Anushka arches her eyebrows when you pull the strap-on out of your purse, then bites her lower lip. "Just what are you planning to do with that?"');
      scene.text('You give her a grin. "I was thinking about fucking you with it, or maybe having you fuck me with it? With nobody home, it would be a crime to waste the freedom it gives us."');
      scene.text('She gets flushed, but you can tell she\'s turned on. "Yeah? Well hand it over and I\'ll fuck your tight little asshole until you scream for me."');
      scene.actions([
        { label: 'Fuck her', goto: ['anushkaev1', 'couch_strapon_give'] },
        { label: 'Give her the strap-on', goto: ['anushkaev1', 'couch_strapon_get'] },
      ]);
    } else {
      scene.text('Anushka reaches up and takes the strap-on from you. She takes a look at it then gives the straps a few good tugs while she checks the size of the dildo. "Pretty nice one. It\'s a quality dildo and sturdy harness. You made a good choice," she says as she hands it back to you and turns her attention back to the movie. Taking the hint that she doesn\'t want to play, you put the strap-on away and join her in watching the TV.');
      scene.actions([
        { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).AnushkaLoc = 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you watch some cheesy American action movie. You chat about how nice it will be when you\'re on your own without always having people around and parents telling you what to do. You barely pay attention to the movie as you talk. In fact, it ends and something else comes on that you don\'t even remember.');
    scene.text('After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already!" Anushka says. "Come on, let\'s go."');
    scene.text('As she gets up and heads to her room, her brothers come running by on the way to theirs. They\'re quickly followed by Valeria complaining about where they ate as Ed walks by and gives you a slight nod, then goes into the kitchen.');
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull out your strap-on', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/livingroom/couchstrap1.jpg');
    scene.text('Pulling the huge strapon out of your purse, you expose it to her to see her reaction. At first, she looks turned on, but when you reveal the full size of it, she starts shaking her head. "No way, that thing wouldn\'t fit in any of my holes. I thought you had… you know, a human-sized dildo, not some horse cock. I don\'t know who you fuck with that, but it won\'t be me, that\'s just absurd." You try to talk her into it, but she flat out refuses to let you stick something that big in her. After a bit you give up and take the hint that she doesn\'t want to play, with something that big. So you put the strap-on away and join her in watching the TV.');
    scene.actions([
      { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).AnushkaLoc = 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you watch some cheesy American action movie. You chat about how nice it will be when you\'re on your own without always having people around and parents telling you what to do. You barely pay attention to the movie as you talk. In fact, it ends and something else comes on that you don\'t even remember.');
    scene.text('After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already!" Anushka says. "Come on, let\'s go."');
    scene.text('As she gets up and heads to her room, her brothers come running by on the way to theirs. They\'re quickly followed by Valeria complaining about where they ate as Ed walks by and gives you a slight nod, then goes into the kitchen.');
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the show with her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).AnushkaLoc = 2;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Living room</b></center>');
    scene.img('images/shared/home/tv/tv_watch_1.jpg');
    scene.text('The two of you watch some cheesy American action movie. You chat about how nice it will be when you\'re on your own without always having people around and parents telling you what to do. You barely pay attention to the movie as you talk. In fact, it ends and something else comes on that you don\'t even remember.');
    scene.text('After a few hours, you hear keys in the lock of the door. "Shit, they\'re home already!" Anushka says. "Come on, let\'s go."');
    scene.text('As she gets up and heads to her room, her brothers come running by on the way to theirs. They\'re quickly followed by Valeria complaining about where they ate as Ed walks by and gives you a slight nod, then goes into the kitchen.');
    scene.actions([
      { label: 'Follow Anushka to her room', goto: ['anush_bedroom', 'anushroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNushkidstory(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/eduard.jpg');
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['kidstory'] = ((s as any).anushkaQW['kidstory'] ?? 0) + (1);
  if (((s as any).anushkaQW ?? 0)?.['kidstory'] === 1) {
    scene.text('The corner of Eduard\'s mouth turns upwards as he starts. "I remember one autumn day when I was out in the garage. I had just given our car a tuneup and Nush had helped me until she got bored and started running around, trying to find trouble. I think she was about eight at the time." He shakes his head in amusement as he remembers it.');
    scene.text('"As usual," you reply as a smile spreads across your face and Eduard gives you a relatable look. "So all of a sudden she disappears somewhere, but I remember her playing around with my jacket. Before you know it, I hear the car start, and off it goes! Nush is sitting in the drivers seat with a huge grin on her face, driving towards the garage door…"');
    scene.text('You gasp as he continues. "Don\'t worry. I start yelling at her to stop and she hits the brakes. She manages to stop less than a meter from the other garage. I don\'t know how she was able to reach the pedals while being able to see over the dashboard. Anyway, I\'m pissed, and I yank open the door to really lay into her. However, she\'s sitting there all sad. She knows she did something wrong and she looks up at me with those big puppy eyes…" he says sighing. "I couldn\'t do anything as my anger just melted away. I just pulled her out and got in the car to back it back into the garage."');
    scene.text('"This makes what she\'s like now make so much more sense. My mom would have tanned my hide if I had done that!" you comment.');
    scene.text('He nods a little. "Yeah, I should have been harder on her when she was growing up. Maybe it would have curbed her wilder ways." He shakes his head. "She\'s always managed to wrap me around her little finger, and with just a look, melt away my anger to make me a better man."');
    scene.text('You look at him sweetly and he clears his throat. "Anyway, the little free-spirited wild child looking for trouble is my Nush," he responds.');
    scene.text('With that, you can tell he\'s done with telling stories, at least for now. "Well thank you for telling me. I loved hearing about it, but I should get going," you tell him and he nods as you leave the living room.');
  } else {
    if (((s as any).anushkaQW ?? 0)?.['kidstory'] === 2) {
      scene.text('The corner of Eduard\'s mouth turns upwards as he starts. "I remember one of those warm spring days while Anushka was in preschool. She was creating havoc most likely. I was helping out at home looking after the baby when the phone rings. It\'s the preschool…"');
      scene.text('"You must\'ve gotten lots of those back in the days!" you smile and Eduard rolls his eyes.');
      scene.text('"Anyway, I pick up the phone and there\'s a hysterical teacher on the other side. She starts yelling that Nush is gone and that they can\'t find her anywhere…"');
      scene.text('You gasp as he continues. "I go to the preschool and join in the search. I even call some of my friends to help us look. The preschool even calls the police after a few hours." The way he says police sounds like he wants to spit the word. "Anyway, one of my friends finds her out near the palace. We still don\'t know how she got there. When he brings her back, I ask what the hell she was doing and why she went off…" He sighs. "She just shrugs her shoulders and says that she felt like exploring the town. Turns out, my friend tells me, that she was conning tourists out of sweets by giving them bad directions. Apparently, she thought it was funny. That is until she got sick from eating too many sweets after I took her home. She threw up all over the place."');
      scene.text('You continue talking for a while about Anushka\'s adventures while she was younger. "This makes what she\'s like now make so much more sense," you comment.');
      scene.text('"Yeah… Anyway, the little free-spirited wild child looking for trouble is my Nush," he responds.');
    } else {
      if (((s as any).anushkaQW ?? 0)?.['kidstory'] === 3) {
        scene.text('The corner of Eduard\'s mouth turns upwards as he starts. "This is a good story. Nush used to like playing games when she was younger, so I bought a used PlayStation and she just loved it. She spent all her time on it for a while and always wanted the newest games for it. Some of the kids from the neighborhood had been talking about this new game that was just about to get released, so of course, she comes running and asks for me to buy it…"');
        scene.text('"Quite spoiled," you reply as you smile and Eduard gives you a relatable look.');
        scene.text('"Here comes the best part. So I tell her that we can\'t afford it right now. At first she pouts, but she quickly stops and leaves the room. She never was much of a pouter. After about 30 minutes, we hear the door slam shut and the house goes really quiet…"');
        scene.text('You smile as he continues. "So what did my dear daughter do? Well, she took her little brother down the street and tried to sell him for the same price as that game cost. Luckily, a neighbor walked past and had the two of them follow her home. This was after she promised that she would think about buying Maksim."');
        scene.text('"I about hit the roof when the neighbor brings them back and tells us what happened. My wife is hysterical and I start yelling at Nush asking her why she would do that. As calmly as you please, she explains if she sold him, I wouldn\'t have to pay for the game. Since we wouldn\'t have to feed him, then we would have more money for more games." He shakes his head while laughing. "That\'s when I knew she wasn\'t just going to be trouble like most kids, but that she was too smart for her own good."');
        scene.text('You continue talking for a while about Anushka\'s adventures while she was younger. "This makes what she\'s like now make so much more sense," you comment.');
        scene.text('"Yeah… Anyway, the little free-spirited wild child looking for trouble is my Nush," he responds.');
      } else {
        scene.text('"Nush has always liked to take bike rides with me, especially when she was younger…" he starts reminiscing. "So this one time, we\'re riding along with her on the back of the bike. She was ten at the time I think. I was already going fast, and she was yelling to go faster… faster all the time."');
        scene.text('"I guess you listened?" you ask, but you already know what the answer will be.');
        scene.text('Eduard starts laughing. "Well, of course, so we\'re going way too fast and Nush is screaming out of joy when a police car suddenly appears behind us and pulls us over. The police officer and I are having a talk when he turns towards Nush, and what does she do? Sticks out her tongue and flips him off. She was mad because he ruined her fun you see…"');
        scene.text('You gasp as he continues laughing. "Luckily the police officer and I knew each other. He was a decent sort and just laughed it off. He patted her on her head and commented that she was going to be a real handful when she grew up. Boy was he right…"');
        scene.text('You continue talking for a while about Anushka\'s adventures while she was younger. "This makes what she\'s like now make so much more sense," you comment.');
        scene.text('"Yeah… Anyway, the little free-spirited wild child looking for trouble is my Nush," he responds.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['anushapt', 'hallway'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'nushshower':
      enterNushshower(s, scene);
      break;
    case 'shower_wait':
      enterShowerWait(s, scene);
      break;
    case 'snack':
      enterSnack(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'anushparents':
      enterAnushparents(s, scene);
      break;
    case 'band':
      enterBand(s, scene);
      break;
    case 'album':
      enterAlbum(s, scene);
      break;
    case 'alyona_ask':
      enterAlyonaAsk(s, scene);
      break;
    case 'firstvisit':
      enterFirstvisit(s, scene);
      break;
    case 'nushlivroom':
      enterNushlivroom(s, scene);
      break;
    case 'nushkidstory':
      enterNushkidstory(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushapt: LocationDef = {
  name: 'anushapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
