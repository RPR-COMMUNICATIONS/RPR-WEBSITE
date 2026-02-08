import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './i18n'

// Add dark class to html element
document.documentElement.classList.add('dark');

// Initialize Houdini paint worklet for squircle
if ("paintWorklet" in CSS) {
  // @ts-expect-error experimental API
  CSS.paintWorklet.addModule("https://unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js").catch(() => {
    // Fallback if worklet fails to load
    console.warn('Squircle worklet failed to load, using CSS fallback');
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)