import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="glass-effect rounded-3xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] weather-card">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2 gradient-text">
            {data.name}
          </h2>
          <p className="text-white/80 capitalize text-lg">
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-32 h-32 object-cover weather-icon"
        />
      </div>

      <div className="mb-12">
        <div className="text-8xl font-bold text-white tracking-tighter">
          {Math.round(data.main.temp)}°
          <span className="text-4xl font-normal text-white/70 ml-2">C</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="weather-stat glass-effect rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="text-blue-400" size={26} />
            <span className="text-white/90 font-medium text-lg">
              Humidity
            </span>
          </div>
          <div className="text-4xl font-semibold text-white">
            {data.main.humidity}%
          </div>
        </div>

        <div className="weather-stat glass-effect rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wind className="text-emerald-400" size={26} />
            <span className="text-white/90 font-medium text-lg">
              Wind
            </span>
          </div>
          <div className="text-4xl font-semibold text-white">
            {Math.round(data.wind.speed)} km/h
          </div>
        </div>
      </div>
    </div>
  );
};