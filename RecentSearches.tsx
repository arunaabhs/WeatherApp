import React from 'react';
import { History } from 'lucide-react';

interface RecentSearchesProps {
  searches: string[];
  onSelect: (city: string) => void;
}

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSelect,
}) => {
  if (searches.length === 0) return null;

  return (
    <div className="w-full mt-4">
      <div className="flex items-center gap-2 mb-3 text-blue-400">
        <History size={18} />
        <span className="text-sm font-medium">Recent Searches</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="px-4 py-2 text-sm glass-effect rounded-xl text-white hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};