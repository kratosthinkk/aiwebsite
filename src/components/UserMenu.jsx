import React from 'react';

export default function UserMenu({ isDark }) {
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-2 z-10" style={{ backgroundColor: isDark ? '#2d2d2d' : '#ffffff', border: isDark ? 'none' : '1px solid #e5e5e5' }}>
      {['Se connecter', 'Dashboard', 'Se déconnecter'].map((item) => (
        <button
          key={item}
          className="w-full text-left px-4 py-2 transition-colors"
          style={{ color: isDark ? '#ffffff' : '#000000' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#3d3d3d' : '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
