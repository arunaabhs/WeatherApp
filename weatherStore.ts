import { create } from 'zustand';
import { WeatherState } from '../types/weather';

export const useWeatherStore = create<WeatherState>((set) => ({
  weatherData: null,
  isLoading: false,
  error: null,
  recentSearches: [],
  isDarkMode: false,
  setWeatherData: (data) => set({ weatherData: data }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  addRecentSearch: (city) =>
    set((state) => ({
      recentSearches: [
        city,
        ...state.recentSearches.filter((s) => s !== city).slice(0, 4),
      ],
    })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));