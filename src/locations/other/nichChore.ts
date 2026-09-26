import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInspect(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'hallway') {
    (s as any).location_type = 'event';
    (s as any).nichChoreID = 0;
    (s as any).nichChoreTimeF = 1;
    (s as any).nichChoreType = 'floor';
    (s as any).nichChoreLoc = 'hallway';
    (s as any).nichChoreActCaption = 'Inspect Hallway';
    (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    (s as any).nichTimeBDiligent = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
      (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/hallway.jpg';
      (s as any).nichChoreDesc = 'The hallway has been cleaned recently. There is no need to clean it again.';
    } else {
      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/hallwayDirt1.jpg';
        (s as any).nichChoreDesc = 'The floor is a little bit dirty.';
      } else {
        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
          (s as any).nichChoreTimeF = 2;
          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/hallwayDirt2.jpg';
          (s as any).nichChoreDesc = 'The floor is somewhat dirty. One has to be careful not to step into the dirt.';
        } else {
          (s as any).nichChoreTimeF = 4;
          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/hallwayDirt3.jpg';
          (s as any).nichChoreDesc = 'The floor is very dirty. Wearing shoes here would be wise because otherwise hosiery could be ruined.';
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'bathGuest') {
      (s as any).location_type = 'event';
      (s as any).nichChoreID = 1;
      (s as any).nichChoreTimeF = 1;
      (s as any).nichChoreType = 'bath';
      (s as any).nichChoreLoc = 'hallway';
      (s as any).nichChoreActCaption = 'Inspect Room';
      (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
      (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
      (s as any).nichTimeBDiligent = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathroomGuest.jpg';
        (s as any).nichChoreDesc = 'The cloakroom hasn\'t been used since it was last cleaned. There are no used towels in the basket, the end of the toilet paper is folded and the sink is in pristine condition. There is no need to clean up.';
      } else {
        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathGuestDirt1.jpg';
          (s as any).nichChoreDesc = 'Judging from a used towel being in the towel basket and some tiny splashes of water somebody has used this room lately. Although it being very clean Nicholas surely expects you to clean it.';
        } else {
          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
            (s as any).nichChoreTimeF = 2;
            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathGuestDirt2.jpg';
            (s as any).nichChoreDesc = 'This room has been used several times since it has been cleaned for the last time. The sink is somewhat dirty, the toilet paper needs to be filled up and the fresh towels are nearly used up.';
          } else {
            (s as any).nichChoreTimeF = 4;
            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathGuestDirt3.jpg';
            (s as any).nichChoreDesc = 'This room is dirty, which can not only be seen but also smelled. The toilet paper is used up, the sink has some water, soap and hair in it and the toilet hasn\'t been flushed correctly.';
          }
        }
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'servant') {
        (s as any).location_type = 'event';
        (s as any).nichChoreID = 2;
        (s as any).nichChoreTimeF = 1;
        (s as any).nichChoreType = 'bed';
        (s as any).nichChoreLoc = 'servant';
        (s as any).nichChoreActCaption = 'Inspect Room';
        (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
        (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
        (s as any).nichTimeBDiligent = (-1);
        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedroomServant.jpg';
          (s as any).nichChoreDesc = 'Your room is all cleaned up. Everything is at its place, the bed is tidied up and there is no visible dust on the furniture.';
        } else {
          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedServantDirty1.jpg';
            (s as any).nichChoreDesc = 'Your room appears to be clean. You should make your bed though.';
          } else {
            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
              (s as any).nichChoreTimeF = 2;
              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedServantDirty2.jpg';
              (s as any).nichChoreDesc = 'Some items are lying on the ground and your bed looks untidy.';
            } else {
              (s as any).nichChoreTimeF = 4;
              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedServantDirty3.jpg';
              (s as any).nichChoreDesc = 'It appears as if most of your possessions are lying on the ground and your bed looks untidy. Also there is some visible dust on the shelves.';
            }
          }
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'bathServant') {
          (s as any).location_type = 'event';
          (s as any).nichChoreID = 3;
          (s as any).nichChoreTimeF = 1;
          (s as any).nichChoreType = 'bath';
          (s as any).nichChoreLoc = 'bathServant';
          (s as any).nichChoreActCaption = 'Inspect Room';
          (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
          (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
          (s as any).nichTimeBDiligent = (-1);
          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathroomServant.jpg';
            (s as any).nichChoreDesc = 'Apart from tiny inperfections you can\'t avoid while using your shower and toilet your bathroom is perfectly clean.';
          } else {
            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathServantDirty1.jpg';
              (s as any).nichChoreDesc = 'There is a small amount of lime in the shower and you should scrub the toilet. The floor could also use some cleaning.';
            } else {
              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                (s as any).nichChoreTimeF = 2;
                (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathServantDirty2.jpg';
                (s as any).nichChoreDesc = 'Your beauty products appliances clutter your sink. In addition there is some amount of lime in the shower and you should scrub the toilet. The floor could also use some cleaning.';
              } else {
                (s as any).nichChoreTimeF = 4;
                (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathServantDirty3.jpg';
                (s as any).nichChoreDesc = 'The condition of this bathroom is worse than most truck stop restrooms. It smells badly and is in dire need of cleaning.';
              }
            }
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'laundry') {
            (s as any).location_type = 'event';
            (s as any).nichChoreID = 4;
            (s as any).nichChoreTimeF = 1;
            (s as any).nichChoreType = 'laundry';
            (s as any).nichChoreLoc = 'bathServant';
            (s as any).nichChoreActCaption = 'Inspect Laundry';
            (s as any).nichTimeBQuick = (45 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
            (s as any).nichTimeBNormal = (90 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
            (s as any).nichTimeBDiligent = (180 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/laundry0.jpg';
              (s as any).nichChoreDesc = 'There is no laundry to do right now.';
            } else {
              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/laundry1.jpg';
                (s as any).nichChoreDesc = 'A small pile of laundry lies in front of the washing machine. It is hardly enough to fill the machine halfway.';
              } else {
                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 25) {
                  (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/laundry2.jpg';
                  (s as any).nichChoreDesc = 'A pile of laundry lies in front of the washing machine waiting to be washed.';
                } else {
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 35) {
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/laundry3.jpg';
                    (s as any).nichChoreDesc = 'A big pile of laundry lies in front of the washing machine. You will have to fill the machine several times to get it all done.';
                  } else {
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/laundry4.jpg';
                    (s as any).nichChoreDesc = 'The pile of laundry in front of the washing machine is enormous. It appears as if the majority of Nicholas\' clothes is here instead of his wardrobe.';
                  }
                }
              }
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tanya') {
              (s as any).location_type = 'event';
              (s as any).nichChoreID = 5;
              (s as any).nichChoreTimeF = 1;
              (s as any).nichChoreType = 'bed';
              (s as any).nichChoreLoc = 'tanya';
              (s as any).nichChoreActCaption = 'Inspect Room';
              (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
              (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
              (s as any).nichTimeBDiligent = (-1);
              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedroomTanja.jpg';
                (s as any).nichChoreDesc = 'Tanyas room is cleaned up. There is no need to clean it again.';
              } else {
                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                  (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/tanyaDirty1.jpg';
                  (s as any).nichChoreDesc = 'The floor of Tanyas room is cleaned up, but she has cluttered her make-up all over her desk and her bed should be done.';
                } else {
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                    (s as any).nichChoreTimeF = 2;
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/tanyaDirty2.jpg';
                    (s as any).nichChoreDesc = 'Tanyas bed needs to be done and she has cluttered some of her dirty clothes all over her floor. You should put them into the laundry.';
                  } else {
                    (s as any).nichChoreTimeF = 4;
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/tanyaDirty3.jpg';
                    (s as any).nichChoreDesc = 'Even entering Tanyas room is difficult since she has cluttered dirty and clean clothes all over the floor.';
                  }
                }
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'masterbath') {
                (s as any).location_type = 'event';
                (s as any).nichChoreID = 6;
                (s as any).nichChoreTimeF = 1;
                (s as any).nichChoreType = 'bath';
                (s as any).nichChoreLoc = 'masterbath';
                (s as any).nichChoreActCaption = 'Inspect Room';
                (s as any).nichTimeBQuick = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                (s as any).nichTimeBNormal = (40 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                (s as any).nichTimeBDiligent = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                  (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathroomMaster.jpg';
                  (s as any).nichChoreDesc = 'Since the bathroom gets used over the day some tiny bits of spilled water and a small amount of untidiness can\'t be avoided. There is no need for you to clean this bathroom now.';
                } else {
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathMasterDirty1.jpg';
                    (s as any).nichChoreDesc = 'There are various items cluttered around the sink, the floor could be cleaned and the bathtub could be scrubbed.';
                  } else {
                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                      (s as any).nichChoreTimeF = 2;
                      (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathMasterDirty2.jpg';
                      (s as any).nichChoreDesc = 'The floor is covered in water and lime, the bathtub needs to be scrubbed and the toilet and the sink also require attention.';
                    } else {
                      (s as any).nichChoreTimeF = 4;
                      (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bathMasterDirty3.jpg';
                      (s as any).nichChoreDesc = 'The bathroom is very dirty. There is also a unpleasant smell in the air.';
                    }
                  }
                }
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'master') {
                  (s as any).location_type = 'event';
                  (s as any).nichChoreID = 7;
                  (s as any).nichChoreTimeF = 1;
                  (s as any).nichChoreType = 'bed';
                  (s as any).nichChoreLoc = 'master';
                  (s as any).nichChoreActCaption = 'Inspect Room';
                  (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                  (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                  (s as any).nichTimeBDiligent = (-1);
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                    (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedroomMaster.jpg';
                    (s as any).nichChoreDesc = 'The bedroom of Nicholas is in pristine condition. There is no need to clean it now.';
                  } else {
                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                      (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedMasterDirty1.jpg';
                      (s as any).nichChoreDesc = 'The bed of Nicholas need to be made. You could also sweep the floor.';
                    } else {
                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                        (s as any).nichChoreTimeF = 2;
                        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedMasterDirty2.jpg';
                        (s as any).nichChoreDesc = 'There are some clothes cluttered over the floor. You should put them into the laundry. The bed also needs to be made.';
                      } else {
                        (s as any).nichChoreTimeF = 4;
                        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/bedMasterDirty3.jpg';
                        (s as any).nichChoreDesc = 'There are clothes cluttered over the floor and the bed. The bed needs to be made and you should clean the floor.';
                      }
                    }
                  }
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 'living') {
                    (s as any).location_type = 'event';
                    (s as any).nichChoreID = 8;
                    (s as any).nichChoreTimeF = 1;
                    (s as any).nichChoreType = 'furniture';
                    (s as any).nichChoreLoc = 'living';
                    (s as any).nichChoreActCaption = 'Inspect Room';
                    (s as any).nichTimeBQuick = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    (s as any).nichTimeBNormal = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    (s as any).nichTimeBDiligent = (120 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                      (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/living.jpg';
                      (s as any).nichChoreDesc = 'The living room of Nicholas is in pristine condition. There is no need to clean it now.';
                    } else {
                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/livingDirty1.jpg';
                        (s as any).nichChoreDesc = 'Some whine glasses and other items are standing around the living room. You could also remove dust from the furniture and clean the floor.';
                      } else {
                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                          (s as any).nichChoreTimeF = 2;
                          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/livingDirty2.jpg';
                          (s as any).nichChoreDesc = 'A visible layer of dust covers the floor and some of the pieces of furniture.';
                        } else {
                          (s as any).nichChoreTimeF = 4;
                          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/livingDirty3.jpg';
                          (s as any).nichChoreDesc = 'There are many clusters of hair and dust all over the living room. Shou need to clean the floor and the furniture.';
                        }
                      }
                    }
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 'kitchen') {
                      (s as any).location_type = 'event';
                      (s as any).nichChoreID = 9;
                      (s as any).nichChoreTimeF = 1;
                      (s as any).nichChoreType = 'kitchen';
                      (s as any).nichChoreLoc = 'kitchen';
                      (s as any).nichChoreActCaption = 'Inspect Room';
                      (s as any).nichTimeBQuick = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                      (s as any).nichTimeBNormal = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                      (s as any).nichTimeBDiligent = (120 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                        (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/kitchen.jpg';
                        (s as any).nichChoreDesc = 'The kitchen is in pristine condition. There is no need to clean it now.';
                      } else {
                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/kitchenDirty1.jpg';
                          (s as any).nichChoreDesc = 'There is some dirty dishes in the sink and the stove could use some cleaning.';
                        } else {
                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                            (s as any).nichChoreTimeF = 2;
                            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/kitchenDirty2.jpg';
                            (s as any).nichChoreDesc = 'A pile of dishes fills the sink and the surrounding area. The floor could use some cleaning and the stove is pretty dirty.';
                          } else {
                            (s as any).nichChoreTimeF = 4;
                            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/kitchenDirty3.jpg';
                            (s as any).nichChoreDesc = 'The kitchen is filled with dirty dishes. The stove is dirty and you should really clean up the floor. A bad smell is in the air.';
                          }
                        }
                      }
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 'study') {
                        (s as any).location_type = 'event';
                        (s as any).nichChoreID = 10;
                        (s as any).nichChoreTimeF = 1;
                        (s as any).nichChoreType = 'furniture';
                        (s as any).nichChoreLoc = 'study';
                        (s as any).nichChoreActCaption = 'Inspect Room';
                        (s as any).nichTimeBQuick = (15 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                        (s as any).nichTimeBNormal = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                        (s as any).nichTimeBDiligent = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                          (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/study.jpg';
                          (s as any).nichChoreDesc = 'The study is in pristine condition. There is no need to clean it now.';
                        } else {
                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 5) {
                            (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/studyDirty1.jpg';
                            (s as any).nichChoreDesc = 'Nicholas keeps his study in a tidy condition. Nevertheless there is a tiny amount of dust on the shelves.';
                          } else {
                            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                              (s as any).nichChoreTimeF = 2;
                              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/studyDirty2.jpg';
                              (s as any).nichChoreDesc = 'A small amount of dust is on the shelves. You could also clean the keyboard of Nicholas \' computer.';
                            } else {
                              (s as any).nichChoreTimeF = 4;
                              (s as any).nichTempPic = 'images/locations/city/citycenter/nichApartment/studyDirty3.jpg';
                              (s as any).nichChoreDesc = 'The furniture is covered in a thick layer of dust dust.';
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
  (s as any).nichtTimeQuick = ((s as any).nichTimeBQuick ?? 0) * ((s as any).nichChoreTimeF ?? 0);
  (s as any).nichTimeNormal = ((s as any).nichTimeBNormal ?? 0) * ((s as any).nichChoreTimeF ?? 0);
  (s as any).nichTimeDiligent = ((s as any).nichTimeBDiligent ?? 0) * ((s as any).nichChoreTimeF ?? 0);
  if (String((s as any).locArgs?.[2] ?? '') === 1) {
    // TODO-QSP: jump 'nichChoreSkipInspect'
  }
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(((s as any).nichChoreActCaption ?? '') ?? ''), handler: (st: GameState) => {
    // LABEL: nichChoreSkipInspect
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).nichTempPic ?? '')}`);
    scene.text(`${((st as any).nichChoreDesc ?? '')}`);
    if ((!((st as any).nichOutfitState ?? 0))) {
      scene.text('<b><font color = red>You have to change into an appropriate outfit before cleaning up.</font></b>');
    } else {
      if (((st as any).nichChoreState ?? 0)?.[String((st as any).nichChoreID ?? 0)] > 0) {
        if (((st as any).nichTimeDiligent ?? 0) > 0) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => '(' + String(((st as any).nichTimeDiligent ?? '') ?? '') + ' minutes) Clean diligently', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', '3');
  } },
          ]);
        }
        scene.actions([
          { label: '', labelFn: (s: GameState) => '(' + String(((st as any).nichtTimeQuick ?? '') ?? '') + ' minutes) Clean quickly', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', '1');
  } },
          { label: '', labelFn: (s: GameState) => '(' + String(((st as any).nichTimeNormal ?? '') ?? '') + ' minutes) Clean normally', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', '2');
  } },
        ]);
      }
    }
    if ((!((st as any).nichChoreMode ?? 0))) {
      scene.actions([
        { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 0]; enterCleanApartmentActions(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') !== 1) {
    (s as any).nichRand = (Math.floor(Math.random() * 100) + 1);
    if (((s as any).nichChoreID ?? 0) === 5) {
      if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichTanya ?? 0)?.['Dominance'] >= 20) {
        (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'bedroomTanya');
        if (((s as any).nichTanyPresent ?? 0) !== 0) {
          if (((s as any).nichRand ?? 0) <= 30  ||  ((s as any).nichDebug ?? 0) === 1) {
            scene.img('images/characters/city/tanya/encounter/dom1.jpg');
            scene.text('When you start cleaning Tanya approaches you from behind and smacks you on your butt.');
            scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, don't miss that edge over there." she points at a small mess she obviously created on purpose.`);
            scene.actions([
{ label: 'Comply', handler: (st: GameState) => {
    ((st as any).nichTanya = (st as any).nichTanya ?? {})['Dominance'] = ((st as any).nichTanya['Dominance'] ?? 0) + (2);
    scene.text('Once you are done cleaning up the first spot Tanya points you to another one. She obviously enjoys bossing you around, taking several opportunities to hit you on you butt again.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
    ]);
  } },
{ label: 'Tell her to stop this', handler: (st: GameState) => {
    ((st as any).nichTanya = (st as any).nichTanya ?? {})['Dominance'] = ((st as any).nichTanya['Dominance'] ?? 0) - (3);
    scene.text('She looks a little bit disappointed as you tell her that you are not in the mood for this right now and want to focus on your work.');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
    ]);
  } },
]);
            return;
          }
        }
      }
    } else {
      if (((s as any).nichChoreID ?? 0) === 8) {
        if (((s as any).nichGalaContractActive ?? 0) === 1  &&  ((s as any).nichRand ?? 0) <= 40) {
          if (qspFunc(s, 'nichUtil', 'isAlone', 'gala', 'living') === 1) {
            (s as any).nichRand = (Math.floor(Math.random() * 10) + 1);
            if (((s as any).nichRand ?? 0) <= 5) {
              scene.text('Gala sits on the sofa and watches you as you start cleaning. It doesn\'t take long before she snaps her finger.');
              scene.text('"Slave! You missed a spot. Get over here!"');
              scene.text('She points at her left shoe.');
              scene.text('"And use your tongue!"');
              scene.actions([
                { label: 'Lick her shoe', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid1.jpg');
    scene.text('You get down to your knees and lick her shoe the best you can.');
    if (((st as any).nichRand ?? 0) === 1) {
      scene.text('"Good enough. Now get back to work!"');
      scene.actions([
        { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
      ]);
    } else {
      scene.text('"Still not clean. You are not trying hard enough!"');
      scene.actions([
        { label: 'Continue licking', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid2.jpg');
    scene.text('She pushes your head down with her other foot while you continue licking her shoe.');
    if (((st as any).nichRand ?? 0) <= 3) {
      scene.text('"Good enough. Now get back to work!"');
      scene.actions([
        { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
      ]);
    } else {
      if (((st as any).nichRand ?? 0) === 4) {
        scene.text('Finally she pulls away her shoe and inspects it closely.');
        scene.text('"You did a fine job there. I think you earned yourself a reward."');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/strapon1.jpg');
    scene.text('She undresses and fastens a strapon around her waist. You know what to do and drop to your knees in front of her.');
    scene.text('She grabs your head and starts mercilessly fucking your skull, forcing her dildo down your throat.');
    scene.text('Once she is done she forces you back to your feet by pulling your hair.');
    scene.text('"Enough fun. Now get back to work!"');
    qspCall(st, 'arousal', 'bj', 5, 'rough', 'lesbian', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('Finally she pulls away her shoe and inspects it closely.');
        scene.text('"What is that?! You made it even more dirty. I think it\'s time to teach you a lesson."');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid3.jpg');
    scene.text('She bends you over and pulls your skirt up.');
    scene.text('"Don\'t… be… lazy… you… stupid… cunt!"');
    scene.text('She emphasizes each word with a smack on your butt. She repeats her sentence several times.');
    scene.text('"Do you understand? Yes? Then back to work!"');
    scene.text('You pull down your skirt and get back up.');
    qspCall(st, 'pain', '1', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
      ]);
    }
  } },
              ]);
            } else {
              scene.text('Gala sits on the sofa and watches you as you start cleaning. It doesn\'t take long before she snaps her finger.');
              scene.text('"Slave! You missed a spot. Get over here! Bend over!"');
              scene.actions([
                { label: 'Bent over', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid3.jpg');
    scene.text('You bend over and pull your skirt up.');
    scene.text('"Don\'t… be… lazy… you… stupid… cunt!"');
    scene.text('She emphasizes each word with a smack on your butt. She repeats her sentence several times.');
    scene.text('"Do you understand? Yes? Then back to work!"');
    scene.text('You pull down your skirt and get back up.');
    qspCall(st, 'pain', '1', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'work', 'ARGS[1]', '1');
  } },
    ]);
  } },
              ]);
            }
            return;
          }
        }
      }
    }
  }
  (s as any).nichRand = (Math.floor(Math.random() * 100) + 1);
  (s as any).nichChoreResultCode = undefined;
  (s as any).nichChoreResulChance = undefined;
  (s as any).nichTempPic = qspFunc(s, 'nichUtil', 'cleanPic', ((s as any).nichChoreType ?? 0), ((s as any).nichChoreLoc ?? 0));
  (s as any).nichChoreResult = 0;
  if ((!((s as any).nichChoreID ?? 0))) {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).nichChoreDesc = 'You decide to clean the hallway as quickly as possible, not wasting your time with harder to reach spots or visiting a place twice.';
      ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the floor at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
      ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the floor is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        (s as any).nichChoreDesc = 'You carefully clean the hallway, making sure you also remove the dirt in hard to reach corners.';
      } else {
        (s as any).nichChoreDesc = 'You carefully clean the hallway, making sure you also remove the dirt in hard to reach corners. Afterwards you apply a special polish to protect the wooden floor from visible aging.';
        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Much to your delight the polish visibly enhances the appearance of the floor.\' & nichChoreResult = -1';
        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The polish has no visible effect. The floor looks very clean nevertheless.\'';
        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 100;
      }
    }
  } else {
    if (((s as any).nichChoreID ?? 0) === 1) {
      if (String((s as any).locArgs?.[1] ?? '') === 1) {
        (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 2) {
          (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the toilet, the sink and the floor. You also make sure that the towels are neatly folded.';
        } else {
          (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the toilet, the sink and the floor. You also apply a special perfume to improve the smell and fold some of the towels into hearts and swans.';
          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'You managed to create a perfect ambiente for every guest who wants to use this room.\' & nichChoreResult = -1';
          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The effect is not as stunning as you hoped it to be but the room is at least perfectly clean.\'';
          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 100;
        }
      }
    } else {
      if (((s as any).nichChoreID ?? 0) === 2) {
        if (String((s as any).locArgs?.[1] ?? '') === 1) {
          (s as any).nichChoreDesc = 'You clean your room as quickly as possible.';
          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
            ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
            ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 2) {
            (s as any).nichChoreDesc = 'Your carefully clean your room.';
          }
        }
      } else {
        if (((s as any).nichChoreID ?? 0) === 3) {
          if (String((s as any).locArgs?.[1] ?? '') === 1) {
            (s as any).nichChoreDesc = 'You clean the room as quickly as possible.';
            ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
            ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
              ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
              ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 2) {
              (s as any).nichChoreDesc = 'Your carefully clean the room.';
            }
          }
        } else {
          if (((s as any).nichChoreID ?? 0) === 4) {
            if (String((s as any).locArgs?.[1] ?? '') === 1) {
              (s as any).nichChoreDesc = 'You think about separating the clothes before you wash them, but then you decide to put them into the washing machine all at once. While the washing machine washes them you wash the delicates by hand by putting all of them into the sink at the same time. After the washing washine is done you place its load in the dryer. Afterwards you iron the clothes quickly.';
              ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are done you realize that one of the shirts of Nicholas has some visible spots of color on it. There is no way you could fix that. Some other clothes are also affected, but you might get them clean by washing them again.\' & nichChoreModLaundry1 += 1 & nichChoreResult = max (0, nichChoreState[nichChoreID] - 5)';
              ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 10;
              ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Taking a look at the laundry you realize that you didn\'t manage to clean it properly. You will have to do it all over again.\' & nichChoreResult = nichChoreState[nichChoreID]';
              ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 40;
              ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = 'nichChoreResult = max (0, nichChoreState[nichChoreID] - 15)';
              ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 10000;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 2) {
                (s as any).nichChoreDesc = 'You start by separating the laundry by color. While the washing machine washes the dark and then the light clothes you wash the delicates by hand. Whenever the washing washine is done you place its load in the dryer. Everything that comes from the dryer you iron.';
                ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = 'nichChoreResult = max (0, nichChoreState[nichChoreID] - 20)';
                ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 10000;
              } else {
                (s as any).nichChoreDesc = 'You start by separating the laundry by color and fabric. One after one you have the washing machine wash the dark cotton, white cotton, dark cloth and light cloth. Meanwhile you wash the delicates by hand. Whenever the washing washine is done you place its load in the dryer. Everything that come from the dryer you iron, making sure you don\'t miss a single crease.';
                ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'In the end the clothes smell great and are completely free of wrinkley. Nicholas surely will be pleased.\' & nichChoreModLaundry2 += 1 & nichChoreResult = max (0, nichChoreState[nichChoreID] - 30)';
                ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
                ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = 'nichChoreResult = max (0, nichChoreState[nichChoreID] - 30)';
                ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 10000;
              }
            }
          } else {
            if (((s as any).nichChoreID ?? 0) === 5) {
              if (String((s as any).locArgs?.[1] ?? '') === 1) {
                (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
                ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
                ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                  ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                  ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                }
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 2) {
                  (s as any).nichChoreDesc = 'You carefully clean the room, making sure you place every possession of Tanya at the right place so she can easily find it again.';
                }
              }
            } else {
              if (((s as any).nichChoreID ?? 0) === 6) {
                if (String((s as any).locArgs?.[1] ?? '') === 1) {
                  (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
                  ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
                  ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                    ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                    ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                  }
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 2) {
                    (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the toilet, the sink and the floor. You also make sure that the towels are neatly folded.';
                  } else {
                    (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the toilet, the bathtub, the shower, the sink and the floor. You also apply a special perfume to improve the smell and fold some of the towels into hearts and swans.';
                    ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'You managed to create a perfect ambiente for every family member who wants to use this room.\' & nichChoreResult = -1';
                    ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
                    ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The effect is not as stunning as you hoped it to be but the room is at least perfectly clean.\'';
                    ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 100;
                  }
                }
              } else {
                if (((s as any).nichChoreID ?? 0) === 7) {
                  if (String((s as any).locArgs?.[1] ?? '') === 1) {
                    (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
                    ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
                    ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                      ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                      ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                    }
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 2) {
                      (s as any).nichChoreDesc = 'You carefully clean the room, making sure you place every possession of Nicholas at the right place so he can easily find it again.';
                    }
                  }
                } else {
                  if (((s as any).nichChoreID ?? 0) === 8) {
                    if (String((s as any).locArgs?.[1] ?? '') === 1) {
                      (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
                      ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
                      ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                      }
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 2) {
                        (s as any).nichChoreDesc = 'You carefully clean the room, making sure you catch every tiny bit of dust.';
                      } else {
                        (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the floor and the various pieces of furniture.';
                        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'You managed to create a perfect ambience for every family member who wants to use this room.\' & nichChoreResult = -1';
                        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
                        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The effect is not as stunning as you hoped it to be but the room is at least perfectly clean.\'';
                        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 100;
                      }
                    }
                  } else {
                    if (((s as any).nichChoreID ?? 0) === 9) {
                      if (String((s as any).locArgs?.[1] ?? '') === 1) {
                        (s as any).nichChoreDesc = 'You jam all dirty dishes in the dishwasher at once and hastily clean up the stove and the floor.';
                        ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before and the dishes didn\'t get clean either.\' & nichChoreResult = nichChoreState[nichChoreID]';
                        ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                        }
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') === 2) {
                          (s as any).nichChoreDesc = 'You carefully clean the room, making sure you clean the silverware by hand and using the recommended cleaning agents to clean the stove and the floor.';
                        } else {
                          (s as any).nichChoreDesc = 'You carefully clean the room. In order to get the silverware sparkling you use a special silver polish and you also clean the whine glasses by hand to remove every tiny spot of imperfection.';
                          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The effect is very convincing. Nicholas will be pleased you paid extra attention to detail.\' & nichChoreResult = -1';
                          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = ((s as any).pcs_cleaning ?? 0);
                          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'The effect is not as stunning as you hoped it to be but the room and the dishes are at least perfectly clean.\'';
                          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 100;
                        }
                      }
                    } else {
                      if (((s as any).nichChoreID ?? 0) === 10) {
                        if (String((s as any).locArgs?.[1] ?? '') === 1) {
                          (s as any).nichChoreDesc = 'You clean the room as quickly as possible, cleaning every spot only once and using as few different cleaning agents as possible.';
                          ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that you didn\'t improve the condition of the room at all. It is still as dirty as before.\' & nichChoreResult = nichChoreState[nichChoreID]';
                          ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                            ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '*pl \'Once you are finished you realize that the room is now cleaner, but not perfectly clean.\' & nichChoreResult = nichChoreState[nichChoreID] - 10';
                            ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 30;
                          }
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') === 2) {
                            (s as any).nichChoreDesc = 'You carefully clean the room, making sure you catch every tiny bit of dust.';
                          } else {
                            (s as any).nichChoreDesc = 'You carefully clean the room, using the recommended cleaning agents for the floor and the various pieces of furniture.';
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
  ((s as any).nichChoreResultCode = (s as any).nichChoreResultCode ?? {})[0] = '';
  ((s as any).nichChoreResulChance = (s as any).nichChoreResulChance ?? {})[0] = 10000;
  (s as any).nichI = 0;
  while (true) {
    if (((s as any).nichRand ?? 0) <= ((s as any).nichChoreResulChance ?? 0)?.[String((s as any).nichI ?? 0)]) {
      scene.img(`${((s as any).nichTempPic ?? '')}`);
      scene.text(String((s as any).nichChoreDesc ?? ''));
    } else {
      (s as any).nichRand = ((s as any).nichRand ?? 0) - ((((s as any).nichChoreResulChance ?? 0)?.[String((s as any).nichI ?? 0)] ?? 0));
      (s as any).nichI = ((s as any).nichI ?? 0) + (1);
      break;
    }
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichtTimeQuick ?? 0));
      qspCall(s, 'exp_gain', 'cleaning', 0);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeNormal ?? 0));
        qspCall(s, 'exp_gain', 'cleaning', 0);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeDiligent ?? 0));
        qspCall(s, 'exp_gain', 'cleaning', 0);
      }
    }
    ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[String((s as any).nichChoreID ?? 0)] = ((s as any).nichChoreResult ?? 0);
    qspCall(s, 'stat', '');
    (s as any).nichChoreResult = undefined;
    (s as any).nichChoreDesc = undefined;
    (s as any).nichChoreResultCode = undefined;
    (s as any).nichChoreResulChance = undefined;
    if ((!((s as any).nichChoreMode ?? 0))) {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
      ]);
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterCleanApartmentActions(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterCleanApartment(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === ''  ||  String((s as any).locArgs?.[1] ?? '') === 'start') {
    (s as any).nichChoreMode = 1;
    if (((s as any).nichChoreCurrent ?? 0) === '') {
      (s as any).nichChoreCurrent = 'hallway';
    }
    qspGoto(s, 'nichChore', 'inspect', ((s as any).nichChoreCurrent ?? ''), '1');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'end') {
      (s as any).nichChoreMode = undefined;
      (s as any).nichChoreCurrent = undefined;
      dynamicGoto(s, 'prevLoc');
    }
  }
  scene.build();
}

function enterCleanApartmentActions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 0  &&  String((s as any).locArgs?.[1] ?? '') === 1) {
    scene.actions([
      { label: 'Clean again', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'inspect', ((st as any).nichChoreCurrent ?? ''), '1');
  } },
    ]);
  }
  if ((!((s as any).nichChoreID ?? 0))) {
    scene.actions([
      { label: 'Continue to guest cloakroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'bathGuest';
    qspGoto(st, 'nichChore', 'inspect', 'bathGuest', '1');
  } },
    ]);
  } else {
    if (((s as any).nichChoreID ?? 0) === 1) {
      scene.actions([
        { label: 'Continue to your bedroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'servant';
    qspGoto(st, 'nichChore', 'inspect', 'servant', '1');
  } },
      ]);
    } else {
      if (((s as any).nichChoreID ?? 0) === 2) {
        scene.actions([
          { label: 'Continue to your bathroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'bathServant';
    qspGoto(st, 'nichChore', 'inspect', 'bathServant', '1');
  } },
        ]);
      } else {
        if (((s as any).nichChoreID ?? 0) === 3) {
          scene.actions([
            { label: 'Check laundry', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'laundry';
    qspGoto(st, 'nichChore', 'inspect', 'laundry', '1');
  } },
          ]);
        } else {
          if (((s as any).nichChoreID ?? 0) === 4) {
            scene.actions([
              { label: 'Continue to Tanyas bedroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'tanya';
    qspGoto(st, 'nichChore', 'inspect', 'tanya', '1');
  } },
            ]);
          } else {
            if (((s as any).nichChoreID ?? 0) === 5) {
              scene.actions([
                { label: 'Continue to the master bathroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'masterbath';
    qspGoto(st, 'nichChore', 'inspect', 'masterbath', '1');
  } },
              ]);
            } else {
              if (((s as any).nichChoreID ?? 0) === 6) {
                scene.actions([
                  { label: 'Continue to Nicholas\' bedroom', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'master';
    qspGoto(st, 'nichChore', 'inspect', 'master', '1');
  } },
                ]);
              } else {
                if (((s as any).nichChoreID ?? 0) === 7) {
                  scene.actions([
                    { label: 'Continue to the living room', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'living';
    qspGoto(st, 'nichChore', 'inspect', 'living', '1');
  } },
                  ]);
                } else {
                  if (((s as any).nichChoreID ?? 0) === 8) {
                    scene.actions([
                      { label: 'Continue to the kitchen', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'kitchen';
    qspGoto(st, 'nichChore', 'inspect', 'kitchen', '1');
  } },
                    ]);
                  } else {
                    if (((s as any).nichChoreID ?? 0) === 9) {
                      scene.actions([
                        { label: 'Continue to the study', handler: (st: GameState) => {
    (st as any).nichChoreCurrent = 'study';
    qspGoto(st, 'nichChore', 'inspect', 'study', '1');
  } },
                      ]);
                    } else {
                      if (((s as any).nichChoreID ?? 0) === 10) {
                        scene.actions([
                          { label: 'Finish', handler: (st: GameState) => {
    qspGoto(st, 'nichChore', 'cleanApartment', 'end');
  } },
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
    }
  }
  if (((s as any).nichChoreID ?? 0) < 10) {
    scene.actions([
      { label: 'Pause cleaning', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'inspect':
      enterInspect(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'cleanApartment':
      enterCleanApartment(s, scene);
      break;
    case 'cleanApartmentActions':
      enterCleanApartmentActions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichChore: LocationDef = {
  name: 'nichChore',
  title: 'When you start cleaning Tanya approaches you from behind and',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
