import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 pr-12 text-white glass-effect rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 search-input text-lg transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <Search size={24} className="text-blue-400" />
        </button>
      </div>
    </form>
  );
};