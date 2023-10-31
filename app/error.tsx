'use client';

import { useEffect } from 'react';

import { buttonVariants } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className='flex h-full flex-col items-center justify-center'>
			<h2 className='mb-2 text-center font-semibold'>Something went wrong!</h2>
			<button className={buttonVariants({ size: 'sm' })} onClick={() => reset()}>
				Try again
			</button>
		</main>
	);
}
