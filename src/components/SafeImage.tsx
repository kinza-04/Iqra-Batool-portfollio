import { useState, ImgHTMLAttributes } from 'react';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function SafeImage({ src, fallbackSrc, alt, className, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className="relative w-full h-full bg-slate-900/60 overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center animate-pulse">
          <div className="w-5 h-5 rounded-full border border-purple-500/30 border-t-purple-500 animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-500 ease-out`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
}
