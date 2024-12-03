import localFont from 'next/font/local'

export const Migra = localFont({
  src: [
    {
      path: '../fonts/Migra-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Migra-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Migra-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-migra',
})

