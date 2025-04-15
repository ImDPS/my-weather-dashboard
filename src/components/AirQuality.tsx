import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

// Define the props for the AirQuality component
interface AirQualityProps {
  aqi: number; // Air Quality Index
  pollutants?: {
    pm25?: number; // PM2.5 (μg/m³)
    pm10?: number; // PM10 (μg/m³)
    o3?: number;   // Ozone (ppb)
    no2?: number;  // Nitrogen Dioxide (ppb)
    so2?: number;  // Sulfur Dioxide (ppb)
    co?: number;   // Carbon Monoxide (ppm)
  };
  className?: string;
}

// Air quality level definitions
const AQI_LEVELS = [
  { max: 50, label: 'Good', color: 'bg-green-500', textColor: 'text-green-700' },
  { max: 100, label: 'Moderate', color: 'bg-yellow-400', textColor: 'text-yellow-700' },
  { max: 150, label: 'Unhealthy for Sensitive Groups', color: 'bg-orange-400', textColor: 'text-orange-700' },
  { max: 200, label: 'Unhealthy', color: 'bg-red-500', textColor: 'text-red-700' },
  { max: 300, label: 'Very Unhealthy', color: 'bg-purple-500', textColor: 'text-purple-700' },
  { max: 500, label: 'Hazardous', color: 'bg-rose-900', textColor: 'text-rose-700' },
];

// Get air quality level based on AQI value
const getAirQualityLevel = (aqi: number) => {
  return AQI_LEVELS.find((level, index) => 
    aqi <= level.max || index === AQI_LEVELS.length - 1
  ) || AQI_LEVELS[0];
};

const AirQuality: React.FC<AirQualityProps> = ({ aqi = 35, pollutants = {}, className }) => {
  const airQualityLevel = getAirQualityLevel(aqi);
  
  // Calculate progress percentage (assuming max AQI is 500)
  const progressPercentage = Math.min(Math.round((aqi / 500) * 100), 100);
  
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Air Quality</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold">{aqi}</span>
              <span className="text-sm text-gray-500 ml-2">AQI</span>
            </div>
            <div className={cn("px-3 py-1 rounded-full text-sm font-medium", airQualityLevel.textColor)}>
              {airQualityLevel.label}
            </div>
          </div>
          
          <Progress
            value={progressPercentage}
            className="h-2"
            indicatorClassName={airQualityLevel.color}
          />
          
          {Object.keys(pollutants).length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              {pollutants.pm25 !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">PM2.5</span>
                  <span className="font-medium">{pollutants.pm25} μg/m³</span>
                </div>
              )}
              {pollutants.pm10 !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">PM10</span>
                  <span className="font-medium">{pollutants.pm10} μg/m³</span>
                </div>
              )}
              {pollutants.o3 !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">O₃</span>
                  <span className="font-medium">{pollutants.o3} ppb</span>
                </div>
              )}
              {pollutants.no2 !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">NO₂</span>
                  <span className="font-medium">{pollutants.no2} ppb</span>
                </div>
              )}
              {pollutants.so2 !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">SO₂</span>
                  <span className="font-medium">{pollutants.so2} ppb</span>
                </div>
              )}
              {pollutants.co !== undefined && (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">CO</span>
                  <span className="font-medium">{pollutants.co} ppm</span>
                </div>
              )}
            </div>
          )}
          
          <div className="text-xs text-gray-500 mt-2">
            <p>
              AQI: Air Quality Index. Lower values represent better air quality.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirQuality; 