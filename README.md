# Flavorful restaurant

Static HTML/CSS/JavaScript demo site showcasing a small restaurant-style website with multiple pages and reusable styles.

**What this is**
- A lightweight frontend demo composed of plain HTML, CSS, and a little JavaScript.
- Example pages include menu items, food detail pages and basic navigation.

**Project Structure**
- `index.html`: Home page
- `about.html`, `contact.html`, `menu.html`, `news.html` and various food pages (`spaghetti.html`, `steak.html`, `avocado.html`, `mushroom.html`, `octopus.html`, `involtini.html`) — site pages
- `asset/`:
	- `img/`: images used by pages
	- `style/`: CSS stylesheets (page-specific CSS + `style.css`)
- `Food-details/`: extra detail pages or data used for food items
- `javascript/`:
	- `index.js`: page JavaScript

Preview
-------
Open `index.html` in a browser to view the site locally. For a simple local web server (recommended), run one of these commands from the project root.

PowerShell (Python 3):
```powershell
python -m http.server 8000
```

Or using Node.js (if you have `http-server` installed):
```powershell
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

Development notes
-----------------
- Styles are in `asset/style/`. Many pages use page-specific CSS files and a shared `style.css`.
- Images live in `asset/img/` — keep paths relative to their consuming HTML files.
- JavaScript lives in `javascript/` (currently `index.js`).
- This project is intentionally simple (no build step) so you can inspect markup, layout, and CSS interactions directly.

Recommended editor setup
------------------------
- VS Code with the **Live Server** extension for instant preview.
- Prettier for formatting (optional).

Contributing
------------
- Submit issues or pull requests for fixes, accessibility improvements, or new sample pages.
- Keep changes focused and avoid adding build tooling unless necessary.

License
-------
This demo contains example assets and code; add a license file (e.g., `LICENSE`) if you want to clarify reuse terms.

