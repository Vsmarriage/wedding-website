import { Routes, Route, Link } from 'react-router-dom'
import Slideshow from './components/Slideshow'
import VideoPage from './components/VideoPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-pink-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/video" className="hover:underline">Wedding Video</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Wedding</h1>
            <Slideshow />
          </div>
        } />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <footer className="bg-pink-500 text-white text-center p-4 mt-8">
        <p>&copy; 2025 Wedding Celebration</p>
      </footer>
    </div>
  )
}

export default App