import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') !== '%') {
    (s as any).food_loc = 1;
    (s as any).food_loc_last = ((s as any).loc ?? 0);
    (s as any)._drink = undefined;
    (s as any)._eat = undefined;
    if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
    }
  }
  if (((s as any).loc ?? 0) === 'burger') {
    if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
      scene.text('<center><b>Diner Bystroeshka</b></center>');
      scene.img('images/shared/menus/burger.jpg');
    }
    ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Onion Rings';
    ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'onring';
    ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 80;
    ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Veggie Burger';
    ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'vegburg';
    ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 240;
    ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Turkey Burger';
    ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'turburg';
    ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 260;
    ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Battered Fish & Fries';
    ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'batfish';
    ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
    ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Cheeseburger & Fries';
    ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'cheeseburger';
    ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 310;
    ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
    ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
    ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
    ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
    ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
    ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 55;
    ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
    ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
    ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 70;
    ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
    ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
    ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 110;
    ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
    ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
    ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 120;
    ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
    ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
    ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 180;
  } else {
    if (((s as any).loc ?? 0) === 'gkafe') {
      if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
        scene.text('<center><b>Borislav\'s cafe</b></center>');
        scene.img('images/shared/menus/borislav.jpg');
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
        ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
        ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 0;
        ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
        ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
        ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 0;
        ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
        ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
        ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 0;
        ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
        ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
        ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 0;
        ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
        ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
        ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
        ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
        ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
        ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
        ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
        ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
        ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
        ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
        ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
        ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
        ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 0;
      } else {
        ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
        ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
        ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
        ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
        ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
        ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 190;
        ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
        ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
        ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 210;
        ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
        ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
        ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
        ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
        ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
        ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 340;
        ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
        ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
        ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
        ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
        ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
        ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
        ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
        ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
        ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
        ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
        ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
        ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
        ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
        ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
        ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
      }
    } else {
      if (((s as any).loc ?? 0) === 'brothel') {
        if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
          scene.text('<center><h3>Hotel Bar</h3></center>');
          scene.img('images/shared/drinks/bardrinks.jpg');
        }
        ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Toasted rye snacks';
        ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'ryesna';
        ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 30;
        ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Bowl of flavoured crisps';
        ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'crisps';
        ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 40;
        ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
        ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
        ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Beer on tap';
        ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'beer';
        ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
        ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Vodka';
        ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'vodka';
        ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 120;
        ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Scotch';
        ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'scotch';
        ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 140;
        ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Glass of Wine';
        ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'wine';
        ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 160;
        ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Black Russian';
        ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'black_russian';
        ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 250;
        if (((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === 'employed') {
          ((s as any)._drink = (s as any)._drink ?? {})['6,name'] = 'Blue-blooded Russian';
          ((s as any)._drink = (s as any)._drink ?? {})['6,type'] = 'bbr';
          ((s as any)._drink = (s as any)._drink ?? {})['6,price'] = 0;
        }
      } else {
        if (((s as any).loc ?? 0) === 'cafe_parco') {
          if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
            scene.text('<center><b>Cafe "Del Parco"</b></center>');
            scene.img('images/shared/menus/del_parco.jpg');
          }
          ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
          ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
          ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
          ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
          ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
          ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 190;
          ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
          ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
          ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 210;
          ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
          ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
          ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
          ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
          ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
          ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 340;
          ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
          ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
          ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
          ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
          ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
          ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
          ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
          ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
          ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
          ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
          ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
          ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
          ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
          ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
          ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
          ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
          ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
          ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
        } else {
          if (((s as any).loc ?? 0) === 'city_kafe') {
            if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
              scene.text('<center><b>The Roadhouse</b></center>');
              scene.img('images/shared/menus/roadhouse.jpg');
            }
            ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Onion Rings';
            ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'onring';
            ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 80;
            ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Veggie Burger';
            ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'vegburg';
            ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 240;
            ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Turkey Burger';
            ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'turburg';
            ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 260;
            ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Battered Fish & Fries';
            ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'batfish';
            ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
            ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Cheeseburger & Fries';
            ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'cheeseburger';
            ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 310;
            ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
            ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
            ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
            ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
            ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
            ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 55;
            ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
            ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
            ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 70;
            ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
            ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
            ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 110;
            ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
            ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
            ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 120;
            ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
            ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
            ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 180;
          } else {
            if (((s as any).loc ?? 0) === 'lakecafe') {
              if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                scene.text('<center><b>The Lake Cafe</b></center>');
                scene.img('images/shared/drinks/cafedrinks.jpg');
              }
              ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
              ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
              ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
              ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
              ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
              ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 190;
              ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
              ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
              ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 210;
              ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
              ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
              ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
              ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
              ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
              ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 340;
              ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
              ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
              ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
              ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
              ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
              ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
              ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
              ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
              ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
              ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
              ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
              ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
              ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
              ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
              ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
              ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
              ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
              ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
            } else {
              if (((s as any).loc ?? 0) === 'pushkin_cafe') {
                if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                  scene.text('<center><b>Tiny Cafe</b></center>');
                  scene.img('images/shared/drinks/cafedrinks.jpg');
                }
                ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Onion Rings';
                ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'onring';
                ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 80;
                ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Veggie Burger';
                ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'vegburg';
                ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 240;
                ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Turkey Burger';
                ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'turburg';
                ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 260;
                ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Battered Fish & Fries';
                ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'batfish';
                ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
                ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Cheeseburger & Fries';
                ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'cheeseburger';
                ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 310;
                ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
                ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
                ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
                ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
                ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
                ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
                ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
                ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
                ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
                ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
                ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
                ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
                ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
                ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
                ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
                ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
              } else {
                if (((s as any).loc ?? 0) === 'ParkKafe') {
                  if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                    scene.text('<center><b>Park Cafe</b></center>');
                    scene.img('images/shared/drinks/cafedrinks.jpg');
                  }
                  ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
                  ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
                  ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
                  ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
                  ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
                  ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 190;
                  ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
                  ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
                  ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 210;
                  ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
                  ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
                  ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
                  ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
                  ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
                  ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 340;
                  ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                  ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
                  ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                  ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
                  ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'kvass';
                  ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
                  ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
                  ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'juice';
                  ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
                  ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
                  ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'tea';
                  ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
                  ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
                  ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'coffee';
                  ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
                  ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
                  ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'milkshake';
                  ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
                } else {
                  if (((s as any).loc ?? 0) === 'qwBarPolet') {
                    if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                      scene.text('<center><b>Bar "Rabotnik"</b></center>');
                      scene.img('images/shared/drinks/bardrinks.jpg');
                    }
                    ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Toasted rye snacks';
                    ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'ryesna';
                    ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 30;
                    ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Bowl of flavoured crisps';
                    ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'crisps';
                    ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 40;
                    ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                    ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
                    ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                    ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Beer on tap';
                    ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'beer';
                    ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
                    ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Vodka';
                    ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'vodka';
                    ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 120;
                    ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Scotch';
                    ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'scotch';
                    ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 140;
                    ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Glass of Wine';
                    ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'wine';
                    ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 160;
                    ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Black Russian';
                    ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'black_russian';
                    ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 250;
                  } else {
                    if (((s as any).loc ?? 0) === 'restoran') {
                      if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                        scene.text('<center><b>Babel</b></center>');
                        scene.img('images/shared/menus/babel.jpg');
                      }
                      ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vareniki with Potatoes';
                      ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'varenfan';
                      ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 760;
                      ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Borscht and French Baguette';
                      ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'borfan';
                      ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 900;
                      ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Atlantic Salmon Steak';
                      ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'salfan';
                      ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 1000;
                      ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Beef & Mushroom Stroganoff';
                      ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'strofan';
                      ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 1200;
                      ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Red Caviar Blinchiki';
                      ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'blifan';
                      ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 1360;
                      ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Spring Water';
                      ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
                      ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                      ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Imported Tea';
                      ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'tea';
                      ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 180;
                      ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Imported Beer';
                      ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'beer';
                      ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 200;
                      ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Vodka Martini';
                      ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'vodka_martini';
                      ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 400;
                      ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Glass of Wine';
                      ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'wine';
                      ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 800;
                      ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Glass of Champagne';
                      ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'champagne';
                      ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 900;
                    } else {
                      if (((s as any).loc ?? 0) === 'uni_cafe') {
                        if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                          scene.text('<center><b>University cafe</b></center>');
                          scene.img('images/shared/drinks/cafedrinks.jpg');
                        }
                        ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Vegetarian Piroshki';
                        ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'pirosh';
                        ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
                        ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Herring Blini';
                        ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'bliny';
                        ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 190;
                        ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Golubtsy';
                        ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'golub';
                        ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 210;
                        ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Pozharsky Cutlets';
                        ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'pozhar';
                        ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 290;
                        ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Reuben Sandwich';
                        ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'reuben';
                        ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 340;
                        ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                        ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'only_cost_water';
                        ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                        ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Kvass';
                        ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'only_cost_kvass';
                        ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
                        ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Juice';
                        ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'only_cost_juice';
                        ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 80;
                        ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Spiced Tea';
                        ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'only_cost_tea';
                        ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
                        ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Black Coffee';
                        ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'only_cost_coffee';
                        ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 130;
                        ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Milkshake';
                        ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'only_cost_milkshake';
                        ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 200;
                      } else {
                        if (((s as any).loc ?? 0) === 'city_coffee_hole') {
                          (s as any).loc_arg = 'eat';
                          if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                            scene.text('<center><b>Cafe "Coffee hole"</b></center>');
                            scene.img('images/shared/drinks/cafedrinks.jpg');
                          }
                          ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Biscotti';
                          ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'only_cost_light_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 100;
                          ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Cannoli';
                          ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Muffin';
                          ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Croissants';
                          ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Danish';
                          ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['5,name'] = 'Cookies';
                          ((s as any)._eat = (s as any)._eat ?? {})['5,type'] = 'only_cost_light_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['5,price'] = 100;
                          ((s as any)._eat = (s as any)._eat ?? {})['6,name'] = 'Miagkie Plushki s Sakharom';
                          ((s as any)._eat = (s as any)._eat ?? {})['6,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['6,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['7,name'] = 'Mannik';
                          ((s as any)._eat = (s as any)._eat ?? {})['7,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['7,price'] = 120;
                          ((s as any)._eat = (s as any)._eat ?? {})['8,name'] = 'Korzinochki';
                          ((s as any)._eat = (s as any)._eat ?? {})['8,type'] = 'only_cost_snack';
                          ((s as any)._eat = (s as any)._eat ?? {})['8,price'] = 120;
                          ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Tea';
                          ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'only_cost_tea';
                          ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 120;
                          ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Espresso';
                          ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'only_cost_espresso';
                          ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 100;
                          ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Black Coffee';
                          ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'only_cost_coffee';
                          ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 120;
                          ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Cappuccino';
                          ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'only_cost_coffee';
                          ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 150;
                          ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Cafe Latte';
                          ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'only_cost_coffee';
                          ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 150;
                          ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Iced Latte';
                          ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'only_cost_coffee';
                          ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 150;
                        } else {
                          if (((s as any).loc ?? 0) === 'artem_events_uni') {
                            if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                              scene.text('<center><b>Cafe "Coffee hole"</b></center>');
                              scene.img('images/shared/drinks/cafedrinks.jpg');
                            }
                            ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Biscotti';
                            ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'only_cost_light_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['1,name'] = 'Cannoli';
                            ((s as any)._eat = (s as any)._eat ?? {})['1,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['1,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['2,name'] = 'Muffin';
                            ((s as any)._eat = (s as any)._eat ?? {})['2,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['2,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['3,name'] = 'Croissants';
                            ((s as any)._eat = (s as any)._eat ?? {})['3,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['3,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['4,name'] = 'Danish';
                            ((s as any)._eat = (s as any)._eat ?? {})['4,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['4,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['5,name'] = 'Cookies';
                            ((s as any)._eat = (s as any)._eat ?? {})['5,type'] = 'only_cost_light_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['5,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['6,name'] = 'Miagkie Plushki s Sakharom';
                            ((s as any)._eat = (s as any)._eat ?? {})['6,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['6,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['7,name'] = 'Mannik';
                            ((s as any)._eat = (s as any)._eat ?? {})['7,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['7,price'] = 0;
                            ((s as any)._eat = (s as any)._eat ?? {})['8,name'] = 'Korzinochki';
                            ((s as any)._eat = (s as any)._eat ?? {})['8,type'] = 'only_cost_snack';
                            ((s as any)._eat = (s as any)._eat ?? {})['8,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Tea';
                            ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'only_cost_tea';
                            ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Espresso';
                            ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'only_cost_espresso';
                            ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Black Coffee';
                            ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'only_cost_coffee';
                            ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Cappuccino';
                            ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'only_cost_coffee';
                            ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Cafe Latte';
                            ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'only_cost_coffee';
                            ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 0;
                            ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Iced Latte';
                            ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'only_cost_coffee';
                            ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 0;
                          } else {
                            if (((s as any).loc ?? 0) === 'city_nightclub') {
                              if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                                scene.text('<center><b>Bar "Nightclub"</b></center>');
                                scene.img('images/shared/drinks/bardrinks.jpg');
                              }
                              ((s as any)._eat = (s as any)._eat ?? {})['0,name'] = 'Toasted rye snacks';
                              ((s as any)._eat = (s as any)._eat ?? {})['0,type'] = 'ryesna';
                              ((s as any)._eat = (s as any)._eat ?? {})['0,price'] = 30;
                              ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                              ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'water';
                              ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                              ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Energy Drink';
                              ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'energy_drink';
                              ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = 60;
                              ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Beer on tap';
                              ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'beer';
                              ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = 60;
                              ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Vodka';
                              ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'vodka';
                              ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = 120;
                              ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Scotch';
                              ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'scotch';
                              ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = 140;
                              ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Glass of Wine';
                              ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'wine';
                              ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = 160;
                              ((s as any)._drink = (s as any)._drink ?? {})['6,name'] = 'Black Russian';
                              ((s as any)._drink = (s as any)._drink ?? {})['6,type'] = 'black_russian';
                              ((s as any)._drink = (s as any)._drink ?? {})['6,price'] = 250;
                              ((s as any)._drink = (s as any)._drink ?? {})['7,name'] = 'Champagne';
                              ((s as any)._drink = (s as any)._drink ?? {})['7,type'] = 'champagne';
                              ((s as any)._drink = (s as any)._drink ?? {})['7,price'] = 220;
                              ((s as any)._drink = (s as any)._drink ?? {})['8,name'] = 'Vodka Martini';
                              ((s as any)._drink = (s as any)._drink ?? {})['8,type'] = 'vodka_martini';
                              ((s as any)._drink = (s as any)._drink ?? {})['8,price'] = 250;
                              ((s as any)._drink = (s as any)._drink ?? {})['9,name'] = 'Fancy cocktail';
                              ((s as any)._drink = (s as any)._drink ?? {})['9,type'] = 'cocktail';
                              ((s as any)._drink = (s as any)._drink ?? {})['9,price'] = 300;
                            } else {
                              if (((s as any).loc ?? 0) === 'katja_nightclub'  ||  ((s as any).loc ?? 0) === 'katja_nightclub_sex'  ||  ((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') {
                                if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
                                  scene.text('<center><b>Bar "Nightclub"</b></center>');
                                  if (((s as any).loc ?? 0) === 'katja_nightclub_sex') {
                                    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/hot_bartender.jpg');
                                  } else {
                                    scene.img('images/shared/drinks/bardrinks.jpg');
                                  }
                                }
                                ((s as any)._drink = (s as any)._drink ?? {})['0,name'] = 'Water';
                                ((s as any)._drink = (s as any)._drink ?? {})['0,type'] = 'only_cost_water';
                                ((s as any)._drink = (s as any)._drink ?? {})['0,price'] = 0;
                                ((s as any)._drink = (s as any)._drink ?? {})['1,name'] = 'Energy Drink';
                                ((s as any)._drink = (s as any)._drink ?? {})['1,type'] = 'only_cost_energy_drink';
                                ((s as any)._drink = (s as any)._drink ?? {})['1,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (60));
                                ((s as any)._drink = (s as any)._drink ?? {})['2,name'] = 'Beer on tap';
                                ((s as any)._drink = (s as any)._drink ?? {})['2,type'] = 'only_cost_beer';
                                ((s as any)._drink = (s as any)._drink ?? {})['2,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (60));
                                ((s as any)._drink = (s as any)._drink ?? {})['3,name'] = 'Vodka';
                                ((s as any)._drink = (s as any)._drink ?? {})['3,type'] = 'only_cost_vodka';
                                ((s as any)._drink = (s as any)._drink ?? {})['3,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (120));
                                ((s as any)._drink = (s as any)._drink ?? {})['4,name'] = 'Scotch';
                                ((s as any)._drink = (s as any)._drink ?? {})['4,type'] = 'only_cost_scotch';
                                ((s as any)._drink = (s as any)._drink ?? {})['4,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (140));
                                ((s as any)._drink = (s as any)._drink ?? {})['5,name'] = 'Glass of Wine';
                                ((s as any)._drink = (s as any)._drink ?? {})['5,type'] = 'only_cost_wine';
                                ((s as any)._drink = (s as any)._drink ?? {})['5,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (160));
                                ((s as any)._drink = (s as any)._drink ?? {})['6,name'] = 'Black Russian';
                                ((s as any)._drink = (s as any)._drink ?? {})['6,type'] = 'only_cost_black_russian';
                                ((s as any)._drink = (s as any)._drink ?? {})['6,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (250));
                                ((s as any)._drink = (s as any)._drink ?? {})['7,name'] = 'Champagne';
                                ((s as any)._drink = (s as any)._drink ?? {})['7,type'] = 'only_cost_champagne';
                                ((s as any)._drink = (s as any)._drink ?? {})['7,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (220));
                                ((s as any)._drink = (s as any)._drink ?? {})['8,name'] = 'Vodka Martini';
                                ((s as any)._drink = (s as any)._drink ?? {})['8,type'] = 'only_cost_vodka_martini';
                                ((s as any)._drink = (s as any)._drink ?? {})['8,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (250));
                                ((s as any)._drink = (s as any)._drink ?? {})['9,name'] = 'Fancy cocktail';
                                ((s as any)._drink = (s as any)._drink ?? {})['9,type'] = 'only_cost_cocktail';
                                ((s as any)._drink = (s as any)._drink ?? {})['9,price'] = ((((s as any).loc ?? 0) === 'katja_nightclub_first_orgy') ? (0) : (300));
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
  (s as any)._str = '<center><table border="0" width="800" cellpadding="0" cellspacing="1">';
  (s as any).food_loop = 0;
  do {
    (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
    (s as any)._str = ((s as any)._str ?? 0) + ('<tr>');
    if (((s as any)._eat ?? 0)[(((s as any).food_loop ?? 0)) + ',name'] === '') {
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="40%" align="center"></td>');
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="10%" align="right"></td>');
    } else {
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="40%" align="center">' + (((s as any)._eat ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',name']) + '</td>');
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="10%" align="center">');
      if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "_eat[\u00000\u0000]", { location: "food_menu" })) === 1) {
        (s as any)._str = ((s as any)._str ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_ate +=1; return s; }); window.__gameStore.getState().doGoto(\u0027food\u0027, \u0027$_eat[/\u0027\u0027 + String((s as any).food_loop ?? \u0027\u0027), \u0027type\u0027]\u0027); return false;">' + qspFunc(s, 'money', 'string_price', (((s as any)._eat ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',price'])) + '</a>');
      } else {
        (s as any)._str = ((s as any)._str ?? 0) + (qspFunc(s, 'money', 'string_price', (((s as any)._eat ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',price'])));
      }
      (s as any)._str = ((s as any)._str ?? 0) + ('</td>');
    }
    (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? 0)) + ' border="0" width="50" cellpadding="0" cellspacing="0"></td>');
    if (((s as any)._drink ?? 0)[(((s as any).food_loop ?? 0)) + ',name'] === '') {
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="40%" align="center"></td>');
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="10%" align="right"></td>');
    } else {
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="40%" align="center">' + (((s as any)._drink ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',name']) + '</td>');
      (s as any)._str = ((s as any)._str ?? 0) + ('<td bgcolor=' + ((s as any).temp_bcolor ?? 0) + ' height="30" width="10%" align="center">');
      if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "_drink[\u00000\u0000]", { location: "food_menu" })) === 1) {
        (s as any)._str = ((s as any)._str ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { s.pcs_drank +=1; return s; }); window.__gameStore.getState().doGoto(\u0027beverage\u0027, \u0027$_drink[/\u0027\u0027 + String((s as any).food_loop ?? \u0027\u0027), \u0027type\u0027]\u0027); return false;">' + qspFunc(s, 'money', 'string_price', (((s as any)._drink ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',price'])) + '</a>');
      } else {
        (s as any)._str = ((s as any)._str ?? 0) + (qspFunc(s, 'money', 'string_price', (((s as any)._drink ?? 0)?.[String(((s as any).food_loop ?? 0)) + ',price'])));
      }
      (s as any)._str = ((s as any)._str ?? 0) + ('</td>');
    }
    (s as any)._str = ((s as any)._str ?? 0) + ('</tr>');
    (s as any).food_loop = ((s as any).food_loop ?? 0) + (1);
    (s as any)._str = ((s as any)._str ?? 0) + ('</table></center>');
    if (String((s as any).locArgs?.[0] ?? '') !== 'no_image') {
      scene.text('<center>Please place your order</center><br><br>');
    }
    // TODO-QSP: +$_str
    (s as any)._str = undefined;
    (s as any).food_loop = undefined;
    (s as any).temp_bcolor = undefined;
  } while (((s as any).food_loop ?? 0) < Object.keys((s as any)._drink ?? {}).length/3);
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any)._drink = undefined;
    (st as any)._eat = undefined;
    (st as any).food_loc = undefined;
    (st as any).food_loc_last = undefined;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
