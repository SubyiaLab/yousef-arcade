# Syncing games from Claude to this site

Yousef's games are made as Claude artifacts. This file is the procedure Claude follows to copy them here.

## Source of truth
`games.json` maps each site game to its Claude artifact:

```json
{
  "slug": "megalodon",
  "name": "Megalodon",
  "artifact": "https://claude.ai/code/artifact/<id>",
  "genre": "Action",
  "blurb": "One short sentence a 10-year-old would understand.",
  "colorA": "#0b6fa4", "colorB": "#06264d",
  "pattern": "waves",
  "updated": "2026-10-17"
}
```

- `genre` is one of: Action, Shooter, Sandbox, Racing, Sports, Adventure, Puzzle.
- `pattern` is one of: stripes, dots, grid, waves, rays.
- `updated` is the date of the artifact version copied here (YYYY-MM-DD).
- Optional `"hidden": true` keeps a game off the home page.

## Procedure
1. List the account's artifacts (Artifact tool, `action: "list"`).
2. For each artifact already in `games.json`: if its last update is newer than `updated`, re-export it.
3. For each artifact NOT in `games.json`: add it only if it is clearly one of Yousef's games (a playable game page). Skip slide decks, documents, dashboards, study material and anything work-related. If unsure, skip it and mention it in the run summary.
4. Export = list the artifact's published files (`scope: "files"`), read `index.html` and every other file (`paths`), and copy them into `games/<slug>/` keeping the same relative paths. Single-page artifacts only need `index.html`.
5. Update `games.json`, commit with a message like `Add <name>` or `Update <name>`, and push to `main`.
6. Never delete a game folder. Never change a game's code while syncing.

## Exclusions
- Around the World Trivia: a slide deck, not a web game.
- Older duplicates: the first Sky Smash Remastered (89e190a7…) and the original Claude FC (92d27ae7…).
- Brickverse and The Ugly Truth: removed from the site by the owner. Do not re-add.
