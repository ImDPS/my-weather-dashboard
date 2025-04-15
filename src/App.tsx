import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Vite + React + Tailwind</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-blue-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors mb-4"
        >
          Count is {count}
        </button>
        <p className="text-gray-700">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
