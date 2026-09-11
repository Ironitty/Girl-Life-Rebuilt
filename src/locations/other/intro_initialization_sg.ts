import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 1);
  qspCall(s, 'intro_initialization', 'add_item', 'panties', 'gm_panties', 2);
  qspCall(s, 'intro_initialization', 'add_item', 'panties', 'gm_panties', 10);
  qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 1);
  qspCall(s, 'intro_initialization', 'add_item', 'bras', 'gm_bras', 2);
  qspCall(s, 'intro_initialization', 'add_item', 'bras', 'gm_bras', 10);
  qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'gm_shoe', 6);
  qspCall(s, 'intro_initialization', 'add_item', 'shoes', 'danilovich_shoe', 21);
  qspCall(s, 'intro_initialization', 'wear_item', 'coats', 'gm_coats', 12);
  qspCall(s, 'intro_initialization', 'add_item', 'bras', 'danilovich_bras', 1);
  qspCall(s, 'intro_initialization', 'add_item', 'panties', 'danilovich_panties', 1);
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 12);
    qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 12);
    qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'gm_shoe', 9);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 30);
    qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'cats_dress', 1);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 81);
    qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 10);
    qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 10);
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'goth') {
      qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'cats_panties', 15);
      qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'cats_bras', 15);
      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 23);
      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 23);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 80);
      qspCall(s, 'intro_initialization', 'add_item', 'shoes', 'danilovich_shoe', 19);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_outfits', 16);
      qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'dolls_outfits', 37);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 51);
      qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'gm_shoe', 25);
      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'danilovich_bras', 3);
      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'danilovich_panties', 3);
      qspCall(s, 'intro_initialization', 'wear_item', 'coats', 'dolls_coats', 19);
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'beautiful') {
        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 21);
        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 21);
        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 24);
        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 24);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_outfits', 56);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 49);
        qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'cats_dress', 59);
        qspCall(s, 'intro_initialization', 'wear_item', 'coats', 'cats_coats', 16);
        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'danilovich_bras', 4);
        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'danilovich_panties', 4);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 1);
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'poor') {
          qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 4);
          qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 4);
          qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_outfits', 30);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 178);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'market_outfits', 1);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'market_outfits', 15);
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'anorexic') {
            qspCall(s, 'intro_initialization', 'add_item', 'panties', 'gm_panties', 15);
            qspCall(s, 'intro_initialization', 'add_item', 'bras', 'gm_bras', 15);
            qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 29);
            qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 29);
            qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 39);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 88);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_outfits', 90);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 37);
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'bimbo') {
              qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 14);
              qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 14);
              qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 28);
              qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 28);
              qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'gm_shoe', 9);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 124);
              qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'cats_outfits', 86);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 127);
              qspCall(s, 'intro_initialization', 'add_item', 'shoes', 'danilovich_shoe', 12);
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'troublemaker') {
                qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 21);
                qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 17);
                qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 2);
                qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 2);
                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 48);
                qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'dolls_shoe', 31);
                qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'dolls_outfits', 39);
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'alternative') {
                  qspCall(s, 'intro_initialization', 'wear_item', 'panties', 'gm_panties', 21);
                  qspCall(s, 'intro_initialization', 'wear_item', 'bras', 'gm_bras', 17);
                  qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 2);
                  qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 2);
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 48);
                  qspCall(s, 'intro_initialization', 'wear_item', 'shoes', 'bomba_shoe', 4);
                  qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 89);
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'bomba_dress', 11);
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'slut') {
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 49);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'market_outfits', 17);
                    qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 17);
                    qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 17);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 149);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 15);
                    qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 149);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'scandalicious_bikinis', 55);
                  } else {
                    if (((s as any).pcs_inhib ?? 0) < 5) {
                      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 8);
                      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 8);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 30);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 81);
                      qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'cats_dress', 1);
                    } else {
                      if (((s as any).pcs_inhib ?? 0) < 10) {
                        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 4);
                        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 4);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 3);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 80);
                        qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 4);
                      } else {
                        if (((s as any).pcs_inhib ?? 0) < 15) {
                          qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 17);
                          qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 17);
                          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 58);
                          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 106);
                          qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 7);
                        } else {
                          if (((s as any).pcs_inhib ?? 0) < 20) {
                            qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 19);
                            qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 19);
                            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 55);
                            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 102);
                            qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 7);
                          } else {
                            if (((s as any).pcs_inhib ?? 0) < 25) {
                              qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 15);
                              qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 15);
                              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 58);
                              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 87);
                              qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 39);
                            } else {
                              if (((s as any).pcs_inhib ?? 0) < 30) {
                                qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 41);
                                qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 41);
                                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 91);
                                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 96);
                                qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 57);
                              } else {
                                if (((s as any).pcs_inhib ?? 0) < 35) {
                                  qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 24);
                                  qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 24);
                                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 95);
                                  qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 63);
                                  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
                                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 82);
                                  } else {
                                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 48);
                                  }
                                } else {
                                  if (((s as any).pcs_inhib ?? 0) < 40) {
                                    qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 12);
                                    qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 12);
                                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 124);
                                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 45);
                                    qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 89);
                                  } else {
                                    if (((s as any).pcs_inhib ?? 0) < 45) {
                                      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 25);
                                      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 25);
                                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 131);
                                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 38);
                                      qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 109);
                                    } else {
                                      if (((s as any).pcs_inhib ?? 0) < 50) {
                                        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 9);
                                        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 9);
                                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 145);
                                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 17);
                                        qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 123);
                                      } else {
                                        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 17);
                                        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 17);
                                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 149);
                                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 15);
                                        qspCall(s, 'intro_initialization', 'wear_item', 'clothing', 'gm_dress', 149);
                                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'scandalicious_bikinis', 55);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'bimbo') {
    qspCall(s, 'intro_initialization', 'add_item', 'panties', 'eroto_panties', 13);
    qspCall(s, 'intro_initialization', 'add_item', 'bras', 'eroto_bras', 13);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 190);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 181);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 69);
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 86);
  } else {
    if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 4);
      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 4);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 48);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 69);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_outfits', 45);
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_dress', 75);
    } else {
      if (((s as any).start_type ?? 0)?.['group'] === 'nerd'  ||  ((s as any).start_type ?? 0)?.['cat'] === 'friendless') {
        qspCall(s, 'intro_initialization', 'add_item', 'panties', 'gm_panties', 14);
        qspCall(s, 'intro_initialization', 'add_item', 'bras', 'gm_bras', 14);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 9);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 157);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'nerdvana_outfits', 26);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'nerdvana_outfits', 72);
      } else {
        if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
          qspCall(s, 'intro_initialization', 'add_item', 'panties', 'danilovich_panties', 6);
          qspCall(s, 'intro_initialization', 'add_item', 'bras', 'danilovich_bras', 6);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 31);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 61);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 66);
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 107);
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'troublemaker') {
            qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 10);
            qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 10);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_outfits', 56);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_dress', 96);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'bomba_dress', 16);
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'bomba_outfits', 57);
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'alternative') {
              qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 27);
              qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 27);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 89);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 24);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'bomba_outfits', 6);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'bomba_dress', 56);
            } else {
              if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
                qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 40);
                qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 40);
                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 15);
                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 31);
                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 70);
                qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 1);
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'goth') {
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_outfits', 7);
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_outfits', 28);
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_outfits', 43);
                  qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'dolls_dress', 23);
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
                    qspCall(s, 'intro_initialization', 'add_item', 'panties', 'gm_panties', 7);
                    qspCall(s, 'intro_initialization', 'add_item', 'bras', 'gm_bras', 7);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 1);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 10);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 13);
                    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_outfits', 32);
                  } else {
                    if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
                      qspCall(s, 'intro_initialization', 'add_item', 'panties', 'cats_panties', 12);
                      qspCall(s, 'intro_initialization', 'add_item', 'bras', 'cats_bras', 12);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'cats_outfits', 2);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_outfits', 26);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 10);
                      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_dress', 46);
                    } else {
                      if (((s as any).start_type ?? 0)?.['cat'] === 'slut') {
                        qspCall(s, 'intro_initialization', 'add_item', 'underwear_bodysuits', 'scandalicious_bodysuits', 98);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'scandalicious_dress', 39);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'eroto_strip', 9);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'market_outfits', 12);
                        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'market_outfits', 40);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'anorexic') {
    qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_swimsuit', 8);
  } else {
    if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
      if (((s as any).pcs_inhib ?? 0) <= 10) {
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'allure_swimsuit', 3);
      } else {
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'allure_swimsuit', 99);
      }
    } else {
      if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
        if (((s as any).pcs_inhib ?? 0) <= 10) {
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_swimsuit', 1);
        } else {
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_swimsuit', 12);
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'slut') {
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling'  ||  ((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
      qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 25);
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 60);
        qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 155);
        qspCall(s, 'intro_initialization', 'add_item', 'shoes', 'danilovich_shoe', 18);
      } else {
        if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
          qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 52);
        } else {
          if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
            qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 32);
          } else {
            if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'gm_school', 60);
              qspCall(s, 'intro_initialization', 'add_item', 'clothing', 'danilovich_outfits', 65);
              qspCall(s, 'intro_initialization', 'add_item', 'shoes', 'danilovich_shoe', 17);
            }
          }
        }
      }
    }
  }
  if (((s as any).danilovich_shoe ?? 0)[17] > 0  ||  ((s as any).danilovich_shoe ?? 0)[18] > 0  ||  ((s as any).danilovich_shoe ?? 0)[12] > 0) {
    (s as any).danilovich_shoe[21] = 0;
  }
  if (((s as any).gm_shoe ?? 0)[9] > 0  ||  ((s as any).gm_shoe ?? 0)[25] > 0) {
    (s as any).gm_shoe[6] = 0;
  }
  if (((s as any).danilovich_bras ?? 0)[3] > 0  ||  ((s as any).danilovich_bras ?? 0)[4] > 0) {
    (s as any).danilovich_bras[1] = 0;
  }
  if (((s as any).danilovich_panties ?? 0)[3] > 0  ||  ((s as any).danilovich_panties ?? 0)[4] > 0) {
    (s as any).danilovich_panties[1] = 0;
  }
  if (((s as any).dolls_coat ?? 0)[19] > 0  ||  ((s as any).cats_coat ?? 0)[16] > 0) {
    (s as any).gm_coats[12] = 0;
  }
  scene.build();
}

export const intro_initialization_sg: LocationDef = {
  name: 'intro_initialization_sg',
  region: 'other',
  enter: enter,
};
