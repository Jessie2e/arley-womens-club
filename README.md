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

## About and design pages
The shared navigation now links to about.html and our-design.html. Our Design replaces the former Arley Day navigation item; existing festival content remains on the homepage. The About page condenses supplied club copy into the mission, four expandable focus areas, and a membership invitation. The design story compares assets/logo-current.png with the refreshed bouquet, explains the subtle W, and shows coordinated variations.

Calendar, Contact, Join, Members, and Support destinations have clearly labeled holding pages. Authentication, payment and newsletter submission are not connected. Newsletter feedback reports that no email was submitted. Officer names and time-sensitive counts from the supplied About copy are omitted pending confirmation. Optimized transparent brand assets are in assets/web/brand; the unused early brand-board image containing EST. 2022 is not shown. All displayed identity dates are EST. 1972.

## Potential club collection
Our Design includes an illustrative merchandise collection: mock-neck sweatshirt, hat, stationery, mug and tote. These are concepts for the design pitch, with proposed donation thank-you/member gifting and fundraising purchases. No products, prices, campaign amounts or availability are committed. Image generated using the built-in image-generation tool with the bouquet as reference; displayed EST. 1972. The product idea row supports touch scrolling, arrow buttons and keyboard arrows on phones/tablets.
