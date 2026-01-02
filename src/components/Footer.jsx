import React from 'react';

export default function Footer({ isDark }) {
  return (
    <footer className="text-center py-6">
      <p className="text-sm" style={{ color: isDark ? '#ffffff' : '#666666' }}>
        © 2026 KratosThink. All rights reserved.
      </p>
    </footer>
  );
}
