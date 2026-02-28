import Button from './components/Button'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Frontend Design</h1>
        <p className="text-gray-500">A React + TypeScript + Tailwind CSS starter</p>
        <Button label="Get Started" onClick={() => alert('Welcome!')} />
      </div>
    </div>
  )
}

export default App
