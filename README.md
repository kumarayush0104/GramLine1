# GramLINE - Legal and Scheme Navigator PWA

## Overview

GramLINE is a mobile-first Progressive Web App designed for rural India to provide legal and government scheme navigation with multilingual support and voice input/output.

## Features

- Multilingual support: Hindi, Tamil, Telugu, Bengali, English
- Voice input and output using Web Speech API
- Smart triage chatbot/form for legal and scheme help
- Offline-accessible learning hub with videos and guides
- Nearby legal aid clinics and NGOs with map and contact options
- Simple admin dashboard (to be developed)
- Accessibility features and large touch targets
- Offline mode with caching

## Tech Stack

- React with Vite for frontend
- Tailwind CSS for styling
- Firebase for backend realtime database and authentication
- react-i18next for internationalization
- Phosphoricons for UI icons
- Web Speech API for voice input/output

## Setup and Run

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:

- Replace the config in `src/firebaseConfig.js` with your Firebase project credentials.

4. Run the development server:

```bash
npm run dev
```

5. Open the app in your browser at `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run serve
```

## Deployment

You can deploy the built app to Firebase Hosting or any static hosting service.

## Notes

- Admin dashboard is planned as a separate app.
- Voice input requires browser support for Web Speech API.
- Offline mode uses service workers (configured by Vite PWA plugin).

## License

MIT License
