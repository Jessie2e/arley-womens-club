# Arley Women's Club — Redesign Concept V2

Static HTML/CSS/JS concept. Designed by 2e Studio.

## Local preview
Run `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000.

## Media draft
Original files remain in assets/. The site uses optimized copies in assets/web/.
The hero plays silent seven-second excerpts of the playground, fire department, and library at 65% speed, with light blur and centered copy. Scenes advance when each clip ends; visitors can select scenes or pause. Reduced-motion preferences start paused. Videos load on demand and pause in hidden tabs.
An elementary school video was not included in the supplied files and can be added later.
Photos are WebP, resized to at most 1600px; section images lazy-load.

Forms, donations, calendars, member authentication, and content management remain concept placeholders.

## Hero workshop
Open `/media-editor.html` to scrub compressed full-length videos, set start/end seconds, and preview at 65% playback speed. Saving stores a browser-local draft; refresh the homepage on the same host/port to see it. The workshop displays settings to send back for final trimmed exports. Reset restores the small default clip. Logo choices are also browser-local; the default is emblem with wordmark.
Current baked excerpts: playground 12–19s, fire department 1–8s, library 1–8s, elementary 8–15s (or to recording end if shorter).

Approved timing pass: playground 17–27s and elementary 18–23s are baked into the optimized hero clips. Matching browser drafts use those small clips; new timing experiments still use full preview copies. Timing record: assets/web/hero-clips.json.
The nav uses the supplied arleywomensclublogo.jpg, optimized as logo-floral.webp. Botanical stem artwork replaces spiral accents and remains beneath section content.
