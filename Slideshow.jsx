import { useState, useEffect } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const images = [image1, image2, image3]

function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[currentImage]}
        alt="Wedding moment"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-pink-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow