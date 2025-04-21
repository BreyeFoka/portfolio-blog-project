// 'use client';

// import { useCallback } from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from '@tsparticles/engine';
// import type { Engine } from '@tsparticles/engine';

// export default function ParticlesBackground() {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       init={particlesInit}
//       className="absolute inset-0 z-0"
//       options={{
//         fullScreen: { enable: false },
//         background: { color: { value: 'transparent' } },
//         particles: {
//           number: { value: 60 },
//           color: { value: '#3b82f6' },
//           links: { enable: true, color: '#3b82f6' },
//           move: { enable: true, speed: 1 },
//           opacity: { value: 0.4 },
//           size: { value: { min: 1, max: 3 } },
//         },
//       }}
//     />
//   );
// }
