

# ♻️ SortRight

**An interactive waste segregation awareness website**

*Educating people on proper waste disposal through animated item cards, step-by-step guides, and gamified quizzes.*

[🌐 Live Demo]-visionary-dusk-a46a5a.netlify.app

---

## Overview

**SortRight** is a fully responsive educational website that makes waste segregation easy to understand and remember. Instead of a boring info page, users can click on waste items, read animated disposal guides, and test their knowledge — all in one place.

> 🌍 *2.01 billion tonnes of waste are generated every year. 75% of it could be recycled. Awareness is the first step.*

---

## Features

- 🗂️ **18 Interactive Waste Cards** — click any item for a detailed disposal guide
- 🔍 **Category Filter** — sort by Biodegradable, Recyclable, or Hazardous
- 🗑️ **Know Your Bins** — Green, Blue, and Red bin breakdown with examples
- 🧠 **8-Question Quiz** — scored quiz with instant feedback and explanations
- 💡 **Disposal Tips** — 6 practical everyday tips for smarter waste habits
- 📱 **Fully Responsive** — works seamlessly on mobile, tablet, and desktop

---

## Waste Categories

| | Category | Examples |
|---|---|---|
| 🟢 | **Biodegradable** | Food scraps, fruit peels, garden waste, eggshells, newspaper |
| 🔵 | **Recyclable** | Plastic bottles, cardboard, glass jars, metal cans, electronics |
| 🔴 | **Hazardous** | Batteries, medicines, paint cans, CFL bulbs, medical sharps |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and layout |
| CSS3 | Styling, animations, responsive design |
| JavaScript (Vanilla) | Interactivity, quiz logic, modal system |
| Google Fonts | Syne (headings) + DM Sans (body) |

> No frameworks. No libraries. No build tools — just clean web fundamentals.

---

## 🚀 Getting Started

### Prerequisites
- [VS Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/sortright.git

# 2. Open in VS Code
# File → Open Folder → select sortright

# 3. Right-click index.html → Open with Live Server

# 4. Visit in browser
http://127.0.0.1:5500/index.html
```

> ✅ No `npm install`. No terminal commands. No setup. Just open and run.

---

## 📁 Project Structure

```
sortright/
├── index.html          ← Page structure and layout
├── css/
│   └── style.css       ← Styles, variables, animations
└── js/
    ├── data.js         ← Waste items and quiz questions
    ├── modal.js        ← Modal open/close logic
    ├── quiz.js         ← Quiz state and scoring
    └── main.js         ← Grid builder and filters
```

---

## Deployment

**Netlify** *(recommended)* — drag and drop the `sortright` folder at [netlify.com](https://netlify.com) for an instant live link.

**GitHub Pages** — go to **Settings → Pages → main branch** and your site goes live at `yourusername.github.io/sortright`.

---

## Future Improvements

- [ ] Search bar for finding waste items quickly
- [ ] Multi-language support (Hindi, regional languages)
- [ ] More waste items (target: 50+)
- [ ] Drag-and-drop bin sorting game
- [ ] WhatsApp share button for individual items

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

*Every item sorted correctly makes a difference.* 🌍

</div>
