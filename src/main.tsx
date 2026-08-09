import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' 
import { LanguageProvider } from './context/LanguageContext.tsx' // استيراد الـ Provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
{/* 2. تغليف الـ App بسحابة اللغة لكي تصل لكل الموقع */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
  ,)