# 🌍 Doeng World Landing Page

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

The official landing page for **Doeng World**, a Minecraft RPG Adventure server featuring crossplay (Java & Bedrock), custom dungeons, and unique MMO mechanics.

![Doeng World Screenshot](./landingpage.png)

## 🚀 Tech Stack

This project is built using modern frontend technologies for high performance and easy maintenance:

* **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** Framer Motion (Optional)
* **Deployment:** Nginx & PM2 on Linux VPS

## 🛠️ Installation (Local Development)

Follow these steps to run the project on your local machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/unkronnn/doeng.world.git
    cd doeng.world
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
