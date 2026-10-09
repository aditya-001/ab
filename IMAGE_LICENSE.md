# Image Licensing & Source Notes

## Current App Images

The birthday card now uses local anime-style images stored in:

```text
public/assets/anime/
```

These were copied from the workspace `assets/images` folder so the React app can render them reliably without hotlinking Google image search result pages.

## Reference Links

The 50 links provided by the user are preserved in:

```text
src/data/animeAssets.js
```

They are attached to gallery items as source/reference links. Google Images links are search pages, not direct image files, so they should not be used as `<img src>` values.

## Before Publishing

Verify that every local image is owned by you or licensed for your intended use. Replace any uncertain image with your own artwork or properly licensed stock assets.
