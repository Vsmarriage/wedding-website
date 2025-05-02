function VideoPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Wedding Video</h1>
      <div className="relative w-full max-w-4xl mx-auto" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube video ID
          title="Wedding Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoPage