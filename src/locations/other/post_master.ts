import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('The manager of the post office, also known as the postmaster, has just finished helping a customer and is about to walk back to his office when he spots you.');
  scene.text('"You look like you want to ask something. If it\'s about our regular services, then you should get in line. I don\'t have time to help any more customers," he says.');
  qspCall(s, 'jobs', 'get_job_definition', 'pav_mailgirl');
  if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === '') {
    if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 0) {
      scene.actions([
        { label: 'Ask for work', goto: ['post_master', 'ask_for_work'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_after_refusing'] }]);
      if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 2) {
        if (((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'] !== ((s as any).daystart ?? 0)) {
          if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_mailgirl') === 0) {
            scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_outside_work_hours'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['post_master', 'start_work'] }]);
          }
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_after_refusing2'] }]);
      }
      if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'employed') {
        if (((s as any).job_missed_total ?? 0)?.['pav_mailgirl'] > ((s as any).job_miss_acknowledged ?? 0)?.['pav_mailgirl']) {
          scene.actions([{ label: 'Continue', goto: ['post_master', 'scolding'] }]);
        }
        if (((s as any).job_suspended ?? 0)?.['pav_mailgirl'] === 1) {
          scene.actions([
            { label: 'Tell him you can work this coming Saturday after all', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'resume_job', 'pav_mailgirl');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('You enter the postmaster\'s office at an opportune time. It looks like he\'s not doing anything right now.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, can I help you?" he asks as soon as he sees you.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, can I help you?" he asks as soon as he sees you.`);
    scene.text('"I came to say that I can make it after all this Saturday!" you reply.');
    scene.text('"Ah, excellent news! I\'ll tell Aleksiy he can stay at home with his daughter," he says while quickly making a note. "Is there anything else I can do for you?"');
    scene.text('"No, that was it," you tell him. "See you on Saturday!"');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_mailgirl') === 1) {
            scene.img('images/locations/shared/postoffice/postmaster.jpg');
            // TODO-QSP: dynamic text: "Hey there, <<$pcs_firstname>>!" the postmaster smiles when you enter the post o...
            scene.text(`"Hey there, ${((s as any).pcs_firstname ?? 0)}!" the postmaster smiles when you enter the post office. "Right on time. Please follow me."`);
            scene.actions([
              { label: 'Follow him', goto: ['post_deliveries', 'start'] },
            ]);
          } else {
            if (((s as any).hour ?? 0) < 11) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              qspCall(s, 'stat', '');
              scene.img('images/locations/shared/postoffice/postmaster.jpg');
              // TODO-QSP: dynamic text: "You're a bit early, <<$pcs_firstname>>!" the postmaster says when he sees you e...
              scene.text(`"You're a bit early, ${((s as any).pcs_firstname ?? 0)}!" the postmaster says when he sees you enter his office. "I don't have your mail yet, but I like the enthusiasm. Come see me between '+func('time', 'get_time_string', 11, 0)+' and '+func('time', 'get_time_string', 12, 0)+'. I should have it ready then."`);
              scene.actions([
                { label: 'Leave him alone', goto: ['post_office', 'start'] },
              ]);
            } else {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              (s as any).job_last_work_day['pav_mailgirl'] = ((s as any).daystart ?? 0);
              qspCall(s, 'stat', '');
              scene.img('images/locations/shared/postoffice/postmaster.jpg');
              // TODO-QSP: dynamic text: "You're late, <<$pcs_firstname>>!" the postmaster scoffs when he sees you enter ...
              scene.text(`"You're late, ${((s as any).pcs_firstname ?? 0)}!" the postmaster scoffs when he sees you enter his office. "I already called Aleksiy in to cover your shift. He wasn't happy, and neither am I. Don't make this a habit…"`);
              scene.text('You try to apologize, but he\'s not interested and tells you to leave him alone.');
              scene.actions([
                { label: 'Leave his office', goto: ['post_office', 'start'] },
              ]);
            }
          }
          scene.actions([
            { label: 'Tell him you can\'t work next Saturday', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'suspend_job', 'pav_mailgirl');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('The postmaster looks like he\'s swamped with work right now. His desk is completely covered with mail.');
    scene.text('"Excuse me?" you say, trying to get his attention. "I won\'t be able to make it next Saturday after all."');
    scene.text('The postmaster looks up at you somewhat disappointedly. "Oh, okay. No problem. I\'ll let Aleksiy know he has to come in on Saturday. Thanks for letting me know, I guess."');
    scene.text('He scribbles something down on a piece of paper and focuses on his work again.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
          ]);
        }
        // TODO-QSP: act $func('wrap', 'v_neg', 'Resign from your job'):
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'jobs', 'set_terminated', 'pav_mailgirl');
        qspCall(s, 'stat', '');
        scene.img('images/locations/shared/postoffice/postmaster.jpg');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," the postmaster says, looking up from his desk. What can I d...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," the postmaster says, looking up from his desk. What can I do for you?"`);
        scene.text('With a sigh you tell him you wish to resign from the job: "Well, I\'m just calling in to resign. Thank you for the opportunity, but my circumstances have changed and I can no longer continue do do my shifts."');
        scene.text('"Are you sure about this? Aleksiy is really enjoying the time with his family."');
        scene.text('You nod and confirm, "Yes I\'m sure."');
        // TODO-QSP: dynamic text: "Well alright then; good luck with your future plans <<$pcs_nickname>>"
        scene.text(`"Well alright then; good luck with your future plans ${((s as any).pcs_nickname ?? 0)}"`);
        scene.text('You thank him and leave.');
        scene.actions([
          { label: 'Leave', goto: ['post_office', 'start'] },
        ]);
      }
      if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'fired') {
        if (((s as any).job_termination_reason ?? 0)?.['pav_mailgirl'] === 'no_show') {
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>…" the postmaster sighs when he sees you, shaking his head. "...
          scene.text(`"${((s as any).pcs_firstname ?? 0)}…" the postmaster sighs when he sees you, shaking his head. "I really wanted this to work out, but you left me no choice. You kept not showing up, and Aleksiy can't keep covering for you on short notice. I'm sorry, but I've had to let you go."`);
          scene.text('He looks genuinely disappointed. "I wish you\'d at least told me you couldn\'t make it. I would\'ve understood. But just not showing up? That\'s not how it works."');
        } else {
          scene.text('"You?! Get out of here!" he shouts angrily when you enter his office. "There\'s no job for you! Not now, not ever! That screw-up of yours ruined our perfect record!"');
          scene.text('You try to explain what happened, but he\'s simply not interested in whatever it is you have to say. It seems very unlikely that he\'d consider hiring you again.');
        }
        scene.actions([
          { label: 'Leave him alone', goto: ['post_office', 'start'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['post_office', 'start'] },
  ]);
  scene.build();
}

export const post_master: LocationDef = {
  name: 'post_master',
  title: 'Resign from your job',
  region: 'other',
  description: ['The manager of the post office, also known as the postmaster, has just finished helping a customer and is about to walk back to his office when he spots you.'],
  enter: enter,
};
