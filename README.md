# A World of Bits — rebuild

A reorganized version of `webhelper.brown.edu/rose/`. Static HTML and CSS,
no build step, no framework, no JavaScript required. Open `index.html` in a
browser and it works.

---

## Try it in two minutes

```sh
cd worldofbits
sh get-assets.sh          # pulls every image off your live server, in one go
python3 -m http.server 8000
```

`get-assets.sh` creates `img/`, `press/` and `etmightwrite/` and fills them.
It skips files you already have, so it's safe to re-run. What it *can't* fetch
is listed at the end of its output: the archived press HTML, the radio MP3s,
`papers/`, and `vitarose.pdf` — copy those across yourself.

Then visit <http://localhost:8000>. (You can also just double-click
`index.html`; the local server is only so relative paths behave exactly the
way they will on the real site.)

---

## What's here

```
worldofbits/
├── index.html          front page — hero, banner graph, news, bio, threads
├── research.html       the six research threads, each with its own links
├── cosmic.php          the rebuilt Cosmic Communications page + live counter
├── etmightwrite.html   the cartoon contest, as a judged gallery
├── _template.html      blank page in this style, for restyling what's left
├── counter.php         unique-visitor counter backend (see SETUP-COUNTER.md)
├── papers.html         favorites with commentary, molecular trail, archive
├── teaching.html       the beer-and-pizza saga, courses, student projects
├── people.html         family, brothers, students, collaborators
├── css/site.css        the entire stylesheet, heavily commented
├── img/                images + favicon.svg
├── get-assets.sh       one-command image fetcher
├── SETUP-COUNTER.md    how to switch the counter on
└── README.md           this file
```

`cosmic.php` expects two image paths that already exist on your server:
`press/040902cover.jpg` and `etmightwrite/caroline_angelo6.jpg`. Copy the
`press/` and `etmightwrite/` directories across alongside it.

Five pages instead of one. The old page had roughly a hundred links on a
single scroll; anything past the bio was effectively invisible. Now each
thread gets a room of its own and the front page's only job is to make
someone want to open a door.

---

## What I kept, deliberately

- **The banner.** You said you like it, and you're right to. It's now the
  signature element rather than a row of pictures: the thumbnails sit as
  nodes on a shared hairline, with a marker under each. Hover lights the
  node. Everything on this site is nodes exchanging information along edges,
  so the page says so structurally instead of decoratively.
- **The voice.** The bio, the beer-and-pizza theorem, "tricked into giving
  me the ONYX Society Award," "magnum compendiums that no one might ever
  read," the levitated center conductor, the Rutgers-students-are-masochists
  paragraph. Mostly verbatim, lightly tightened. Where I wrote new connective
  copy I tried to write it in your register, not mine — flag anything that
  reads as somebody else's voice and I'll fix it.
- **The epigraph.** "What are all these interacting elements saying to one
  another, how are they saying it, and can I join the conversation?" That
  sentence was buried in a table halfway down the old page. It's now the
  hero. It's the thesis of your whole career and it deserves to be the first
  thing a stranger reads.

---

## What I changed

**Structure.** Old order was: banner, quote, news, bio, awards saga, then a
long undifferentiated cascade — CDI biology, Adinkras, talking particles,
wireless, sousveillance, NSF reviews, NOVA, cosmic communications, radio
astronomy, undergrad projects, talk timer, Frenkiel's memoir, FCC policy,
DIMACS slides, random journal papers, courses, family, portrait. Genuinely
good material, but a reader had no way to tell what mattered.

New order: hero → what's live now → who you are → six research threads →
teaching → odds and ends. Each thread card on the front page is a one-
paragraph hook that opens onto a full section in `research.html`.

**Cuts and merges.** Duplicate links (the Nature story appeared five separate
times, `cosmic.php#PRESS` four times) are consolidated. Empty `<hr>` runs are
gone. The "Publication Trickle" is now a dated sequence on `papers.html`. The
sousveillance musing, the declined-proposal-as-public-service, and the
Andromeda Strain excerpt survive — they're some of the most human things on
the site — they're just no longer interleaved with capacity bounds.

**Design — "Petrol & Coral".** Deep sea-blue-green ground with coral for links
and live things, gold for category labels. Dark enough to read comfortably for
a long stretch, light enough not to feel like a void.

**No pattern anywhere.** Depth comes from two very large, very soft colour
blooms fixed behind the page — non-repeating, nothing for the eye to catch on.
There is no dot field and no rail running down the left. Sections are separated
by space and by a short accent bar above the heading. Link rows carry a single
hairline *between* items, never above and below every row: rules at even
intervals down a page read as a ledger and fight the text.

**Every colour comes from one block** at the top of `css/site.css`. Swapping
those values moves the whole site. The rejected directions live in
`style-preview.html`, `color-preview.html` and `dark-preview.html`.

**The banner** is packed flush — tiles butt up against each other with a 6px
gap, each tile's width following its own picture's aspect ratio, every row
justified to both margins. `js/strip.js` measures the loaded images and sets
the sizes; the stylesheet lays out a tidy equal-height row without it.

**One banner tile is animated:** Morphogenesis, `img/embryo_dev.gif` — ten SEM
micrographs of a *Drosophila* embryo sliced from the montage, registered so it
develops in place, dissolved together, fading to black at the loop.

The collisions animation was tried in the banner and **taken back out**. It
worked, but it cost the splash page some scientific gravitas: an illustration
by a real artist argues a point, while a simulation merely demonstrates one,
and Huppler's *Art and Nature* is doing the harder job better. `Huppler_9_1951.jpg`
is back in the Particle conversations tile.

`img/collisions.gif` now lives on `research.html`, in the **Talking particles**
section, between the prose and the citations. Two deliberate choices there:

**Placed above the papers list, not below it.** Sitting after the citations it
had the last word, and the section ended on motion; above them it illustrates
the argument and lets the Miller-Dickson paper be the thing you leave on.

**Ground darkened to `#424C4F`.** This mattered more than size. The animation's
field used to be mid-grey against the page's deep petrol — a large, bright
rectangle in dark surroundings, which pulls the eye before a word is read.
Shrinking it would only have produced a smaller bright rectangle. Bringing the
field close to the page's own tone lets the figure sit *in* the page rather
than on top of it; mean luminance dropped from about 140 to 79, against a page
ground of 33. The white disks read better against the darker field, not worse.

**On its size.** Still at its native 560px rather than stretched to fill the
46rem figure column: the speech bubbles carry 13px text and upscaling a GIF
softens exactly what you are meant to read. If it still feels too dominant,
the fix is *not* CSS scaling — the physics box and the drawing scale are
independent in `tools/collide3.py`, so it can be re-rendered at 440px with the
bubble text at its current pixel size, which makes the labels relatively
*larger* while the figure gets smaller.

**The embryo tile is padded, not cropped.** Rotated, the embryo is aspect 0.46
— so narrow that MORPHOGENESIS (thirteen characters, no break point) would not
fit and simply overflowed. The GIF canvas is therefore padded sideways with
black to aspect **0.80**, which widens the TILE while leaving the embryo itself
untouched. Simulated at 1090px the row now reads:

```
Interference 190  Morphogenesis 113  Interstellar 107
Adinkras 183      Particle 263       Chemistry 204
```

113 px against the ~104 the caption needs. Adjust `PAD_ASPECT` in
`tools/embryo_series.py` to taste — larger means more black matting and a wider
tile.

The stylesheet also gained `overflow-wrap: anywhere` on `.strip .label`, so at
phone widths the word breaks onto a second line instead of spilling out of its
tile, and the mobile label size and tracking were tightened a notch.

`img/embryo_dev_wide.gif` is still there: the same animation unrotated at
aspect 2.16, no matting, if you decide the sideways version reads better.
Switching is one line in `index.html`.

**Accessibility caveat.** Animated GIFs cannot be paused by CSS, so
`prefers-reduced-motion` has no effect on them. Two tiles now move
continuously for every visitor. If that matters, the fix is a static poster
image swapped for the GIF via a small script honouring the media query — say
the word and I will add it.

**`Huppler_9_1951.jpg` is now unused** by any page, since the collisions
animation took over the Particle conversations tile. It stays in `img/` and in
`get-assets.sh` in case you want it back.

**Quality floor.** Responsive to phone width, visible keyboard focus rings,
`prefers-reduced-motion` respected, semantic landmarks, alt text on every
image, no layout that depends on JavaScript.

---

## Before you port it

1. **Check the link targets.** I preserved every destination I could find in
   the old page, but I converted the absolute
   `brown.edu/Departments/Engineering/Labs/Rose/...` URLs to relative paths
   where the target looked like it lives alongside the page. Those relative
   links will 404 locally until the real files are in place — that's expected
   and it's the fastest way to see which ones you still need.
2. **A few old links are dead upstream**, not from my edits: the NOVA segment
   URL, `s337311667.onlinehome.us`, the FCC realaudio archive, `echronicle.org`,
   `tryecruit.com`, and the Nite-Fly and Huffington Post references. I pointed
   the ones I could at stable replacements and left the rest for you to
   decide about — some may be worth cutting outright.
3. **`vitarose.pdf`** is linked from every page's nav. Drop the new CV there.
4. **Fonts** load from Google. If Brown would rather self-host, download the
   three families and swap the `<link>` for a local `@font-face` block; the
   CSS variables won't need to change.
5. **The meta description and Open Graph tags** on the old page were
   accumulated over twenty years and included a very long keyword list plus
   an `og:image` pointing at `bearclaw2.jpg` with the title "Bruno." I wrote
   fresh, short descriptions. Add an `og:image` when you pick one — the
   Nature cover is the obvious candidate.

---

## Link audit — August 2026

Search `VERIFY` in the HTML to find every link I flagged. Twelve markers, all
in HTML comments, invisible to visitors.

**Fixed (verified against current sources):**

| Was | Now |
|---|---|
| `brown.edu/thinking-out-loud` | `thinking-out-loud.brown.edu` (your correction) |
| `cartooncomp.html` | `etmightwrite.html` — see below |
| `labs.ee.psu.edu/faculty/yener` | `ece.osu.edu/people/yener.5` — Aylin Yener moved to Ohio State in Jan 2020, where she holds the Roy and Lois Chope Chair |
| `ece.umd.edu/clark/faculty/374/…` | `ece.umd.edu/faculty/ulukus` — wrong faculty ID; she's now ECE Department Chair |
| `jacobsschool.ucsd.edu/…` | `bioengineering.stanford.edu/people/todd-coleman` — **Todd is at Stanford now**, not UCSD. I rewrote that paragraph; check that you're happy with it |
| `stemjazz.org` | `sites.brown.edu/stemjazz/` — see caveat below |
| assorted `http://` | `https://` where the host supports it (Wikipedia, MIT EECS, brown.edu) |

**The cartoon contest.** It's alive at
`webhelper.brown.edu/rose/etmightwrite.html` — that's the *results* page, with
Caroline Angelo's first-place entry, the Zhen Li and Xiangpeng Jing animated
GIFs, the honorable mentions, and Dick Frenkiel's dropped-rock cartoon. Much
better destination than the old `cartooncomp.html` announcement, so that's
where I now point. Copy `etmightwrite.html` and its `etmightwrite/` image
directory across; there's a commented-out stanza at the bottom of
`get-images.sh` that fetches the ten images.

**Removed rather than left broken:**

- The OZMA portrait no longer links to `s337311667.onlinehome.us` — that
  photo-gallery host is long gone. The picture and the credit stay.
- The ENGN 1580 Canvas link. It requires a Brown login, so it was a dead end
  for every visitor. Course name kept as plain text.
- The deep link to Todd Coleman's 2011 epidermal-electronics post.

**Flagged, not changed — these need your eye:**

- `coewww.rutgers.edu/egc/` and `egc.rutgers.edu/news/…` — Rutgers EGC pages,
  almost certainly gone. The awards are the point, not the links.
- `videoieeetv.east.s3.amazonaws.com/…` — your IEEE acceptance speech, on a raw
  S3 bucket. Worth downloading a copy before it evaporates.
- `antiope.com/publications.html` — Gregory Wright's RFID overview.
- `gb.nrao.edu/OZMA@50/agenda.shtml`.
- `birs.ca/…/201410271538-Rose.mp4` — your Banff talk video.
- `randalpinkett.com`, `bctpartners.com`.
- The NOVA segment and NSF Discoveries deep links were already dead on the old
  page; I pointed both at the site indexes as placeholders.
- Saira Mian's LBL lab page is gone; I'm pointing at lbl.gov generally.
- **STEMJazz:** `sites.brown.edu/stemjazz/` is live but says "please visit our
  new website." There's also a `stemjazz.com` and the `stemjazz.org` you had.
  Three candidates, and I can't tell which is canonical. Your call.

I did not verify the ~60 relative links to your own files (`papers/*.pdf`,
`IA.html`, `infostations.html`, `talktimer.php`, the course pages). Those will
tell you themselves as soon as the files are in place.

---

## Pages rebuilt

Everything is now in the site style:

`index.html` · `research.html` · `papers.html` · `teaching.html` ·
`people.html` · `cosmic.php` · `etmightwrite.html` · `IA.html` ·
`infostations.html` · `OpEdtoSafire.html` · `Advertisement.html` ·
`Alien_Fears.htm` · `Frodo_and_Rat.html` · `talktimer.html` ·
`papers/aiming.html` · `papers/cosmicallyselfish.html` · `papers/etscam.html`

### talktimer — read this before you deploy it

**Your original `talktimer.php` could not be retrieved.** It is not indexed by
any search engine, and the fetch tool will only open a URL that has appeared in
a search result first, so there was no route to it. What ships here is a **new
timer written from scratch**, not a conversion of yours. Your original is
untouched on the server; these files will overwrite it, so keep a copy first if
you want the option of going back.

**Two builds of the same timer**, generated from one shared source so they
cannot drift apart:

| file | |
|---|---|
| `talktimer.php` | **self-contained** — every style inlined, no dependencies. Runs from a USB stick or a conference laptop with no server. Contains no PHP; the name preserves your old URL and anyone's bookmarks. |
| `talktimer.html` | **site-integrated** — links `css/site.css`, so it inherits the palette when the site changes. |

`index.html` points at the `.php`. **Keeping both is a maintenance trap** — pick
one and delete the other, or they will diverge the first time either is edited.
If you want the timer to track the site's look, keep the `.html` and repoint
that one link; if you want it portable, keep the `.php` and drop the `.html`.

Green while there is room, amber, then red, and past the end it reverses and
counts **up** — at that point the useful number is how far over the speaker is.
All three thresholds are settable: talk length, amber-at and red-at, each in
minutes and seconds, defaulting to 20:00 / 5:00 / 1:00 and shown in the fields
at startup. The presets still work and stay in sync with the fields.

Order is enforced rather than trusted: 0 &lt; red &lt; amber &le; talk. Set amber
longer than the talk and it clamps to the talk; set red at or beyond amber and
it clamps just inside. Seconds over 59 roll up, so typing 90 into a seconds
field gives 1:30.

Space starts and pauses, `R` resets, `F` is presentation mode, `Esc` leaves it,
`Enter` in any field applies it. Optional chime at amber, at red, and twice at
time — synthesised in the browser, so there is no audio file to lose. Holds a
screen wake-lock while running.

### Frodo_and_Rat

`img/MITRing.jpg` now ships in the zip — nothing to fetch. It is the *Lord of
the Rings* teaser poster with an MIT Brass Rat composited into Frodo's palm in
place of the One Ring, which is a considerably better joke than the picture I
had assumed it was, and the caption is written accordingly.

**One thing to consider before the page is public.** That is a modified New
Line Cinema poster. As a one-off visual gag on a personal academic page it has
sat there unremarked for twenty-odd years, and a parody argument is available;
but it is someone else's copyrighted artwork, and worth a moment's thought now
that the site is being refreshed rather than merely inherited. Same category of
question as the SEM micrographs, and the same answer applies: your call, not
mine, but you should make it knowingly.

Notes on the last batch:

- **"Back to previous page" links are gone** from `aiming`, `cosmicallyselfish`
  and `etscam`, as asked. They pointed at `cgi-bin/cosmicR.html`, which no
  longer exists anyway. Each now returns to `cosmic.php` from the footer.
- **`OpEdtoSafire.html`** keeps the 2003 WINLAB signature block verbatim —
  address, phone, fax, the `~crose` URL — set in monospace and labelled as of
  its date, so it reads as a period artifact rather than current contact
  details. The footer returns to the sousveillance musing rather than to
  cosmic, since that is where it belongs.
- **`papers/etscam.html`** — the maths was readable, so it is properly typeset
  rather than copied verbatim. The original HTML had broken entities (`&pi `
  and `&lambda` without semicolons) which rendered as literal text; those are
  fixed.
- **`Alien_Fears.htm`** — the images are **included in this zip**, at full
  resolution, in `Alien_Fears_files/`. The Word source labelled them `foildog`
  and `hardhatog`, which settles the ordering: tinfoil hat is *Before Chris*,
  hard hat is *After Chris*. Before your paper you feared radio; after it you
  fear rocks.
- **`Advertisement.html`** — all five pictures ship in this zip, in
  `Advertisement_files/`. Nothing to fetch.

## Images that now ship in the zip

`Alien_Fears_files/` (2), `Advertisement_files/` (5), and in `img/`:
`Ocont_new4.jpg`, `voyager_disc.jpg`, `Voyager.jpg`, `pach7.jpg`,
`teeball.jpg`, `asteroid.jpg`, `favicon.svg`.

Two of those are now doing real work on `cosmic.php`:

- **`Ocont_new4.jpg`** is placed at the end of the argument section. It is the
  whole paper in one figure — &Omega; against normalized aperture and distance,
  with the break-even line and four real systems sitting far below it — and the
  page badly needed a figure there. If the caption misstates anything, it is the
  one thing on the site I wrote from reading a plot rather than from your words,
  so please check it.
- **`voyager_disc.jpg`** opens the mass-density scale, since the golden record
  is the bottom rung and the only inscribed-matter message we have actually
  sent.

Still unused, sitting in `img/` in case you want them: `Voyager.jpg` (the
spacecraft), `pach7.jpg` (Hale-Bopp over rocks), `teeball.jpg` (the child
hitting off a tee — an aiming metaphor?), `asteroid.jpg` (the party-hat
picture without the hat).

Everything else — the banner thumbnails, the headshot, the press archive, the
cartoon entries — still comes down via `get-assets.sh`.

**Leave `press/*.html` alone.** Those are archived copies of other people's
2004 journalism. Restyling them would misrepresent them as yours, and the
period look is honest about what they are.

---

## Affiliation updates — August 2026

Several descriptions on `people.html` had gone stale. Corrected:

- **S. James Gates** — the biggest one. He **rejoined Maryland in 2022** as the
  John S. Toll Professor of Physics and Clark Leadership Chair in Science. The
  page described him as Ford Foundation Professor at Brown, which he was from
  2017 to 2022 while directing the Brown Theoretical Physics Center.
- **Emery Brown** — now Edward Hood Taplin Professor at MIT and Warren M. Zapol
  Professor of Anaesthesia at Harvard Medical School. He received the
  **National Medal of Science in January 2025** and was named an **MIT Institute
  Professor in July 2026**, the Institute's highest faculty honour. Neither was
  mentioned.
- **Todd Coleman** — at **Stanford** since leaving UCSD; Associate Professor of
  Bioengineering and a Wu Tsai Neurosciences Institute Faculty Scholar.
- **Tricia Rose** — directed CSREA from 2013 to **2024**; now directs the
  Systemic Racism and Resilience Project at the John Nicholas Brown Center, and
  is Associate Dean of the Faculty for Special Initiatives. *Metaracism*
  published 2024.
- **Sennur Ulukus** — now Distinguished University Professor and **Chair of ECE**
  at Maryland.
- **Aylin Yener** — at **Ohio State** since January 2020 (Roy and Lois Chope
  Chair), not Penn State.

Not updated, because I couldn't establish current status with confidence:
**Stephanie Bell-Rose** (the TIAA Institute role may have changed), **Evan
Rose**, **Randal Pinkett**, and **John Asher Johnson**. Those paragraphs are
unchanged from your originals and are worth a read-through.

---

## Things I couldn't decide for you

- **The smiley GIFs.** They're load-bearing for the voice, but 1998-era
  animated GIFs fight the new type. I dropped them and let the prose carry
  the tone. If you miss them, say so and I'll bring them back properly styled
  — or replace them with a lighter typographic tell.
- **`people.html` third parties.** Several entries describe other people's
  careers with details that have aged (Stephanie Bell-Rose's TIAA role, Evan's
  companies, Todd Coleman's institution). I softened the ones I was confident
  had moved on and left the rest. Worth a pass before it goes public.
- **Whether five pages is right.** If you'd rather have one long scroll, the
  sections are self-contained and easy to concatenate.
