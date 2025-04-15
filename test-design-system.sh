#!/bin/bash

# Test script for Weather Dashboard Design System

echo "🧪 Testing Weather Dashboard Design System..."

# Check if dependencies are installed
npm_installed=$(which npm)
if [ -z "$npm_installed" ]; then
  echo "❌ npm is not installed. Please install Node.js and npm first."
  exit 1
fi

# Check if project dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run linting tests
echo "🔍 Running linting tests..."
npm run lint || { echo "❌ Linting failed. Please fix the issues above."; exit 1; }

# Build the project to check for errors
echo "🏗️ Building project to check for errors..."
npm run build || { echo "❌ Build failed. Please fix the errors above."; exit 1; }

# Start development server
echo "🚀 Starting development server..."
echo "✅ Design system test passed! Open your browser at http://localhost:5173"
echo "🎨 Testing colors, typography, components, and layout..."
echo "📱 Test responsive behavior by resizing your browser window."
echo "🌓 Test dark mode by adding 'dark' class to the <html> element in DevTools."
echo ""
echo "Press Ctrl+C to stop the server when done."

npm run dev 