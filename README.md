# Portfolio | Mr. Melvin Philip

A high-performance, interactive developer portfolio built with modern web technologies. This project showcases structured software systems, automation projects, and AI-assisted solutions.

## ✨ Features

-   **Dynamic Data Layer**: All content (projects, skills, bio, certificates) is managed via a single configuration file (`src/data/portfolio.ts`), making updates effortless.
-   **Premium UI/UX**:
    -   **Dark Mode Aesthetic**: Deep dark theme with cyan/teal accents and glassmorphism effects.
    -   **Visual Effects**: Custom "Digital Particle" background and interactive confetti animations.
    -   **Responsive Navigation**: Desktop sidebar with active scrolling indicators and sparkled text effects; efficient top-bar navigation for mobile.
-   **Certificates Showcase**: Dedicated section with a lightbox/modal view for certificates and a "Show More" expansion feature.
-   **Performance Optimized**: Built with Vite for lightning-fast reloading and optimized production builds.

## 🛠️ Tech Stack

-   **Framework**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) (Radix UI)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: `canvas-confetti`

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/MaxMelvin/Portfolio.git
    cd Portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 📂 Project Structure

```
src/
├── components/         # UI Components (Hero, Projects, Certificates, etc.)
├── data/              
│   └── portfolio.ts    # centralized data file (Edit this to update content!)
├── pages/              # Main page views
├── index.css           # Global styles and Tailwind configuration
└── main.tsx            # Entry point
public/
└── certificates/       # Certificate images/PDFs
```

## 🎨 Customization

To update your portfolio content, simply modify the `src/data/portfolio.ts` file. 

Example configuration:
```typescript
export const portfolioData = {
    personal: {
        name: "Mr. Melvin Philip",
        // ...
    },
    // ...
};
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
