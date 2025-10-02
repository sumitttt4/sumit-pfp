# Sumit Sharma - Portfolio

A clean, minimal portfolio website showcasing UI/UX design work and case studies. Built with modern web technologies for optimal performance and user experience.

## 🎯 Design Philosophy

- **Clean & Minimal**: White background, black/grey text, single accent color (blue)
- **Content First**: Let the work be the star, not the portfolio itself
- **User Focused**: Fast loading, accessible, and easy to navigate
- **Case Study Driven**: Detailed project breakdowns with problem-solution-outcome structure

## ✨ Features

- **Minimal Design**: Clean typography with Inter font, lots of whitespace
- **Responsive Layout**: Mobile-first approach with smooth transitions
- **Case Studies**: Individual pages for each project with detailed process
- **Smooth Scrolling**: Native smooth scroll with section navigation
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: Keyboard navigation, proper contrast, and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion (minimal, purposeful)
- **Routing**: React Router for case study pages
- **Build Tool**: Vite for fast development and builds
- **Font**: Inter (clean, professional sans-serif)

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── Index.tsx           # Main portfolio page
│   ├── CaseStudy.tsx       # Individual case study template
│   └── NotFound.tsx        # 404 page
├── assets/                 # Project images and screenshots
└── App.tsx                # Main app with routing
```

## 📱 Page Structure

### 1. Landing/Hero
- Large, bold name: "Sumit Sharma"
- Clear subtitle: "UI/UX & Product Designer"
- Single CTA: "View My Work" → scrolls to projects

### 2. Projects Grid
- 2x2 grid (desktop), stacked (mobile)
- Each card: thumbnail, title, one-liner description
- Click → opens dedicated case study page

### 3. Case Study Pages
Clean layout with sections:
- Problem Statement
- Research & Personas  
- Wireframes & User Flows
- Final UI Screens (device mockups)
- Interactive Prototype Link
- Reflection & Next Steps

### 4. About Section
- Professional photo placeholder
- Brief, focused bio
- Essential skills only (Figma, Prototyping, etc.)

### 5. Contact
- Large, clickable email
- Social links (LinkedIn, GitHub)
- Clear call-to-action

## 🎨 Visual Style Guide

- **Colors**: White background, black/dark grey text, blue (#3b82f6) accent
- **Typography**: Inter font family, clean hierarchy
- **Layout**: Grid-based with generous whitespace
- **Images**: Consistent device mockups for UI screenshots
- **Animations**: Subtle fade-ins, no complex 3D effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sumitttt4/sumit-pfp.git
cd sumit-pfp
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080)

## 📝 Customization

### Adding New Projects
1. Add project data to the `projects` array in `src/pages/Index.tsx`
2. Add corresponding case study data in `src/pages/CaseStudy.tsx`
3. Add project images to `src/assets/`

### Updating Content
- **Personal info**: Update name, bio, skills in respective sections
- **Contact**: Update email and social links
- **Colors**: Modify blue accent color in Tailwind classes

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build  
npm run preview
```

Deploy the `dist/` folder to your preferred hosting platform (Vercel, Netlify, etc.)

## 📧 Contact

**Sumit Sharma**  
UI/UX & Product Designer  
Email: [sumitsharma9128@gmail.com](mailto:sumitsharma9128@gmail.com)  
LinkedIn: [linkedin.com/in/sumit-sharma-designer](https://linkedin.com/in/sumit-sharma-designer)  
GitHub: [github.com/sumitttt4](https://github.com/sumitttt4)

---

*"Don't over-design your portfolio → let your projects be the star."* 
