'use client';

import { StrictMode } from 'react';

import ViewerCanvas from './viewerCanvas';

export default function Page() {
  return (
    <div className="w-full h-full">
      <StrictMode>
        <ViewerCanvas />
        <div>aaa</div>
      </StrictMode>
    </div>
  );
}
