import { useState } from 'react';
import type { LocationDef, GameState } from '../../core/types';
import { useGameStore } from '../../core/store';
import { useShallow } from 'zustand/react/shallow';
import { getClothingImage } from '../../core/clothingImage';
import {
  isOwned, isWearing, isStrengthLow,
  getAttributes, getTotal, notWearReason, canWear,
  addItem, removeItem, moveWardrobe, moveStorage, moveUnwanted,
  resizeClothes, increaseStrength, decreaseDirt,
  wear, strip, getStorageLabel, getStyleLabel, getStyle2Label,
} from '../../core/clothing';

const shopGroups: { label: string; shops: { type: string; label: string }[] }[] = [
  {
    label: 'GM',
    shops: [
      { type: 'gm_outfits', label: 'Outfits' },
      { type: 'gm_dress', label: 'Dresses' },
      { type: 'gm_school', label: 'School' },
      { type: 'gm_office', label: 'Office' },
      { type: 'gm_maid', label: 'Maid' },
      { type: 'gm_server', label: 'Server' },
    ],
  },
  {
    label: 'Cats',
    shops: [
      { type: 'cats_outfits', label: 'Outfits' },
      { type: 'cats_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Flamingos',
    shops: [
      { type: 'flamingos_outfits', label: 'Outfits' },
      { type: 'flamingos_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Coco',
    shops: [
      { type: 'coco_outfits', label: 'Outfits' },
      { type: 'coco_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Fashionista',
    shops: [
      { type: 'fashionista_dress', label: 'Dresses' },
      { type: 'fashionista_outfits', label: 'Outfits' },
    ],
  },
  {
    label: 'Moncheri',
    shops: [
      { type: 'moncheri_gown', label: 'Gowns' },
      { type: 'moncheri_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Scandalicious',
    shops: [
      { type: 'scandalicious_outfits', label: 'Outfits' },
      { type: 'scandalicious_dress', label: 'Dresses' },
      { type: 'scandalicious_bikinis', label: 'Bikinis' },
      { type: 'scandalicious_swimsuit', label: 'Swimsuits' },
    ],
  },
  {
    label: 'Allure',
    shops: [
      { type: 'allure_bikinis', label: 'Bikinis' },
      { type: 'allure_swimsuit', label: 'Swimsuits' },
    ],
  },
  {
    label: 'Erotto',
    shops: [
      { type: 'eroto_dress', label: 'Dresses' },
      { type: 'eroto_outfits', label: 'Outfits' },
      { type: 'eroto_strip', label: 'Strip' },
    ],
  },
  {
    label: 'Salacious',
    shops: [
      { type: 'salacious_outfits', label: 'Outfits' },
      { type: 'salacious_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Dolls',
    shops: [
      { type: 'dolls_outfits', label: 'Outfits' },
      { type: 'dolls_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Bomba',
    shops: [
      { type: 'bomba_outfits', label: 'Outfits' },
      { type: 'bomba_dress', label: 'Dresses' },
    ],
  },
  {
    label: 'Nerdvana',
    shops: [
      { type: 'nerdvana_cosplay', label: 'Cosplay' },
      { type: 'nerdvana_outfits', label: 'Outfits' },
      { type: 'nerdvana_bikinis', label: 'Bikinis' },
      { type: 'nerdvana_swimsuit', label: 'Swimsuits' },
    ],
  },
  {
    label: 'Danilovich',
    shops: [
      { type: 'danilovich_outfits', label: 'Outfits' },
      { type: 'danilovich_swimsuit', label: 'Swimsuits' },
    ],
  },
  {
    label: 'Other',
    shops: [
      { type: 'fancy_burlesque', label: 'Burlesque' },
      { type: 'materinstvo_dress', label: 'Maternity' },
      { type: 'market_outfits', label: 'Market' },
      { type: 'misc_outfits', label: 'Misc' },
    ],
  },
];

function BrandSelection() {
  const doGoto = useGameStore(s => s.doGoto);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Browse Clothing</h2>
      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {shopGroups.map(group => (
          <button
            key={group.label}
            onClick={() => setSelectedGroup(group.label)}
            className={`p-3 rounded-lg text-left font-medium transition-colors ${
              selectedGroup === group.label
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>
      {selectedGroup && (
        <div className="mt-4 max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {shopGroups.find(g => g.label === selectedGroup)!.shops.map(shop => (
              <button
                key={shop.type}
                onClick={() => doGoto('clothing_view', `list:${shop.type}`)}
                className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-left transition-colors"
              >
                {shop.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={() => doGoto('wardrobe', 'main')}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200"
        >
          Back to Wardrobe
        </button>
      </div>
    </div>
  );
}

function ItemRow({ type, num }: { type: string; num: number }) {
  const s = useGameStore(useShallow(st => ({
    clothingInventory: st.clothingInventory,
    clothingworntype: st.clothingworntype,
    clothingwornnumber: st.clothingwornnumber,
  })));
  const doGoto = useGameStore(st => st.doGoto);
  const item = s.clothingInventory[type]?.[num - 1];
  const attrs = getAttributes(type, num);
  const owned = item?.owned ?? false;
    const wearing = isWearing(s as unknown as GameState, type, num);
    const strengthLow = isStrengthLow(s as unknown as GameState, type, num);
    const img = getClothingImage(type, num);

    return (
      <button
        onClick={() => doGoto('clothing_view', `item:${type}:${num}`)}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors w-full text-left"
    >
      <div className="w-12 h-16 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
        {img && <img src={img} alt="" className="w-full h-full object-cover" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-200">
          #{num} {wearing && <span className="text-green-400">(wearing)</span>}
        </div>
        {owned && (
          <div className="text-xs text-gray-400">
            {getStorageLabel(item!.storage)}
            {strengthLow && <span className="text-yellow-400 ml-2">Worn out</span>}
          </div>
        )}
        {attrs && (
          <div className="text-xs text-gray-500">
            {attrs.price > 0 && <span>₽{attrs.price}</span>}
            {attrs.style > 0 && <span className="ml-2">{getStyleLabel(attrs.style)}</span>}
            {attrs.style2 > 0 && <span className="ml-2">{getStyle2Label(attrs.style2)}</span>}
          </div>
        )}
      </div>
    </button>
  );
}

function ListView({ type }: { type: string }) {
  const s = useGameStore(st => st.clothingInventory);
  const doGoto = useGameStore(st => st.doGoto);
  const total = getTotal(type);
  const [filter, setFilter] = useState<'all' | 'owned' | 'unowned'>('all');

  const items: number[] = [];
  for (let i = 1; i <= total; i++) {
    const owned = isOwned({ clothingInventory: s } as unknown as GameState, type, i);
    if (filter === 'all' || (filter === 'owned' && owned) || (filter === 'unowned' && !owned)) {
      items.push(i);
    }
  }

  const shopLabel = shopGroups.flatMap(g => g.shops).find(s => s.type === type)?.label ?? type;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-200">{shopLabel}</h2>
        <div className="flex gap-1">
          {(['all', 'owned', 'unowned'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded text-sm ${
                filter === f ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {f === 'all' ? 'All' : f === 'owned' ? 'Owned' : 'Available'}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
        {items.length === 0 && (
          <div className="text-center text-gray-500 py-8">No items</div>
        )}
        {items.map(num => (
          <ItemRow key={num} type={type} num={num} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => doGoto('clothing_view', '')}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200"
        >
          Back to Brands
        </button>
      </div>
    </div>
  );
}

function ItemDetail({ type, num }: { type: string; num: number }) {
  const s = useGameStore(useShallow(st => ({
    clothingInventory: st.clothingInventory,
    clothingworntype: st.clothingworntype,
    clothingwornnumber: st.clothingwornnumber,
    pcs_bmi: st.pcs_bmi,
    pcs_inhib: st.pcs_inhib,
    money: st.money,
  })));
  const doGoto = useGameStore(st => st.doGoto);
  const set = useGameStore(st => st.set);
  const item = s.clothingInventory[type]?.[num - 1];
  const attrs = getAttributes(type, num);
  const owned = item?.owned ?? false;
  const gs = s as unknown as GameState;
  const wearing = isWearing(gs, type, num);
  const strengthLow = isStrengthLow(gs, type, num);
  const img = getClothingImage(type, num);
  const wearReason = notWearReason(gs, type, num);

  const handleBuy = () => {
    if (s.money < (attrs?.price ?? 0)) return;
    set(st => {
      st.money -= attrs!.price!;
      addItem(st, type, num);
    });
  };

  const handleWear = () => {
    set(st => {
      wear(st, type, num, true);
    });
  };

  const handleStrip = () => {
    set(st => {
      strip(st);
    });
  };

  const handleSell = () => {
    const sellPrice = Math.floor((attrs?.price ?? 0) / 2);
    set(st => {
      removeItem(st, type, num);
      st.money += sellPrice;
    });
  };

  const handleMoveWardrobe = () => set(st => moveWardrobe(st, type, num));
  const handleMoveStorage = () => set(st => moveStorage(st, type, num));
  const handleMoveUnwanted = () => set(st => moveUnwanted(st, type, num));
  const handleResize = () => set(st => resizeClothes(st, type, num));
  const handleRepair = () => set(st => increaseStrength(st, type, num, (attrs?.strength ?? 0) * 0.1));
  const handleWash = () => set(st => decreaseDirt(st, type, num, 10));

  const styleTags: string[] = [];
  if (attrs) {
    if (attrs.style > 0) styleTags.push(getStyleLabel(attrs.style));
    if (attrs.style2 > 0) styleTags.push(getStyle2Label(attrs.style2));
    if (attrs.bimbo) styleTags.push('Bimbo');
    if (attrs.goth) styleTags.push('Goth');
    if (attrs.punk) styleTags.push('Punk');
    if (attrs.prep) styleTags.push('Prep');
    if (attrs.prude) styleTags.push('Prude');
    if (attrs.prostitute) styleTags.push('Prostitute');
    if (attrs.maid) styleTags.push('Maid');
    if (attrs.server) styleTags.push('Server');
    if (attrs.strip) styleTags.push('Stripper');
    if (attrs.school) styleTags.push('School');
    if (attrs.office) styleTags.push('Office');
    if (attrs.sport) styleTags.push('Sport');
    if (attrs.swim) styleTags.push('Swim');
  }

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div className="w-32 h-44 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
          {img && <img src={img} alt="" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-gray-200 mb-2">
            Item #{num}
            {wearing && <span className="text-green-400 ml-2">(wearing)</span>}
          </h2>
          {styleTags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {styleTags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-gray-700 text-gray-300 text-xs">{tag}</span>
              ))}
            </div>
          )}
          {attrs && (
            <div className="space-y-1 text-sm text-gray-400">
              {attrs.price > 0 && <div>Price: <span className="text-gray-200">₽{attrs.price}</span></div>}
              {owned && item && (
                <>
                  <div>Storage: <span className="text-gray-200">{getStorageLabel(item.storage)}</span></div>
                  <div>
                    Condition: <span className={strengthLow ? 'text-yellow-400' : 'text-gray-200'}>
                      {Math.round((item.strength / (attrs.strength || 1)) * 100)}%
                    </span>
                  </div>
                  <div>Dirt: <span className="text-gray-200">{item.dirt}</span></div>
                  {item.hipSize > 0 && <div>Size: <span className="text-gray-200">{item.hipSize}</span></div>}
                </>
              )}
              {wearReason !== '' && !wearing && (
                <div className="text-yellow-400">
                  {wearReason === 'not_owned' && "You don't own this"}
                  {wearReason === 'not_in_wardrobe' && "Not in wardrobe"}
                  {wearReason === 'low_strength' && "Worn out"}
                  {wearReason === 'too_small' && "Too small"}
                  {wearReason === 'too_large' && "Too large"}
                  {wearReason === 'hypno' && "Inhibition too high"}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {!owned && attrs && (
          <button
            onClick={handleBuy}
            disabled={s.money < attrs.price}
            className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 disabled:bg-gray-700 disabled:text-gray-500 text-white"
          >
            Buy (₽{attrs.price})
          </button>
        )}
        {owned && !wearing && canWear(gs, type, num) && (
          <button onClick={handleWear} className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white">
            Wear
          </button>
        )}
        {wearing && (
          <button onClick={handleStrip} className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200">
            Take Off
          </button>
        )}
        {owned && (
          <>
            {item!.storage !== 0 && (
              <button onClick={handleMoveWardrobe} className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">
                → Wardrobe
              </button>
            )}
            {item!.storage !== 1 && (
              <button onClick={handleMoveStorage} className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">
                → Storage
              </button>
            )}
            {item!.storage !== 2 && (
              <button onClick={handleMoveUnwanted} className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">
                → Unwanted
              </button>
            )}
            <button onClick={handleResize} className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">
              Resize
            </button>
            {strengthLow && (
              <button onClick={handleRepair} className="px-3 py-2 rounded-lg bg-yellow-700 hover:bg-yellow-600 text-white text-sm">
                Repair
              </button>
            )}
            {item!.dirt > 0 && (
              <button onClick={handleWash} className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm">
                Wash
              </button>
            )}
            <button onClick={handleSell} className="px-3 py-2 rounded-lg bg-red-800 hover:bg-red-700 text-white text-sm">
              Sell (₽{Math.floor((attrs?.price ?? 0) / 2)})
            </button>
          </>
        )}
      </div>

      <div className="mt-4">
        <button
          onClick={() => doGoto('clothing_view', `list:${type}`)}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200"
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

function ClothingViewComponent() {
  const locArg = useGameStore(s => s.locArg);

  if (locArg.startsWith('list:')) {
    const type = locArg.slice(5);
    return <ListView type={type} />;
  }

  if (locArg.startsWith('item:')) {
    const parts = locArg.slice(5).split(':');
    const type = parts[0];
    const num = parseInt(parts[1] || '0');
    return <ItemDetail type={type} num={num} />;
  }

  return <BrandSelection />;
}

export const clothing_view: LocationDef = {
  name: 'clothing_view',
  title: 'Clothing',
  background: 'images/system/icons/clothing/clothes.png',
  region: 'other',
  locationType: 'menu',
  locclass: '',
  component: ClothingViewComponent,
};

export const locations: LocationDef[] = [clothing_view];
