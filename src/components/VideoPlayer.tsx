interface VideoPlayerProps {
  url: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait';
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export default function VideoPlayer({ url, className = '' }: VideoPlayerProps) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <div className={`flex items-center justify-center bg-slate-800 ${className}`}>
        <p className="text-white">Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
}
