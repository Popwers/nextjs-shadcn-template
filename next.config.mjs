import { withNx } from '@nx/next';
import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = withNx({
	nx: {
		svgr: false,
	},
	reactStrictMode: true,
});

const millionConfig = {
	auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
