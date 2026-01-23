 # RPR Communications - RPR-COMMUNICATIONS-WEBSITE

<div align="center">
<img width="1200" height="475" alt="RPR-Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 🎯 Project Overview

**RPR Communications** is a cutting-edge experiential communications platform delivering global reach with a cynical, no-nonsense approach. This repository contains the Angular-based web application with Tailwind CSS styling and integrated AI assistance via Cursor.

**Current Version:** 1.0.0  
**Status:** Active Development  
**Last Updated:** December 11, 2025

---

## 📋 Quick Links

- **Live Demo:** [View in AI Studio](https://ai.studio/apps/drive/195G-jY_WYIzt7s4Y5C7dYJhFy_YRgwi6)
- **Framework:** Angular with Tailwind CSS
- **Build Tool:** Angular CLI
- **Package Manager:** npm

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher)
- **Cursor Editor** (for optimal development experience)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rpr-communications
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.local` file to project root
   - Add your `GEMINI_API_KEY` for AI features:
     ```env
     GEMINI_API_KEY=your_key_here
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:4200
   ```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.html       # Main component template
│   ├── app.component.ts         # Component logic
│   ├── app.component.css        # Component styles
│   └── ...
├── assets/                      # Static assets (images, icons)
├── styles/                      # Global styles
└── main.ts                      # Application entry point

.cursorignore                   # Cursor IDE configuration
tailwind.config.js              # Tailwind CSS configuration
angular.json                    # Angular CLI configuration
package.json                    # Project dependencies
```

---

## ✨ Latest Features & Updates

### Hero Section (Lines 42-47)
- **Tagline:** "EST. 2025 // EXPERIENTIAL COMMUNICATIONS"
- **Main Headline:** "Global reach, experiential communications."
- **Styling:** Responsive typography (4xl → 6xl) with premium tracking

### Foundations Section (Complete Overhaul)
- **Typography:** Largest font scale (text-4xl md:text-5xl)
- **Layout:** Maximum visual hierarchy with shortened titles
- **Content:** THE INSIGHT (UI), THE JOURNEY (CX)
- **Status:** ✅ Complete redesign with premium spacing

### Methods Section (Complete Redesign)
- **Icon Interactions:** WHITE default → CYAN on hover
- **Label Sizing:** text-2xl for prominent visibility
- **Copy Updates:** APPROVE→PAY, CREATE→MAKE
- **Cycle Tagline:** Made prominent throughout
- **Status:** ✅ Full implementation complete

### Brand Voice & Positioning
- **Tone:** Bill Burr-style cynicism and directness
- **Opening:** "We keep it simple to make the story clear"
- **Character:** Ollie (cynical AI helper)
  - Description: "He works to add balance to your life"
  - Features: Special responses + joke rotation system
  - Status:** ✅ Ready for enhancement phase

---

## 🛠️ Build & Deploy

### Development Build
```bash
npm run dev
```
Starts local development server with hot reload on `http://localhost:4200`

### Production Build
```bash
npm run build
```
Creates optimized production bundle in `dist/` directory

### Deploy to Vercel
```bash
npm run build
vercel
```

---

## 💻 Cursor IDE Configuration

### Status: ✅ Fully Configured

#### Codebase Indexing
- **Status:** Complete
- **Tool Calls:** 18 executed during initial setup
- **Coverage:** All source files indexed and searchable
- **Performance:** Fast semantic search enabled

#### File Protection
- **`.cursorignore`** created to protect sensitive files:
  - Environment configuration files
  - API keys and secrets
  - Build artifacts (`dist/`, `node_modules/`)
  - Other sensitive project files

#### Feature Configuration
| Feature | Status | Reason |
|---------|--------|--------|
| Composer | ❌ Disabled | Optimized for focused development |
| Agent Review | ❌ Disabled | Prevents unwanted AI suggestions |
| Cursor Tab | ❌ Disabled | Clean development workflow |

### Cursor Editor Tips

#### Troubleshooting Guide

**Stuck Review Buttons**
1. Use `Cmd+Shift+P` → "Developer: Reload Window"
2. Close and reopen Cursor completely
3. Disable conflicting extensions
4. Fully quit and restart

**Copy/Paste Issues**
1. Verify system clipboard is working
2. Use keyboard shortcuts: `Cmd+C`/`Cmd+V` (Mac) or `Ctrl+C`/`Ctrl+V` (Windows)
3. Try context menu for copy/paste
4. For terminal: `Cmd+Shift+C` (Mac) or right-click → Copy

**Code Search Not Working**
1. Close and reopen project to re-index
2. Check `.cursorignore` for excluded files
3. Delete `.cursor` folder and restart
4. Verify Cursor has file permissions

**AI Features Not Working**
1. Check internet connection
2. Verify Cursor service status
3. Restart AI Service: `Cmd+Shift+P` → "Cursor: Restart AI Service"
4. Check Cursor settings for enabled features

#### Best Practices
- **Semantic Search:** Use `Cmd+Shift+F` to search by meaning
- **Multi-file Editing:** Leverage Cursor's multi-cursor for Angular updates
- **Quick Navigation:** Use `Cmd+P` for files, `Cmd+Shift+O` for symbols
- **Terminal Integration:** Use integrated terminal for Angular CLI commands

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "@angular/animations": "^17.0.0",
  "@angular/common": "^17.0.0",
  "@angular/compiler": "^17.0.0",
  "@angular/core": "^17.0.0",
  "@angular/forms": "^17.0.0",
  "@angular/platform-browser": "^17.0.0",
  "@angular/platform-browser-dynamic": "^17.0.0",
  "@angular/router": "^17.0.0",
  "tailwindcss": "^3.3.0",
  "rxjs": "^7.8.0"
}
```

### Development Dependencies
```json
{
  "@angular/cli": "^17.0.0",
  "@angular/compiler-cli": "^17.0.0",
  "typescript": "^5.2.0",
  "tailwindcss": "^3.3.0"
}
```

---

## 🎯 Upcoming Enhancements

### Phase 1: Ollie Character Depth (Weeks 1-2)
- [ ] Deepen Bill Burr cynicism with contextual awareness
- [ ] Add situational response variations
- [ ] Implement mood-based tone adjustments

### Phase 2: Functional Intelligence (Weeks 3-4)
- [ ] Meeting BS Detector - Analyzes calendar invites
- [ ] Client Translator - Converts vague feedback to requirements
- [ ] Project Name Generator - Cynical-yet-professional naming
- [ ] Session memory for context continuity
- [ ] User preference learning

### Phase 3: Experience Polish (Weeks 5-6)
- [ ] Animated micro-interactions
- [ ] Mood indicator system
- [ ] Response timing variations
- [ ] Easter eggs collection
- [ ] Konami code unlock

### Phase 4: Integration Expansion (Weeks 7-8)
- [ ] Slack bot deployment
- [ ] Email response templates
- [ ] Social media sharing features

---

## 📊 Code Changes Summary

All recent changes are documented in [`DOCS/CODE_CHANGES_SUMMARY.md`](./DOCS/CODE_CHANGES_SUMMARY.md) including:
- Hero section updates with new tagline and headline
- Foundations section reorganization
- Methods section icon and copy updates
- Brand voice implementation
- Cursor configuration details

**Key Files Modified:**
- `src/app/app.component.html` (Hero, Foundations, Methods)
- `src/app/app.component.ts` (Component logic)
- `tailwind.config.js` (Theme customization)
- `.cursorignore` (IDE configuration)

---

## 🔐 Environment Setup

Create a `.env.local` file in the project root:

```env
# Gemini API Key for AI features
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Development settings
ENVIRONMENT=development
DEBUG=false
```

**Never commit `.env.local` to version control.**

---

## 🚢 Deployment

### Vercel Deployment
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Docker Deployment (Optional)
```bash
docker build -t rpr-communications .
docker run -p 4200:4200 rpr-communications
```

---

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly: `npm run dev`
4. Commit with clear messages: `git commit -m "feat: description"`
5. Push to branch: `git push origin feature/your-feature`
6. Create Pull Request

---

## 🐛 Troubleshooting

### Common Issues

**Port 4200 already in use**
```bash
npm run dev -- --port 4300
```

**Dependencies not installing**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build failing**
```bash
npm run clean
npm install
npm run build
```

**Hot reload not working**
- Restart dev server: `npm run dev`
- Check file permissions
- Ensure no file editors locked files

---

## 📚 Documentation

📚 **Full documentation:** See [`DOCS/INDEX.md`](./DOCS/INDEX.md)

Key documents:
- [Code Changes Summary](./DOCS/CODE_CHANGES_SUMMARY.md) - Detailed implementation documentation
- [Firebase Setup Guide](./DOCS/FIREBASE_SETUP.md) - Authentication setup instructions

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- **Email:** support@rpr-communications.com
- **GitHub Issues:** [Create an issue](https://github.com/RPR-Communications/issues)
- **Documentation:** Check [`DOCS/`](./DOCS/INDEX.md) folder

---

## 📄 License

This project is proprietary software owned by RPR Communications LLC. All rights reserved.

---

## 🙏 Acknowledgments

- **Bill Burr** - Brand voice inspiration
- **Angular Team** - Framework excellence
- **Tailwind CSS** - Styling foundation
- **Cursor AI** - Development assistance

---

## 📅 Version History

| Version | Date | Notes |
|---------|------|-------|
| 1.0.0 | Dec 11, 2025 | Initial release with Hero, Foundations, Methods sections |
| 0.9.0 | Dec 10, 2025 | Cursor configuration and indexing complete |
| 0.8.0 | Dec 09, 2025 | Brand voice and Ollie character implementation |

---

**Last Updated:** December 11, 2025, 10:03 AM +08  
**Status:** ✅ Active Development  
**Next Phase:** Ollie Enhancements Ready 🚀