import type { GameState, LocationDef } from '../core/types';
import { SceneBuilder } from '../core/scene';

function startEnter(s: GameState, scene: SceneBuilder): void {
  scene.mainText = 'You wake up in a small room in Pavlosk. The morning light filters through the window. Today is a new day.';
  scene.backimage = 'images/locations/pavlovsk/gorodok.jpg';
  scene.curActs = [
    { label: 'Go outside', goto: ['pav_street', ''] },
    { label: 'Check phone', handler: (st: GameState) => {
      st.scene.mainText = 'Your phone shows a few messages. Nothing urgent.';
      st.scene.curActs = [{ label: 'Put phone down', goto: ['start', ''] }];
    }},
  ];
}

function pavStreetEnter(s: GameState, scene: SceneBuilder): void {
  const hour = s.hour;
  let timeDesc = 'The street is quiet.';
  if (hour >= 7 && hour < 12) timeDesc = 'The street is busy with morning traffic. People are heading to work and school.';
  else if (hour >= 12 && hour < 17) timeDesc = 'The street is lively. Lunch crowds fill the cafes.';
  else if (hour >= 17 && hour < 22) timeDesc = 'The evening sun casts long shadows. People are heading home.';
  else timeDesc = 'The street is dark and quiet. Only a few streetlights are on.';

  scene.mainText = `You stand on the main street of Pavlosk. ${timeDesc}\n\nTo your left is the park. Ahead, you can see the cafe and the hotel.`;
  scene.backimage = 'images/locations/pavlovsk/gorodok.jpg';
  scene.curActs = [
    { label: 'Walk to the park', goto: ['pav_park', ''] },
    { label: 'Enter the cafe', goto: ['pav_cafe', ''] },
    { label: 'Go to the hotel', goto: ['pav_hotel', ''] },
    { label: 'Open Map', goto: ['map_view', 'pav_commercial'] },
    { label: 'Wait 15 minutes', handler: (st: GameState) => {
      st.minut += 15;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      pavStreetEnter(st);
    }},
  ];
}

function pavParkEnter(s: GameState, scene: SceneBuilder): void {
  scene.mainText = 'The park is peaceful. Trees line the paths, and a small fountain gurgles in the center. A few benches are scattered around.';
  scene.backimage = 'images/locations/pavlovsk/park/skver.jpg';
  scene.curActs = [
    { label: 'Sit on a bench (rest)', handler: (st: GameState) => {
      st.pcs_sleep = Math.min(100, st.pcs_sleep + 5);
      st.pcs_mood = Math.min(st.moodVars.max, st.pcs_mood + 3);
      st.minut += 30;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You sit on a bench and enjoy the quiet. You feel a bit more rested.';
      st.scene.curActs = [{ label: 'Get up', goto: ['pav_park', ''] }];
    }},
    { label: 'Walk around the park', handler: (st: GameState) => {
      st.pcs_energy = Math.max(0, st.pcs_energy - 5);
      st.pcs_mood = Math.min(st.moodVars.max, st.pcs_mood + 2);
      st.minut += 20;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You take a leisurely walk around the park. The fresh air does you good.';
      st.scene.curActs = [{ label: 'Continue', goto: ['pav_park', ''] }];
    }},
    { label: 'Leave the park', goto: ['pav_street', ''] },
  ];
}

function pavCafeEnter(s: GameState, scene: SceneBuilder): void {
  scene.mainText = 'The cafe is warm and cozy. The smell of fresh coffee fills the air. A few customers are seated at the tables, chatting quietly.';
  scene.backimage = 'images/locations/pavlovsk/gorodok.jpg';
  scene.curActs = [
    { label: 'Buy a coffee (50 rub)', handler: (st: GameState) => {
      st.pcs_energy = Math.min(100, st.pcs_energy + 10);
      st.pcs_mood = Math.min(st.moodVars.max, st.pcs_mood + 5);
      st.minut += 15;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You order a coffee and sit by the window. The warmth seeps into your bones.';
      st.scene.curActs = [
        { label: 'Stay a while (30 min)', handler: (st2: GameState) => {
          st2.pcs_sleep = Math.min(100, st2.pcs_sleep + 3);
          st2.minut += 30;
          if (st2.minut >= 60) { st2.minut -= 60; st2.hour++; }
          st2.totminut = st2.minut + st2.hour * 60 + st2.daystart * 1440;
          pavCafeEnter(st2);
        }},
        { label: 'Leave', goto: ['pav_street', ''] },
      ];
    }},
    { label: 'Just look around', handler: (st: GameState) => {
      st.minut += 5;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You browse the menu and people-watch for a moment.';
      st.scene.curActs = [
        { label: 'Buy a coffee (50 rub)', goto: ['pav_cafe', 'buy_coffee'] },
        { label: 'Leave', goto: ['pav_street', ''] },
      ];
    }},
    { label: 'Leave', goto: ['pav_street', ''] },
  ];
}

function pavHotelEnter(s: GameState, scene: SceneBuilder): void {
  scene.mainText = 'The hotel lobby is modest but clean. A receptionist sits behind the desk, reading a newspaper. The elevator hums softly in the corner.';
  scene.backimage = 'images/locations/pavlovsk/hotel/goteladmin.jpg';
  scene.curActs = [
    { label: 'Check in (room for the night)', handler: (st: GameState) => {
      st.minut += 10;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You check in and receive a key to room 204. The room is small but comfortable.';
      st.scene.curActs = [
        { label: 'Go to your room', goto: ['pav_hotel_room', ''] },
        { label: 'Back to lobby', goto: ['pav_hotel', ''] },
      ];
    }},
    { label: 'Ask about the area', handler: (st: GameState) => {
      st.minut += 5;
      if (st.minut >= 60) { st.minut -= 60; st.hour++; }
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = '"The park is nice for a walk," the receptionist says. "There\'s a cafe on the main street if you want something to eat. And the bus stop is right outside."';
      st.scene.curActs = [{ label: 'Thank them', goto: ['pav_hotel', ''] }];
    }},
    { label: 'Leave the hotel', goto: ['pav_street', ''] },
  ];
}

function pavHotelRoomEnter(s: GameState, scene: SceneBuilder): void {
  scene.mainText = 'Your room is small but tidy. A single bed, a desk, and a window overlooking the street. The bed looks comfortable enough.';
  scene.backimage = 'images/locations/pavlovsk/hotel/hotel.room.normal.jpg';
  scene.curActs = [
    { label: 'Sleep until morning', handler: (st: GameState) => {
      st.inSleep = 1;
      while (st.hour !== 7) {
        st.hour++;
        if (st.hour >= 24) { st.hour = 0; st.daystart++; }
      }
      st.minut = 0;
      st.inSleep = 0;
      st.pcs_sleep = Math.min(100, st.pcs_sleep + 40);
      st.pcs_energy = Math.min(100, st.pcs_energy + 30);
      st.totminut = st.minut + st.hour * 60 + st.daystart * 1440;
      st.scene.mainText = 'You wake up feeling refreshed. The morning light streams through the window.';
      st.scene.curActs = [
        { label: 'Leave the room', goto: ['pav_hotel', ''] },
        { label: 'Sleep more (1h)', handler: (st2: GameState) => {
          st2.hour++;
          if (st2.hour >= 24) { st2.hour = 0; st2.daystart++; }
          st2.pcs_sleep = Math.min(100, st2.pcs_sleep + 10);
          st2.totminut = st2.minut + st2.hour * 60 + st2.daystart * 1440;
          pavHotelRoomEnter(st2);
        }},
      ];
    }},
    { label: 'Leave the room', goto: ['pav_hotel', ''] },
  ];
}

export const locations: LocationDef[] = [
  { name: 'start', title: 'Your Room', enter: startEnter },
  { name: 'pav_street', title: 'Pavlosk Street', enter: pavStreetEnter },
  { name: 'pav_park', title: 'Pavlosk Park', enter: pavParkEnter },
  { name: 'pav_cafe', title: 'Cafe', enter: pavCafeEnter },
  { name: 'pav_hotel', title: 'Hotel', enter: pavHotelEnter },
  { name: 'pav_hotel_room', title: 'Hotel Room', enter: pavHotelRoomEnter },
];
