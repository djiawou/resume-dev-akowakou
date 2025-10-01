'use client';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlayClassName?: string;
}

export function VideoBackground({ src, className, overlayClassName }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src={src}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
    </div>
  );
}
