'use client';

import { useState } from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
	const [counter, setCounter] = useState(0);

	return (
		<section className='container grid items-center gap-6  md:py-10'>
			<div className='flex max-w-[980px] flex-col items-start gap-2'>
				<h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
					Beautifully designed components <br className='hidden sm:inline' />
					built with Radix UI and Tailwind CSS.
				</h1>
				<p className='max-w-[700px] text-lg text-muted-foreground'>
					Accessible and customizable components that you can copy and paste into your apps. Free.
					Open Source. And Next.js 14 Ready.
				</p>
			</div>
			<div className='flex gap-4'>
				<Link
					href={siteConfig.links.docs}
					target='_blank'
					rel='noreferrer'
					className={buttonVariants()}>
					Documentation
				</Link>
				<Link
					target='_blank'
					rel='noreferrer'
					href={siteConfig.links.github}
					className={buttonVariants({ variant: 'outline' })}>
					GitHub
				</Link>
			</div>
			<div className='text-center'>
				<button
					className={buttonVariants({ variant: 'outline', size: 'sm' })}
					onClick={() => setCounter(counter + 1)}>
					Click me : {counter}
				</button>
			</div>
		</section>
	);
}
