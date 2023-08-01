import { Slot, component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { VsfLogo } from '../VsfLogo/VsfLogo';

export const NavbarTop = component$(() => {
	const location = useLocation();
	const isCheckoutPath =
		location.url.pathname.includes('cart') ||
		location.url.pathname.includes('checkout') ||
		location.url.pathname.includes('order');

	return (
		<header
			class={[
				'h-14 md:h-20 flex z-50 md:sticky md:-top-5 md:pt-2.5 md:shadow-md',
				isCheckoutPath
					? 'bg-white text-[#02C652] border-b border-neutral-200'
					: 'bg-primary-700 text-white',
			]}
			data-testid='navbar-top'
		>
			<div class='flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 mx-auto sticky top-0'>
				<Link href='/' aria-label='SF Homepage' class='h-6 md:h-7 -mt-1.5'>
					<VsfLogo />
				</Link>
				{!isCheckoutPath && <Slot />}
			</div>
		</header>
	);
});
