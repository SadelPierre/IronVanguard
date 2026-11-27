# IRON VANGUARD — Modern Operations

A Call of Duty–style first-person shooter that runs in your browser. Everything it needs is in this folder.

## How to play
1. Open the `IronVanguard` folder.
2. Double-click **index.html**. Chrome or Edge works best, and Firefox works too.
3. Click **CAMPAIGN**, pick a mission and a difficulty, then click **DEPLOY**.
4. When loading finishes, click **CLICK TO BEGIN**. The game captures your mouse; press **Esc** to pause.

You don't need to install anything or run a web server. Keep the `assets` folder next to `index.html`.

## What's new (graphics and fixes update)
- **Respawn fix:** Mission layouts are now identical on every load, so checkpoints never put you inside a shipping container. Loading a save always checks for free space, and if you ever get wedged in geometry the game moves you to the nearest open spot.
- **Enemies:** Soldiers now face and walk the way they're moving. They backpedal and strafe with their legs, and their arms hold the rifle in front of them. They wear mission-specific camo: woodland, desert, urban or night.
- **Iron Harbor:** Real corrugated ISO containers with doors and weathering, lattice ship-to-shore cranes, a quayside with bollards and tyre fenders, crane rails, a chain-link perimeter, road markings, rain-wet reflective asphalt, buoys and cargo ships on the horizon.
- **Desert missions:** Boulders, quiver trees and scrub (they're lighter on the GPU than the old rocks), plus proper burnt-out car and truck wrecks.
- **Operation Midnight:** Wet reflective streets, roller shutters, AC units, security lights, hydrants and trash cans.
- **Everywhere:** Height fog that glows toward the sun (aerial perspective), a more detailed M4 and brighter gun materials so weapons read as metal and polymer.

## Campaign: Black Tide (Ironman)
- **NEW CAMPAIGN** starts the story. Your lives carry across every mission: Recruit 9, Regular 7, Hardened 5, Veteran 3.
- Every death costs a life, and you respawn at your last checkpoint. **Lose your last life and it's Game Over.** The campaign resets to Mission 1, and your run goes into the **Hall of Fame**.
- Earn lives back (up to your maximum) by finishing a mission without dying, or by finding the hidden **dog tag** in each level.
- **MISSION SELECT** replays any mission for practice, with no lives at risk. **Last Stand** is a bonus mode.
- The story is told through briefings and fully voiced radio chatter with subtitles. Every line was recorded with the free Kokoro neural voice model (Apache-2.0) and plays through a radio filter. Enemies shout recorded callouts. You can switch voices off in Settings.

## Team Deathmatch
Main menu → **TEAM DEATHMATCH**: you and 4 Vanguard squadmates against 6 Black Tide bots, with unlimited respawns. The first team to 40 kills wins, or the team ahead when the 10-minute clock runs out. There are two maps (Village and Old Town), and you choose the bot difficulty. You earn XP, and wins post to the leaderboards.

## Controller
Plug in or pair an Xbox or PlayStation controller and press any button.
| Control | Action |
|---|---|
| Left stick / Right stick | Move / Look (with aim assist when aiming) |
| RT / LT | Fire / Aim |
| A | Jump (and skip cutscenes) |
| B | Crouch (toggle) |
| X | Reload (hold to pick up or interact) |
| Y | Switch weapon |
| RB / LB | Frag / Flashbang |
| L3 / R3 | Sprint / Knife |
| D-pad up / down / left | Night vision / Flashlight / Fire mode |
| Start | Pause |
In menus, the D-pad or left stick moves the highlight, **A** selects and **B** goes back. In the Iron Dawn finale, **X** arrests Kessler and **Y** shoots him.

## Phones and tablets
Open the site on a phone or tablet and turn it sideways. A move stick appears wherever you touch the left side, and you drag on the right side to look. The buttons are FIRE (drag it to aim while shooting), AIM, JUMP, CROUCH, RELOAD, USE, NADE, SWAP, KNIFE and NVG. Tap the screen to skip a cutscene. Phones start on Low graphics, and the game goes full screen when a mission starts. The full download is about 30 MB, so use Wi-Fi.

## Career, unlocks and leaderboards
- **XP and 20 ranks** (Private → General). Earn XP for kills (+100), headshots (+50), finishing missions (doubled on Veteran), flawless runs, 60%+ accuracy and **challenges** (CAREER screen).
- **Unlocks:** you start with the M4A1, the pistol, iron sights and two perks. Ranking up unlocks the MP5, M870, AK-47, sniper rifle, magnum, M249, every optic and attachment, Semtex, smoke and the remaining perks. Missions that hand you a specific weapon still give it to you.
- **Mission score** on every completed mission, with a personal best per mission.
- **Online leaderboards** (hosted site): one board per mission plus a campaign board. Set a **callsign** in CAREER; your scores post automatically. They run on a small Vercel Function (`api/leaderboard.js`) that stores scores in Vercel Blob.

## Graphics options
High and Ultra add cinematic depth of field in cutscenes, a sun lens flare on daytime maps and a light sharpening filter. Ultra also uses soft shadows, more ambient-occlusion samples and a 1.5× render scale.

## Realism
- Soldiers (enemies and squadmates) move with **motion-captured rifle animations** from Mixamo: rifle idle, walk, run, crouch, aim and fire, reload, and hit reactions. Legs and upper body blend separately, so a soldier can walk while aiming or reloading.
- **Real recorded gunshots** from The Free Firearm Sound Library (CC0): AR-15 for the M4, AK-47, Swedish K for the MP5, Benelli Nova for the shotgun, Tikka .30-06 for the sniper rifle, Walther PPQ for the pistol, 1911 for the magnum and SKS for the LMG.
- Enemies fall as **physics ragdolls** pushed by the shot or blast that killed them.
- Realistic **blood**: entry and exit sprays, splatter on walls behind targets, drips, and pools under bodies. You can reduce it or turn it off in Settings → Blood & gore.
- Smarter enemies: they reload, lay down suppressing fire, flank you, push when you reload, fall back when losing, shout callouts and sometimes throw your grenades back.

## Analytics
The hosted site uses **Vercel Web Analytics** (enabled) and **Google Analytics 4** (property *Iron Vanguard Game*, ID `G-7D53PMNP8E`). Gameplay events are tracked too: campaign starts, mission starts, deaths, completions and Game Overs. Nothing is tracked when you open the game from your folder.

## Missions
| # | Mission | Setting | Objectives |
|---|---------|---------|------------|
| 01 | Boot Camp | Training range, morning | Hip-fire, long-range shooting, grenades, shoot-house clearing, timed finish |
| 02 | Operation Dust Devil | Desert village, midday | Infiltrate, eliminate all hostiles, download the intel, survive reinforcements, reach the LZ |
| 03 | Operation Overwatch | Desert ridge at dawn | Sniper support with bullet drop and crosswind. Clear the rooftops, cover your squad, kill the enemy sniper, hold the ridge |
| 04 | Operation Iron Harbor | Dockyard at sunset | Plant C4 on two caches, get clear of the blast, fight the QRF to the extraction boat |
| 05 | Operation Deep Freeze | Arctic radar station, night blizzard | Stealth with suppressed weapons: jam the mast, breach the control room, steal the flight logs, blow the radar dome |
| 06 | Angel of Death | AC-130 gunship | Thermal camera, three guns. Cover your squad to the LZ and destroy the technicals. No friendly fire |
| 07 | Operation Midnight | Night-time city streets | Clear the safehouse, free the hostage, escort them to extraction |
| 08 | Burn Notice | Old Town at dawn, thunderstorm | Escape the burning safehouse, breach the door, beat the kill team, reach Okafor |
| 09 | Black Tide | Cargo ship in a North Sea storm | Board the ship, search the hold, breach the bridge, steal the navigation log, sink her and jump |
| 10 | Convoy | Mountain pass at sunset | Plant an IED, ambush the warhead convoy from the ridge, kill the escort and reinforcements, secure the warhead |
| 11 | Skyfall | Airfield at night | HALO jump from 700 m, clear the hangar, kill the runway lights, shoot out the engines of Rask's plane before it takes off |
| 12 | Iron Dawn | Fortress at sunrise | Blow the gate, silence the machine-gun towers, breach the keep, disarm the warhead before the clock runs out, then decide Kessler's fate |
| — | Last Stand (bonus) | Desert village at dusk | Survive 5 waves and resupply at the ammo crate |

**Cutscenes and endings:** every new mission opens and closes with an in-engine cinematic (press **Space** to skip). Iron Dawn has **two endings**, depending on what you do with Kessler. After the campaign, the credits roll and your run goes into the Hall of Fame with the ending you chose.

**Squadmates** fight beside you in many missions. **Breach and clear:** hold the interact key at a marked door to kick it in, which triggers slow motion. **Weather:** snow, rain with lightning, wind and dust. **HALO jump:** steer with WASD and the mouse, open the chute with Space.

## Loadout (menu: LOADOUT)
- **Primary weapons:** M4A1, AK-47, MP5, M870 shotgun, M249 LMG, Bolt-Action 7.62 sniper (scoped; hold breath with Shift)
- **Secondary weapons:** P38 service pistol, D50 Magnum
- **Attachments:** Red Dot, Holographic or 4x ACOG optic; Suppressor or Compensator; Vertical Grip or Laser; Extended Mag
- **Lethal:** Frag grenade or Semtex. **Tactical:** Flashbang or Smoke.
- **Perks (choose 2):** Stopping Power, Sleight of Hand, Juggernaut, Lightweight, Steady Aim, Scavenger

## Controls (all rebindable in CONTROLS)
| Default key | Action |
|-----|--------|
| WASD / Mouse or Arrow keys | Move / look |
| Left click or Enter | Fire (hold for automatic) |
| Right click (hold) or Z (toggle) | Aim down sights |
| Shift | Sprint (or hold breath while scoped) |
| Space | Jump |
| C or Ctrl | Crouch (press while sprinting to slide) |
| R | Reload |
| **F** (or V) | **Knife: lunges at nearby enemies for a one-hit kill** |
| **E (hold)** | **Interact: objectives, pick up weapons, resupply** |
| 1 / 2 / Mouse wheel / X | Switch weapon |
| B | Fire mode |
| G / Q | Lethal / tactical grenade |
| T / N | Flashlight / night vision |
| Esc | Pause (Save game, Load, Restart, Settings, Controls) |

## Pickups and supplies
- Fallen enemies drop their rifle. Walk over it to take its ammo if you carry the same gun, or hold **E** to swap it for the gun in your hands. Your old gun drops on the ground.
- Enemies sometimes drop **ammo boxes** and **grenades**. Walk over them to collect.
- Glowing **green supply crates** in every mission fully refill your ammo and grenades. They recharge after 25 seconds.

## Saving
- The game saves a **checkpoint** automatically every time you complete an objective.
- You can also **SAVE GAME** from the pause menu at any time. This isn't available in Last Stand.
- **CONTINUE** on the main menu resumes your last save. Finishing a mission sets Continue to the next one.
- If you die, use **LAST CHECKPOINT** on the results screen to try again from your save.
- Saves are stored in your browser, so the online version and your folder copy keep separate saves.

## Playing on a laptop touchpad
- Use **Z** to toggle aim and tap the touchpad (or press **Enter**) to fire, so you never have to hold two buttons at once. You can rebind fire to any key in CONTROLS.
- The **arrow keys** turn your view if moving the touchpad while pressing WASD is awkward.
- In **Settings**, turn on **Aim toggle** to make a single right-click switch aiming on or off.
- On Windows, go to Settings → Bluetooth & devices → Touchpad → Taps and set **Touchpad sensitivity** to **Most sensitive**. Otherwise Windows ignores the touchpad while you hold movement keys.

## Performance
The default graphics preset is **High**: 4K shadow maps, ambient occlusion (GTAO), bloom and SMAA. On a laptop or an older GPU, go to **SETTINGS** and choose **Medium** or **Low**, or lower the **Render scale**. **Ultra** renders above native resolution for powerful desktop GPUs.

## How it is built
- **Engine:** [three.js](https://threejs.org) r187 (MIT), bundled with esbuild into `game.js`
- **Art:** CC0 PBR textures, HDRI lighting and 3D props from [Poly Haven](https://polyhaven.com), plus the animated soldier from the three.js examples (Mixamo). Assets are embedded in `assets/*.js` so the game runs straight from disk.
- **Audio:** All sound is synthesized when the game starts. That covers layered gunshots with environment reverb, reloads, footsteps by surface, explosions, bullet whizzes, ambience and music, with 3D HRTF positioning.
- **Systems:** Enemy AI handles perception, squad callouts, cover, flanking, grenades and A* pathfinding. Gameplay also includes CoD-style regenerating health, a radar, a compass and waypoints, hitmarkers and damage indicators, and destructible explosive props.

See `FREE_ASSET_SOURCES.md` for where to get more free art and sound to upgrade the game.
