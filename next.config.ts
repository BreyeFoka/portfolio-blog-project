import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// // next.config.ts
// // next.config.ts
// import { NextConfig } from 'next';
// import path from 'path';

// const nextConfig: NextConfig = {
//   webpack(config, { isServer }) {
//     // Adding MDX support to Webpack
//     config.module.rules.push({
//       test: /\.mdx$/,
//       use: [
//         {
//           loader: 'babel-loader',
//         },
//         {
//           loader: '@mdx-js/loader',
//         },
//       ],
//     });

//     // Ensure .mdx extension works on both client and server
//     config.resolve.extensions.push('.mdx');

//     return config;
//   },
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // you probably already have this:
//   // reactStrictMode: true,
// }

// module.exports = nextConfig