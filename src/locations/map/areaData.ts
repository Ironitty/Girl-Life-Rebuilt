export interface AreaDef {
  id: string;
  title: string;
  image: string;
  adjacent: { id: string; label: string }[];
}

export const WORLD_IMAGE = 'images/system/map/world_klein_russia_areas_labeled.png';

export const AREAS: Record<string, AreaDef> = {
  city_center: {
    id: 'city_center',
    title: 'City Center',
    image: 'images/system/map/city_center_clean_labeled.png',
    adjacent: [
      { id: 'city_residential', label: 'City Residential' },
      { id: 'city_industrial', label: 'City Industrial' },
      { id: 'city_island', label: 'Vasilyevsky Island' },
      { id: 'city_park', label: 'Central Park' },
      { id: 'metro', label: 'Metro' },
      { id: 'train', label: 'Train' },
    ],
  },
  city_residential: {
    id: 'city_residential',
    title: 'City Residential',
    image: 'images/system/map/city_residential_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_industrial', label: 'City Industrial' },
      { id: 'city_suburbs', label: 'City Suburbs' },
    ],
  },
  city_industrial: {
    id: 'city_industrial',
    title: 'City Industrial',
    image: 'images/system/map/city_industrial_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_residential', label: 'City Residential' },
      { id: 'train', label: 'Train' },
    ],
  },
  city_island: {
    id: 'city_island',
    title: 'Vasilyevsky Island',
    image: 'images/system/map/city_island_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_canals', label: 'Canals' },
    ],
  },
  city_suburbs: {
    id: 'city_suburbs',
    title: 'City Suburbs',
    image: 'images/system/map/city_suburbs_labeled.png',
    adjacent: [
      { id: 'city_residential', label: 'City Residential' },
      { id: 'city_lake', label: 'Lake' },
      { id: 'bus', label: 'Bus' },
    ],
  },
  city_park: {
    id: 'city_park',
    title: 'Central Park',
    image: 'images/system/map/city_park_labeled_v2.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_suburbs', label: 'City Suburbs' },
      { id: 'city_lake', label: 'Lake' },
    ],
  },
  city_lake: {
    id: 'city_lake',
    title: 'Lake',
    image: 'images/system/map/city_lake_labeled.png',
    adjacent: [
      { id: 'city_park', label: 'Central Park' },
      { id: 'city_suburbs', label: 'City Suburbs' },
      { id: 'city_canals', label: 'Canals' },
    ],
  },
  city_canals: {
    id: 'city_canals',
    title: 'Canals',
    image: 'images/system/map/city_canals_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_island', label: 'Vasilyevsky Island' },
      { id: 'city_lake', label: 'Lake' },
    ],
  },
  city_redlight: {
    id: 'city_redlight',
    title: 'Red Light',
    image: 'images/system/map/city_redlight_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'city_market', label: 'Market' },
    ],
  },
  city_market: {
    id: 'city_market',
    title: 'Market',
    image: 'images/system/map/city_market_labeled.png',
    adjacent: [
      { id: 'city_redlight', label: 'Red Light' },
      { id: 'city_center', label: 'City Center' },
      { id: 'pushkin', label: 'Pushkin' },
    ],
  },
  uni_grounds: {
    id: 'uni_grounds',
    title: 'University',
    image: 'images/system/map/uni_grounds_labeled_v2.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'metro', label: 'Metro' },
    ],
  },
  pushkin: {
    id: 'pushkin',
    title: 'Pushkin',
    image: 'images/system/map/pushkin_labeled.png',
    adjacent: [
      { id: 'city_market', label: 'Market' },
      { id: 'pushkin_parks', label: 'Pushkin Park' },
      { id: 'train', label: 'Train' },
    ],
  },
  pushkin_parks: {
    id: 'pushkin_parks',
    title: 'Pushkin Park',
    image: 'images/system/map/pushkin_parks_labeled.png',
    adjacent: [
      { id: 'pushkin', label: 'Pushkin' },
      { id: 'pav_commercial', label: 'Commercial' },
    ],
  },
  pav_commercial: {
    id: 'pav_commercial',
    title: 'Pavlovsk Commercial',
    image: 'images/system/map/pav_commercial_labeled_v2.png',
    adjacent: [
      { id: 'pushkin_parks', label: 'Pushkin Park' },
      { id: 'pav_residential', label: 'Residential' },
      { id: 'pav_industrial', label: 'Industrial' },
      { id: 'pav_complex', label: 'Five Eight' },
    ],
  },
  pav_residential: {
    id: 'pav_residential',
    title: 'Pavlovsk Residential',
    image: 'images/system/map/pav_residential_labeled_v2.png',
    adjacent: [
      { id: 'pav_commercial', label: 'Commercial' },
      { id: 'pav_industrial', label: 'Industrial' },
    ],
  },
  pav_industrial: {
    id: 'pav_industrial',
    title: 'Pavlovsk Industrial',
    image: 'images/system/map/pav_industrial_labeled.png',
    adjacent: [
      { id: 'pav_residential', label: 'Residential' },
      { id: 'pav_commercial', label: 'Commercial' },
    ],
  },
  pav_complex: {
    id: 'pav_complex',
    title: 'Five Eight Estate',
    image: 'images/system/map/pav_complex_labeled.png',
    adjacent: [
      { id: 'pav_commercial', label: 'Commercial' },
      { id: 'pav_park', label: 'Park' },
    ],
  },
  pav_park: {
    id: 'pav_park',
    title: 'Pavlovsk Park',
    image: 'images/system/map/pav_park_labeled.png',
    adjacent: [
      { id: 'pav_complex', label: 'Five Eight' },
      { id: 'pav_commercial', label: 'Commercial' },
      { id: 'pav_market', label: 'Market' },
    ],
  },
  pav_market: {
    id: 'pav_market',
    title: 'Pavlovsk Market',
    image: 'images/system/map/pav_market_labeled.png',
    adjacent: [
      { id: 'pav_park', label: 'Park' },
      { id: 'pav_commercial', label: 'Commercial' },
      { id: 'train', label: 'Train' },
    ],
  },
  gadukino: {
    id: 'gadukino',
    title: 'Gadukino',
    image: 'images/system/map/gad_forest_labeled.png',
    adjacent: [
      { id: 'road', label: 'Highway' },
      { id: 'pushkin_parks', label: 'Pushkin Park' },
    ],
  },
  metro: {
    id: 'metro',
    title: 'Metro',
    image: 'images/system/map/metro_labeled.png',
    adjacent: [
      { id: 'city_center', label: 'City Center' },
      { id: 'uni_grounds', label: 'University' },
    ],
  },
  train: {
    id: 'train',
    title: 'Train Station',
    image: 'images/system/map/train_labeled.png',
    adjacent: [
      { id: 'pushkin', label: 'Pushkin' },
      { id: 'pav_market', label: 'Market (Pav)' },
      { id: 'city_industrial', label: 'City Industrial' },
    ],
  },
  bus: {
    id: 'bus',
    title: 'Bus Terminal',
    image: 'images/system/map/bus_labeled.png',
    adjacent: [
      { id: 'city_suburbs', label: 'City Suburbs' },
      { id: 'road', label: 'Highway' },
    ],
  },
  road: {
    id: 'road',
    title: 'Highway',
    image: 'images/system/map/road.png',
    adjacent: [
      { id: 'bus', label: 'Bus' },
      { id: 'gadukino', label: 'Gadukino' },
    ],
  },
};

export const WORLD_AREAS: { id: string; label: string }[] = [
  { id: 'city_center', label: 'City Center' },
  { id: 'city_residential', label: 'City Residential' },
  { id: 'city_industrial', label: 'City Industrial' },
  { id: 'city_island', label: 'Vasilyevsky Island' },
  { id: 'city_suburbs', label: 'City Suburbs' },
  { id: 'city_park', label: 'Central Park' },
  { id: 'city_lake', label: 'Lake' },
  { id: 'city_canals', label: 'Canals' },
  { id: 'city_redlight', label: 'Red Light' },
  { id: 'city_market', label: 'Market' },
  { id: 'uni_grounds', label: 'University' },
  { id: 'pushkin', label: 'Pushkin' },
  { id: 'pushkin_parks', label: 'Pushkin Park' },
  { id: 'pav_commercial', label: 'Pavlovsk Commercial' },
  { id: 'pav_residential', label: 'Pavlovsk Residential' },
  { id: 'pav_industrial', label: 'Pavlovsk Industrial' },
  { id: 'pav_complex', label: 'Five Eight Estate' },
  { id: 'pav_park', label: 'Pavlovsk Park' },
  { id: 'pav_market', label: 'Pavlovsk Market' },
  { id: 'gadukino', label: 'Gadukino' },
  { id: 'metro', label: 'Metro' },
  { id: 'train', label: 'Train Station' },
  { id: 'bus', label: 'Bus Terminal' },
  { id: 'road', label: 'Highway' },
];
