import { playMusic, stopMusic } from './audio';

interface MusicEntry {
  files: string[];
  volume: number;
}

const locationMusic: Record<string, MusicEntry> = {
  pav_commercial: { files: ['street2', 'street_leto'], volume: 0.3 },
  pav_residential: { files: ['street2', 'street_leto'], volume: 0.25 },
  pav_industrial: { files: ['street2', 'zima'], volume: 0.2 },
  pav_park: { files: ['park'], volume: 0.3 },
  pav_lake: { files: ['park'], volume: 0.2 },
  pav_church: { files: ['dozvon'], volume: 0.25 },
  pav_cafe: { files: ['cafe'], volume: 0.3 },
  pav_market: { files: ['street3', 'street4'], volume: 0.25 },
  pav_station: { files: ['komb', 'komb2'], volume: 0.3 },
  pav_hotel: { files: ['happyhome'], volume: 0.2 },
  pav_pharmacy: { files: ['mall'], volume: 0.15 },
  pav_factory: { files: ['street2', 'zima'], volume: 0.2 },
  pav_complex: { files: ['street2', 'street_leto'], volume: 0.2 },
  city_center: { files: ['metro1', 'metro2'], volume: 0.25 },
  city_metro: { files: ['metro1', 'metro2', 'metro3', 'metro4'], volume: 0.3 },
  city_club: { files: ['club', 'club_inside'], volume: 0.35 },
  city_mall: { files: ['mall'], volume: 0.2 },
  city_highway: { files: ['highway'], volume: 0.25 },
};

const nightOverrides: Record<string, string[]> = {
  pav_commercial: ['street_night', 'zima'],
  pav_residential: ['street_night', 'zima'],
  pav_industrial: ['street_night', 'zima'],
  pav_park: ['street_night'],
  pav_lake: ['street_night'],
  pav_market: ['street_night'],
  pav_station: ['street_night'],
  pav_complex: ['street_night', 'zima'],
  city_center: ['street_night', 'zima'],
  city_mall: ['street_night'],
};

let currentLoc = '';

export function updateLocationMusic(loc: string, hour: number, month: number, soundOn: boolean): void {
  if (!soundOn) {
    if (currentLoc !== 'off') {
      stopMusic();
      currentLoc = 'off';
    }
    return;
  }

  if (loc === currentLoc) return;
  currentLoc = loc;

  const isNight = hour < 6 || hour >= 22;
  const isWinter = month >= 11 || month <= 3;

  const entry = locationMusic[loc];
  if (!entry) {
    stopMusic();
    return;
  }

  let files = entry.files;
  if (isNight && nightOverrides[loc]) {
    files = nightOverrides[loc];
  }

  const file = files[Math.floor(Math.random() * files.length)];
  playMusic(file, true, entry.volume);
}

export function resetMusic(): void {
  stopMusic();
  currentLoc = '';
}
