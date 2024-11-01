import React from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  type LucideIcon
} from 'lucide-react';

interface WeatherDay {
  date: string;
  condition: string;
  highTemp: number;
  lowTemp: number;
}

interface WeatherForecastProps {
  forecast: WeatherDay[];
}

const getWeatherIcon = (condition: string): LucideIcon => {
  const weatherCondition = condition?.toLowerCase() || '';
  
  switch (weatherCondition) {
    case 'sunny':
    case 'clear':
      return Sun;
    case 'cloudy':
    case 'partly cloudy':
      return Cloud;
    case 'rain':
    case 'showers':
      return CloudRain;
    case 'snow':
      return CloudSnow;
    case 'thunderstorm':
      return CloudLightning;
    case 'drizzle':
      return CloudDrizzle;
    default:
      return Sun;
  }
};

const mockForecast: WeatherDay[] = [
  { date: 'Mon', condition: 'Sunny', highTemp: 75, lowTemp: 55 },
  { date: 'Tue', condition: 'Partly Cloudy', highTemp: 72, lowTemp: 54 },
  { date: 'Wed', condition: 'Rain', highTemp: 68, lowTemp: 52 },
  { date: 'Thu', condition: 'Cloudy', highTemp: 70, lowTemp: 53 },
  { date: 'Fri', condition: 'Sunny', highTemp: 74, lowTemp: 56 }
];

const WeatherForecast: React.FC = () => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        {mockForecast.map((day, index) => {
          const WeatherIcon = getWeatherIcon(day.condition);
          return (
            <div 
              key={index}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-2"
            >
              <span className="text-sm font-medium text-gray-700">{day.date}</span>
              <WeatherIcon className="h-6 w-6 text-gray-600 my-1" />
              <div className="text-xs text-gray-600">
                <span className="font-medium">{day.highTemp}°</span>
                <span className="mx-1">/</span>
                <span>{day.lowTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;