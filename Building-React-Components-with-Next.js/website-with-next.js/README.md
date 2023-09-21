# Website with `Next.js` 13

## Table of Contents

# Requirements

## Requirements: Modify the `next.config.js` file to use the `Link` Component in `Next.js` 13

- Modify the `next.config.js` file from:

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {};

  module.exports = nextConfig;
  ```

  to:

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    experimental: {
      appDir: true,
    },
    reactStrictMode: true,
  };

  module.exports = nextConfig;
  ```
