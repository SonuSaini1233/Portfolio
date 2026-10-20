import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ sceneUrl }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  function onLoad() {
    setIsLoaded(true);
  }

  function onError() {
    setHasError(true);
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Loading Skeleton / Spinner while 3D WebGL scene downloads */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3 pointer-events-none bg-[#0B0D12]/60 backdrop-blur-sm">
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#648CFF]/20 border-t-[#A78BFA] animate-spin" />
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-[#648CFF]/30 to-[#A78BFA]/30 blur-sm animate-pulse" />
          </div>
          <span className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase animate-pulse">
            Loading 3D Robot Scene...
          </span>
        </div>
      )}

      {/* Fallback if WebGL/Network fails */}
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#648CFF]/20 to-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-[#A78BFA]/40 blur-md animate-pulse" />
          </div>
          <p className="text-xs font-mono text-[#A7B0C0]">
            Interactive 3D Robot
          </p>
        </div>
      ) : (
        <div className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Spline
            scene={sceneUrl}
            onLoad={onLoad}
            onError={onError}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />
        </div>
      )}
    </div>
  );
}
