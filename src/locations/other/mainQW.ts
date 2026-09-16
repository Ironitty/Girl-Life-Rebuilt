import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).tatiana_spell_reminder ?? 0) < 14) {
    (s as any).tatiana_spell_reminder = 14;
  }
  if (((s as any).tatiana_succubus_reminder ?? 0) < 14) {
    (s as any).tatiana_succubus_reminder = 14;
  }
  if (((s as any).tatiana_mission_reminder ?? 0) < 14) {
    (s as any).tatiana_mission_reminder = 14;
  }
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  scene.text('Tatiana says, "Hmm, strange. It seems that I\'m beginning to understand what\'s happening, get in the car and we\'ll go check it out."');
  scene.text('You sit in the back seat of the black jeep, Gustav starts to drive while Tatiana sits next to you. Tatiana begins to feel you "Interesting. I understand you had an orgasm and during the orgasm, part of the male power from that amulet transferred to your female body."');
  scene.actions([
    { label: 'Investigate', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"So I\'m a magician now?"');
    scene.text('"Sort of, but you\'re not the 100m gold medallist just because you have legs or a juggler because you have hands. You\'re full of magic but you have no concept of administering magic power, like a battery without an output.');
    scene.actions([
      { label: 'Seek help', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
    scene.text('"Can you teach me?"');
    scene.text('"Teach? I\'m still learning myself. Besides, I only have knowledge only of body magics. I can boost other\'s magic, shield people and modify organic life forms. My skill is innate I was only ever going to have this type of magic. I studied for many years to understand and use my gift.');
    scene.text('"Well, could you teach me what you know."');
    scene.text('"Maybe the basics, otherwise the magic could build up inside you and become a risk. Maybe you can help me with some investigations, but you are not an apprentice. I\'m too young to have one and would get into trouble, OK?"');
    scene.text('Gustav shouts, "Come on, ladies."');
    scene.text('You get out, slam the door and go down a lane to a pair of large metal doors. They open, Gustav and Tatiana nudge you forward.');
    scene.actions([
      { label: 'Enter the door', handler: (st: GameState) => {
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10;
    (s as any).pcs_mana = (((s as any).pcs_intel ?? 0) * ((s as any).pcs_magik ?? 0)) + ((s as any).pcs_vital ?? 0) * 5 + ((s as any).rikudo ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/lab/lab.jpg');
    scene.text('Before you is a massive laboratory with a wide variety of stands and equipment racks with different flasks and bottles.');
    scene.text('Tatiana dramatically spreads her arms. "Welcome to my lab, I live and do my research here. Undress and lie down on the couch, I need to do some tests."');
    scene.actions([
      { label: 'Lie on the couch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/lab/event/main1.jpg');
    scene.text('You undress and lie down on the couch, Tatiana begins to examine you. She dabs you with charms and uses a variety strange looking devices, after half an hour of examination she sighs and tells you to get dressed.');
    scene.text('You get up from the couch and dress and ask Tatiana, "So? Did you learn anything else about me?"');
    scene.text('"Yes, but first I need to explain the basic magic theory. Listen closely and listen hard, I will not repeat this. Magical energy in Asian culture is called chakra and is produced by all living organisms. This vital energy, if deprived of its body begins to slowly die, you can use this magic but it then needs time before it will be replaced. Every body has a limit that can be slowly increased through training."');
    scene.text('"There is magical energy in the grass, trees and people but not in dead matter it is the energy of life itself. Although everyone has this energy, the body protects itself and prohibits the use of it. It is easy to exhaust the body and can kill yourself. Mages are able to bypass the body\'s defenses and separate themselves from this energy and shape it into effect."');
    scene.text('"But even mages can not collect more energy than they can contain. Thanks to the amulet you can potentially contain more energy than any magician could dream of. You just need to learn how to use it. As I understand it, your orgasms are capable of converting the energy that is inaccessible and converting it into magical energy you can use. Through this you could obtain a magical energy supply that is almost limitless, unlike other magicians."');
    scene.text('"You know, you\'re theoretically the most powerful magician in the world. Perhaps there is magic that can only you could wield, those scrolls that were in the archive with the amulet may have been useful in understanding this."');
    scene.text('You shout. "I have to go back there."');
    scene.text('"That\'s not so easy, the site is closed and guarded, but we managed to get in there and the scrolls have not aged well. The papyrus has dried out so much that it crumbles if you try and open it and the ink has faded away."');
    scene.text('"We met Reinhold there, he represents the council of the highest order. They are the old ones and hold council on the highest matters of magic we must be careful not to upset them or attract the attention of demons."');
    scene.text('"Woah! Demons?');
    scene.text('"Demons, you know, creatures from other planes of existence. It\'s possible that Rikudo was a demon, but demons unlike him are beings with terrible force, blunt and aggressive. Something like beasts woven from pure magic. Much like the fae, they have different types and they possess different magics and skills, but these are not cute or friendly."');
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.text('"Got it. Hey, you can turn me back into a man?"');
      scene.text('"I can\'t. I drew the energy you were emitting from the amulet, I don\'t hold anything like the energy required and you have only access to the smallest hint of the potential of the amulet. It might be possible if your magical energies are much higher and you somehow pass me all your energy that I can reverse the spell, but this is unlikely and could put you back in the position you were in when we met. I\'m sorry."');
    }
    scene.text('Tatiana continues, "Do not worry so much about the future. Develop your body, learn to fight, study magic and train your mind. Gradually everything will become clear to you, at least that is what my old sensei said."');
    scene.text('"Now you should go, Gustav will drive you home."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      qspGoto(s, 'city_residential', '');
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        qspGoto(s, 'city_island', '');
      } else {
        qspGoto(s, 'pav_residential', '');
      }
    }
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
  scene.build();
}

export const mainQW: LocationDef = {
  name: 'mainQW',
  title: 'Tatiana says, "Hmm, strange. It seems that I\'m beginning to ',
  region: 'other',
  description: ['Tatiana says, "Hmm, strange. It seems that I\'m beginning to understand what\'s happening, get in the car and we\'ll go check it out."'],
  enter: enter,
};
