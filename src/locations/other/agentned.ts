import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'agentned', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'dina', '');
  scene.text('<center><b>Kirsanova Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  scene.text('This is the head office of the largest real estate agency in the Leningrad Oblast.');
  scene.text('At the reception, you notice a large print banner:');
  scene.text('<b>"Please be aware that all sales transactions are made exclusively through your bank account. Rent payments are excluded from this policy."</b>');
  qspCall(s, 'homes_properties', 'get_rented_properties', 'home');
  (s as any).agentned_count = 0;
  if (((s as any).agentned_count ?? 0) > 0) {
    (s as any).agentned_i = 0;
    scene.text('<h4>Rent Information</h4>');
    // TODO-QSP: :listing_rented_properties_loop
    // TODO-QSP: 'You have <b><<property_days[agentned_i]>> days</b> remaining on the lease of your <<$property_displ...
    // TODO-QSP: dynamic "
    // TODO-QSP: act ""Cancel the lease of the <<$property_display[agentned_i]>>"":
    scene.text('Attention: You won\'t be able to return to your apartment when you cancel the lease.');
    scene.actions([
      { label: 'Return', goto: ['agentned', 'start'] },
      { label: 'Cancel it', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'cancel_rent', '<<$property_code[agentned_i]>>');
  }, goto: ['agentned', 'start'] },
    ]);
  }
  // TODO-QSP: "
  (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
  if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
    // TODO-QSP: jump 'listing_rented_properties_loop'
  }
  scene.actions([
    { label: 'View rentals', goto: ['agentned', 'rent'] },
    { label: 'View properties for sale', goto: ['agentned', 'buy'] },
  ]);
  scene.build();
}

export const agentned: LocationDef = {
  name: 'agentned',
  title: 'Kirsanova Real Estate Agency',
  region: 'other',
  locationType: 'public_indoors',
  description: ['This is the head office of the largest real estate agency in the Leningrad Oblast.'],
  enter: enter,
};
