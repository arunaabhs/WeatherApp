import React from 'react';
import { Moon, Sun, RefreshCw } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { RecentSearches } from './components/RecentSearches';
import { useWeatherStore } from './store/weatherStore';
import { WeatherData } from './types/weather';

const API_KEY = '5e99f9b11eda1390d22ebbc378ef2492'; // Add your OpenWeatherMap API key here

function App() {
  const {
    weatherData,
    isLoading,
    error,
    recentSearches,
    isDarkMode,
    setWeatherData,
    setIsLoading,
    setError,
    addRecentSearch,
    toggleDarkMode,
  } = useWeatherStore();

  const fetchWeather = async (city: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'City not found'
            : 'Failed to fetch weather data'
        );
      }

      const data: WeatherData = await response.json();
      setWeatherData(data);
      addRecentSearch(city);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen city-background transition-all duration-500`}>
      <div className="container mx-auto px-4 py-8 relative min-h-screen">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="text-yellow-300" size={24} />
            ) : (
              <Moon className="text-blue-400" size={24} />
            )}
          </button>
        </div>

        <div className="flex flex-col items-center pt-16 relative z-10">
          <h1 className="text-6xl font-bold gradient-text mb-12 text-center tracking-tight">
            Weather Dashboard
          </h1>

          <div className="w-full max-w-md mb-8 search-container">
            <SearchBar onSearch={fetchWeather} />
            <RecentSearches searches={recentSearches} onSelect={fetchWeather} />
          </div>

          <div className="w-full flex justify-center">
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <RefreshCw className="animate-spin text-blue-400" size={40} />
              </div>
            ) : error ? (
              <div className="glass-effect p-8 rounded-3xl text-red-300 text-center max-w-md w-full">
                <p className="text-lg">{error}</p>
              </div>
            ) : (
              weatherData && <WeatherCard data={weatherData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;