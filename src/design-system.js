/**
 * WEATHER DASHBOARD DESIGN SYSTEM
 * ===============================
 * This file serves as documentation for the design system implementation.
 */

/**
 * COLOR SYSTEM
 * ------------
 * The color system is built around a primary blue palette, a secondary orange palette,
 * and two accent palettes (teal and light blue) that work together for UI elements.
 */
export const colors = {
  // Primary blue palette
  primary: {
    50: '#eef7fd', // Lightest - Background, hover states
    100: '#dceffa', // Light backgrounds, borders
    200: '#b9dff6', // Light interactive elements
    300: '#8acbf0', // Borders, dividers
    400: '#58aee6', // Primary buttons, links, icons - Gradient start
    500: '#3991d9', // Primary action elements
    600: '#2476c7', // Hover states, secondary actions - Gradient end
    700: '#1d5ea0', // Focus states
    800: '#1a4c80', // Dark text on light backgrounds
    900: '#183e69', // Darkest - Headings, primary text
  },

  // Secondary orange palette
  secondary: {
    50: '#fff8f2', // Lightest - Background, hover states
    100: '#fff0e6', // Light backgrounds, borders
    200: '#ffdfc2', // Light interactive elements
    300: '#ffcb99', // Highlighted elements - Gradient start
    400: '#ffb270', // Warning buttons, alerts
    500: '#ff9447', // Standard buttons, elements
    600: '#ff7520', // Hover states
    700: '#e65c00', // Focus states - Gradient end
    800: '#cc4d00', // Dark text on light backgrounds
    900: '#a63e00', // Darkest shade - Used for contrast
  },

  // Accent teal palette
  accent1: {
    50: '#edfdf9', // Lightest - Background, hover states
    100: '#d0f7ef', // Light backgrounds, borders
    200: '#a6f0e2', // Light interactive elements
    300: '#7bead2', // Charts, graphs - Gradient start
    400: '#42d9b9', // Success indicators
    500: '#2bbda0', // Standard elements
    600: '#1e9e85', // Hover states
    700: '#1a7f6b', // Focus states
    800: '#166557', // Dark text on light backgrounds
    900: '#0a4d3a', // Darkest - Used for contrast
  },

  // Accent light blue palette
  accent2: {
    50: '#f0f5ff', // Lightest - Background, hover states
    100: '#e6edff', // Light backgrounds, borders
    200: '#d1e0ff', // Light interactive elements
    300: '#b3ceff', // Info indicators
    400: '#7faaff', // Charts, graphs - Gradient end
    500: '#5785f6', // Standard elements
    600: '#3366e6', // Hover states
    700: '#254fd9', // Focus states
    800: '#1f40b3', // Dark text on light backgrounds
    900: '#1a3366', // Darkest - Used for contrast
  },

  // Neutral gray palette
  gray: {
    50: '#f8f9fa', // Background, cards
    100: '#f1f3f5', // Light background, hover
    200: '#e9ecef', // Borders, dividers
    300: '#dee2e6', // Disabled buttons
    400: '#ced4da', // Disabled text
    500: '#adb5bd', // Placeholder text
    600: '#868e96', // Secondary text
    700: '#495057', // Body text
    800: '#343a40', // Headings
    900: '#212529', // Primary text
  },

  // UI state colors
  success: '#27ae60', // Success states, positive indicators
  warning: '#f39c12', // Warning states, moderate indicators
  danger: '#e74c3c',  // Error states, negative indicators
  info: '#3498db',    // Information states, neutral indicators
};

/**
 * GRADIENTS
 * ---------
 * Gradients are used to create depth and visual interest. They're primarily used
 * for cards, buttons, and background elements.
 */
export const gradients = {
  primary: 'linear-gradient(135deg, #58aee6 0%, #2476c7 100%)',
  secondary: 'linear-gradient(135deg, #ffcb99 0%, #e65c00 100%)',
  accent: 'linear-gradient(135deg, #7bead2 0%, #7faaff 100%)',
  diagonal: 'linear-gradient(45deg, #58aee6 0%, #7bead2 100%)',
  radial: 'radial-gradient(circle, #7bead2 0%, #2476c7 100%)',
};

/**
 * TYPOGRAPHY
 * ----------
 * The type system uses a combination of fonts:
 * - Headings: Poppins (clean, modern sans-serif for titles and headings)
 * - Display: Montserrat (bold, impactful for large displays like temperatures)
 * - Body: Inter (highly legible for all body text)
 * - Mono: JetBrains Mono (for code or technical data)
 */
export const typography = {
  fontFamilies: {
    heading: '"Poppins", system-ui, sans-serif',
    display: '"Montserrat", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },

  fontSizes: {
    // Display sizes
    'display-1': '4.5rem', // 72px
    'display-2': '4rem',   // 64px
    'display-3': '3.5rem', // 56px

    // Heading sizes
    'h1': '3rem',      // 48px
    'h2': '2.5rem',    // 40px
    'h3': '2rem',      // 32px
    'h4': '1.75rem',   // 28px
    'h5': '1.5rem',    // 24px
    'h6': '1.25rem',   // 20px

    // Body sizes
    'body-lg': '1.125rem', // 18px
    'body': '1rem',        // 16px
    'body-sm': '0.875rem', // 14px
    'caption': '0.75rem',  // 12px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.1,  // Display text
    snug: 1.3,   // Headings
    normal: 1.5, // Subheadings
    relaxed: 1.7, // Body text
  },
};

/**
 * SHADOWS
 * -------
 * Shadow system creates elevation and depth in the UI.
 */
export const shadows = {
  sm: '0 1px 2px 0 rgba(33, 37, 41, 0.05)',
  md: '0 4px 6px -1px rgba(33, 37, 41, 0.1), 0 2px 4px -1px rgba(33, 37, 41, 0.06)',
  lg: '0 10px 15px -3px rgba(33, 37, 41, 0.1), 0 4px 6px -2px rgba(33, 37, 41, 0.05)',
  xl: '0 20px 25px -5px rgba(33, 37, 41, 0.1), 0 10px 10px -5px rgba(33, 37, 41, 0.04)',
  '2xl': '0 25px 50px -12px rgba(33, 37, 41, 0.25)',
  card: '0 4px 20px 0 rgba(33, 37, 41, 0.08)',
  'card-hover': '0 10px 30px 0 rgba(33, 37, 41, 0.12)',
  inner: 'inset 0 2px 4px 0 rgba(33, 37, 41, 0.06)',
  none: 'none',
};

/**
 * BORDER RADIUS
 * -------------
 * Border radius tokens for consistent component shape.
 */
export const borderRadius = {
  none: '0',
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  full: '9999px',   // Circular elements
};

/**
 * SPACING
 * -------
 * Spacing system for margin, padding, and layout.
 */
export const spacing = {
  0: '0',
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  32: '8rem',       // 128px
  40: '10rem',      // 160px
  48: '12rem',      // 192px
  56: '14rem',      // 224px
  64: '16rem',      // 256px
};

/**
 * TRANSITIONS
 * -----------
 * Transition presets for consistent animations.
 */
export const transitions = {
  durations: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  timingFunctions: {
    linear: 'linear',
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  properties: {
    height: 'height',
    spacing: 'margin, padding',
    colors: 'color, background-color, border-color',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
  },
};

/**
 * COMPONENT-SPECIFIC GUIDELINES
 * ----------------------------
 * Guidelines for implementing components with the design system.
 */
export const componentGuidelines = {
  // Weather Card Component
  weatherCard: {
    background: 'bg-secondary or gradient-primary',
    borderRadius: 'rounded-md (0.75rem)',
    padding: 'p-6',
    shadow: 'shadow-card',
    hover: 'transform: translateY(-5px), shadow-card-hover',
    structure: `
      <div class="weather-card">
        <h3 class="text-lg font-medium">Weather</h3>
        <p class="text-sm text-gray-600">What's the weather</p>
        <div class="temp-display">22°C</div>
        <p class="text-md">Partly Cloudy</p>
        <div class="mt-4 grid grid-cols-3 gap-2">
          <div class="bg-blue-900 text-white p-3 rounded-md text-center">
            <p class="text-xs">Pressure</p>
            <p class="text-lg font-medium">800mb</p>
          </div>
          <div class="bg-lime-300 p-3 rounded-md text-center">
            <p class="text-xs">Visibility</p>
            <p class="text-lg font-medium">4.3 km</p>
          </div>
          <div class="bg-white p-3 rounded-md text-center">
            <p class="text-xs">Humidity</p>
            <p class="text-lg font-medium">87%</p>
          </div>
        </div>
      </div>
    `,
  },

  // Air Quality Component
  airQualityCard: {
    background: 'bg-blue-500 or gradient-primary',
    color: 'text-white',
    borderRadius: 'rounded-md (0.75rem)',
    padding: 'p-6',
    shadow: 'shadow-card',
    structure: `
      <div class="bg-blue-500 text-white p-6 rounded-md shadow-card">
        <h3 class="text-lg font-medium">Air Quality</h3>
        <p class="text-sm opacity-80">Main pollutant: PM 2.5</p>
        <div class="text-5xl font-bold mt-4">390</div>
        <div class="mt-2">
          <span class="bg-yellow-400 text-blue-900 px-2 py-1 rounded text-xs font-medium">AQI</span>
        </div>
        <p class="mt-2">West Wind</p>
        <div class="mt-4">
          <div class="bg-white/10 p-2 rounded-full">
            <div class="flex justify-between text-sm">
              <span>Good</span>
              <span class="bg-blue-900 px-3 py-1 rounded-full text-xs">Standard</span>
              <span>Hazardous</span>
            </div>
            <div class="w-full h-2 bg-white/20 rounded-full mt-2">
              <div class="w-1/2 h-2 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // Temperature Chart Component
  temperatureChart: {
    lineColor: 'stroke=#ff9447',
    dotColor: 'bg-white border-2 border-orange-500',
    structure: `
      <div class="mt-8">
        <h3 class="text-xl font-semibold">How's the temperature today?</h3>
        <div class="mt-4 relative h-40">
          <!-- SVG chart implementation -->
          <svg class="w-full h-full">
            <path d="M0,80 C50,40 100,100 150,60 C200,20 250,80 300,60" 
                  fill="none" 
                  stroke="#ff9447" 
                  stroke-width="3" />
            <circle cx="50" cy="40" r="6" class="fill-white stroke-2 stroke-orange-500" />
            <circle cx="150" cy="60" r="6" class="fill-white stroke-2 stroke-orange-500" />
            <circle cx="250" cy="80" r="6" class="fill-white stroke-2 stroke-orange-500" />
          </svg>
          
          <!-- Temperature points -->
          <div class="grid grid-cols-4 gap-4 absolute bottom-0 w-full text-center">
            <div>
              <div class="text-xl font-medium">20°</div>
              <div class="text-sm text-gray-500">Morning</div>
            </div>
            <div>
              <div class="text-xl font-medium">34°</div>
              <div class="text-sm text-gray-500">Afternoon</div>
            </div>
            <div>
              <div class="text-xl font-medium">28°</div>
              <div class="text-sm text-gray-500">Evening</div>
            </div>
            <div>
              <div class="text-xl font-medium">22°</div>
              <div class="text-sm text-gray-500">Night</div>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // UV Index Component
  uvIndex: {
    background: 'bg-blue-900',
    color: 'text-white',
    borderRadius: 'rounded-md (0.75rem)',
    padding: 'p-4',
    structure: `
      <div class="bg-blue-900 text-white p-4 rounded-md">
        <div class="flex items-center">
          <div class="text-amber-400">
            <!-- Sun icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
          <div class="ml-3">
            <div class="text-2xl font-bold">20 UVI</div>
            <div class="flex items-center">
              <span>Moderate</span>
              <span class="ml-2 px-2 py-0.5 bg-yellow-500 text-xs font-medium rounded">Moderate</span>
            </div>
          </div>
        </div>
        <p class="mt-2 text-sm">Moderate risk of from UV rays</p>
      </div>
    `,
  },

  // Forecast Component
  forecastCard: {
    background: 'bg-lime-100',
    color: 'text-gray-900',
    borderRadius: 'rounded-md (0.75rem)',
    padding: 'p-6',
    structure: `
      <div class="bg-lime-100 p-6 rounded-md">
        <div class="mb-2">Tomorrow</div>
        <h3 class="text-2xl font-bold mb-1">Alam Barzah</h3>
        <div class="text-5xl font-bold mb-4">20°C</div>
        <div>Rainny</div>
        <div class="mt-4">
          <!-- Illustration of person with umbrella -->
        </div>
      </div>
    `,
  },

  // Weather Prediction Component
  weatherPrediction: {
    structure: `
      <div>
        <h3 class="text-2xl font-semibold mb-4">Weather Prediction</h3>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-md flex items-center justify-between">
            <div class="flex items-center">
              <div class="text-gray-400 mr-4">
                <!-- Cloud icon -->
              </div>
              <div>
                <div class="text-sm text-gray-500">November 10</div>
                <div class="font-medium">Cloudy</div>
              </div>
            </div>
            <div class="font-medium">26° / 19°</div>
          </div>
          
          <div class="bg-white p-4 rounded-md flex items-center justify-between">
            <div class="flex items-center">
              <div class="text-amber-400 mr-4">
                <!-- Sun icon -->
              </div>
              <div>
                <div class="text-sm text-gray-500">November 11</div>
                <div class="font-medium">Bright</div>
              </div>
            </div>
            <div class="font-medium">26° / 20°</div>
          </div>
        </div>
      </div>
    `,
  },
};

/**
 * MIGRATION GUIDE
 * ---------------
 * Instructions for updating existing components to use the new design system.
 */
export const migrationGuide = {
  steps: [
    {
      title: 'Update color references',
      description: 'Replace hardcoded colors with design system tokens',
      before: `<div style="background-color: #3498db; color: white;">...</div>`,
      after: `<div class="bg-primary-500 text-white">...</div>`,
    },
    {
      title: 'Implement typography classes',
      description: 'Replace existing typography with design system classes',
      before: `<h1 style="font-size: 48px; font-weight: bold;">Title</h1>`,
      after: `<h1 class="text-h1 font-bold">Title</h1>`,
    },
    {
      title: 'Add shadows and borders',
      description: 'Use the shadow and border radius utilities',
      before: `<div style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">...</div>`,
      after: `<div class="shadow-md rounded-md">...</div>`,
    },
    {
      title: 'Implement spacing system',
      description: 'Replace hardcoded margins and padding with spacing tokens',
      before: `<div style="margin: 16px; padding: 24px;">...</div>`,
      after: `<div class="m-4 p-6">...</div>`,
    },
    {
      title: 'Apply gradients',
      description: 'Use the gradient classes for backgrounds',
      before: `<div style="background: linear-gradient(135deg, #58b9e6, #3975c6);">...</div>`,
      after: `<div class="bg-gradient-primary">...</div>`,
    },
    {
      title: 'Update components',
      description: 'Use the component examples as templates for your components',
      note: 'See the componentGuidelines section for component-specific markup examples',
    },
    {
      title: 'Implement dark mode',
      description: 'Add dark mode variants where needed',
      example: `<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">...</div>`,
    },
  ],
  notes: [
    'Always use the class-based approach rather than inline styles',
    'For custom components, extend the design system rather than creating one-off styles',
    'Maintain consistency by reusing the same patterns across similar components',
    'Use CSS variables for dynamic theming where appropriate',
  ],
};

/**
 * EXAMPLES
 * --------
 * Usage examples for the design system tokens.
 */
export const examples = {
  colorUsage: {
    primary: `<button class="bg-primary-500 hover:bg-primary-600 text-white">Button</button>`,
    secondary: `<button class="bg-secondary-500 hover:bg-secondary-600 text-white">Button</button>`,
    accent: `<div class="border-2 border-accent1-400">Accented Content</div>`,
    text: `<p class="text-gray-700 dark:text-gray-300">Body text</p>`,
  },
  
  typographyUsage: {
    heading: `<h1 class="text-h1 font-bold text-gray-900">Page Title</h1>`,
    display: `<div class="text-display-1 font-bold text-primary-600">22°C</div>`,
    body: `<p class="text-body text-gray-700">Regular paragraph text</p>`,
    caption: `<span class="text-caption text-gray-500">Last updated: Today</span>`,
  },
  
  gradientUsage: {
    primary: `<div class="bg-gradient-primary text-white p-4 rounded-md">Primary Card</div>`,
    secondary: `<button class="bg-gradient-secondary text-white px-4 py-2 rounded-md">Action</button>`,
    accent: `<div class="bg-gradient-accent text-white p-4 rounded-md">Accent Content</div>`,
  },
  
  shadowUsage: {
    card: `<div class="shadow-card hover:shadow-card-hover transition-shadow">Card with hover effect</div>`,
    button: `<button class="shadow-md hover:shadow-lg">Button with shadow</button>`,
  },
  
  borderRadiusUsage: {
    button: `<button class="rounded-md">Default Button</button>`,
    pill: `<button class="rounded-full">Pill Button</button>`,
    card: `<div class="rounded-lg">Card</div>`,
  },
  
  spacingUsage: {
    layout: `<div class="p-6 m-4">Padded and Margined Element</div>`,
    gap: `<div class="space-y-4">Vertically Spaced Children</div>`,
  },
  
  darkModeUsage: {
    basic: `<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Dark Mode Compatible</div>`,
    buttons: `<button class="bg-primary-500 dark:bg-primary-600 text-white">Button</button>`,
  },
}; 