import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) !== '%') {
    (s as any).food_loc = 1;
    if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
    }
  }
  if (((s as any).loc ?? 0) === 'burger') {
    if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
      scene.text('<center><b>Diner Bystroeshka</b></center>');
      scene.img('images/shared/menus/burger.jpg');
    }
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Onion Rings';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'onring';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 80;
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Veggie Burger';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'vegburg';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 240;
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Turkey Burger';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'turburg';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 260;
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Battered Fish & Fries';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'batfish';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Cheeseburger & Fries';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'cheeseburger';
    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 310;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 55;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 70;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 110;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 120;
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 180;
  } else {
    if (((s as any).loc ?? 0) === 'gkafe') {
      if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
        scene.text('<center><b>Borislav\'s cafe</b></center>');
        scene.img('images/shared/menus/borislav.jpg');
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 0;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 0;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 0;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 0;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 0;
      } else {
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 190;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 210;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 340;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
      }
    } else {
      if (((s as any).loc ?? 0) === 'brothel') {
        if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
          scene.text('<center><h3>Hotel Bar</h3></center>');
          scene.img('images/shared/drinks/bardrinks.jpg');
        }
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Toasted rye snacks';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'ryesna';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 30;
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Bowl of flavoured crisps';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'crisps';
        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 40;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Beer on tap';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'beer';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Vodka';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'vodka';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 120;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Scotch';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'scotch';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 140;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Glass of Wine';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'wine';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 160;
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Black Russian';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'black_russian';
        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 250;
        if (((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === 'employed') {
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,name'] = 'Blue-blooded Russian';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,type'] = 'bbr';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,price'] = 0;
        }
      } else {
        if (((s as any).loc ?? 0) === 'cafe_parco') {
          if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
            scene.text('<center><b>Cafe "Del Parco"</b></center>');
            scene.img('images/shared/menus/del_parco.jpg');
          }
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 190;
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 210;
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 340;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
        } else {
          if (((s as any).loc ?? 0) === 'city_kafe') {
            if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
              scene.text('<center><b>The Roadhouse</b></center>');
              scene.img('images/shared/menus/roadhouse.jpg');
            }
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Onion Rings';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'onring';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 80;
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Veggie Burger';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'vegburg';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 240;
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Turkey Burger';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'turburg';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 260;
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Battered Fish & Fries';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'batfish';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Cheeseburger & Fries';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'cheeseburger';
            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 310;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 55;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 70;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 110;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 120;
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 180;
          } else {
            if (((s as any).loc ?? 0) === 'lakecafe') {
              if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                scene.text('<center><b>The Lake Cafe</b></center>');
                scene.img('images/shared/drinks/cafedrinks.jpg');
              }
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 190;
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 210;
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 340;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
            } else {
              if (((s as any).loc ?? 0) === 'pushkin_cafe') {
                if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                  scene.text('<center><b>Tiny Cafe</b></center>');
                  scene.img('images/shared/drinks/cafedrinks.jpg');
                }
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Onion Rings';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'onring';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 80;
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Veggie Burger';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'vegburg';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 240;
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Turkey Burger';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'turburg';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 260;
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Battered Fish & Fries';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'batfish';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Cheeseburger & Fries';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'cheeseburger';
                if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 310;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
              } else {
                if (((s as any).loc ?? 0) === 'ParkKafe') {
                  if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                    scene.text('<center><b>Park Cafe</b></center>');
                    scene.img('images/shared/drinks/cafedrinks.jpg');
                  }
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 190;
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 210;
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
                  if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 340;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'kvass';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'juice';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'tea';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'coffee';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'milkshake';
                  if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
                } else {
                  if (((s as any).loc ?? 0) === 'qwBarPolet') {
                    if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                      scene.text('<center><b>Bar "Rabotnik"</b></center>');
                      scene.img('images/shared/drinks/bardrinks.jpg');
                    }
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Toasted rye snacks';
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'ryesna';
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 30;
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Bowl of flavoured crisps';
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'crisps';
                    if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 40;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Beer on tap';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'beer';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Vodka';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'vodka';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 120;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Scotch';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'scotch';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 140;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Glass of Wine';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'wine';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 160;
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Black Russian';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'black_russian';
                    if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 250;
                  } else {
                    if (((s as any).loc ?? 0) === 'restoran') {
                      if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                        scene.text('<center><b>Babel</b></center>');
                        scene.img('images/shared/menus/babel.jpg');
                      }
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vareniki with Potatoes';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'varenfan';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 760;
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Borscht and French Baguette';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'borfan';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 900;
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Atlantic Salmon Steak';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'salfan';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 1000;
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Beef & Mushroom Stroganoff';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'strofan';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 1200;
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Red Caviar Blinchiki';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'blifan';
                      if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 1360;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Spring Water';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Imported Tea';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'tea';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 180;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Imported Beer';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'beer';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 200;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Vodka Martini';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'vodka_martini';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 400;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Glass of Wine';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'wine';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 800;
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Glass of Champagne';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'champagne';
                      if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 900;
                    } else {
                      if (((s as any).loc ?? 0) === 'uni_cafe') {
                        if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                          scene.text('<center><b>University cafe</b></center>');
                          scene.img('images/shared/drinks/cafedrinks.jpg');
                        }
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Vegetarian Piroshki';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'pirosh';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Herring Blini';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'bliny';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 190;
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Golubtsy';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'golub';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 210;
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Pozharsky Cutlets';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'pozhar';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 290;
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Reuben Sandwich';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'reuben';
                        if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 340;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'only_cost_water';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Kvass';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'only_cost_kvass';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Juice';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'only_cost_juice';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 80;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Spiced Tea';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'only_cost_tea';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Black Coffee';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'only_cost_coffee';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 130;
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Milkshake';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'only_cost_milkshake';
                        if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 200;
                      } else {
                        if (((s as any).loc ?? 0) === 'city_coffee_hole') {
                          if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                            scene.text('<center><b>Cafe "Coffee hole"</b></center>');
                            scene.img('images/shared/drinks/cafedrinks.jpg');
                          }
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Biscotti';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'only_cost_light_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 100;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Cannoli';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Muffin';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Croissants';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Danish';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,name'] = 'Cookies';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,type'] = 'only_cost_light_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,price'] = 100;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,name'] = 'Miagkie Plushki s Sakharom';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,name'] = 'Mannik';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,price'] = 120;
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,name'] = 'Korzinochki';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,type'] = 'only_cost_snack';
                          if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,price'] = 120;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Tea';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'only_cost_tea';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 120;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Espresso';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'only_cost_espresso';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 100;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Black Coffee';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'only_cost_coffee';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 120;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Cappuccino';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'only_cost_coffee';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 150;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Cafe Latte';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'only_cost_coffee';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 150;
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Iced Latte';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'only_cost_coffee';
                          if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 150;
                        } else {
                          if (((s as any).loc ?? 0) === 'artem_events_uni') {
                            if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                              scene.text('<center><b>Cafe "Coffee hole"</b></center>');
                              scene.img('images/shared/drinks/cafedrinks.jpg');
                            }
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Biscotti';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'only_cost_light_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,name'] = 'Cannoli';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['1,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,name'] = 'Muffin';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['2,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,name'] = 'Croissants';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['3,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,name'] = 'Danish';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['4,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,name'] = 'Cookies';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,type'] = 'only_cost_light_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['5,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,name'] = 'Miagkie Plushki s Sakharom';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['6,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,name'] = 'Mannik';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['7,price'] = 0;
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,name'] = 'Korzinochki';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,type'] = 'only_cost_snack';
                            if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['8,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Tea';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'only_cost_tea';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Espresso';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'only_cost_espresso';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Black Coffee';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'only_cost_coffee';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Cappuccino';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'only_cost_coffee';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Cafe Latte';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'only_cost_coffee';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 0;
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Iced Latte';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'only_cost_coffee';
                            if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 0;
                          } else {
                            if (((s as any).loc ?? 0) === 'city_nightclub') {
                              if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                                scene.text('<center><b>Bar "Nightclub"</b></center>');
                                scene.img('images/shared/drinks/bardrinks.jpg');
                              }
                              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,name'] = 'Toasted rye snacks';
                              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,type'] = 'ryesna';
                              if (!(s as any)._eat) (s as any)._eat = {}; (s as any)._eat['0,price'] = 30;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'water';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Energy Drink';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'energy_drink';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = 60;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Beer on tap';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'beer';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = 60;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Vodka';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'vodka';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = 120;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Scotch';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'scotch';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = 140;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Glass of Wine';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'wine';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = 160;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,name'] = 'Black Russian';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,type'] = 'black_russian';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,price'] = 250;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,name'] = 'Champagne';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,type'] = 'champagne';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,price'] = 220;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,name'] = 'Vodka Martini';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,type'] = 'vodka_martini';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,price'] = 250;
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,name'] = 'Fancy cocktail';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,type'] = 'cocktail';
                              if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,price'] = 300;
                            } else {
                              if (((s as any).loc ?? 0) === 'katja_nightclub'  ||  ((s as any).loc ?? 0) === 'katja_nightclub_sex'  ||  ((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') {
                                if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
                                  scene.text('<center><b>Bar "Nightclub"</b></center>');
                                  if (((s as any).loc ?? 0) === 'katja_nightclub_sex') {
                                    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/hot_bartender.jpg');
                                  } else {
                                    scene.img('images/shared/drinks/bardrinks.jpg');
                                  }
                                }
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,name'] = 'Water';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,type'] = 'only_cost_water';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['0,price'] = 0;
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,name'] = 'Energy Drink';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,type'] = 'only_cost_energy_drink';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['1,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (60));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,name'] = 'Beer on tap';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,type'] = 'only_cost_beer';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['2,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (60));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,name'] = 'Vodka';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,type'] = 'only_cost_vodka';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['3,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (120));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,name'] = 'Scotch';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,type'] = 'only_cost_scotch';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['4,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (140));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,name'] = 'Glass of Wine';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,type'] = 'only_cost_wine';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['5,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (160));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,name'] = 'Black Russian';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,type'] = 'only_cost_black_russian';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['6,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (250));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,name'] = 'Champagne';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,type'] = 'only_cost_champagne';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['7,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (220));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,name'] = 'Vodka Martini';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,type'] = 'only_cost_vodka_martini';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['8,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (250));
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,name'] = 'Fancy cocktail';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,type'] = 'only_cost_cocktail';
                                if (!(s as any)._drink) (s as any)._drink = {}; (s as any)._drink['9,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (300));
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
  (s as any).food_loop = 0;
  // TODO-QSP: :loop_diner_drinks
  // TODO-QSP: $_str += '<tr>'
  if (((s as any)._eat ?? 0)[((s as any).food_loop ?? 0) + ',name'] === '') {
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="40%" align="center"></td>'
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="10%" align="right"></td>'
  } else {
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="40%" align="center">' + $_eat['<<food_loop...
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="10%" align="center">'
    if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "_eat[\u00000\u0000]", { location: "food_menu" })) === 1) {
      // TODO-QSP: $_str += '<a href="exec:pcs_ate += 1 & gt ''food'', $_eat[''<<food_loop>>,type''], <<food_loop>>">' ...
    } else {
      // TODO-QSP: $_str += $func('money', 'string_price', _eat['<<food_loop>>,price'])
    }
    // TODO-QSP: $_str += '</td>'
  }
  // TODO-QSP: $_str += '<td bgcolor=<<$func("shortgs", "rgb_to_hex", bcolor)>> border="0" width="50" cellpadding="...
  if (((s as any)._drink ?? 0)[((s as any).food_loop ?? 0) + ',name'] === '') {
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="40%" align="center"></td>'
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="10%" align="right"></td>'
  } else {
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="40%" align="center">' + $_drink['<<food_lo...
    // TODO-QSP: $_str += '<td bgcolor='+$temp_bcolor+' height="30" width="10%" align="center">'
    if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "_drink[\u00000\u0000]", { location: "food_menu" })) === 1) {
      // TODO-QSP: $_str += '<a href="exec:pcs_drank += 1 & gt ''beverage'', $_drink[''<<food_loop>>,type''], <<food_lo...
    } else {
      // TODO-QSP: $_str += $func('money', 'string_price', _drink['<<food_loop>>,price'])
    }
    // TODO-QSP: $_str += '</td>'
  }
  // TODO-QSP: $_str += '</tr>'
  (s as any).food_loop = ((s as any).food_loop ?? 0) + (1);
  if (((s as any).food_loop ?? 0) < Object.keys((s as any)._drink ?? {}).length/3) {
    // TODO-QSP: jump 'loop_diner_drinks'
  }
  // TODO-QSP: $_str += '</table></center>'
  if (((s as any).locArgs?.[0] ?? 0) !== 'no_image') {
    scene.text('<center>Please place your order</center><br><br>');
  }
  // TODO-QSP: +$_str
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

export const food_menu: LocationDef = {
  name: 'food_menu',
  title: 'Diner Bystroeshka',
  region: 'other',
  enter: enter,
};
