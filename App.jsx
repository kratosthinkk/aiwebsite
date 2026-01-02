import React, { useState } from 'react';
import { Moon, Sun, User, Search, ArrowRight, Lightbulb } from 'lucide-react';

export default function KratosThinkLanding() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTopic, setSearchTopic] = useState('');

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGenerateCourse = () => {
    if (searchTopic.trim()) {
      alert(`Generating course for: ${searchTopic}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateCourse();
    }
  };

  const darkBg = '#1a1a1a';
  const darkSearchBg = '#2d2d2d';
  const darkButtonBg = '#4a4a4a';

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: isDark ? darkBg : '#ffffff',
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}
          >
            <Lightbulb 
              className="w-5 h-5"
              style={{ color: isDark ? '#000000' : '#ffffff' }}
            />
          </div>
          <span className="text-xl font-semibold">KratosThink</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{ 
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? darkSearchBg : '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="Toggle theme"
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <div className="relative">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? darkSearchBg : '#e5e5e5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="User menu"
            >
              <User className="w-5 h-5" />
            </button>

            {isMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 z-10"
                style={{
                  backgroundColor: isDark ? darkSearchBg : '#ffffff',
                  border: isDark ? 'none' : '1px solid #e5e5e5'
                }}
              >
                <button 
                  className="w-full text-left px-4 py-2 transition-colors"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#3d3d3d' : '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Se connecter
                </button>
                <button 
                  className="w-full text-left px-4 py-2 transition-colors"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#3d3d3d' : '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Dashboard
                </button>
                <button 
                  className="w-full text-left px-4 py-2 transition-colors"
                  style={{ color: isDark ? '#ffffff' : '#000000' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#3d3d3d' : '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 180px)' }}>
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Anything with AI
          </h1>
          <p 
            className="text-lg md:text-xl mb-12"
            style={{ color: isDark ? '#ffffff' : '#666666' }}
          >
            Generate personalized courses on any topic. Powered by artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div 
              className="relative flex-1 w-full sm:w-auto rounded-lg"
              style={{ backgroundColor: isDark ? darkSearchBg : '#ffffff', border: isDark ? 'none' : '1px solid #d1d1d1' }}
            >
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: isDark ? '#ffffff' : '#666666' }}
              />
              <input
                type="text"
                placeholder="Enter a topic to learn..."
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-3 rounded-lg outline-none"
                style={{
                  backgroundColor: isDark ? darkSearchBg : '#ffffff',
                  color: isDark ? '#ffffff' : '#000000',
                }}
              />
            </div>

            <button
              onClick={handleGenerateCourse}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 whitespace-nowrap"
              style={{
                backgroundColor: isDark ? darkButtonBg : '#1f1f1f',
                color: '#ffffff'
              }}
            >
              Generate Course
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6">
        <p 
          className="text-sm"
          style={{ color: isDark ? '#ffffff' : '#666666' }}
        >
          © 2026 KratosThink. All rights reserved.
        </p>
      </footer>

      {/* Click outside to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
