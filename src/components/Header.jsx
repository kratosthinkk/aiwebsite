import React, { useState } from 'react';
import { Moon, Sun, User, Lightbulb } from 'lucide-react';
import UserMenu from './UserMenu';

export default function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}>
          <Lightbulb className="w-5 h-5" style={{ color: isDark ? '#000000' : '#ffffff' }} />
        </div>
        <span className="text-xl font-semibold">KratosThink</span>
      </div>

      <div className="flex items-center gap-4 relative">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-colors"
          style={{ backgroundColor: 'transparent' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#2d2d2d' : '#e5e5e5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          aria-label="Toggle theme"
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg transition-colors"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#2d2d2d' : '#e5e5e5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="User menu"
          >
            <User className="w-5 h-5" />
          </button>
          {isMenuOpen && <UserMenu isDark={isDark} />}
        </div>
      </div>
    </header>
  );
}
