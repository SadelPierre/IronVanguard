# Free resources for Iron Vanguard (and how to upgrade it)

## Already used in this game
| What | Source | License |
|------|--------|---------|
| 3D engine | three.js r187 — threejs.org | MIT |
| PBR textures (15 sets: sand, grass, asphalt, plaster, brick, concrete, containers, metal, wood…) | Poly Haven — polyhaven.com/textures | CC0 |
| HDRI sky lighting (day, noon, sunset, night) | Poly Haven — polyhaven.com/hdris | CC0 |
| 3D props (scoped bolt-action rifle, service pistol, crates, barrels, propane tanks, jerrycans, barriers, car, rocks, street lamps, generator…) | Poly Haven — polyhaven.com/models | CC0 |
| Animated soldier (Idle/Walk/Run) | three.js examples `Soldier.glb` (Mixamo character) | Mixamo terms, free for projects |
| Water normal map | three.js examples | MIT |
| All sound effects and music | Procedurally synthesized in `audio.js` | Yours |

## Best free sources to make it even more realistic
### 3D models and characters
- **Poly Haven** (CC0) is photoreal and has more props, rocks, trees and buildings.
- **Quaternius** (CC0) has game-ready modular characters, weapons and military kits.
- **Kenney** (CC0) has large consistent asset packs.
- **Mixamo** (free) has hundreds of soldier animations: rifle aim, death, crouch, reload and so on. Download them as FBX and convert with Blender to GLB.
- **Sketchfab** (filter: Downloadable + CC0/CC-BY) has high-detail rifles and military gear. Check the license on each model.

### Textures and HDRIs
- **ambientCG** (CC0) has 2,000+ PBR materials and 400+ HDRIs.
- **Poly Haven** (CC0) has higher resolutions (2K–8K) if your GPU can take them.
- **ShareTextures** and **cgbookcase** (CC0) are good for extra variety.

### Sound
- **The Free Firearm Sound Library** (CC0, OpenGameArt) has real recordings of rifles, pistols, shotguns and mechanical handling.
- **Snake's Authentic Gun Sounds** (free, itch.io) are real firearm recordings, with and without reverb.
- **Freesound.org** has CC0 and CC-BY ambience, explosions and footsteps. Check the license on each file.
- **Sonniss GDC Game Audio Bundles** (free, royalty-free) are tens of GB of professional SFX.

## How to drop in new assets
1. Put the files in the project's asset folders (`opt/tex`, `opt/models`, `opt/hdri`). GLBs work best when optimized with `gltf-transform optimize --texture-compress webp`.
2. Run `node build.mjs`. It packs everything into `assets/*.js` so the game still opens with a double-click.
3. Reference new models with `world.prop('model_name', x, z)` inside `levels.js`.
