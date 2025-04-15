import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';

interface UVIndexProps {
  uvIndex: number;
  riskLevel: RiskLevel;
  className?: string;
}

/**
 * UVIndex Component
 * 
 * Displays UV index information with risk level
 */
const UVIndex: React.FC<UVIndexProps> = ({
  uvIndex = 20,
  riskLevel = "Moderate",
  className
}) => {
  // Get color based on risk level
  const getRiskColor = (): string => {
    switch(riskLevel) {
      case 'Low': return 'bg-green-500';
      case 'Moderate': return 'bg-yellow-500';
      case 'High': return 'bg-orange-500';
      case 'Very High': return 'bg-red-500';
      case 'Extreme': return 'bg-purple-600';
      default: return 'bg-yellow-500';
    }
  };

  // Get percentage position for the marker based on UV index
  const getMarkerPosition = (): number => {
    return Math.min(uvIndex / 12, 1) * 100;
  };

  // Get protection advice based on risk level
  const getProtectionAdvice = (): string[] => {
    const baseAdvice = ["Apply SPF 30+ sunscreen"];
    
    switch(riskLevel) {
      case 'Low':
        return baseAdvice;
      case 'Moderate':
        return [...baseAdvice, "Wear protective clothing", "Seek shade during midday hours"];
      case 'High':
      case 'Very High':
      case 'Extreme':
        return [
          ...baseAdvice, 
          "Wear protective clothing", 
          "Seek shade during midday hours",
          "Minimize outdoor activities between 10am-4pm"
        ];
      default:
        return baseAdvice;
    }
  };

  return (
    <Card className={cn("bg-blue-900 text-white", className)}>
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        <div className="text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" strokeWidth="2" />
            <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" />
            <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" />
            <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" />
            <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <div className="text-2xl font-display font-bold">{uvIndex} UVI</div>
          <div className="flex items-center">
            <span className="text-sm">{riskLevel}</span>
            <span className={`ml-2 px-2 py-0.5 ${getRiskColor()} text-xs font-medium rounded`}>
              {riskLevel}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm opacity-80">
          {riskLevel} risk of UV exposure
        </p>
        
        {/* UV Index Scale */}
        <div className="pt-2 border-t border-white/20">
          <div className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 rounded-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className="relative"
                    style={{ 
                      marginTop: '-8px',
                      marginLeft: `calc(${getMarkerPosition()}% - 8px)`
                    }}
                  >
                    <div className="absolute w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>UV Index: {uvIndex}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="w-full flex justify-between text-xs mt-1">
            <span>0</span>
            <span>3</span>
            <span>6</span>
            <span>8</span>
            <span>11+</span>
          </div>
        </div>
        
        {/* Protection advice */}
        <div className="text-xs">
          <p className="font-medium mb-1">Protection needed:</p>
          <ul className="list-disc list-inside opacity-80 space-y-1">
            {getProtectionAdvice().map((advice, index) => (
              <li key={index}>{advice}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default UVIndex; 