import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: isDark ? '#1a1a1a' : '#ffffff', color: isDark ? '#ffffff' : '#000000' }}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex flex-col items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 180px)' }}>
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Learn Anything with AI</h1>
          <p className="text-lg md:text-xl mb-12" style={{ color: isDark ? '#ffffff' : '#666666' }}>
            Generate personalized courses on any topic. Powered by artificial intelligence.
          </p>
          <SearchBar isDark={isDark} />
        </div>
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
