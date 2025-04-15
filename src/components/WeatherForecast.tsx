import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface ForecastItem {
  day: string;
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
  icon: React.ReactNode;
}

interface WeatherForecastProps {
  forecast: ForecastItem[];
  className?: string;
}

// Weather icons
const SunIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CloudIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const RainIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const getWeatherIcon = (condition: string): React.ReactNode => {
  const conditionLower = condition.toLowerCase();
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return <RainIcon />;
  } else if (conditionLower.includes('cloud')) {
    return <CloudIcon />;
  } else {
    return <SunIcon />;
  }
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ 
  forecast = [], 
  className 
}) => {
  // Default forecast if not provided
  const defaultForecast: ForecastItem[] = [
    {
      day: 'Mon',
      date: '06/20',
      temperature: { min: 68, max: 85 },
      condition: 'Sunny',
      icon: <SunIcon />
    },
    {
      day: 'Tue',
      date: '06/21',
      temperature: { min: 70, max: 83 },
      condition: 'Cloudy',
      icon: <CloudIcon />
    },
    {
      day: 'Wed',
      date: '06/22',
      temperature: { min: 65, max: 77 },
      condition: 'Rainy',
      icon: <RainIcon />
    },
    {
      day: 'Thu',
      date: '06/23',
      temperature: { min: 67, max: 79 },
      condition: 'Cloudy',
      icon: <CloudIcon />
    },
    {
      day: 'Fri',
      date: '06/24',
      temperature: { min: 70, max: 82 },
      condition: 'Sunny',
      icon: <SunIcon />
    }
  ];

  const displayForecast = forecast.length > 0 ? forecast : defaultForecast;

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {displayForecast.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium">{item.day}</div>
              <div className="text-xs text-gray-500">{item.date}</div>
              <div className="my-2">
                {item.icon || getWeatherIcon(item.condition)}
              </div>
              <div className="text-xs font-medium mt-1">
                <span className="text-gray-900">{item.temperature.max}°</span>
                <span className="text-gray-500 ml-1">{item.temperature.min}°</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.condition}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast; 