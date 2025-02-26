import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const config = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
  },
};

export default withPlaiceholder(config);
