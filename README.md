# Weather Dashboard Design System

A comprehensive design system implementation for a weather dashboard application based on the provided reference design. This project leverages React, Tailwind CSS, and custom styling to create a cohesive and visually appealing user interface.

![Weather Dashboard Preview](reference-image.png)

## Design System Overview

This design system provides a complete foundation for building weather-related UI components with a consistent look and feel. It includes:

- **Color System**: Carefully curated color palettes for primary, secondary, and accent colors
- **Typography System**: Consistent text styling with appropriate hierarchy
- **Component Library**: Reusable UI components specifically designed for weather data visualization
- **Spacing & Layout**: Standardized spacing and layout guidelines
- **Shadows & Elevation**: Consistent shadow styles for visual depth
- **Interaction States**: Defined hover, focus, and active states

## Colors & Gradients

The color system is built around four main palettes:

### Primary Palette (Blue)
- Range: `primary-50` through `primary-900`
- Primary gradient: `linear-gradient(135deg, #58aee6 0%, #2476c7 100%)`

### Secondary Palette (Orange)
- Range: `secondary-50` through `secondary-900`
- Secondary gradient: `linear-gradient(135deg, #ffcb99 0%, #e65c00 100%)`

### Accent1 Palette (Teal)
- Range: `accent1-50` through `accent1-900`

### Accent2 Palette (Light Blue)
- Range: `accent2-50` through `accent2-900`

### Gradient Combinations
- Primary gradient: `bg-gradient-primary`
- Secondary gradient: `bg-gradient-secondary`
- Accent gradient: `bg-gradient-accent`

## Typography System

The typography system uses a combination of carefully selected fonts:

- **Headings**: Poppins (clean, modern sans-serif)
- **Display**: Montserrat (bold, impactful for large displays like temperatures)
- **Body**: Inter (highly legible for all body text)
- **Mono**: JetBrains Mono (for code or technical data)

### Type Scale
- Display sizes: 4.5rem, 4rem, 3.5rem
- Heading sizes: 3rem, 2.5rem, 2rem, 1.75rem, 1.5rem, 1.25rem
- Body sizes: 1.125rem, 1rem, 0.875rem, 0.75rem

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Components

The design system includes the following components:

- **WeatherCard**: Displays current weather conditions
- **AirQualityCard**: Shows air quality information
- **UVIndex**: UV index with risk level indicator
- **WeatherDashboard**: Main dashboard layout that combines all components

## Usage

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Using Components

```jsx
import WeatherCard from './components/WeatherCard';
import AirQualityCard from './components/AirQualityCard';
import UVIndex from './components/UVIndex';

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherCard 
          temperature={22} 
          condition="Partly Cloudy" 
          pressure={800}
          visibility={4.3}
          humidity={87}
        />
        
        <AirQualityCard 
          aqi={390}
          pollutant="PM 2.5"
          windDirection="West Wind"
          quality="Standard"
        />
      </div>
      
      <div className="mt-6">
        <UVIndex uvIndex={20} riskLevel="Moderate" />
      </div>
    </div>
  );
}
```

## Design Tokens

All design tokens are defined in:

1. `tailwind.config.js` - For Tailwind CSS classes
2. `src/App.css` - For global CSS variables and styles
3. `src/design-system.js` - For documentation and reference

## Migration Guide

When updating existing components to use the design system:

1. Replace hardcoded colors with design system tokens
2. Implement typography classes
3. Use shadow and border radius utilities
4. Implement spacing system
5. Apply gradients where appropriate
6. Add dark mode variants

## Dark Mode Support

The design system includes dark mode variants. To toggle dark mode:

```jsx
// Add or remove the 'dark' class to the html element
document.documentElement.classList.toggle('dark');
```

## Browser Support

The design system is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Credits

Design inspired by [UI/UX Hackathon Weather Dashboard]
