# Personal Portfolio Website
 
A personal portfolio website built with plain HTML, CSS, and JavaScript, showcasing my interests in music, photography, calligraphy, and more — alongside a way for visitors to reach out or leave feedback.
 
## 🌐 Live Pages
 
| Page | File | Description |
|---|---|---|
| Home | `home.html` | Landing page with introduction and hero section |
| About Me | `about_me.html` | Study background and personal interests |
| Music Video | `video.html` | Embedded/self-hosted music video |
| Music Here | `songs.html` | Curated playlist of favorite tracks with notes |
| Contact | `contact.html` | Social links, email, and donation QR code |
| Q&A | `qna.html` | Feedback form for visitor questions and messages |
 
## 🛠️ Built With
 
- **HTML5** — semantic structure (`<header>`, `<nav>`, `<section>`)
- **CSS3** — custom properties, Grid, Flexbox, `aspect-ratio`, `object-fit`, media queries
- **JavaScript (Vanilla)** — mobile nav toggle, scroll-based nav hide/show, form handling
- **Bootstrap 5** — utility classes and icon set (Bootstrap Icons)
- **Google Fonts** — Inter, Handjet
## 📁 Project Structure
 
```
portfolio/
├── home.html
├── about_me.html
├── video.html
├── songs.html
├── contact.html
├── qna.html
├── style.css
├── script.js
├── CatVideo.mp4
└── assets/
    └── (images, QR codes, etc.)
```
 
## ✨ Key Features
 
- **Responsive design** — layout adapts across mobile, tablet, and desktop breakpoints
- **Auto-hiding navigation** — nav bar slides away on scroll down, reappears on scroll up
- **Scroll-reveal animations** — sections fade in as the user scrolls, respecting `prefers-reduced-motion`
- **Self-hosted music video** — custom-styled HTML5 `<video>` player
- **Contact & donation section** — social links (LinkedIn, GitHub, Gmail) and a VietQR donation code
- **Feedback form** — Q&A page for visitor messages, currently using an `alert()` placeholder pending backend integration (e.g. Formspree)
## 🎨 Design System
 
CSS custom properties define a consistent warm, cream-toned color palette used throughout the site:
 
```css
:root {
  --bg: #f8f1e4;
  --ink: #2c1e17;
  --accent: #b97a45;
  --accent-dark: #8a5a34;
  --pill-text: #fbeee0;
  --dot: #e2d6c1;
}
```
 
## 🚀 Getting Started
 
1. Clone or download this repository
2. Open `home.html` in a browser, or serve the folder with a local development server (e.g. `python3 -m http.server` or VS Code Live Server)
3. No build step or dependencies required — it's plain HTML/CSS/JS
## 📋 To-Do / Future Improvements
 
- [ ] Connect the Q&A feedback form to a real backend (Formspree, EmailJS, or custom server)
- [ ] Add more music video entries
- [ ] Improve mobile navigation menu
## 📬 Contact
 
Find me via the links on the [Contact page](./contact.html) — LinkedIn, GitHub, or email.
 
## 📄 License
 
Personal project — created as part of university of Greenwich coursework (COMP1752) and for personal portfolio use.
