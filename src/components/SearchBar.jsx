import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function SearchBar({ isDark }) {
  const [searchTopic, setSearchTopic] = useState('');

  const handleGenerateCourse = () => {
    if (searchTopic.trim()) alert(`Generating course for: ${searchTopic}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleGenerateCourse();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
      <div className="relative flex-1 w-full sm:w-auto rounded-lg" style={{ backgroundColor: isDark ? '#2d2d2d' : '#ffffff', border: isDark ? 'none' : '1px solid #d1d1d1' }}>
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: isDark ? '#ffffff' : '#666666' }} />
        <input
          type="text"
          placeholder="Enter a topic to learn..."
          value={searchTopic}
          onChange={(e) => setSearchTopic(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pl-12 pr-4 py-3 rounded-lg outline-none"
          style={{ backgroundColor: isDark ? '#2d2d2d' : '#ffffff', color: isDark ? '#ffffff' : '#000000' }}
        />
      </div>

      <button
        onClick={handleGenerateCourse}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 whitespace-nowrap"
        style={{ backgroundColor: isDark ? '#4a4a4a' : '#1f1f1f', color: '#ffffff' }}
      >
        Generate Course
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
