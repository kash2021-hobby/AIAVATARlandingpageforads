import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export default function VideoPlayer({ url, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        muted={isMuted}
        loop={true}
        width="100%"
        height="100%"
        controls={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            }
          }
        }}
      />

      {isHovering && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}

      {isHovering && isMuted && (
        <div className="absolute top-4 left-4 right-4 bg-slate-900/80 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm z-10 animate-fade-in">
          Click the sound icon to enable audio
        </div>
      )}
    </div>
  );
}
