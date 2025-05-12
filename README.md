# Real-Time Collaborative Editor (Frontend Only)

A live collaborative editor using React + TypeScript + TailwindCSS — works across browser tabs using BroadcastChannel API.

# Features
- Multi-user live text editing
- Username prompt & per-user colors
- Real-time sync without backend

# Tech Stack
- React (Next.js)
- TypeScript
- TailwindCSS
- BroadcastChannel API (no backend!)

# How it works
Each tab sends/receives text changes using `BroadcastChannel`. Username is stored in `localStorage`.

# Run Locally
git clone [https://github.com/yourusername/collab-editor.git](https://github.com/Bablusharma13/wasserstoff.git)
cd wasserstoff
npm install
npm run dev
