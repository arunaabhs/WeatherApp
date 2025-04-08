export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export interface WeatherState {
  weatherData: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  recentSearches: string[];
  isDarkMode: boolean;
  setWeatherData: (data: WeatherData | null) => void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addRecentSearch: (city: string) => void;
  toggleDarkMode: () => void;
}