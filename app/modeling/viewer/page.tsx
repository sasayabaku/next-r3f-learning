'use client';

import { StrictMode } from 'react';

// import ViewerCanvas from './viewerCanvas';

// import '@google/model-viewer';

// function ArViewer() {
//   return (
//     <div>
//       <model-viewer
//         src="/scene.glb"
//         ios-src="/scene.usdz"
//         camera-controls
//         ar
//         tone-mapping="commerce"
//         ar-modes="webxr scene-viewer"
//       />
//     </div>
//   );
// }

export default function Page() {
  return (
    <div className="w-full h-full">
      <StrictMode>
        {/* <ArViewer /> */}
        {/* <ViewerCanvas /> */}
        <div>aaa</div>
      </StrictMode>
    </div>
  );
}
