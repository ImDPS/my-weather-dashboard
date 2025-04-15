import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  pressure: number;
  visibility: number;
  humidity: number;
  feelsLike: number;
  className?: string;
}

/**
 * WeatherCard Component
 * 
 * A card displaying current weather conditions including temperature, 
 * weather description, and additional metrics.
 */
const WeatherCard: React.FC<WeatherCardProps> = ({ 
  temperature = 22, 
  condition = "Partly Cloudy", 
  pressure = 800,
  visibility = 4.3,
  humidity = 87,
  feelsLike = 11,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden bg-gradient-primary text-white", className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="font-heading font-medium text-lg">Weather</CardTitle>
          <CardDescription className="text-sm text-white/80">What's the weather</CardDescription>
        </div>
        <div className="bg-white/20 p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="temp-display font-display font-bold text-4xl mb-1">
          {temperature}°C
        </div>
        <div className="text-sm bg-white/10 inline-block px-2 py-0.5 rounded-md">
          {feelsLike}°C
        </div>
        <p className="mt-2">{condition}</p>
      </CardContent>
      
      <CardFooter className="grid grid-cols-3 gap-2 p-0 pt-4">
        <div className="bg-blue-900 text-white p-3 rounded-md text-center">
          <p className="text-xs opacity-80">Pressure</p>
          <p className="text-lg font-medium">{pressure}mb</p>
        </div>
        <div className="bg-lime-300 text-blue-900 p-3 rounded-md text-center">
          <p className="text-xs opacity-80">Visibility</p>
          <p className="text-lg font-medium">{visibility} km</p>
        </div>
        <div className="bg-white text-blue-900 p-3 rounded-md text-center">
          <p className="text-xs opacity-80">Humidity</p>
          <p className="text-lg font-medium">{humidity}%</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WeatherCard; 