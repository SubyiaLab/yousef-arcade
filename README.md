# Yousef Arcade

Games designed by Yousef and built with Claude. Live at **https://subyialab.github.io/yousef-arcade/**

## How the site works
- `index.html` is the arcade home page. It reads the game list from `games.json`.
- Each game lives in its own folder: `games/<slug>/index.html`, plus any data files it loads (textures, models, sounds).
- GitHub Pages republishes the site automatically about a minute after every push to `main`.

## Adding or updating a game
See [SYNC.md](SYNC.md). In short: copy the game's published files into `games/<slug>/`, add or update its entry in `games.json`, push.

## Hiding a game
Set `"hidden": true` on its entry in `games.json`. The files stay in the repo, but the game no longer shows on the home page.
