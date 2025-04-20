# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


file structure: 
coeWebsite/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── index.jsx
│   │   ├── NavBar/
│   │   │   └── index.jsx
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── components/
│   │   │   │   ├── Layout/
│   │   │   │   │   └── index.jsx
│   │   │   │   └── SideBar/
│   │   │   │       └── index.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── index.jsx
│   │   │   ├── ListEvent/
│   │   │   │   └── index.jsx
│   │   │   ├── ManageEvents/
│   │   │   │   └── index.jsx
│   │   │   ├── EventDetail/
│   │   │   │   └── index.jsx
│   │   │   └── index.jsx
│   │   ├── Landing/
│   │   │   └── index.jsx
│   │   ├── Login/
│   │   │   └── index.jsx
│   │   ├── Student/
│   │   │   ├── components/
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── SideBar.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── index.jsx
│   │   │   ├── EventRegistration/
│   │   │   │   └── index.jsx
│   │   │   ├── PastEvents/
│   │   │   │   └── index.jsx
│   │   │   ├── RegisteredEvents/
│   │   │   │   └── index.jsx
│   │   │   ├── UpcomingEvents/
│   │   │   │   └── index.jsx
│   │   │   └── index.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
