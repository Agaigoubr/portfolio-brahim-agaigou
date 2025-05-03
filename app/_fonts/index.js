export * from './neue-montreal';



// src/fonts.js أو app/fonts.js حسب فين كتحطو الملفات

import localFont from 'next/font/local';

export const neue_montreal = localFont({
  src: [
    {
      path: './neue-montreal/regular/index.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './neue-montreal/regular/index.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});
