import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export default function VideoPlayer({ url, className = '' }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef<any>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = x / bounds.width;
    playerRef.current?.seekTo(percentage);
  };

  const handleFullscreen = () => {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainer.requestFullscreen();
      }
    }
  };

  return (
    <div
      id="video-container"
      className={`relative rounded-3xl overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      style={{ width: '100%', height: '100%' }}
    >
      <div className="absolute inset-0">
        {/* @ts-ignore */}
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          loop={true}
          muted={muted}
          width="100%"
          height="100%"
          playsinline={true}
          style={{ position: 'absolute', top: 0, left: 0 }}
          onProgress={handleProgress}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                rel: 0
              }
            }
          }}
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <div
            className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer backdrop-blur-sm overflow-hidden"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {playing ? (
                  <Pause size={24} className="text-slate-900" />
                ) : (
                  <Play size={24} className="text-slate-900 ml-0.5" />
                )}
              </button>

              <button
                onClick={handleMuteToggle}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {muted ? (
                  <VolumeX size={22} className="text-slate-900" />
                ) : (
                  <Volume2 size={22} className="text-slate-900" />
                )}
              </button>
            </div>

            <button
              onClick={handleFullscreen}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Maximize size={22} className="text-slate-900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
