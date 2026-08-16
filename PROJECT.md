# PROJECT.md — Private Italian Chef Brand (London)

> **Single source of truth.** This file records every decision, open question, and
> next step for the brand, website, and Instagram. It is updated after every
> meaningful change. Do not duplicate content — edit the relevant section in place.

---

## 0. Status at a glance

| | |
|---|---|
| **Phase** | 2 — Website Build (v1 complete, in review) |
| **Last updated** | 2026-07-18 |
| **Brand name** | ✅ **Italy at Your Table** (locked 2026-07-18) |
| **Website** | ✅ v1 built — 8 pages, responsive, browser-verified. Not deployed. |
| **Instagram** | Strategy drafted (see §12); handle not yet created |
| **Chef** | Julia Malagoli — from Modena, Emilia-Romagna |
| **Booking** | WhatsApp only: 07514 488722 · serves central & north London |
| **Biggest blocker** | Real photography; real reviews; domain; deploy |

---

## 1. Project vision

A premium **private chef** brand based in **London**, offering authentic Italian
dining experiences in the client's own home. Not catering. Not meal prep. An
exclusive, in-home evening where the chef shops for fresh ingredients, travels to
the client's home, cooks everything fresh in their kitchen, serves the meal, and
leaves the kitchen clean.

**Emotional promise:** guests feel they have been *invited into an Italian home* —
warmth, authenticity, elegance, and traditional Italian hospitality.

## 2. Goals

- **Business:** launch and book private in-home Italian dinners across London.
- **Website:** a premium, mobile-first site that *emotionally sells the experience*
  (quality bar: luxury restaurants / boutique hotels), not a services list.
- **Instagram:** a luxurious-but-authentic account that drives bookings and trust.
- **SEO:** rank for London private-dining intent (see §14).

## 3. Brand positioning

- **Category:** Private Italian chef / in-home fine dining, London.
- **Audience:** couples, small friend groups, families; occasions = anniversaries,
  birthdays, celebrations, intimate gatherings. Discerning, values authenticity
  and hospitality over spectacle.
- **Positioning statement (draft):** *For Londoners who want more than a restaurant,
  [BRAND] brings an authentic Italian dinner into your own home — cooked fresh,
  served with warmth, and left without a trace but the memory.*
- **Brand attributes:** Elegant · Authentic · Premium-but-welcoming · Italian ·
  Warm · Modern luxury · Personal (never corporate).

### Brand voice
Warm · Elegant · Human · Story-driven · Sophisticated. Never overly formal,
never cheesy, never cliché. First person ("I cook…", "I come to your home…") to
keep it personal, not corporate.

## 4. Brand name — analysis & recommendation

**Consultant's read of the options provided:**

| Name | Verdict |
|---|---|
| Casa Mia | Warm and on-brief, but *very* crowded (countless pizzerias/restaurants). Weak for trademark & SEO. |
| The Italian Table | Clear and elegant but descriptive/generic; hard to own, less personal. |
| Tavola | Single evocative Italian word ("table"), premium and memorable. Slightly abstract on its own. |
| Cucina a Casa | Literally describes the service ("kitchen at home"). Functional more than emotional. |
| Dinner by [Name] | Personal and premium; a proven private-chef format. Depends on the chef's name. |

**Stronger alternatives I'd put forward:**

- **⭐ "A Tavola" — top recommendation.** It's the phrase an Italian family calls
  out when dinner is ready ("*a tavola!*" = "come to the table!"). It carries a
  built-in story, is warm and authentic, distinctly Italian, and pairs beautifully
  with a personal line: *A Tavola — Private Italian Dining by [Name]*.
- **"[Name]'s Table" / "La Tavola di [Name]"** — maximises the personal,
  invited-into-my-home feeling; excellent if the chef wants to be the face.
- **"Dinner by [Name]"** — clean, premium, SEO-friendly with the name in it.

**Decision:** ✅ **Italy at Your Table** (locked 2026-07-18). Rationale: warm and
welcoming, instantly understood by a London/English-speaking audience, sells the
promise directly (Italy, brought to *your* table), and carries real SEO value.
Earlier shortlist (A Tavola, Tavola, etc.) retained here for history only.

## 5. Decisions made

- **2026-07-18** — Repository initialised; `PROJECT.md` adopted as single source of
  truth. Working branch: `claude/private-chef-brand-website-c1fuw8`.
- **2026-07-18** — **Brand name locked: "Italy at Your Table."**
- **2026-07-18** — **Pricing: bespoke — "enquire for a quote"** (no public prices).
- **2026-08-15** — **Proposals occasion removed** at Julia's request. Taken out fully, not just
  unlinked: card + meta/OG description on `occasions.html`, sitemap entry, and `proposal.html`
  itself deleted — an orphaned page would still have been reachable and indexable. Occasions now
  reads Anniversaries · Birthdays · Dinner parties. (Recoverable from git history if wanted back.)
- **2026-08-15** — **Business email published:** `italyatyourtable.london@gmail.com`. Added as a
  *secondary* channel — WhatsApp stays the primary CTA everywhere. Placed in: footer of all 14
  pages, `contact.html` (under the WhatsApp button + in the aside), and the home JSON-LD `email`
  field. Positioned for the enquiries that need a paper trail — larger gatherings, gift vouchers,
  corporate. **Upgrade path:** once the domain is bought, switch to `hello@italyatyourtable.co.uk`
  forwarding to this Gmail.
- **2026-08-15** — **Photo-consent question added to the questionnaire** (before "Anything else").
  Three graded options — full / food close-ups only / none — rather than yes-no, because guests are
  often happy to have the food shown but not their home. Copy states that a blank answer means no
  photos and that nothing is shared publicly without permission. Feeds into the WhatsApp summary as
  `Photo consent: …` (verified). Groundwork for the Instagram content pipeline: Julia enters private
  homes, so consent must be captured before, not after.
- **2026-08-15** — **Menu edits (Julia).** (1) **Parmesan crisps removed** from the aperitivo
  of all 9 menus (site + PDF) and from the Experience nibbles list; the risotto's *Parmesan crisp*
  garnish was kept (deliberately added earlier) — pending her confirmation. (2) Burrata appeared in two vegetarian
  menus. Final arrangement (after a first pass that changed the wrong menu): **Veg 1 → Panzanella
  pugliese** (replacing burrata w/ heritage tomatoes) and **Veg 3 keeps burrata w/ roasted peaches**
  — burrata is Puglian, so it belongs in 'Flavours of Puglia'. Panzanella chosen over roasted
  peppers because peppers in oil read heavy before a rich main.
  (3) Gallery: chef-at-work photo centred (`.g-mid`, grid-column 2).
  **Sourcing constraint noted:** Julia cooks in London — dish suggestions must use ingredients
  reliably available there, avoiding rare/very seasonal items (e.g. wild cicoria ruled out).
  (4) A seasonal note under the panzanella was tried and **reverted** — Julia disliked the wording
  and will revisit the winter variant when winter comes (`.course-note` style removed too).
  (5) Risotto: **shaved truffle → truffle oil**
  (reliable to source in London year-round). Parmesan crisp garnish confirmed kept.
- **2026-08-15** — **Consistency fixes.** (1) Home JSON-LD still advertised `"priceRange":
  "Bespoke — enquire for a quote"` after pricing went public — replaced with `priceRange: "££"`
  plus a proper schema.org **Offer** (GBP 85, `unitText: per person`) so search engines read the
  same price the page shows. (2) Home menu teaser said **"Six sample menus"** when there are
  **nine** — corrected. No other stale counts found.
- **2026-08-15** — **GitHub push unblocked.** Root cause of the long 403 run: this session
  authenticates as **SpaceInvUK**, which had no write access to `juliamalagoli/...`. It was a
  permissions gap, not the transient outage it was first read as. Fixed by adding SpaceInvUK as
  a **Write collaborator**; the 5 pending commits pushed (`01eb35e..3f05cb2`), binaries included.
  **Pages still needs Julia:** enabling it requires repo *admin* (Write is not enough) and the
  Pages API path is blocked through the proxy, so it cannot be automated from here.
- **2026-07-19** — **Reviews handled honestly (zero real reviews yet).** Removed **Reviews
  from the top nav** on all pages (footer link kept → invite page). `reviews.html` rebuilt as
  an honest **"Be among the first at my table"** invitation (no fabricated testimonials — UK
  fake-review law). Home placeholder guest quote replaced with Julia's own brand promise.
  Re-add Reviews to nav once real, consented guest quotes exist.
- **2026-07-19** — **Real photography now across the site.** Julia uploaded her own /
  free-licence photos; placed & colour-matched: home hero (table), menu teaser
  (pappardelle al ragù, colour-graded), Gallery now 11 real photos (veg basket, fresh
  pasta, aperitivo, tiramisù, ingredients, table, ragù, seafood, chef-at-work, red wine,
  focaccia) + 1 remaining tile (Torta della nonna), Experience aperitivo, Contact aside.
  **About** page: added the authentic "chef making pasta by hand" photo beside the
  pasta-making narrative (kept per Julia). Only outstanding image: a Torta della nonna shot.
- **2026-07-19** — **Menu copy polish:** enriched the sparse dish descriptions to match the
  premium level of the rest (site + PDF). Beef carpaccio → "…with rocket, Parmigiano
  shavings, lemon & EVOO"; Octopus carpaccio → "…with lemon, parsley & EVOO"; Seafood
  linguine → "…with clams, mussels & prawns in white wine"; plus Carnaroli risotto, chicken
  saltimbocca (prosciutto & sage), flourless Caprese, sliced tagliata w/ rocket & Parmigiano.
  Used classic preparations — Julia to correct any that differ from her actual recipes.
- **2026-07-19** — **8 real photos now in the Gallery** (added seafood spaghetti, market
  ingredients, garden vegetables, focaccia to the earlier four); 3 branded logo tiles remain
  ("The chef at work" reserved for Julia). **Roman Comfort** dessert changed from the
  (British) Lemon Posset to **Torta della nonna with toasted pine nuts** — more authentic,
  on-brand (nonna). Site + PDF (still 4 pages) + gallery placeholder caption updated.
- **2026-07-19** — **First real photos placed** (4 uploaded by Julia, no watermark):
  `tiramisu.jpg`, `fresh-pasta.jpg` (hand-made tagliatelle), `table-set.jpg`, `aperitivo.jpg`
  (prosecco pour). Placed via new `.photo-slot` (fills a ratio/grid slot) + `.hero__img`:
  home **hero** = table-set; home **menu teaser** = fresh-pasta; **Gallery** = fresh-pasta /
  aperitivo / tiramisù (tall) / table-set; **Contact** aside = table-set. Remaining gallery
  tiles stay as brand logo placeholders (incl. "The chef at work" — reserved for Julia's
  own photo). Gallery intro copy softened.
- **2026-07-19** — **Upgraded image placeholders** to brand-styled editorial tiles:
  removed the emoji marks; each `.ph` now shows the fork-&-knife **logo mark** (inline
  SVG data-URI, cream), a subtle **brass inset frame** and a brass hairline above the
  caption. Reads as an intentional placeholder, not a "missing image." Stopgap until
  Julia uploads real free-licence photos (Unsplash/Pexels — this env can't download them,
  so she uploads and I place them). Shot list given (home hero + 6–10 gallery/atmosphere).
- **2026-07-19** — **Menu "completion" additions:** (1) added a closing **"To finish —
  Espresso & homemade limoncello"** course to all 9 menus (site + PDF), completing the
  Italian arc aperitivo → dinner → caffè; (2) added a **"vegan & gluten-free versions
  available on request"** note (menus.html aperitivo section + PDF closing). PDF also
  synced: tags removed, price now "From £85 per person"; regenerated to 4 pages, layout
  tightened so it stays 4 pages with the extra course.
- **2026-07-19** — Removed the per-card "· Menu One/Two/Three" tag labels from **all**
  menu cards on `menus.html` (Vegetarian, Meat & Fish). Dish titles kept; the section
  headers (Vegetarian / Meat / Fish) still label each group.
- **2026-07-19** — **Pricing updated: "From £85 per person"** (accessible-quality tier),
  chosen by Julia over £95 / £120 / hidden. A visible "from" anchor now shows on Menus
  (new §Investment block), Contact and FAQ, with add-ons and inclusions. Still quoted
  bespoke per booking. See §11 for full model + growth path (→ £95pp when reviews/photos land).
- **2026-07-18** — Proceeding on recommended defaults: build full static site for
  review first (deploy after sign-off); tasteful placeholders + shot list; colour
  palette & Fraunces/Inter typography as in §13.
- **2026-07-18** — **Chef:** Julia Malagoli, from **Modena** (Emilia-Romagna),
  taught by her grandmothers. Emilia-Romagna heritage (Parmigiano, balsamico, ragù,
  fresh pasta) woven through the copy.
- **2026-07-18** — **Booking channel: WhatsApp only** (07514 488722). No enquiry
  form / email for now; contact page + all CTAs route to WhatsApp.
- **2026-07-18** — **Service area:** central and north London.
- **2026-07-18** — **Instagram:** handle not yet created.
- **2026-07-18** — **About page copy provided by Julia** ("Bringing the heart of
  Italy to your table") and used verbatim with light typographic polish.
- **2026-07-18** — **Hosting decision: GitHub Pages** (not Netlify for now), served
  **directly from the branch** (source = "Deploy from a branch", root). `.nojekyll`
  added so files serve as-is. Every edit pushed to the branch auto-republishes — no
  build, no workflow. (The Actions-workflow approach was removed: the Actions token
  can't enable Pages the first time — `Resource not accessible by integration`.)
  **One-time step for Julia:** repo **Settings → Pages → Source: "Deploy from a
  branch" → Branch: `claude/private-chef-brand-website-c1fuw8` / `/root` → Save.**
  Live URL (after that): **https://juliamalagoli.github.io/Esperienza-culinaria-italiana/**
  Netlify to be used later, only when Julia says so.
- **2026-07-18** — **Working practice (standing):** update `PROJECT.md` for every
  change, and after each change offer layout/UX improvement suggestions for Julia to
  approve or decline.
- **2026-07-19** — **New page: `questionnaire.html` ("Your Evening Begins Here" —
  Dinner Planning Questionnaire).** Client-provided content, styled in brand (logo,
  ivory/olive/terracotta/brass, Fraunces + Inter). Functional: on submit it compiles
  all answers into a WhatsApp message to 07514 488722 (no backend/storage). Linked
  from every footer ("Plan Your Evening"), the Contact page, and sitemap. Not added
  to the top nav (kept lean) — can add on request.

## 6. Open questions (need the chef's input)

*Resolved: brand name ✅ · pricing ✅ (bespoke/enquire) · build ✅ · photography ✅
(placeholders + shot list) · chef name ✅ (Julia Malagoli) · story ✅ (client-provided
About copy) · booking ✅ (WhatsApp only, 07514 488722) · service areas ✅ (central &
north London).*

Still open:

1. **Photography** — real images to replace placeholders (shot list in §13).
2. **Reviews** — real guest quotes to replace the placeholder testimonials.
3. **Instagram** — handle not yet created; confirm when ready and I'll finalise §12.
4. **Domain** — choose/register (site currently uses `italyatyourtable.co.uk` as a
   placeholder in canonicals/sitemap).
5. **Deploy** — confirm when to deploy to Netlify.

## 7. Website structure (planned)

Pages: **Home · About · The Experience · Menus · Gallery · FAQ · Reviews ·
Contact / Booking.** Mobile-first. Strong CTAs throughout ("Reserve your evening",
"Enquire about a date"). Single cohesive design system, no template feel.

- **Home** — hero (emotional promise + CTA), the experience in 3 beats, menu teaser,
  aperitivo note, social proof, closing CTA.
- **About** — the chef's story, why Italian home cooking, the philosophy.
- **The Experience** — the arc of the evening: enquiry → menu → shopping → aperitivo
  → dinner served → spotless kitchen.
- **Menus** — the aperitivo + the six sample menus (§10), framed as seasonal & bespoke.
- **Gallery** — food + tablescapes + candid evening moments.
- **FAQ** — logistics, kitchens, dietary, group size, travel, pricing approach.
- **Reviews** — testimonials (placeholder until real ones arrive).
- **Contact / Booking** — WhatsApp booking + direct contact + areas served.
- **Plan Your Evening** (`questionnaire.html`) — post-booking dinner planning
  questionnaire; compiles answers into a WhatsApp message. Linked from footers &
  Contact (not in top nav).
- **Occasions** (`occasions.html` hub + `anniversary.html`, `birthday.html`,
  `proposal.html`, `dinner-party.html`) — SEO landing pages targeting intent like
  "private chef for anniversary/birthday London" and "dinner party chef London".
  Each: tailored hero + intro + how-it-works + testimonial + WhatsApp CTA. Linked
  from the Home occasions cards, the Occasions hub, and footers (Explore column).
- **Gift Vouchers** (`gift.html`) — give a dinner as a gift; WhatsApp-arranged.
  Linked from footers (Book column).

## 8. Copywriting

Draft hero, taglines, and page copy live here once the name is locked. Working
taglines:
- *Invited into an Italian home — in your own.*
- *Authentic Italian dining, cooked fresh in your kitchen.*
- *An Italian evening, without leaving home.*

## 9. Aperitivo (fixed offering)

Welcome aperitivo served while the chef finishes cooking.
- **Drinks:** Aperol Spritz · Pimm's Cup · Prosecco · Italian wine · alcohol-free
  Italian spritz.
- **Mini bites:** Parmesan crisps · marinated olives · bruschetta · homemade
  focaccia · whipped ricotta · grissini · optional Parma ham.

## 10. Menus (9 sample menus — live on site + PDF)

Each menu opens with **aperitivo mini starters** (differ by menu type):
- **Veg:** Parmesan crisps · homemade focaccia with cherry tomato · vegetarian omelette
  with cream cheese & courgettes · olives.
- **Meat:** Parmesan crisps · homemade focaccia with cherry tomato · ham & cheese
  omelette · olives.
- **Fish:** Parmesan crisps · homemade focaccia with cherry tomato · prawns in a Marie
  Rose sauce · olives.
Welcome aperitivo drinks: Aperol Spritz · Pimm's Cup · Prosecco · Italian wine · alcohol-free.

**Veg 1 — Garden & Truffle:** Panzanella pugliese (tomatoes, cucumber, red onion, oregano, crisp bread) · Wild
mushroom & truffle risotto w/ Parmesan crisp · Classic Tiramisù.
**Veg 2 — Handmade & Herbaceous:** Courgette carpaccio w/ lemon, Parmigiano, mint & EVOO · Handmade spinach
& ricotta ravioli, brown butter, crispy sage & aged Parmigiano flakes · Panna Cotta w/
berry coulis.
**Veg 3 — Flavours of Puglia:** Burrata w/ roasted peaches, pistachios, basil oil & aged
balsamic · Parmigiana di melanzane baked in an individual cocotte · Ricotta cheesecake w/
Amalfi lemon & honey.
**Meat 1 — Ragù & Cioccolato:** Creamy polenta, wild mushroom & crispy speck (pork) · Pappardelle
w/ beef ragù · Chocolate Caprese cake.
**Meat 2 — Roman Comfort:** Fennel, orange & black olive salad · British rose veal saltimbocca w/ prosciutto & sage, Parmesan mash · Torta della nonna with toasted pine nuts.
**Meat 3 — Emilia-Romagna Tradition:** Erbazzone bites (warm Emilian spinach pie) w/ Parmigiano Reggiano shards & Traditional Balsamic Vinegar of Modena — Julia's plating: cut into cubes, Reggio-style · Handmade tortellini in a golden chicken broth · Classic Zuppa Inglese.
**Fish 1 — Mediterranean Table:** Smoked salmon, fennel, dill, capers & orange vinaigrette ·
Cod fillet al cartoccio w/ cherry tomato, Taggiasca olives, potatoes & herbs · Lemon Tiramisù.
**Fish 2 — Coastal & Bright:** Octopus carpaccio · Seafood linguine · Pistachio Panna Cotta.
**Fish 3 — Taste of the Mediterranean:** Tuna tartare, avocado, citrus & crostini · Saffron
seafood risotto w/ prawns, mussels & clams · Orange & almond cake, mascarpone.

> Framing on site: sample menus, seasonal, tailored to each client — not a fixed carte.

## 11. Pricing

✅ **Locked 2026-07-19 — "From £85 per person" (accessible-quality tier).**

Positioning chosen: accessible-quality — anchor a visible "from" price to fill the
calendar and gather reviews at launch, then raise from a position of strength once
photos + testimonials are in place.

**Public model (shown on Menus → §Investment, Contact, FAQ):**
- **From £85 per person** — four-course menu, ingredients, cooking, service & clean-up included.
- **Minimum 2 guests** (intimate dinner for two worth the evening).
- **Travel included** across central & north London.
- **Deposit** secures the date; balance after the dinner.
- Every menu tailored to allergies / dietary needs.
- **Add-ons:** extra course +£15pp · aperitivo & canapés on arrival +£12pp · wine-pairing
  guidance · celebration cake.
- Still quoted bespoke per booking — the "from £85pp" is an anchor, not a fixed list.

**Rationale:** a visible "from" price filters bargain-hunters, signals quality, and lifts
enquiry rate vs. pure "enquire only" (visitors won't message with zero price signal).
Market context (London 2026): entry £55–75pp · mid/quality £85–120pp · premium £130–200+pp.

**Internal note / room to grow:** £95pp (quality-niche) and £120pp (premium) were the
alternative tiers. Natural next step is £95pp once reviews + real photography are live.

## 12. Instagram strategy

- **Handle idea:** @atavola.london (or name-led), pending brand name.
- **Bio (draft):**
  `Private Italian chef · London 🇮🇹`
  `Authentic dinners, cooked fresh in your home`
  `Aperitivo → antipasti → dolci`
  `↓ Reserve your evening` (link)
- **Highlights:** The Experience · Menus · Aperitivo · Reviews · Behind the Pass ·
  Book.
- **Grid:** 3-column rhythm — hero dish / candid moment / detail — warm, natural
  light, generous negative space; consistent warm-neutral edit.
- **Photography style:** natural daylight, close warm tones, real hands & steam,
  matte finish, minimal props; food + tablescape + human warmth.
- **Posting strategy:** 3–4 posts/week; Reels 2×/week.
- **Reels ideas:** fresh pasta by hand · plating a signature dish · the aperitivo
  spread · "a night in the life" of a private dinner · market shopping in London ·
  tiramisù assembly ASMR.
- **Story strategy:** daily behind-the-scenes, polls ("meat or fish menu?"), prep,
  countdowns to booked dinners, re-shared guest tags.
- **Captions:** short, warm, first-person, one idea + soft CTA.
- **Hashtags (starter set):** #privatecheflondon #italianprivatechef
  #privatedininglondon #londonfoodie #italianfood #chefathome #dinnerpartylondon
  #londonevents #freshpasta #aperitivo (rotate; mix reach + local intent).

## 12.1 Ricettario interno — **private, deliberately NOT in this repository**

Julia asked for a written recipe for every course of every menu, to keep in a folder
on her own computer ("le ricette sono per me, da tenere in una cartella sul mio pc").

**This repository is public, so the recipes are never committed here.** They are
produced as files and delivered to her directly. This section records only the
format and the progress — no recipe content.

- **Format:** one A4 page per dish, delivered as **.docx** only — Julia asked for Word
  so she can edit, and asked that PDFs not be produced unless she requests them.
  Brand header, logo mark, brass rule. The one-page limit is still enforced on every
  card (content height checked at 703px, the A4 content width).
- **Structure of each card:** *Per 4 persone* (yields) → ingredient groups →
  **Cosa preparo a casa** (timeline: 2 days before / day before / morning of) →
  **Cosa faccio sul posto** (service sequence) → **Costo indicativo · 4 persone**.
  Per Julia's instruction the *Impiattamento*, *Attenzione* and *Da verificare*
  sections were removed on 2026-08-15.
- **Dosages:** always for 4 people, with a note on how to scale per head.
- **Sourcing rule:** every ingredient must be reliably findable in **London** —
  no rare or narrowly seasonal items, with named substitutions where supply varies.
- **Costs:** informed estimates at London prices, flagged as such; Julia to confirm
  the real figures at her next shop.
- **Order of work:** menu by menu ("in fila"), starter → main → dessert.
- **Progress: COMPLETE — 27 of 27 cards**, covering every starter, main and dessert
  on all nine menus.

**Shopping lists — 9 Word files, one per menu.** Julia asked for a list of what to
buy for each recipe. Delivered per menu rather than per dish, because that is how
she actually shops, but each file covers both cases:
1. **The whole evening**, grouped by shop department in the order you walk a shop
   (ortofrutta → macelleria → pescheria → latticini → deli → surgelati → dispensa),
   with repeated ingredients already added together.
2. **A box of what to order or hunt for in advance**, specific to that menu — rose
   veal, Alchermes, pure pistachio paste, day-fresh burrata, and so on.
3. **One short list per dish**, for when she is cooking or testing a single course.
4. **The aperitivo**, filtered to that menu's version (veg / meat / fish).
Every line has a tick box. Generated from `spesa-data.js`, kept in step with the
recipe cards; also off-repo.

**Food cost per head, by menu** (informed London estimates, to be confirmed):

| Menu | Food cost pp | % of £85 |
|---|---|---|
| Handmade & herbaceous | £5,84 | 6,9% |
| Ragù & cioccolato | £6,74 | 7,9% |
| Garden & truffle | £7,20 | 8,5% |
| Flavours of Puglia | £8,16 | 9,6% |
| Roman comfort | £8,42 | 9,9% |
| Taste of the Mediterranean | £9,32 | 11,0% |
| Mediterranean table | £9,54 | 11,2% |
| Emilia-Romagna Tradition | £9,93 | 11,7% |
| Coastal & bright | £10,22 | 12,0% |

- The fish menus are consistently the dearest — worth knowing, since the price on
  the site is a single "from £85pp" across all nine.
- Most expensive single courses: **linguine allo scoglio (£4,75pp)**, **saltimbocca
  di rose veal (£4,70pp)**, **tortellini in brodo (£4,69pp)**, **merluzzo al
  cartoccio (£4,50pp)**. Cheapest: **torta caprese (£1,03pp)** and **torta di arance
  e mandorle (£1,34pp)**.
- Ingredients that drive cost disproportionately in London: **pine nuts**, **rose
  veal**, **burrata**, **sashimi-grade tuna**, **vongole veraci** and **pure
  pistachio paste**. All are worth paying for — they are simply the numbers to know
  when quoting.

**Allergen and safety notes now captured across the cards** (worth folding into the
booking questionnaire):
- Animal rennet in Parmigiano/Grana; gelatine vs agar agar — for strict vegetarians.
- Pork in the speck starter — bresaola or toasted nuts as the substitution.
- Raw egg in both tiramisùs — British Lion eggs, or the 121° syrup method.
- Raw fish in the tuna tartare — must be sashimi-grade/previously frozen, and not
  served to pregnant or immunocompromised guests.
- Live molluscs in the linguine — purging, and discarding any that stay open.

**Two menu-wording points that need Julia's decision:**
- The menu says *"Traditional Balsamic Vinegar of Modena"* on the erbazzone starter.
  That is a **DOP** — the real thing is aged 12+ years and costs £45–60 per 100ml
  (about £1,10 per dinner, used in drops). Either use the DOP or change the site
  wording to "balsamic glaze"; the current phrasing is a protected term.
- The zuppa inglese needs **Alchermes**, which is not in London supermarkets. It has
  to be ordered ahead (Luxardo, ~£20 for 700ml, enough for about seven dinners).

**Two dietary findings worth carrying into client conversations**, surfaced while
writing the vegetarian menus:
- **Parmigiano Reggiano and Grana Padano are made with animal rennet**, so they are
  not vegetarian in the strict sense. For a strictly vegetarian guest, substitute a
  vegetarian-rennet hard cheese — Twineham Grange (Waitrose, Ocado) is the closest.
- **Leaf gelatine is animal-derived**, so the panna cotta on the vegetarian menu is
  set with **agar agar**, not gelatine. This is now the default in the recipe.

Both are worth adding to the questionnaire follow-up when a guest says "vegetarian".

## 13. Branding — colours, typography, imagery

**Colour palette (recommended, warm modern-luxury Italian):**
- Ivory / cream base — `#FBF6EE`
- Deep olive green — `#3E4A3A`
- Terracotta / clay — `#C0663F`
- Charcoal ink (text) — `#221F1B`
- Brass / gold accent — `#B08D57`

**Logo (final):** "Italy at Your Table" — a fine-line **crossed fork & knife**
mark (antique gold `#a98b52`) above/beside a **Marcellus** wordmark, with a
**Cormorant Garamond** descriptor ("Private Italian Dining · London"). Client-
provided design (option 4a). Implemented as: header lockup, reversed cream/gold
version on the dark footer, standalone `assets/logo-mark.svg`, and a matching
favicon. Logo tokens: ink `#3c4335`, gold mark `#a98b52`, accent gold `#8a7440`,
hairline `#cdb98a`, taupe `#9a8a68`.

**Typography:**
- Logo wordmark: **Marcellus**; logo descriptor: **Cormorant Garamond**.
- Display / headings: **Fraunces** (warm, characterful modern serif).
- Body / UI: **Inter** (quiet, highly legible humanist sans).
- Accent: Fraunces italic for pull-quotes.
- *Open option:* we could shift site headings from Fraunces to Marcellus to match
  the logo exactly — a bigger change; Fraunces currently harmonises well.

**Image direction:** natural daylight, warm neutral edit, real food & hands,
tablescapes, generous whitespace; no stocky/corporate imagery.

**Photography shot list (to replace placeholders):** priority order —
1. **Chef portrait** (hero + About) — you in a kitchen/at a table, warm light, relaxed.
2. **A signature dish, plated** — e.g. pappardelle al ragù or truffle risotto (Home + Menus hero).
3. **The aperitivo spread** — spritz + focaccia + olives + grissini on a board.
4. **A set table / candlelit tablescape** — the "invited-in" feeling.
5. **Hands at work** — rolling/cutting fresh pasta, plating.
6. **Individual dish shots** for the gallery: burrata & tomatoes, tiramisù, sea bass,
   lemon posset, seafood linguine, focaccia, a glass of Italian red.
7. **A candid "evening" moment** — guests mid-dinner, warm and natural.
Format: mostly portrait/square for Instagram reuse; a few 16:9/landscape for the web
hero. Consistent warm edit so the grid and site feel like one brand.

## 14. SEO notes

Target London intent: **Private Chef London · Italian Private Chef · Private Dining
London · Italian Chef at Home · Dinner Party Chef London.** Plan: semantic HTML,
one clear H1/page, descriptive titles & meta, local schema (LocalBusiness/Chef),
fast mobile performance, alt text, London-focused copy.

## 15. Technical decisions

- **Stack (locked):** hand-crafted static site — semantic HTML + one CSS design
  system (`css/styles.css`) + minimal vanilla JS (`js/main.js`). No template, no
  build step. Fast, SEO-friendly, fully controllable premium design.
- **Fonts:** Fraunces + Inter via Google Fonts (`<link>` with preconnect).
- **Scroll-reveal** is progressive enhancement (gated behind a `.js` class) so
  content is always visible without JS and to crawlers.
- **Structured data:** `LocalBusiness` JSON-LD on Home; per-page titles, meta
  descriptions, canonical links; `robots.txt` + `sitemap.xml` included.
- **Hosting: GitHub Pages** served from the branch (source = "Deploy from a branch",
  root; `.nojekyll` present). After the one-time Settings→Pages enablement, it's live
  at **https://juliamalagoli.github.io/Esperienza-culinaria-italiana/** and every push
  auto-republishes. Edit any file on GitHub → it republishes automatically. (Relative
  links throughout, so the site works under the `/Esperienza-culinaria-italiana/` subpath.)
- **Netlify:** deferred — to be used later only when Julia asks.
- **Preview locally:** `python3 -m http.server` in the repo root, open `index.html`.
- **Repo:** `juliamalagoli/esperienza-culinaria-italiana`, branch
  `claude/private-chef-brand-website-c1fuw8`.

### Files (v1)
`index.html` · `about.html` · `experience.html` · `menus.html` · `gallery.html` ·
`reviews.html` · `faq.html` · `contact.html` · `css/styles.css` · `js/main.js` ·
`assets/favicon.svg` · `robots.txt` · `sitemap.xml`.

### Placeholders remaining before launch
- ✅ Chef name, story, contact, booking channel, service areas — all filled.
- ✅ **Chef portrait** added (`assets/julia-malagoli.jpg`) — live on Home + About.
- ⏳ Real **food/table photography** to replace remaining placeholders (shot list above):
  signature dish, aperitivo spread, tablescape, gallery dishes.
- ⏳ Real **guest quotes** on `reviews.html` and the Home testimonial.
- ⏳ Real **domain** — `italyatyourtable.co.uk` is a placeholder in canonicals/sitemap.
- ⏳ **Instagram** handle in footers/links once created.
- Note: booking is WhatsApp-only, so no form/email wiring is needed.

### Brand / social assets
- *(The standalone aperitivo card was removed on request — the aperitivo now appears
  as a "mini starters" opening course on every menu instead.)*
- `assets/italy-at-your-table-menus.pdf` — printable **A4 menu PDF** (4 pages: cover
  with the logo mark + aperitivo, then vegetarian / meat / fish; each menu opens with
  the aperitivo mini starters). Linked as "Download the Menu (PDF)" on the Menus page.
  Source: `assets/social/menu-print.html`. Regenerate by rendering that HTML to PDF
  (A4, print backgrounds).

## 16. To-do

- [ ] Gather first real guest reviews for `reviews.html`.
- [ ] Create the Instagram handle; then finalise grid + add links to the site.
- [ ] Choose + register the real domain; update canonicals/sitemap.
- [ ] Enable GitHub Pages (needs Julia's repo-admin toggle).
- [ ] **Set the deposit percentage and the cancellation policy**, then publish both
      on `menus.html` (Investment) and as an FAQ entry. Julia proposed 20% and a
      3-day window; the recommendation on file is **25% and 7 days**, because the
      ragù and broth are cooked two days ahead, the rose veal and Alchermes are
      ordered days in advance, and a Saturday cannot be refilled at 3 days' notice.
- [ ] **Confirm UK food-business registration**, Level 2 Food Hygiene and public
      liability insurance. Registration with the local authority is a legal
      requirement for anyone cooking for paying customers and is free; once done it
      is worth stating on the site, since it reassures people letting a stranger
      into their kitchen.
- [ ] Decide the *"Traditional Balsamic Vinegar of Modena"* wording on the
      Emilia-Romagna starter — use the DOP (~£1,10 per dinner in drops) or change
      the site copy to "balsamic glaze". It is a protected designation.
- [ ] (Optional) Build the Instagram launch grid (9–12 posts + captions).

## 17. Completed tasks

- [x] Repository reviewed; branch confirmed.
- [x] `PROJECT.md` created as single source of truth.
- [x] Brand name locked: **Italy at Your Table**.
- [x] Pricing approach locked: bespoke — "enquire for a quote".
- [x] Design system built (colour, Fraunces/Inter type, components) — `css/styles.css`.
- [x] All 8 pages built with final launch copy: Home, About, The Experience, Menus,
      Gallery, Reviews, FAQ, Contact/Booking.
- [x] Mobile-first responsive nav + interactions (`js/main.js`).
- [x] SEO scaffolding: titles, meta, canonicals, JSON-LD, `robots.txt`, `sitemap.xml`,
      favicon.
- [x] Browser-verified (desktop + mobile) via Playwright; fixed hero-render and
      scroll-reveal bugs found in review.
- [x] Personalised for Julia Malagoli: About story (client-provided copy), Modena/
      Emilia-Romagna woven through, WhatsApp-only booking (07514 488722), central &
      north London service area, JSON-LD founder + telephone. All personal
      placeholders filled.

## 18. Next steps (recommended)

The site is now personalised and content-complete except for photos and reviews.
Recommended order:
1. **Photography** — capture the shot list (§13); even good phone photos in daylight
   work. Send them over and I'll place them.
2. **Pick a domain** (e.g. italyatyourtable.co.uk if available) so I can finalise
   SEO tags.
3. **Deploy to Netlify** — I can do this whenever you're ready for it to be live.
4. **Instagram** — create the handle; I'll build the launch grid (9–12 posts +
   captions) and link it across the site.
5. Add **real reviews** as your first dinners happen.

## 19. Version history

- **v1.22 — 2026-08-16** — **Full site audit, and the fixes from it.** Nothing was
  broken — no dead links, no orphan anchors, alt text everywhere, sitemap and nav
  consistent, JSON-LD valid, £85 quoted consistently — but eleven things needed
  attention. Fixed in this version:
  - **The aperitivo contradiction.** Three pages said the welcome aperitivo was
    included; the Investment section sold it as a **+£12pp** add-on. Julia confirmed
    it is always included and never charged for, so the add-on line is gone and the
    inclusion is now stated explicitly in what the price covers.
  - **Social previews.** No `og:image` existed anywhere and 8 of 14 pages had no
    preview tags at all, so links shared on WhatsApp arrived without a picture —
    poor for a business that books over WhatsApp. Added a purpose-built 1200×630
    card (`assets/social-card.jpg`) plus full Open Graph and Twitter tags on all 14
    pages.
  - **Occasions added to the top nav.** It and its four child pages (birthday,
    anniversary, dinner-party, gift) were reachable only from the footer. Verified
    the 7-item nav does not overflow down to the 1080px hamburger breakpoint.
  - **Hero legibility.** The overlay was only 0.25 opacity where the intro
    paragraph sits, over the bright windows in the photo. Now a two-layer gradient.
  - **Facts line under the hero** — price, area and minimum guests, none of which
    appeared on the home page before.
  - **`FAQPage` structured data** on faq.html, generated from the eight questions.
  - **Link contrast.** Terracotta text was 3.74:1, below WCAG AA. Added
    `--terracotta-link: #a84f2d` (5.11:1 on ivory, 4.60:1 on ivory-deep) for small
    text; the original terracotta stays for buttons and decoration.
  - **Sitemap `lastmod`**, and the ravioli wording in the PDF aligned to the site.

  Deferred to Julia (now in §16): deposit percentage and cancellation policy, food
  business registration, and the balsamic DOP wording. Not changed: the dietary
  section of the questionnaire stays a free-text field — Julia asks the
  vegetarian/pork/pregnancy questions in person when agreeing the menu.
  `assets/fresh-pasta.jpg` is unused but kept: it is the tagliatelle photo she
  asked to remove from the gallery, not an oversight.

- **v1.14 — 2026-08-15** — **Ricettario interno started** (see §12.1). Recipe cards are
  produced from a reusable generator and delivered to Julia as Word + PDF; they are
  **not committed to this public repository**, at her request. Four cards complete:
  Tortellini in brodo, plus the whole **Garden & truffle** menu (panzanella pugliese,
  risotto Carnaroli ai funghi e tartufo, tiramisù classico). Card layout simplified on
  her instruction — *Impiattamento*, *Attenzione* and *Da verificare* removed. No
  website files changed in this version.
- **v1.21 — 2026-08-16** — **Shopping lists added: 9 Word files, one per menu** (see
  §12.1). Each covers the whole evening grouped by shop department, a per-menu box
  of what to order ahead, a short list per dish, and the aperitivo filtered to that
  menu's version. Tick boxes throughout. Off-repo like the recipes. No website files
  changed.
- **v1.20 — 2026-08-15** — **Ricettario complete: 27 of 27 cards.** Added the three
  fish menus — Mediterranean table, Coastal & bright, Taste of the Mediterranean.
  Fixed a real defect in the Word generator: a hand-written entity table silently
  left `&Egrave;`, `&lsquo;`, `&times;` and others as literal text in 13 already-
  delivered files; replaced with a full decoder that now throws on any unknown
  entity rather than passing it through. All 27 files rebuilt, re-verified and the
  13 affected ones re-sent. §12.1 now carries the full food-cost table by menu and
  the allergen/safety notes to fold into the questionnaire. No website files changed.
- **v1.19 — 2026-08-15** — Ricettario: **Emilia-Romagna Tradition** complete
  (erbazzone a cubetti with Parmigiano shards and balsamic; zuppa inglese — the
  tortellini main was already card 01) — **all six vegetarian and meat menus now
  done**, 18 of 27 cards. Flagged two wording/sourcing decisions for Julia in §12.1:
  the protected "Traditional Balsamic Vinegar of Modena" claim on the menu, and
  ordering Alchermes ahead. No website files changed.
- **v1.18 — 2026-08-15** — Ricettario: **Roman comfort** complete (insalata di
  finocchi, arance e olive nere; saltimbocca di rose veal con purè al Parmigiano;
  torta della nonna con pinoli) — 16 of 27 cards. Recorded why British rose veal is
  the right choice over Dutch veal, which is both an ethical decision and a good
  thing to be able to explain at the table. No website files changed.
- **v1.17 — 2026-08-15** — Ricettario: **Ragù & cioccolato** complete (polenta
  cremosa con funghi e speck, pappardelle fresche al ragù di manzo, torta caprese) —
  13 of 27 cards. Added a note to flag pork in the questionnaire (the speck starter),
  with bresaola or toasted nuts as the substitution. No website files changed.
- **v1.16 — 2026-08-15** — Ricettario: **Flavours of Puglia** complete (burrata con
  pesche arrostite, parmigiana in cocotte, cheesecake di ricotta al limone e miele) —
  **all three vegetarian menus now done**, 10 of 27 cards. Tiramisù reissued with
  Julia's own quantities (500 g mascarpone / 125 g eggs / 100 g sugar) and her
  method (whole eggs whipped 10 min, mascarpone folded in for 1 min). Delivery is
  now **Word only** — PDFs on request. Food cost per head logged per menu in §12.1.
  No website files changed.
- **v1.15 — 2026-08-15** — Ricettario: **Handmade & herbaceous** menu complete
  (carpaccio di zucchine, ravioli spinaci e ricotta con burro nocciola e salvia,
  panna cotta ai frutti di bosco) — 7 of 27 cards done. Logged two dietary findings
  in §12.1 (animal rennet in Parmigiano/Grana; gelatine vs agar agar on the
  vegetarian menu). No website files changed.
- **v1.7 — 2026-07-19** — **Pricing published: "From £85 per person"** (accessible-quality
  tier). Added an **Investment** section to `menus.html` (three cards: the dinner /
  good-to-know / add-ons, with `.price-list` styling), a "from £85pp — see what's
  included" anchor on `contact.html`, an updated pricing answer in `faq.html`, and the
  "from £85pp" line in the Menus CTA banner. PROJECT.md §11 + decisions log updated.

- **v0.1 — 2026-07-18** — Initial `PROJECT.md`. Captured vision, goals, positioning,
  brand-name analysis + recommendation (*A Tavola*), website structure, provided
  menus & aperitivo, Instagram strategy, colour/type/imagery recommendations, SEO
  and technical direction, open questions, and roadmap.
- **v0.2 — 2026-07-18** — Brand name locked (**Italy at Your Table**); pricing set to
  bespoke/"enquire for a quote"; build + photography decisions recorded.
- **v1.0 — 2026-07-18** — **Website v1 built.** Full 8-page premium static site with
  design system, responsive nav, SEO scaffolding, favicon, and browser verification
  (two review bugs fixed). Added photography shot list, technical decisions, and the
  placeholder checklist. Site is ready for review; not yet deployed.
- **v1.6 — 2026-07-19** — **Occasion landing pages + Gift Vouchers** (built while
  awaiting photos). New: `occasions.html` (hub), `anniversary.html`, `birthday.html`,
  `proposal.html`, `dinner-party.html`, `gift.html` — each brand-styled, SEO-tuned
  (unique title/meta/canonical/OG), with WhatsApp CTAs. Home occasion cards now link
  to these pages (+ "Explore all occasions"); footers normalised site-wide to add
  Occasions (Explore) and Gift Vouchers (Book); sitemap updated. All 15 pages
  validated.
- **v1.5 — 2026-07-19** — Added a **floating WhatsApp button** on every page (injected
  via `js/main.js`; styled in `css/styles.css`): fixed bottom-right, WhatsApp-green
  circle with the glyph and a "Message me" hover label, links to wa.me/447514488722
  with a pre-filled booking message. (UX suggestion #1, approved by Julia.)
- **v1.4 — 2026-07-19** — Menu revisions: per-type aperitivo mini starters (veg / meat /
  fish now each list focaccia w/ cherry tomato, their omelette or prawns, & olives); new
  mains — Handmade & Herbaceous (ravioli, brown butter, sage & Parmigiano flakes),
  Flavours of Puglia (parmigiana di melanzane in cocotte), Mediterranean Table (cod al
  cartoccio). Site + PDF synced. About portrait resized to a fixed **6cm × 6cm** square.
- **v1.3 — 2026-07-19** — **Added "Your Evening Begins Here" Dinner Planning
  Questionnaire** (`questionnaire.html`): full client-provided questionnaire, brand-
  styled, with a WhatsApp-compile submit; linked from footers, Contact, sitemap. Also
  logged the GitHub Pages hosting setup (awaiting Julia's one-time Settings→Pages
  enable). Menu edits (meat starters/main, fish aperitivo→prawns in Marie Rose,
  smoked-salmon starter) shipped to site + PDF.
- **v1.2 — 2026-07-18** — **Brand logo added.** Implemented the client's crossed
  fork & knife logo (Marcellus wordmark + Cormorant descriptor) as the header lockup
  and a reversed cream/gold version in the footer across all 8 pages; added
  `assets/logo-mark.svg`, updated the favicon to the mark, loaded Marcellus +
  Cormorant Garamond, and tuned the nav (nowrap + hamburger below 1080px). Also
  added the chef portrait (Home + About), the aperitivo card, and the printable
  menu PDF this day.
- **v1.1 — 2026-07-18** — **Personalised for Julia Malagoli.** About page now uses
  Julia's own copy ("Bringing the heart of Italy to your table"); Modena/Emilia-
  Romagna woven into Home + About; booking switched to **WhatsApp-only**
  (07514 488722) with a redesigned Contact page and site-wide WhatsApp CTAs/footers;
  service area set to central & north London; JSON-LD updated with founder +
  telephone. All personal placeholders resolved (photos & reviews still pending).
