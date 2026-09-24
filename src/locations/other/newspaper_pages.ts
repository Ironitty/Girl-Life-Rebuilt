import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddEventPages(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFillArrays(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddAdvertPages(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAddEventPages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) >= 276  &&  ((s as any).daystart ?? 0) < 290) {
    // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'cheerleading_tryouts'"
  }
  if (((s as any).daystart ?? 0) >= 324  &&  ((s as any).daystart ?? 0) < 373) {
    if (((s as any).daystart ?? 0) < 338) {
      // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'boris_arrested'"
    } else {
      if (((s as any).daystart ?? 0) < 345) {
        // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_0'"
      } else {
        if (((s as any).daystart ?? 0) < 352) {
          // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_1'"
        } else {
          if (((s as any).daystart ?? 0) < 359) {
            // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_2'"
          } else {
            if (((s as any).daystart ?? 0) < 366) {
              // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_3'"
            } else {
              // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'starlets_report_4'"
            }
          }
        }
      }
    }
  }
  if (((s as any).balletqw ?? 0)?.['letter'] === 1) {
    if (((s as any).daystart ?? 0) >= 196  &&  ((s as any).daystart ?? 0) < 203) {
      // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'ballet_pass'"
    } else {
      if (((s as any).daystart ?? 0) >= 354  &&  ((s as any).daystart ?? 0) < 361) {
        // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'ballet_first'"
      }
    }
  }
  if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).NewspaperVars ?? 0)?.['gad_missing_day'] < ((s as any).daystart ?? 0)) {
    if ((Math.floor(Math.random() * 10) + 0) < 4) {
      (s as any).randname = qspFunc(s, 'npcrnamefile', 'rusMale');
    } else {
      (s as any).randname = qspFunc(s, 'npcrnamefile', 'rusFemale');
    }
    // TODO-QSP: $randname += ' ' + $func('npcrnamefile', 'rusSur')
    ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_name'] = ((s as any).randname ?? 0);
    ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_age'] = (Math.floor(Math.random() * 61) + 9);
    if (((s as any).NewspaperVars ?? 0)?.['gad_missing_counter'] === 0) {
      ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_counter'] = (Math.floor(Math.random() * 5) + 12);
      ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_counter'] = ((s as any).daystart ?? 0) / 35;
    }
    ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_counter'] = ((s as any).NewspaperVars['gad_missing_counter'] ?? 0) + (1);
    ((s as any).NewspaperVars = (s as any).NewspaperVars ?? {})['gad_missing_day'] = ((s as any).daystart ?? 0) + 15 + (Math.floor(Math.random() * ((((s as any).NewspaperVars ?? {})?.['gad_missing_counter'] ?? 0) / 2 - 0 + 1)) + (0));
    // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'gad_missing'"
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddAdvertPages(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $np_pages[] = "gs 'newspaper_pages', 'advert_<<rand(0, 7)>>'"
  // TODO-QSP: end
  scene.build();
}

function enterFillArrays(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).np_front_pages ?? {}).length === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddGenericFrontpage(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: :fill_newspaper_loop
  if (Object.keys((s as any).np_pages ?? {}).length < 3) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddGenericPage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: jump 'fill_newspaper_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddGenericFrontpage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $np_front_pages[] = "gs 'newspaper_pages', 'generic_front_<<rand(0, 3)>>' "
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddGenericPage(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_newspaper_i = 0;
  // TODO-QSP: :add_generic_page_loop
  (s as any).temp_page_chosen = 'gs \'newspaper_pages\', \'generic_' + (Math.floor(Math.random() * 22) + 0) + '\' ';
  (s as any).temp_newspaper_i = ((s as any).temp_newspaper_i ?? 0) + (1);
  if ((Array.isArray((s as any).np_pages) ? ((s as any).np_pages as any[]).indexOf(((s as any).temp_page_chosen ?? 0)) : -1) >= 0  &&  ((s as any).temp_newspaper_i ?? 0) < 100) {
    // TODO-QSP: jump 'add_generic_page_loop'
  }
  // TODO-QSP: $np_pages[] = $temp_page_chosen
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGenericFront_0(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Another Dead Body At The M11</b></center>');
  scene.img('images/shared/newspaper/crimescene1.jpg');
  scene.text('Last night, the body of a young woman was found once again not far from the M11 highway to St. Petersburg.');
  scene.text('According to as yet unconfirmed witness statements, the body showed clear signs of having been tied up.');
  scene.text('Chief investigator Pyotr Katalkin did not want to give any further details about the victim or the case at this stage of the investigation.');
  scene.text('He called rumors circulating in connection with the case that there is a secret SM brothel in Pavlovsk where young women are tortured for money “absurd.”');
  scene.text('He said he had personally inspected a hotel on the M11, not far from Pavlovsk, which had been mentioned repeatedly in this context in the past.');
  scene.text('“There is no suspicious activity there,” Captain Katalkin emphasized. Read more on page 5.');
  // TODO-QSP: end
  scene.build();
}

function enterGenericFront_1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>At School In The Morning, Selling Sex At Lunchtime?</b></center>');
  scene.img('images/shared/newspaper/prostitution1.jpg');
  scene.text('Our editorial office in Pavlovsk repeatedly receives complaints about young prostitutes who harass citizens, sometimes in broad daylight.');
  scene.text('“We are aware of these rumors,” says Pjotr Katalkin, the officer in charge at the Pavlovsk police station, in response to an inquiry from this newspaper.');
  scene.text('"My team is investigating the matter with determination, because there is no place for such behavior in our city, but", Katalkin says,');
  scene.text('“so far, our investigations have not yielded any results.” These are probably isolated cases or misunderstandings. Read more on page 7.');
  // TODO-QSP: end
  scene.build();
}

function enterGenericFront_2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Abuse In The Highway Hotel?</b></center>');
  scene.img('images/shared/newspaper/highwayhotel1.jpg');
  scene.text('Once again, our editorial team has received reports from young women who claim to have been plied with alcohol and abused at the Highway Hotel on the outskirts of Pavlovsk.');
  scene.text('Leonid Nosov, co-owner of the hotel, dismissed the allegations as \'unfounded\'.');
  scene.text('"Our bar is very popular, and yes, it does happen that people, including young women, get so drunk that they can\'t find their way home."');
  scene.text('"We then call them a taxi or offer them a room for the night, in exceptional cases even free of charge."');
  scene.text('"It is outrageous that our jealous competitors now want to use this generosity against us! We have called in the police to put an end to these slanders. Ask Captain Katalkin!" More on this on page 9.');
  // TODO-QSP: end
  scene.build();
}

function enterGenericFront_3(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 50) + 0))) {
    scene.text('<center><b>Torpedo deadlock</b></center>');
  } else {
    scene.text('<center><b>Once Upon A Time There Was A Traffic Jam</b></center>');
  }
  scene.img('images/shared/newspaper/submarine.jpg');
  scene.text('The transport of a decommissioned nuclear submarine led to unexpectedly lengthy traffic disruptions in the city.');
  scene.text('The "Minsk" was, as planned, on its way to the Naval Museum. However, during transport, the driver suddenly attempted to turn his special truck around.');
  scene.text('Police spokesman Nevsky: “The driver swears blind that a winged little fairy appeared to him and warned him that the wrong submarine had been accidentally taken out of the water."');
  scene.text('"She convinced him to turn around and check.” The driver was admitted to the psychiatric ward of the Menshikov Clinic for further observation.');
  scene.text('The traffic jam finally cleared in the late morning hours. (Read more on page 4)');
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_0(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Mysterious lights over Pushkin</b></center>');
  scene.text('Last night saw several reports of floating lights over Pushkin lake. Authorities have dismissed eyewitness reports and photographs as light bouncing off the water into low mist.');
  scene.text('Read more on page 4.');
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Missing cosmonaut found living in cave in Vladivostok</b></center>');
  scene.text('Former cosmonaut Valentin Vitalyevich Lebedev (82), who was reported missing 3 weeks ago after he failed to turn up for a state function celebrating the 25th anniversary of the Scientific Geoinformation Center of the Russian Academy of Science (of which he is the director), was found in a cave with only basic amenities and a small supply of food.');
  scene.text('When asked why he was there, he simply said he\'d grown sick of fancy dinners and red tape. He plans to return to his home and duties next week.');
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>A Spooky Symphony Echoes Through Pavlovsk</center>"
  // TODO-QSP: "In the quaint little Russian village of Pavlovsk, residents are left bewildered and intrigued by an...
  // TODO-QSP: "For weeks now, this spectral serenade has been a source of curiosity for the townsfolk who can't se...
  // TODO-QSP: "Could it be the work of a local prankster, or perhaps something more supernatural? The mystery deep...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Police Investigate String of Thefts</center>"
  // TODO-QSP: "In a shocking turn of events in Pavlovsk, residents have been left reeling as a series of high-prof...
  // TODO-QSP: "Authorities are currently investigating the matter, with little to no leads so far. Is this the wor...
  // TODO-QSP: "Only time will tell as Pavlovsk remains on edge in anticipation of a resolution to this confounding...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Ghostly Whispers of the Old Library</center>"
  // TODO-QSP: "A chilling tale has emerged from Pavlovsk's library, as patrons claim to hear ghostly whispers and ...
  // TODO-QSP: "The source of this spectral activity remains unknown, with speculation ranging from a lingering spi...
  // TODO-QSP: "Is there truth behind these eerie tales or is it merely the product of an overactive imagination?"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Celebrates Annual Cultural Festival</center>"
  // TODO-QSP: "This weekend, Pavlovsk comes alive as it hosts its annual cultural festival showcasing traditional ...
  // TODO-QSP: "The event draws in visitors from all corners of the globe who come to revel in the rich tapestry th...
  // TODO-QSP: "Don't miss out on this captivating celebration!"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_6(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Rumours Swirl Around Pavlovsk Celebrity Sighting</center>"
  // TODO-QSP: "Was it just a figment of an overactive imagination or could it be the real deal? Residents in Pavlo...
  // TODO-QSP: "With no confirmation from his reps and no sightings since, only time will tell if this was a mere h...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_7(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Police Crack Down on Street Crime</center>"
  // TODO-QSP: "In a bold move to restore peace and order, Pavlovsk police have launched an intensified crackdown o...
  // TODO-QSP: "The operation has led to several high-profile arrests and the recovery of stolen goods, leaving res...
  // TODO-QSP: "However, some critics question whether these measures are enough or if more action is needed to tru...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_8(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Secret Life of Pavlovsk's Haunted Mansion</center>"
  // TODO-QSP: "On the outskirts of Pavlovsk is the ruined factory of Severnye Proizvodstvennye Tekstilniye Zavody ...
  // TODO-QSP: "For years, rumours have circulated about its paranormal inhabitants and haunting history. The site ...
  // TODO-QSP: "Will we ever uncover the truth or remain forever in the dark?"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_9(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pushkin Hosts Annual Art Auction</center>"
  // TODO-QSP: "Get ready to bid on your heart's desire as Pushkin hosts its annual art auction. Featuring works fr...
  // TODO-QSP: "With pieces ranging in price and style, there's something for everyone at this exciting event."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_10(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Mayor Embroiled in Scandal</center>"
  // TODO-QSP: "The mayor of Pavlovsk is under fire as allegations surface regarding corruption and mismanagement w...
  // TODO-QSP: "With a growing chorus of discontent, it remains to be seen if the embattled leader can weather this...
  // TODO-QSP: "Stay tuned for updates on this developing story!"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_11(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Unveils New Sculpture Garden</center>"
  // TODO-QSP: "Step into a world of wonder as Pavlovsk unveils its stunning new sculpture garden."
  // TODO-QSP: "Featuring works from renowned artists, this serene oasis offers visitors a chance to appreciate the...
  // TODO-QSP: "Be sure to visit before the leaves change color!"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_12(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Pavlovsk Police Arrest Notorious Cat Burglar</center>"
  // TODO-QSP: "In a shocking turn of events, Pavlovsk police have apprehended the notorious cat burglar who has be...
  // TODO-QSP: "The arrest comes as relief to residents, but many are left wondering if this is the end or just the...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_13(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Sweet Treats, Bitter Secrets</center>"
  // TODO-QSP: "Local baker, Dimitri Volkov, is under investigation after threatening to expose compromising photog...
  // TODO-QSP: "The investigation is ongoing, with concerns raised about potential extortion and a widening web of ...
  // TODO-QSP: "The motive remains unclear, but whispers suggest a dispute over a lucrative property deal."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_14(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Silence Speaks Volumes</center>"
  // TODO-QSP: "Residents near the abandoned Pavlovsk Mill report hearing disembodied voices and unsettling noises ...
  // TODO-QSP: "Local historian, Anya Morozova, believes the mill holds a tragic history connected to a family mass...
  // TODO-QSP: "Experts are divided - is it a genuine haunting or simply the wind playing tricks on the aging stone...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_15(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>A Star Stumbles Upon Small-Town Charm</center>"
  // TODO-QSP: "Pop sensation, Lyubov “Leya” Petrova, was spotted enjoying a quiet weekend in Pavlovsk, staying at ...
  // TODO-QSP: "Rumours are swirling about a potential romance with the Pushkin artist, Ivan Sokolov, sparking inte...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_16(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Lost Pages, Lost Trust</center>"
  // TODO-QSP: "The rare first edition of Tolstoy's War and Peace vanished from the Pavlovsk Regional Museum, baffl...
  // TODO-QSP: "Security footage is inconclusive, and suspicion has fallen on a disgruntled former curator, Victor ...
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_17(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Art Heist - Update</center>"
  // TODO-QSP: "Police have announced a breakthrough in the art heist case, recovering a single, cryptic page from ...
  // TODO-QSP: "The page contains a coded message, hinting at a larger conspiracy."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_18(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>A Phantom Display</center>"
  // TODO-QSP: "Witnesses report seeing strange, pulsating lights deep within the Gadukino Forest. Some believe it'...
  // TODO-QSP: "Video footage is being analysed, but the source remains elusive."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_19(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Lights, Camera, Pavlovsk!</center>"
  // TODO-QSP: "The inaugural Pavlovsk Film Festival showcased independent Russian cinema, attracting a diverse aud...
  // TODO-QSP: "The festival culminated in a screening of a short film directed by Ivan Sokolov, adding a local ele...
  // TODO-QSP: "Showings are to be held at the Pavlovsk Park Cinema."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_20(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>A Local's Bold Move</center>"
  // TODO-QSP: "Rumours are spreading that Lyubov “Leya” Petrova has been leaving anonymous bouquets of wildflowers...
  // TODO-QSP: "Is this a genuine connection or a publicity stunt?"
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_21(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Ancient Voices</center>"
  // TODO-QSP: "Researchers studying the ancient standing stones outside Pavlovsk are reporting experiencing unsett...
  // TODO-QSP: "Preliminary investigations suggest a possible link to geomagnetic activity."
  // TODO-QSP: end
  scene.build();
}

function enterGeneric_(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center></center>"
  // TODO-QSP: ""
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'city_experimental_trials_events', 'newspaper_ad');
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Maid Wanted!</b></center>');
  scene.img('images/shared/newspaper/hotelmaidoffer.jpg');
  scene.text('<i>You stumble across an ad in the job listings. You find the picture funny and a little bit sexy.</i>');
  scene.text('<i>Maybe it\'s something for you? There\'s an address listed at the market in Pavlovsk. Maybe you should just stop by and ask?</i>');
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] === 0) {
    ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Guitar Lessons at the Pavlovsk Community Center - Unleash Your Inner Maestro!</center>"
  // TODO-QSP: "Ever dreamed of strumming your way to stardom or composing a melody that touches hearts?"
  // TODO-QSP: "Now's your chance to bring those dreams to life with our beginner-friendly guitar lessons, availabl...
  // TODO-QSP: "Whether you're looking for a creative outlet or simply want to learn an exciting new skill, our exp...
  // TODO-QSP: "Sign up today and unleash your inner maestro!"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Chess Club at the Pavlovsk Community Center - Master the Art of Strategy!</center>"
  // TODO-QSP: "Sharpen your mind and flex those strategic muscles as you join fellow chess enthusiasts in our week...
  // TODO-QSP: "Whether you're a novice or seasoned player, there's something for everyone at our club."
  // TODO-QSP: "Meet new friends, hone your skills, and engage in thrilling games of strategy that will keep you on...
  // TODO-QSP: "Register today to secure your spot!"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Volleyball League at the Pavlovsk Community Center</center>"
  // TODO-QSP: "Get ready for a season filled with adrenaline, camaraderie, and countless memories as you take part...
  // TODO-QSP: "Whether you're looking to refine your skills or simply enjoy some friendly competition, there's a p...
  // TODO-QSP: "Join us today and let the games begin!"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Running Group at the Pavlovsk Community Center - Embrace Fitness, Empower Yourself!</center...
  // TODO-QSP: "Lace up those sneakers and join our supportive running group at the Pavlovsk Community Center."
  // TODO-QSP: "Whether you're just starting your fitness journey or are an experienced runner looking to push your...
  // TODO-QSP: "From 5K fun runs to more ambitious marathon training, there's something for every pace and skill le...
  // TODO-QSP: "Register today and embrace the joy of running!"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_6(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Amateur Dancing Classes at the Pavlovsk Community Center - Move to the Beat of Life!</cente...
  // TODO-QSP: "Discover a world of rhythm and expression as you join our beginner-friendly dancing classes at the ...
  // TODO-QSP: "Whether you're looking to learn ballroom, salsa, or hip hop, we offer a variety of styles for all a...
  // TODO-QSP: "Come dance with us and let the music move your soul!"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_7(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Sewing Club at the Pavlovsk Community Center - Stitch Together More Than Fabric!</center>"
  // TODO-QSP: "Embark on a creative journey as you learn, share and grow with fellow sewing enthusiasts in our fri...
  // TODO-QSP: "Whether you're an aspiring fashion designer or simply enjoy crafting your own unique creations, the...
  // TODO-QSP: "Join us today to stitch together more than just fabric - create lasting connections and a sense of ...
  // TODO-QSP: "Together More Than Fabric"
  // TODO-QSP: end
  scene.build();
}

function enterAdvert_(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center></center>"
  // TODO-QSP: ""
  // TODO-QSP: end
  scene.build();
}

function enterGadMissing(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>More missing people in Gadukino</center>');
  // TODO-QSP: dynamic text: <<$NewspaperVars[''gad_missing_name'']>>, <<NewspaperVars[''gad_missing_age'']>>...
  scene.text(`${(((s as any).NewspaperVars ?? 0)?.['gad_missing_name'] ?? '')}, ${(((s as any).NewspaperVars ?? 0)?.['gad_missing_age'] ?? '')}, has been reported missing in Gadukino. Last seen four days ago while foraging in the forest, they are the ${(((s as any).NewspaperVars ?? 0)?.['gad_missing_counter'] ?? '')} person who has disappeared from the village in recent months and authorities are at a loss in trying to locate them.`);
  // TODO-QSP: end
  scene.build();
}

function enterCheerleadingTryouts(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Cheerleading Try-outs: A New Era Dawns at Pavlovsk School</center>"
  // TODO-QSP: "The stage is set for an exciting display of spirit and athleticism as the prestigious Pavlovsk High...
  // TODO-QSP: "As students from across the school prepare to showcase their skills, a new wave of enthusiasm sweep...
  // TODO-QSP: end
  scene.build();
}

function enterBorisArrested(s: GameState, scene: SceneBuilder): void {
  scene.text('<center>Mayoral Candidate Disgraced</center>');
  scene.text('In a turn of events that has shocked many, mayoral candidate Boris Barlovsky has been arrested following an extensive investigation carried out by FSB agents. The once popular Pavlovsk businessman (57) was charged with bribery, fraud and embezzlement among a string of other offences.');
  scene.text('Read the exclusive story on page 3.');
  // TODO-QSP: end
  scene.build();
}

function enterStarletsReport_0(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Dance of Shadows in Pavlovsk</center>"
  // TODO-QSP: "Beneath the graceful twirls and luminous smiles of the enchanting dance troupe, known only as 'Star...
  // TODO-QSP: "The small Russian town of Pavlovsk is home to this seemingly innocent group that has captivated aud...
  // TODO-QSP: "Yet, delving deeper into the world of Starlets reveals a pattern of questionable connections and su...
  // TODO-QSP: "This five-part investigation will unravel the enigmatic tapestry that is the Starlets, their ascent...
  // TODO-QSP: "From their mysterious origins and meteoric rise to stardom, through a series of curious events and ...
  // TODO-QSP: "Join us as we sift through the layers of deception surrounding Pavlovsk's most captivating dance gr...
  // TODO-QSP: end
  scene.build();
}

function enterStarletsReport_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Price of Performance</center>"
  // TODO-QSP: "As suspicions about their suspicious ties grow, the financial dealings surrounding the enigmatic St...
  // TODO-QSP: "Anonymous sources claim that generous funding for the group has been provided by influential figure...
  // TODO-QSP: "Investigations into this tangled web of money and power are ongoing, as residents grow increasingly...
  // TODO-QSP: end
  scene.build();
}

function enterStarletsReport_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Power Brokers</center>"
  // TODO-QSP: "As the investigation unfolds, it becomes apparent that several influential local politicians have b...
  // TODO-QSP: "While their presence may initially seem innocuous, questions are being raised about the nature of t...
  // TODO-QSP: "The dance floor serves as a stage for far more than just performance - it could be a battleground f...
  // TODO-QSP: end
  scene.build();
}

function enterStarletsReport_3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>A Familiar Face</center>"
  // TODO-QSP: "As the investigation continues, reports surface that one of these powerful figures may have had mor...
  // TODO-QSP: "Allegations point to the relationship between an influential politician and the troupe's leader, ra...
  // TODO-QSP: "This revelation has sent ripples through Pavlovsk as residents grapple with the idea that their ele...
  // TODO-QSP: end
  scene.build();
}

function enterStarletsReport_4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>The Vanishing Stars</center>"
  // TODO-QSP: "As suspicions escalate and questions mount, two members of the Starlets have disappeared without a ...
  // TODO-QSP: "Their departures coincide with an increase in security measures surrounding their rehearsal space."
  // TODO-QSP: "While the official explanation is that the dancers are taking a temporary hiatus to pursue individu...
  // TODO-QSP: end
  scene.build();
}

function enterBalletPass(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center>Ballerina <<$pcs_firstname>> <<$pcs_lastname>> aiming for stardom?</cent...
  scene.text(`<center>Ballerina ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} aiming for stardom?</center>`);
  // TODO-QSP: dynamic text: Pushkin Ballet school has announced this years intake with Pavlovks''s own <<$pc...
  scene.text(`Pushkin Ballet school has announced this years intake with Pavlovks's own ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} being selected as one of the regions up and coming ballerinas.`);
  scene.text('Read the full article on page 9.');
  // TODO-QSP: end
  scene.build();
}

function enterBalletFirst(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><<$pcs_firstname>> <<$pcs_lastname>> first performance</center>
  scene.text(`<center>${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} first performance</center>`);
  // TODO-QSP: dynamic text: Pushkin Ballet school has announced this years performance of Nutcracker at the ...
  scene.text(`Pushkin Ballet school has announced this years performance of Nutcracker at the prestigious Mariinksy Theatre in St Petersburg. Our local ballerina ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} performing as part of the shows Coryphée.`);
  scene.text('Read the editorial on page 5.');
  // TODO-QSP: end
  scene.build();
}

function enterBalletAfterNoSveta(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Two Weeks to Shine: A Life-Changing Opportunity at Pushkin Ballet Academy</center>"
  // TODO-QSP: "Five lucky dancers from Pavlovsk, three from Pushkin, and two more from surrounding areas have been...
  // TODO-QSP: "This select group of young ballerinas will undergo rigorous training in preparation for a demanding...
  // TODO-QSP: "With an emphasis on technique, artistry, and stage presence, this intensive program promises to cha...
  // TODO-QSP: "Join us as we follow these promising dancers on their journey and witness the passion, determinatio...
  // TODO-QSP: end
  scene.build();
}

function enterBalletAfterWithSveta(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "<center>Surprise Selection Svetlana Lebedev at Pushkin Ballet Academy</center>"
  // TODO-QSP: "When 17-year-old <<$pcs_firstname>> <<$pcs_lastname>> from Pavlovsk was selected for the year's pre...
  // TODO-QSP: "With dreams of escaping poverty and following her passion for dance, Sveta faced an uphill battle t...
  // TODO-QSP: "But with grit, determination, and the unwavering support of her fellow dancers and teachers, this r...
  // TODO-QSP: "As she prepares for an intense two-week course and a make or break test for selection into the Vaga...
  // TODO-QSP: "Follow us on her incredible journey from humble beginnings to potentially becoming one of Russia's ...
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'add_event_pages':
      enterAddEventPages(s, scene);
      break;
    case 'add_advert_pages':
      enterAddAdvertPages(s, scene);
      break;
    case 'fill_arrays':
      enterFillArrays(s, scene);
      break;
    case 'add_generic_frontpage':
      enterAddGenericFrontpage(s, scene);
      break;
    case 'add_generic_page':
      enterAddGenericPage(s, scene);
      break;
    case 'generic_front_0':
      enterGenericFront_0(s, scene);
      break;
    case 'generic_front_1':
      enterGenericFront_1(s, scene);
      break;
    case 'generic_front_2':
      enterGenericFront_2(s, scene);
      break;
    case 'generic_front_3':
      enterGenericFront_3(s, scene);
      break;
    case 'generic_0':
      enterGeneric_0(s, scene);
      break;
    case 'generic_1':
      enterGeneric_1(s, scene);
      break;
    case 'generic_2':
      enterGeneric_2(s, scene);
      break;
    case 'generic_3':
      enterGeneric_3(s, scene);
      break;
    case 'generic_4':
      enterGeneric_4(s, scene);
      break;
    case 'generic_5':
      enterGeneric_5(s, scene);
      break;
    case 'generic_6':
      enterGeneric_6(s, scene);
      break;
    case 'generic_7':
      enterGeneric_7(s, scene);
      break;
    case 'generic_8':
      enterGeneric_8(s, scene);
      break;
    case 'generic_9':
      enterGeneric_9(s, scene);
      break;
    case 'generic_10':
      enterGeneric_10(s, scene);
      break;
    case 'generic_11':
      enterGeneric_11(s, scene);
      break;
    case 'generic_12':
      enterGeneric_12(s, scene);
      break;
    case 'generic_13':
      enterGeneric_13(s, scene);
      break;
    case 'generic_14':
      enterGeneric_14(s, scene);
      break;
    case 'generic_15':
      enterGeneric_15(s, scene);
      break;
    case 'generic_16':
      enterGeneric_16(s, scene);
      break;
    case 'generic_17':
      enterGeneric_17(s, scene);
      break;
    case 'generic_18':
      enterGeneric_18(s, scene);
      break;
    case 'generic_19':
      enterGeneric_19(s, scene);
      break;
    case 'generic_20':
      enterGeneric_20(s, scene);
      break;
    case 'generic_21':
      enterGeneric_21(s, scene);
      break;
    case 'generic_':
      enterGeneric_(s, scene);
      break;
    case 'advert_0':
      enterAdvert_0(s, scene);
      break;
    case 'advert_1':
      enterAdvert_1(s, scene);
      break;
    case 'advert_2':
      enterAdvert_2(s, scene);
      break;
    case 'advert_3':
      enterAdvert_3(s, scene);
      break;
    case 'advert_4':
      enterAdvert_4(s, scene);
      break;
    case 'advert_5':
      enterAdvert_5(s, scene);
      break;
    case 'advert_6':
      enterAdvert_6(s, scene);
      break;
    case 'advert_7':
      enterAdvert_7(s, scene);
      break;
    case 'advert_':
      enterAdvert_(s, scene);
      break;
    case 'gad_missing':
      enterGadMissing(s, scene);
      break;
    case 'cheerleading_tryouts':
      enterCheerleadingTryouts(s, scene);
      break;
    case 'boris_arrested':
      enterBorisArrested(s, scene);
      break;
    case 'starlets_report_0':
      enterStarletsReport_0(s, scene);
      break;
    case 'starlets_report_1':
      enterStarletsReport_1(s, scene);
      break;
    case 'starlets_report_2':
      enterStarletsReport_2(s, scene);
      break;
    case 'starlets_report_3':
      enterStarletsReport_3(s, scene);
      break;
    case 'starlets_report_4':
      enterStarletsReport_4(s, scene);
      break;
    case 'ballet_pass':
      enterBalletPass(s, scene);
      break;
    case 'ballet_first':
      enterBalletFirst(s, scene);
      break;
    case 'ballet_after_no_sveta':
      enterBalletAfterNoSveta(s, scene);
      break;
    case 'ballet_after_with_sveta':
      enterBalletAfterWithSveta(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const newspaper_pages: LocationDef = {
  name: 'newspaper_pages',
  title: '<center><b>Another Dead Body At The M11</b></center>',
  region: 'other',
  enter: enter,
};
