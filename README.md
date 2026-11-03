# IRON VANGUARD — Modern Operations

A Call of Duty–style first-person shooter that runs in your browser. Everything it needs is in this folder.

## How to play
1. Open the `IronVanguard` folder.
2. Double-click **index.html**. Chrome or Edge works best, and Firefox works too.
3. Click **CAMPAIGN**, pick a mission and a difficulty, then click **DEPLOY**.
4. When loading finishes, click **CLICK TO BEGIN**. The game captures your mouse; press **Esc** to pause.

You don't need to install anything or run a web server. Keep the `assets` folder next to `index.html`.

## Missions
| # | Mission | Setting | Objectives |
|---|---------|---------|------------|
| 00 | Boot Camp | Training range, morning | Hip-fire, long-range shooting, grenades, shoot-house clearing, timed finish |
| 01 | Operation Dust Devil | Desert village, midday | Infiltrate, eliminate all hostiles, download the intel, survive reinforcements, reach the LZ |
| 02 | Operation Iron Harbor | Dockyard at sunset | Plant C4 on two caches, get clear of the blast, fight the QRF to the extraction boat |
| 03 | Operation Midnight | Night-time city streets | Clear the safehouse, free the hostage, escort him to extraction. Night vision and a flashlight are available. |
| 04 | Last Stand | Desert village at dusk | Survive 5 waves and resupply at the ammo crate |

## Loadout (menu: LOADOUT)
- **Primary weapons:** M4A1, AK-47, MP5, M870 shotgun, M249 LMG, Bolt-Action 7.62 sniper (scoped; hold breath with Shift)
- **Secondary weapons:** P38 service pistol, D50 Magnum
- **Attachments:** Red Dot, Holographic or 4x ACOG optic; Suppressor or Compensator; Vertical Grip or Laser; Extended Mag
- **Lethal:** Frag grenade or Semtex. **Tactical:** Flashbang or Smoke.
- **Perks (choose 2):** Stopping Power, Sleight of Hand, Juggernaut, Lightweight, Steady Aim, Scavenger

## Controls
| Key | Action |
|-----|--------|
| WASD / Mouse | Move / look |
| Left click / Right click | Fire / aim down sights |
| Shift | Sprint (or hold breath while scoped) |
| Space | Jump |
| C or Ctrl | Crouch (press while sprinting to slide) |
| R | Reload |
| 1 / 2 / Mouse wheel / X | Switch weapon |
| B | Fire mode |
| G / Q | Lethal / tactical grenade |
| V | Melee |
| F (hold) | Interact: download, plant C4, free hostage, resupply |
| T / N | Flashlight / night vision |
| Esc | Pause |

## Performance
The default graphics preset is **High**: 4K shadow maps, ambient occlusion (GTAO), bloom and SMAA. On a laptop or an older GPU, go to **SETTINGS** and choose **Medium** or **Low**, or lower the **Render scale**. **Ultra** renders above native resolution for powerful desktop GPUs.

## How it is built
- **Engine:** [three.js](https://threejs.org) r187 (MIT), bundled with esbuild into `game.js`
- **Art:** CC0 PBR textures, HDRI lighting and 3D props from [Poly Haven](https://polyhaven.com), plus the animated soldier from the three.js examples (Mixamo). Assets are embedded in `assets/*.js` so the game runs straight from disk.
- **Audio:** All sound is synthesized when the game starts. That covers layered gunshots with environment reverb, reloads, footsteps by surface, explosions, bullet whizzes, ambience and music, with 3D HRTF positioning.
- **Systems:** Enemy AI handles perception, squad callouts, cover, flanking, grenades and A* pathfinding. Gameplay also includes CoD-style regenerating health, a radar, a compass and waypoints, hitmarkers and damage indicators, and destructible explosive props.

See `FREE_ASSET_SOURCES.md` for where to get more free art and sound to upgrade the game.
