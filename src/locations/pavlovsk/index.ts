import { goto } from '../../core/location';
import { getTimeString } from '../../core/time';
import type { GameState, LocationDef } from '../../core/types';
import { SceneBuilder } from '../../core/scene';
import { pav_commercial as pavCommercial } from './pav_commercial';
import { pav_industrial as pavIndustrial } from './pav_industrial';
import { pav_cinema as pavCinema } from './pav_cinema';
import { pav_old_school as pavOldSchool } from './pav_old_school';
import { pav_factory as pavFactory } from './pav_factory';
import { pav_market as pavMarket } from './pav_market';
import { pav_residential as pavResidential } from './pav_residential';
import { pav_hotel as pavHotel } from './pav_hotel';
import { pav_complex as pavComplex } from './pav_complex';
import { pav_lake as pavLake } from './pav_lake';
import { pav_park as pavPark } from './pav_park';
import { pav_station as pavStation } from './pav_station';
import { pav_church as pavChurch } from './pav_church';
import { pav_pharmacy as pavPharmacy } from './pav_pharmacy';

function isNight(s: GameState): boolean {
  return s.hour < 6 || s.hour >= 20;
}

function isWinter(s: GameState): boolean {
  return s.month >= 11 || s.month <= 3;
}

function getGorodokImage(s: GameState): string {
  return isWinter(s) ? 'images/locations/pavlovsk/gorodokw.jpg' : 'images/locations/pavlovsk/gorodok.jpg';
}

function getPavresImage(s: GameState): string {
  if (isWinter(s)) return isNight(s) ? 'images/locations/pavlovsk/pavreswintern.jpg' : 'images/locations/pavlovsk/pavreswinter.jpg';
  return isNight(s) ? 'images/locations/pavlovsk/pavresn.jpg' : 'images/locations/pavlovsk/pavres.jpg';
}

function getSkverImage(_s: GameState): string {
  return 'images/locations/pavlovsk/park/skver.jpg';
}

function getLakeImage(s: GameState): string {
  const winter = isWinter(s);
  const night = isNight(s);
  if (winter) return night ? 'images/locations/pavlovsk/lake/lake.winter.night.jpg' : 'images/locations/pavlovsk/lake/lake.winter.jpg';
  if (s.month >= 6 && s.month <= 8) return night ? 'images/locations/pavlovsk/lake/lake.summer.night.jpg' : 'images/locations/pavlovsk/lake/lake.summer.jpg';
  if (s.month >= 9 && s.month <= 10) return night ? 'images/locations/pavlovsk/lake/lake.autumn.night.jpg' : 'images/locations/pavlovsk/lake/lake.autumn.jpg';
  return night ? 'images/locations/pavlovsk/lake/lake.spring.night.jpg' : 'images/locations/pavlovsk/lake/lake.spring.jpg';
}











function pavLaundromatEnter(s: GameState, scene: SceneBuilder): void {
  scene.backimage = 'images/system/image_needed.png';
  scene.mainText = 'The local laundromat, where you can wash your clothes.';
  scene.curActs = [
    { label: 'Leave', goto: ['pav_complex', ''] },
  ];
}











export const locations: LocationDef[] = [
  { name: 'pav_commercial', title: 'Pavlovsk', enter: pavCommercial.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_residential', title: 'Pavlovsk Residential', enter: pavResidential.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_industrial', title: 'Pavlovsk Industrial', enter: pavIndustrial.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_park', title: 'Pavlovsk Park', enter: pavPark.enter, region: 'pav', locationType: 'public_outdoors', locclass: 'park' },
  { name: 'pav_lake', title: 'Lake', enter: pavLake.enter, region: 'pav', locationType: 'public_outdoors', locclass: 'beach' },
  { name: 'pav_cinema', title: 'Cinema', enter: pavCinema.enter, region: 'pav', locationType: 'public_indoors' },
  { name: 'pav_laundromat', title: 'Laundromat', enter: pavLaundromatEnter, region: 'pav', locationType: 'public_indoors' },
  { name: 'pav_old_school', title: 'Old School', enter: pavOldSchool.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_church', title: 'Church of St. Nikolas', enter: pavChurch.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_market', title: 'Market Square', enter: pavMarket.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_hotel', title: 'Hotel', enter: pavHotel.enter, region: 'pav', locationType: 'public_indoors' },
  { name: 'pav_station', title: 'Train Station', enter: pavStation.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_pharmacy', title: 'Pharmacy', enter: pavPharmacy.enter, region: 'pav', locationType: 'public_indoors' },
  { name: 'pav_complex', title: 'Five Eight Complex', enter: pavComplex.enter, region: 'pav', locationType: 'public_outdoors' },
  { name: 'pav_factory', title: 'Factory', enter: pavFactory.enter, region: 'pav', locationType: 'public_indoors' },
];
