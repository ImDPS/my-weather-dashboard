import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface TimePoint {
  time: string;
  label: string;
  icon: React.ReactNode;
  position: number; // 0-100 percentage
}

interface SunriseSunsetChartProps {
  sunriseTime: string;
  sunsetTime: string;
  currentTime: string;
  currentPosition: number; // 0-100 percentage
  className?: string;
}

const SunIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CurrentTimeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const TimePointIndicator: React.FC<{ point: TimePoint }> = ({ point }) => (
  <div className="absolute text-center" style={{ left: `${point.position}%`, top: '-20px' }}>
    <div>{point.icon}</div>
    <div className="text-sm font-medium text-gray-700">{point.label}</div>
    <div className="text-xs text-gray-500">{point.time}</div>
  </div>
);

const SunriseSunsetChart: React.FC<SunriseSunsetChartProps> = ({
  sunriseTime = "06:00 am",
  sunsetTime = "06:45 pm",
  currentTime = "03:30 pm",
  currentPosition = 75,
  className
}) => {
  const timePoints: TimePoint[] = [
    {
      time: sunriseTime,
      label: "Sunrise",
      icon: <SunIcon />,
      position: 0
    },
    {
      time: currentTime,
      label: "Now",
      icon: <CurrentTimeIcon />,
      position: currentPosition
    },
    {
      time: sunsetTime,
      label: "Sunset",
      icon: <MoonIcon />,
      position: 100
    }
  ];

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Sunrise & Sunset</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="w-full h-1 bg-gray-200 rounded my-6">
            <div 
              className="h-1 bg-primary-400 rounded" 
              style={{ width: `${currentPosition}%` }}
            />
          </div>

          {timePoints.map((point, index) => (
            <React.Fragment key={index}>
              <div 
                className={cn(
                  "absolute w-4 h-4 rounded-full", 
                  index === 2 ? "bg-gray-400" : "bg-primary-500"
                )} 
                style={{ left: `${point.position}%`, top: '36%' }}
              />
              <TimePointIndicator point={point} />
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SunriseSunsetChart; 