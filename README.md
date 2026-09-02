# Amirarsham Montazeri — Portfolio Site

A simple, professional academic portfolio: Home, Research, Tutoring, CV, Blog, Contact.

## How to edit content

You should almost never need to touch the design files. Everything you'd want to
change day-to-day lives in one place:

**`assets/content.js`**

Open it in any text editor. Every field is commented. Examples:
- Add your email/LinkedIn/GitHub/Instagram/X under `links`.
- Add a research entry by copying the example object inside `research: []`.
- Add a blog post by copying the example object inside `posts: []`.
- Point `cvFile` at a PDF (e.g. `"assets/cv.pdf"`) once you upload one to the `assets` folder.
- Point `photo` at an image (e.g. `"assets/photo.jpg"`) once you add one — then let me know if you'd like it wired into the homepage layout.

Leaving any field empty (`""` or `[]`) automatically hides that item or shows a
"coming soon" placeholder — nothing fake is ever displayed.

You do not need to touch `style.css` or `main.js` unless you want to change the
visual design or navigation structure.

## How to preview locally

Just open `index.html` in a browser. (Some browsers block local JS file loading —
if the page looks empty, run a tiny local server instead:
`python3 -m http.server` from inside this folder, then visit `http://localhost:8000`.)

## How to publish on GitHub Pages (free)

1. Create a new GitHub repository (e.g. `amirarshammontazeri.github.io` — using
   this exact naming pattern with your GitHub username gives you the site at
   `https://<your-username>.github.io` directly, with no extra config).
   Alternatively, name it anything else and enable Pages for that repo — your
   URL will then be `https://<your-username>.github.io/<repo-name>`.
2. Upload all files in this folder (`index.html`, the other `.html` files, and
   the `assets/` folder) to that repository.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set Source to **Deploy from a branch**, branch
   `main`, folder `/ (root)`. Save.
5. GitHub will give you a live URL within a minute or two.

## Custom domain later (optional, not free)

If you ever want `amirarshammontazeri.com` instead of the GitHub URL, you'd
buy the domain from a registrar (annual cost, not one-time), then add it under
**Settings → Pages → Custom domain** in the same repository. No rebuild needed.
