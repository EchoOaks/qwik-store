import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { SfButton } from 'qwik-storefront-ui';

export const EmptyCart = component$(() => {
	return (
		<div data-testid='order-failed-page' class='px-4 md:px-0'>
			<div class='border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto'>
				<Image
					loading='eager'
					layout='constrained'
					objectFit='fill'
					width={200}
					height={200}
					alt={$localize`orderSuccessfulImageAlt`}
					src={'/images/empty-category.svg'}
				/>
				<h1 class='mt-6 mb-1 text-2xl'>{$localize`emptyCart`}</h1>
				<SfButton
					as={Link}
					href='/'
					class='mt-4 max-md:w-full'
					variant='tertiary'
				>
					{$localize`continueShopping`}
				</SfButton>
			</div>
		</div>
	);
});
