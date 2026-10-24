// BASE_PATH lets the root build mount this app under /shevery/.
const basePath = process.env.BASE_PATH || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
