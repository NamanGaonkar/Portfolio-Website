'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-6xl opacity-20">💡</div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={isMobile ? 60 : 75}
      loading="lazy"
      onError={() => setImageError(true)}
    />
  );
}
