# Personal Portfolio

A clean, responsive portfolio built with HTML, CSS, and a touch of JavaScript for smooth scrolling, section reveal animations, and small UX enhancements.

## Structure

```
portfolio/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── .gitkeep
```

Replace placeholders like Your Name, avatar image, and links in `index.html`. Put your PDF resume at `assets/resume.pdf` and your profile image at `assets/profile.jpg` (update the `src` accordingly).

## Local preview

Open `index.html` directly in a browser, or use a simple static server for better local routing:

```bash
# Python 3
python -m http.server 5173
# then visit http://localhost:5173/portfolio/
```

## Customize

- Update sections: About, Skills, Projects, Resume, Contact
- Replace the avatar image and project links
- Tweak colors in `styles.css` under `:root`

## Deploy

### GitHub Pages
1. Commit this folder to a Git repo (e.g., at the root).
2. Push to GitHub.
3. In the repo settings, enable Pages for the `main` branch (root or `/` folder).
4. If the site is hosted at a subpath, update links as needed.

### Netlify
1. Drag-and-drop the `portfolio/` folder into Netlify deploys, or
2. Connect your Git repo and set:
   - Build command: (leave empty)
   - Publish directory: `portfolio`

Your site will be live at a Netlify URL, which you can customize to a domain.


