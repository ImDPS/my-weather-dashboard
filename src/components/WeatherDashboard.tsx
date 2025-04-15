import React from 'react';
import WeatherCard from './WeatherCard';
import AirQualityCard from './AirQualityCard';
import UVIndex from './UVIndex';
import SunriseSunsetChart from './SunriseSunsetChart';
import WeatherForecast from './WeatherForecast';
import AirQuality from './AirQuality';

interface WeatherDashboardProps {
  username?: string;
  location?: {
    city: string;
    country: string;
  };
  currentTemperature?: number;
  currentCondition?: string;
  className?: string;
}

/**
 * WeatherDashboard Component
 * 
 * Main dashboard assembling all weather-related components
 * and demonstrating the design system.
 */
const WeatherDashboard: React.FC<WeatherDashboardProps> = ({
  username = "Durgendra",
  location = { city: "Banten", country: "Indonesia" },
  currentTemperature = 22,
  currentCondition = "Partly Cloudy"
}) => {
  // Mock data for forecast
  const forecastData = [
    {
      day: 'Mon',
      date: '06/20',
      temperature: { min: 68, max: 85 },
      condition: 'Sunny',
      icon: null
    },
    {
      day: 'Tue',
      date: '06/21',
      temperature: { min: 70, max: 83 },
      condition: 'Cloudy',
      icon: null
    },
    {
      day: 'Wed',
      date: '06/22',
      temperature: { min: 65, max: 77 },
      condition: 'Rainy',
      icon: null
    },
    {
      day: 'Thu',
      date: '06/23',
      temperature: { min: 67, max: 79 },
      condition: 'Cloudy',
      icon: null
    },
    {
      day: 'Fri',
      date: '06/24',
      temperature: { min: 70, max: 82 },
      condition: 'Sunny',
      icon: null
    }
  ];

  // Mock data for air quality
  const airQualityData = {
    aqi: 75,
    pollutants: {
      pm25: 12.5,
      pm10: 28.3,
      o3: 40,
      no2: 15,
      so2: 5,
      co: 0.8
    }
  };
  
  return (
    <div className="bg-primary-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-primary-600 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-medium">Hello,</h1>
              <h2 className="text-xl font-semibold text-gray-900">{username}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                id="search"
                type="search"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="Search anything..."
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <button className="text-gray-600 relative" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs flex items-center justify-center rounded-full h-4 w-4">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Current Location & Temperature */}
      <div className="container mx-auto pt-4 px-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Sun</h2>
            <div className="flex items-center">
              <span className="text-gray-600">{location.city}, {location.country}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <div className="text-4xl font-display font-bold text-gray-900">
              {currentTemperature}°C
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeatherCard 
            temperature={currentTemperature} 
            condition={currentCondition} 
            pressure={800}
            visibility={4.3}
            humidity={87}
            feelsLike={currentTemperature - 2}
          />

          <AirQualityCard 
            aqi={390}
            pollutant="PM 2.5"
            windDirection="West Wind"
            quality="Standard"
          />
        </div>

        {/* Sunrise/Sunset Timeline */}
        <div className="mt-6">
          <SunriseSunsetChart 
            sunriseTime="06:00 am"
            sunsetTime="06:45 pm"
            currentTime="03:30 pm"
            currentPosition={75}
          />
        </div>

        {/* UV Index */}
        <div className="mt-6">
          <UVIndex uvIndex={20} riskLevel="Moderate" />
        </div>

        {/* Air Quality Detailed */}
        <div className="mt-6">
          <AirQuality 
            aqi={airQualityData.aqi}
            pollutants={airQualityData.pollutants}
          />
        </div>

        {/* 5-Day Forecast */}
        <div className="mt-6">
          <WeatherForecast forecast={forecastData} />
        </div>

        {/* Weather Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-secondary-500 text-white p-3 rounded-full shadow-md" aria-label="Sun">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <button className="bg-white text-gray-600 p-3 rounded-full shadow-md" aria-label="Cloud">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </button>

          <button className="bg-white text-gray-600 p-3 rounded-full shadow-md" aria-label="Rain">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard; 