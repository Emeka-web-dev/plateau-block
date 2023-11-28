/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            hostname: "i.imgur.com"
        },{
            hostname: "cdn.sanity.io"
        }

    ]
    }
}

module.exports = nextConfig
