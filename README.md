# 🏔️ Adventure Triangle

> **Where Water, Air, and Land Converge.**  
> A premium, immersive landing page for the next generation of global adventure ecosystems.

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Skies-38bdf8?style=for-the-badge&logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Beta-orange?style=for-the-badge)

---

## 📖 About The Project

**Adventure Triangle** is a cutting-edge digital platform designed to connect thrill-seekers with verified local experts across the globe. This repository contains the source code for the landing page, built with a focus on **visual storytelling**, **smooth interactions**, and a **premium user experience**.

The design philosophy emphasizes "Depth, Altitude, and Terrain"—the three pillars of the adventure ecosystem—delivered through a dark, glassmorphic UI that feels modern and alive.

### ✨ Key Features

-   **🎨 Premium UI/UX**: A sophisticated dark theme (`slate-950`) accented with vibrant gradients, glassmorphism (`backdrop-blur`), and subtle glow effects.
-   **📱 Fully Responsive**: Optimized for all devices, from large desktop monitors to mobile screens, featuring a custom-animated mobile navigation menu.
-   **🏃‍♂️ Smooth Interactions**:
    -   Global smooth scrolling for seamless navigation.
    -   Floating "pill" navbar on scroll.
    -   Persistent hover effects on mobile devices for better discoverability.
    -   Hover-triggered reveal animations on cards and buttons.
-   **📸 Immersive Content**: Custom masonry layouts for the Campaign gallery, featuring high-quality, realistic adventure imagery.
-   **📝 Functional Forms**:
    -   **Beta Registration**, **Partner Application**, and **Launch Event RSVP** forms.
    -   Integrated `saveDummyData` utility for testing form submissions (logs JSON payloads to console).
-   **📍 Interaction Audit**: fully verified internal linking strategy, ensuring every CTA and footer link navigates correctly.

---

## 🛠️ Built With

-   **Runtime**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Fonts**: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)
-   **Icons**: Custom SVGs & Emojis

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/iamrohannpatel/Adventure-Triangle.git
    cd Adventure-Triangle
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `https://adventure-triangle-rohan.vercel.app/`

---

## 📂 Project Structure

```text
src/
├── assets/              # Static images and logos
│   ├── images/          # Campaign and UI images
│   └── logo/            # Branding assets
├── component/           # React Components
│   ├── common/          # Reusable shared components
│   ├── About.jsx        # "The Trinity" section
│   ├── Campaign.jsx     # Image gallery & stats
│   ├── Footer.jsx       # Branding & navigation
│   ├── Hero.jsx         # Main landing area
│   ├── Mission.jsx      # Core values cards
│   ├── Navbar.jsx       # Floating navigation
│   └── ...              # Forms (Beta, Partner, etc.)
├── styles/
│   └── index.css        # Tailwind directives & global styles
├── utils/
│   └── formHandler.js   # Form submission simulation
├── App.jsx              # Main application wrapper
└── main.jsx             # Entry point
```

---

## 🧪 Form Testing

To test the forms (Beta, Partner, Launch Event):
1.  Open the **Developer Console** in your browser (`F12`).
2.  Fill out any form on the page.
3.  Click **Submit**.
4.  Observe the logged JSON object in the console under `[Dummy Save]`.

---

## 👨‍💻 Developer

**Rohan Patel**
-   LinkedIn: [iamrohannpatel](https://www.linkedin.com/in/iamrohannpatel/)
-   Instagram: [adventure.triangle](https://www.instagram.com/adventure.triangle)

---

Made with ❤️ for the Adventure Triangle by Rohan Patel
