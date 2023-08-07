import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import { SfButton } from 'qwik-storefront-ui';

export type HeroProps = {
	image: string;
	subtitle: string;
	title: string;
	description: string;
	primaryButtonLink: string;
	primaryButtonText: string;
	secondaryButtonLink: string;
	secondaryButtonText: string;
};

export const Hero = component$<HeroProps>(
	({
		image,
		subtitle,
		title,
		description,
		primaryButtonLink,
		primaryButtonText,
		secondaryButtonLink,
		secondaryButtonText,
	}) => {
		const navigate = useNavigate();
		return (
			<div class='relative min-h-[600px] mb-10'>
				<div class='md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-screen-3xl mx-auto'>
					<div class='flex flex-col justify-center md:basis-2/4 md:items-stretch md:overflow-hidden'>
						<Image
							loading='eager'
							layout='constrained'
							objectFit='fill'
							width={764}
							height={600}
							alt='hero'
							src={image}
						/>
					</div>
					<div class='p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4'>
						<p class='typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase'>
							{subtitle}
						</p>
						<h1 class='typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4'>
							{title}
						</h1>
						<p class='typography-text-base md:typography-text-lg'>
							{description}
						</p>
						<div class='flex flex-col md:flex-row gap-4 mt-6'>
							<SfButton
								size='lg'
								class="class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300'"
								onClick$={() => {
									navigate(primaryButtonLink);
								}}
							>
								{primaryButtonText}
							</SfButton>
							<SfButton
								size='lg'
								variant='secondary'
								class='ring-1 ring-primary-700'
								onClick$={() => {
									navigate(secondaryButtonLink);
								}}
							>
								{secondaryButtonText}
							</SfButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
);
