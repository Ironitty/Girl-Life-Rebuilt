// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>New & Updated Mechanics</h1></center>');
  scene.text('This page details new mechanics added to the game. It does <b>not</b> include new events, storylines, and so on, nor is it exhaustive: the focus is on systems that the player may want to familiarize themselves with as they continue playing in the new version. After closing this page, you may find it in the start page (when you open the game).');
  if (((s as any).update_report_last ?? 0) < 98) {
    (s as any).update_report_last = 98;
    scene.text('<center><h2>Version 0.9.8</h2></center>');
    scene.text('<center><b>Mood and Disposition</b></center>');
    scene.text('The <i>Mood</i> mechanic has been expanded with a new status value: <i>Disposition</i>. Mood is no longer static — it now drifts towards your disposition over time, while your disposition slowly drifts towards your mood.');
    scene.text('For example, if your mood is 80 and your disposition is 50, your mood will decline until it reaches 50. If you then keep your mood consistently above your disposition, your disposition will slowly rise to meet it — so maintaining a good mood over time is how you raise your baseline.');
    scene.text('Most events only directly affect your mood, but some may also alter your disposition directly.');
    scene.text('Disposition can be shown as a fully separate status bar (or text, in text mode), or as an overlay on top of the mood bar. Toggle this in the status window tab of the settings page.');
    // TODO-QSP: *p '<center><table cellpadding="10"><tr>'
    // TODO-QSP: *p '<td valign="top" align="center"><b>Separate bars</b><br><table cellpadding="1" cellspacing="0"><...
    // TODO-QSP: *p '<td valign="top" align="center"><b>Overlay mode</b><br><table cellpadding="1" cellspacing="0"><<...
    // TODO-QSP: *p '</tr></table></center>'
    scene.text('<center><b>Calendar</b></center>');
    scene.text('The calendar has been completely rewritten and overhauled, and now acts as a general calendar system, tracking job shifts, holidays, quest events, and more. Some events are optional and can be toggled from the settings menu, for example the Pavlovsk disco parties or church events.');
    // TODO-QSP: *p '<ul>'
    // TODO-QSP: *p '<li><b>All-day events</b> are shown at the top of the calendar.</li>'
    // TODO-QSP: *p '<li><b>Fixed events</b> are shown as solid rectangles.</li>'
    // TODO-QSP: *p '<li><b>Flexible events</b> have a fixed length but a flexible arrival time, shown as a hatched r...
    // TODO-QSP: *p '</ul>'
    scene.text('A thin column next to the hour marks shows the current time (❀) and today\'s busy timeslots (⚘), in 15-minute increments. The calendar has its own tab in the character journal.');
    scene.text('<center><b>Job Scheduling</b></center>');
    scene.text('The employment & jobs system was rewritten to sync with the calendar. Jobs now consistently show reminder icons/texts when you need to get to a mandatory shift, when you missed a shift, etc.');
    scene.text('In addition, instead of a flat 1 main job limit, you can now sign up for as many jobs as you want, <i>so long as you have the time</i>. The calendar is used to make sure new job schedules don\'t conflict with existing ones, so you can fit an evening job after a morning one, for example.');
    // TODO-QSP: *p '<center><table cellpadding="10"><tr>'
    // TODO-QSP: *p '<td align="center"><b>Shift today</b><br><<$temp_icon_today>></td>'
    // TODO-QSP: *p '<td align="center"><b>Arrive now</b><br><<$temp_icon_blue>></td>'
    // TODO-QSP: *p '<td align="center"><b>Working</b><br><<$temp_icon_green>></td>'
    // TODO-QSP: *p '<td align="center"><b>Missed</b><br><<$temp_icon_red>></td>'
    // TODO-QSP: *p '</tr></table></center>'
    scene.text('<center><b>Difficulty Settings</b></center>');
    scene.text('The difficulty settings have been greatly expanded, and moved into their own tab in the settings menu. You can now individually customize skill gain rate, skill degradation rate, income and expenditure multipliers, event mood multipliers, random event changes, and more.');
    scene.text('In addition, several difficulty presets have been added, which bundle together individual difficulty settings.');
    scene.text('<center><b>Payment Preferences and Bank Changes</b></center>');
    scene.text('Instead of manually selecting whether you wish to pay with cash or card every time you purchase something, you can now set your payment preferences in the gameplay tab of the settings menu.');
    // TODO-QSP: *p '<ul>'
    // TODO-QSP: *p '<li>Set a main payment method and a backup method for when the main one doesn''t have enough mon...
    // TODO-QSP: *p '<li>Choose your preferred income method: cash, or sent to your bank account.</li>'
    // TODO-QSP: *p '<li>Some events may ignore your preference when it makes sense story-wise — drug dealers may onl...
    // TODO-QSP: *p '<li>Opening a bank account no longer comes with free overdraft protection. The bank may now dema...
    // TODO-QSP: *p '</ul>'
    // TODO-QSP: *p '<center><b>Other Mechanic Updates</b></center>'
    // TODO-QSP: *p '<ul>'
    // TODO-QSP: *p '<li>Skill EXP gain notifications.</li>'
    // TODO-QSP: *p '<li>The casino now uses a chips system.</li>'
    // TODO-QSP: *p '<li>The driving and transport systems were greatly improved, and distances now scale properly.</...
    // TODO-QSP: *p '<li>Teeth may get knocked out in a fight.</li>'
    // TODO-QSP: *p '<li>Coffee and caffeine are now properly modeled.</li>'
    // TODO-QSP: *p '<li>New dynamic themes: Solarized and Tokyo Night.</li>'
    // TODO-QSP: *p '<li>Many new options were added to the custom character option at character creation.</li>'
    // TODO-QSP: *p '</ul>'
  }
  if (((s as any).update_report_last ?? 0) < 99) {
    (s as any).update_report_last = 99;
    scene.text('<center><h2>Version 0.9.9</h2></center>');
    scene.text('<center><b>Archetypes</b></center>');
    scene.text('The old Bimbo and Goth traits have been expanded into a full \'Archetype\' system, containing five archetypes. Each archetype opposes two others, such that they form a pentagram:');
    // TODO-QSP: *p '<ul>'
    // TODO-QSP: *p  '<li><b>Bimbo</b> opposes Prude and Punk.</li>'
    // TODO-QSP: *p  '<li><b>Preppy</b> opposes Punk and Goth.</li>'
    // TODO-QSP: *p  '<li><b>Prude</b> opposes Goth and Bimbo.</li>'
    // TODO-QSP: *p  '<li><b>Punk</b> opposes Bimbo and Preppy.</li>'
    // TODO-QSP: *p  '<li><b>Goth</b> opposes Preppy and Prude.</li>'
    // TODO-QSP: *p '</ul>'
    scene.text('You may only have one archetype active at a time. Unlike the old traits, which required strict adherence to a set of requirements for seven days in a row, the new system is points-based: you gain points in an archetype by acting, dressing, etc. in ways that fit it, and lose points by going against it. Gaining points in one archetype also reduces points in its opposing archetypes, meaning the archetypes all balance one another.');
    scene.text('Archetypes have both positive and negative effects, as well as active and passive ones, shaped by the same pentagram design. For example, the Bimbo archetype boosts appearance, charisma, and erotic dance skills, while penalizing intelligence and perception, among other things, and its active effect is a constant increase to your arousal.');
    scene.text('Points also decay over time, so an active archetype needs to be kept up rather than reached once and forgotten. If your current points fall well below your 7-day average, you\'ll experience withdrawal, which worsens your mood the longer it\'s left unaddressed! Keep reinforcing your active archetype to avoid it.');
    scene.text('You can find details about archetypes, their effects, ways to gain and lose points, and much more, in the Archetypes tab of the character menu.');
    scene.text('<center><b>Traits</b></center>');
    scene.text('The traits system has been massively revamped, with the traits reorganized into a cohesive system, and many new traits added. Each trait can have its own way of being gained or lost and unique effects. Some traits remain hidden until discovered.');
    scene.text('Traits can have multiple levels, both positive and negative, often but not always linked to EXP points. For example, <i>Alcohol Tolerance</i> moves between Lightweight and Heavyweight depending on how much, and how often, you drink.');
    // TODO-QSP: *p '<<$func(''traits'', ''card'', ''drinking'', -1)>>'
    scene.text('All discovered traits can be found in the Traits tab of the character menu, along with descriptions of them. At the top right of most trait cards you can find a small tooltip. Hover over it with the mouse for a few seconds to reveal mechanical information about the trait: How to gain it, how to lose it, etc.');
    scene.text('Unfortunately, the diversity of traits means it\'s impossible to provide more useful information here that would apply to all traits.');
    scene.text('<center><b>Status Panel Upgrades</b></center>');
    scene.text('The status panel has been expanded with a truly enormous amount of customization options. We highly encourage you to visit the Status Window section of the settings page and play around with the settings until you find a setup that\'s perfect for you.');
    scene.text('Among the new settings are the options to hide every field, align sections to left/center/right, switch progress bars to short text or prosaic forms, switch temperature scales (including some of Eva\'s favorite units - you\'ll see), hide specific skills or NPC relations, align many sections into tables of differing column numbers, fit images to the screen width or to certain sizes, add spacing around images, add or remove labels and headers, color relations and skills from red to green, and many, many other options.');
    scene.text('A particularly and oft-requested new feature is the ability to select if you prefer to see information as icons and texts both (the default), prioritize icons, or prioritize texts.');
    scene.text('The texts section of the status panel has been split into \'Status Texts\' and \'Alerts\'. Alerts provide urgent or very important information, and are generally not mutually exclusive with the status texts - similar messages may appear in both, depending on severity.');
    scene.text('Lastly, a Calendar section was added to the status panel, showing upcoming events from your calendar.');
    scene.text('<center><b>Daily Routine</b></center>');
    scene.text('The old \'All-day Routines\' option has been replaced by \'Daily Routines\'. You can now define the exact actions you would like to take in both a morning and an evening routine: brush your teeth, shower, eat, remove or put on makeup, take your vitamins, and so on.');
    scene.text('You can also define the timing in which the routine will be available, either by time of day, or by time after waking up.');
    scene.text('The routines automatically skip steps which are unavailable at the moment, for example shaving when you don\'t have razors.');
    scene.text('<center><b>Character Creation Improvements</b></center>');
    scene.text('When creating a new character, you\'ll now see an additional page at the end, showing an overview of all selected options, as well as many options that were previously inaccessible except via cheats, such as your character\'s height.');
    scene.text('Options were added to skip directly to the overview, and even skip the prologue following character creation, in case you\'ve created a few hundred characters before and want to get straight to the point.');
    scene.text('<center><b>Other Mechanic Updates</b></center>');
    // TODO-QSP: *p '<ul>'
    // TODO-QSP: *p '<li>Every wardrobe category (bras, panties, coats, shoes, purses, piercings, tattoos, bodysuits,...
    // TODO-QSP: *p '<li>The job journal now has a directory listing every job in the game, as well as hints for obta...
    // TODO-QSP: *p '<li>Painkillers'' effects are no longer static, the more you take the more effective they are. H...
    // TODO-QSP: *p '<li>The calendar can now show your menstrual cycle phases, debt due dates, etc.</li>'
    // TODO-QSP: *p '<li>New UI theme picker with live previews.</li>'
    // TODO-QSP: *p '<li>Sugar daddy haggling prices now depend on how much he likes the character and her appearance...
    // TODO-QSP: *p '<li>Street muggers and rapists may sometimes retaliate against the player if they choose to stru...
    // TODO-QSP: *p '</ul>'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit', handler: (st: GameState) => {
    // TODO-QSP: gt $ARGS[1]
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'show':
      enterShow(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const feature_updates: LocationDef = {
  name: 'feature_updates',
  title: '<center><h1>New & Updated Mechanics</h1></center>',
  region: 'other',
  enter: enter,
};
