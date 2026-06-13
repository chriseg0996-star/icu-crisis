# Avatar layer assets

The game stacks transparent PNG layers from this folder to render the chibi
avatar (profile + shop). The system degrades gracefully: any missing file is
hidden at runtime (a 🧑‍⚕️ fallback shows until the base body loads), so you can
drop files in incrementally.

## Spec
- **Size:** 512 × 640 px, transparent background (PNG-32).
- **Registration:** every layer must share the same canvas + head/torso anchor
  so they stack perfectly aligned. Use `base_m_medium.png` as the alignment
  reference.
- **Style:** MapleStory-style chibi — big head, thick outlines, flat shading.
- **Z-order** (back → front): base → outfit → badge → accessory → facial hair →
  hair → glasses → head wear → mask. The frame renders on top of everything.

## Required filenames
Resolved in `index.html` by `AVATAR_STACK` / `AVATAR_FRAME`. `none` values use
no file.

### Base body (6) — `base_{body}_{skin}.png`
base_m_light, base_m_medium, base_m_dark, base_f_light, base_f_medium, base_f_dark

### Hair (11) — `hair_{id}.png`  (value `none` = bald, no file)
hair_short, hair_buzz, hair_ponytail, hair_long, hair_curly, hair_bun,
hair_mohawk, hair_sidepart, hair_senior_gray, hair_blonde, hair_blonde_long

### Facial hair (4, male only) — `facial_hair_{id}.png`  (`none` = no file)
facial_hair_stache, facial_hair_stubble, facial_hair_beard, facial_hair_goatee

### Glasses (5) — `glasses_{id}.png`  (`none` = no file)
glasses_round, glasses_square, glasses_aviator, glasses_goggles, glasses_monocle

### Accessory (5) — `acc_{id}.png`  (`none` = no file)
acc_stethoscope, acc_id_badge, acc_clipboard, acc_coffee, acc_watch

### Outfit (shop) — `outfit_{cosmeticId}.png`
outfit_scrubs_teal, outfit_scrubs_navy, outfit_scrubs_purple, outfit_scrubs_red,
outfit_scrubs_white, outfit_scrubs_gold, outfit_pijama_green, outfit_pijama_blue

### Chest badge (shop) — `{cosmeticId}.png`  (`badge_none` = no file)
badge_icu, badge_heart, badge_steth, badge_gold_star  *(badge_gold_star is the
file for the `badge_legend` cosmetic)*

### Portrait frame (shop) — `{cosmeticId}.png`  (`frame_none` = no file)
frame_silver, frame_gold

### Optional head wear / mask (supported, not yet in the picker) — `head_{id}.png` / `mask_{id}.png`
head_surgical_cap, head_nurse_cap, head_beanie, head_hairnet,
mask_surgical, mask_n95, mask_o2, mask_faceshield

> Note: the reference contact sheets use a few alternate names
> (`fh_goatee`, `outfit_pajama_blue`, `frame_bronze`/`frame_ecg`). Export the
> individual layers using the canonical names above, or update the resolver in
> `index.html` (`AVATAR_STACK`, `AVATAR_ALIAS`, `AVATAR_FRAME`).
