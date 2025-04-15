import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from '@/lib/utils';

type QualityLevel = 'Good' | 'Standard' | 'Hazardous';

interface AirQualityCardProps {
  aqi: number;
  pollutant: string;
  windDirection: string;
  quality: QualityLevel;
  className?: string;
}

/**
 * AirQualityCard Component
 * 
 * A card displaying air quality information including AQI value, 
 * pollutant information, and quality level.
 */
const AirQualityCard: React.FC<AirQualityCardProps> = ({
  aqi = 390,
  pollutant = "PM 2.5",
  windDirection = "West Wind",
  quality = "Standard",
  className
}) => {
  // Calculate progress based on AQI (simplified)
  const getProgress = (): number => {
    if (aqi < 100) return 20; // Good
    if (aqi < 200) return 40; // Moderate
    if (aqi < 300) return 60; // Standard
    if (aqi < 400) return 80; // Unhealthy
    return 100; // Hazardous
  };

  // Get quality based on AQI (simplified)
  const getQualityColor = (): string => {
    if (quality === "Good") return "bg-green-500";
    if (quality === "Standard") return "bg-blue-900";
    return "bg-red-600";
  };

  // Get gradient for progress bar
  const getGradientClass = (): string => {
    if (aqi < 200) return "from-green-400 to-yellow-400";
    if (aqi < 400) return "from-yellow-400 to-orange-500";
    return "from-orange-500 to-red-600";
  };

  return (
    <Card className={cn("overflow-hidden bg-gradient-primary text-white", className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="font-heading font-medium text-lg">Air Quality</CardTitle>
          <CardDescription className="text-sm text-white/80">Main pollutant: {pollutant}</CardDescription>
        </div>
        <div className="bg-white/20 p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-end gap-2">
          <div className="temp-display font-display font-bold text-4xl">
            {aqi}
          </div>
          <div className="bg-yellow-400 text-blue-900 px-2 py-1 rounded text-xs font-medium mb-2">
            AQI
          </div>
        </div>
        
        <div className="text-sm">{windDirection}</div>
        
        <div className="bg-white/10 p-3 rounded-full">
          <div className="flex justify-between text-sm mb-2">
            <span>Good</span>
            <span className={`${getQualityColor()} px-3 py-1 rounded-full text-xs`}>{quality}</span>
            <span>Hazardous</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full">
            <div 
              className={`h-2 bg-gradient-to-r ${getGradientClass()} rounded-full`} 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-center pt-2">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div className="absolute -top-6 -right-6 animate-pulse-slow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AirQualityCard; 