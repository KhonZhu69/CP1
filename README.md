# Certitude Professionals Static Site

This repository now contains a fully static marketing site for Certitude Professionals. All content is delivered with vanilla HTML, CSS, and a sprinkle of client-side JavaScript—no build tools, frameworks, or server-side rendering required.

## Getting started

1. Clone or download the repository.
2. Open `index.html` directly in your browser, or serve the directory with any static file server.

```
python3 -m http.server 3000
```

Then navigate to <http://localhost:3000>.

## Project structure

```
index.html   # Page markup and content
styles.css   # Global styles and responsive layout
script.js    # Navigation toggle, contact form validation, and toast feedback
logo.svg/png # Brand assets
```

## Customization tips

- Update copy or sections by editing `index.html`.
- Adjust the color palette or layout tokens in `styles.css` under the `:root` definition.
- Extend `script.js` if you want to hook the contact form into a third-party service.

Because everything runs in the browser, you can host the site on any static hosting platform (GitHub Pages, Netlify Drop, Firebase Hosting, etc.) with zero configuration.
