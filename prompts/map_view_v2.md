# Map View v2 — Hub-Aware Map with Pins

## Goal
Replace the simple `map_view` location with a hub-aware map that shows:
- A pre-rendered map image with pins + labels for the current area
- "You are here" indicator
- Destination links filtered to match the Actions panel (no teleporting)
- Back link to return to the player's current location

## Area Detection Logic

`$ARGS[0]` = current `$loc` (already passed by status bar at `stat_display_compute.qsps:1494`)

| Condition | Area | Map Image |
|-----------|------|-----------|
| `metro`, `bus`, `train`, `road` | world | `world_labeled.png` |
| `city_*`, `uni_*` | city | `city_labeled.png` |
| `pav_*`, `pushkin*` | pavlovsk | `pavlovsk_labeled.png` |
| `gad_*`, `gadukino` | world | `world_labeled.png` |
| fallback | world | `world_labeled.png` |

## Map Image Generation

Script: `scripts/generate_maps.py` (one-time, Python + PIL)

Base: `images/system/map/world.png` (1920×1088)
Layout reference: `images/system/map/reference/world_map.png` (hand-drawn sketch with correct relative positions)

### Pin Style
- Red filled circle, radius 10px, white border 2px
- Small triangle pointer below the circle (pin body)
- White text label with black outline, DejaVu Sans Bold, 16px
- Label positioned to the right of the pin (or left if near right edge)

### Output 1: `world_labeled.png` (1920×1088)
Full world map. Area-level labels only:
- City (upper-left grid area)
- Pavlovsk (right-side clusters)
- Pushkin (upper-right)
- University (near island, top-left)
- Vasilyevsky Island (top-left, near water)
- Central Park (green area, center)
- Metro (center, near park)
- Train (center-right, between city and Pavlovsk)
- Bus (center, near highway)
- Highway (orange/tan path, right edge)
- Gadukino (far right, off-map indicator)
- River (bottom water)

### Output 2: `city_labeled.png` (~1200×900)
Crop: left ~55% of world.png (city grid + park), scale to 1200px wide.
Location-level pins:
- City Center
- City Residential
- City Industrial
- Vasilyevsky Island
- City Suburbs
- Central Park
- Lake
- Canals
- Red Light District
- University
- Metro
- Train Station

### Output 3: `pavlovsk_labeled.png` (~1200×900)
Crop: right ~45% of world.png (Pavlovsk/Pushkin clusters), scale to 1200px wide.
Location-level pins:
- Pushkin
- Pushkin Park
- Pavlovsk Commercial
- Pavlovsk Residential
- Pavlovsk Industrial
- Five Eight Estate
- Market
- Pavlovsk Park
- Train Station
- Bus Station

## Pin Positions (estimated from reference map, fine-tune visually)

### world.png coordinates (1920×1088)

| Location | x | y | Notes |
|----------|---|---|-------|
| Vasilyevsky Island | 320 | 130 | Top-left, near water |
| University | 380 | 190 | Near island |
| City Center | 430 | 280 | Left-center of city grid |
| City Residential | 560 | 140 | Top-center of city grid |
| City Industrial | 680 | 320 | Right side of city grid |
| City Suburbs | 320 | 480 | Bottom-left of city area |
| Central Park | 560 | 390 | Green area with carnival |
| Lake | 380 | 560 | Near bottom water |
| Canals | 490 | 510 | Near river |
| Red Light | 720 | 250 | Near industrial |
| Metro | 510 | 330 | Central, near park |
| Train | 760 | 350 | Between city and Pavlovsk |
| Bus | 850 | 400 | Near highway |
| Highway | 1500 | 300 | Orange path, right edge |
| Pushkin | 960 | 210 | Upper-right cluster |
| Pushkin Park | 1100 | 200 | Right of Pushkin |
| Pavlovsk Commercial | 1010 | 330 | Center-right |
| Pavlovsk Residential | 960 | 460 | Lower-right |
| Pavlovsk Industrial | 1100 | 370 | Right of commercial |
| Five Eight Estate | 1100 | 460 | Lower-right |
| Market | 870 | 360 | Near train |
| Pavlovsk Park | 1150 | 310 | Right green area |
| Gadukino | 1350 | 520 | Far right, off-map |
| River | 600 | 700 | Bottom water |

## `map_view.qsps` Structure

```qsp
#map_view
*clr & cla

!! ── Area detection ──
if $ARGS[0] = 'metro' or $ARGS[0] = 'bus' or $ARGS[0] = 'train' or $ARGS[0] = 'road':
    $map_area = 'world'
elseif left($ARGS[0], 5) = 'city_' or left($ARGS[0], 4) = 'uni_':
    $map_area = 'city'
elseif left($ARGS[0], 4) = 'pav_' or left($ARGS[0], 7) = 'pushkin':
    $map_area = 'pavlovsk'
elseif left($ARGS[0], 4) = 'gad_' or $ARGS[0] = 'gadukino':
    $map_area = 'world'
else:
    $map_area = 'world'
end

!! ── World map ──
if $map_area = 'world':
    *p '<h2 style="text-align:center;">World Map</h2>'
    *p '<img src="images/system/map/world_labeled.png" style="width:100%;display:block;margin:0 auto;">'
    *p '<center><b>You are here: <<$ARGS[0]>>'
    *p '<br><b>Destinations:</b><br>'
    *p '<a href="exec: gt ''city_center''">City Center</a> | '
    *p '<a href="exec: gt ''city_residential''">City Residential</a> | '
    *p '<a href="exec: gt ''city_industrial''">City Industrial</a> | '
    *p '<a href="exec: gt ''city_island''">Vasilyevsky Island</a> | '
    *p '<a href="exec: gt ''city_suburbs''">City Suburbs</a><br>'
    *p '<a href="exec: gt ''pushkin''">Pushkin</a> | '
    *p '<a href="exec: gt ''pav_commercial''">Pavlovsk</a> | '
    *p '<a href="exec: gt ''gadukino''">Gadukino</a> | '
    *p '<a href="exec: gt ''uni_grounds''">University</a><br>'
    *p '<a href="exec: gt ''metro''">Metro</a> | '
    *p '<a href="exec: gt ''train'', ''center''">Train</a> | '
    *p '<a href="exec: gt ''bus'', ''community''">Bus</a> | '
    *p '<a href="exec: gt ''road'', ''0''">Highway</a></center>'

!! ── City map ──
elseif $map_area = 'city':
    *p '<h2 style="text-align:center;">City</h2>'
    *p '<img src="images/system/map/city_labeled.png" style="width:100%;display:block;margin:0 auto;">'
    *p '<center><b>You are here: <<$ARGS[0]>>'
    *p '<br><b>Destinations:</b><br>'
    *p '<a href="exec: gt ''city_center''">City Center</a> | '
    *p '<a href="exec: gt ''city_residential''">City Residential</a> | '
    *p '<a href="exec: gt ''city_industrial''">City Industrial</a><br>'
    *p '<a href="exec: gt ''city_island''">Vasilyevsky Island</a> | '
    *p '<a href="exec: gt ''city_suburbs''">City Suburbs</a><br>'
    *p '<a href="exec: gt ''city_park'', ''start''">Central Park</a> | '
    *p '<a href="exec: gt ''city_lake''">Lake</a> | '
    *p '<a href="exec: gt ''city_canals'', ''start''">Canals</a> | '
    *p '<a href="exec: gt ''city_redlight''">Red Light</a><br>'
    *p '<a href="exec: gt ''uni_grounds''">University</a><br>'
    *p '<a href="exec: gt ''metro'', ''center''">Metro</a> | '
    *p '<a href="exec: gt ''train'', ''center''">Train</a> | '
    *p '<a href="exec: gt ''taxi''">Taxi</a></center>'

!! ── Pavlovsk map ──
elseif $map_area = 'pavlovsk':
    *p '<h2 style="text-align:center;">Pavlovsk / Pushkin</h2>'
    *p '<img src="images/system/map/pavlovsk_labeled.png" style="width:100%;display:block;margin:0 auto;">'
    *p '<center><b>You are here: <<$ARGS[0]>>'
    *p '<br><b>Destinations:</b><br>'
    *p '<a href="exec: gt ''pushkin''">Pushkin</a> | '
    *p '<a href="exec: gt ''pav_commercial''">Commercial</a> | '
    *p '<a href="exec: gt ''pav_residential''">Residential</a> | '
    *p '<a href="exec: gt ''pav_industrial''">Industrial</a><br>'
    *p '<a href="exec: gt ''pav_complex'', ''start''">Five Eight Estate</a> | '
    *p '<a href="exec: gt ''pav_market''">Market</a> | '
    *p '<a href="exec: gt ''pav_park'', ''start''">Park</a><br>'
    *p '<a href="exec: gt ''pav_train_hall''">Train Station</a> | '
    *p '<a href="exec: gt ''bus'', ''community''">Bus</a> | '
    *p '<a href="exec: gt ''road'', ''20''">Highway</a></center>'
end

!! ── Back link ──
*p '<center><br><a href="exec: gt ''' + $ARGS[0] + '''">← Back</a></center>'

--- map_view ---------------------------------
```

## Important QSP Notes
- Each `*p` creates a separate block — must keep related content in single `*p` calls where HTML nesting matters
- Plain `<a href="exec:...">text</a>` renders reliably (complex inline CSS on `<a>` may not)
- `width`, `display:block`, `margin:0 auto` work on `<img>`
- `left(string, n)` for prefix matching
- `$` prefix on variable assignment creates global var
- CRLF line endings required

## Execution Steps
1. Write `scripts/generate_maps.py`
2. Run it → verify 3 output images visually
3. Rewrite `locations/map_view.qsps`
4. `node build.js` → verify no compile errors
5. Launch game → test from: city hub, Pavlovsk hub, metro, sub-location, Gadukino

## Files
| Action | Path |
|--------|------|
| Create | `scripts/generate_maps.py` |
| Create | `images/system/map/world_labeled.png` |
| Create | `images/system/map/city_labeled.png` |
| Create | `images/system/map/pavlovsk_labeled.png` |
| Rewrite | `locations/map_view.qsps` |
| Unchanged | `locations/stat_display_compute.qsps` |
