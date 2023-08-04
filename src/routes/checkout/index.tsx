import { component$ } from '@builder.io/qwik';
import { Image } from 'qwik-image';
import { OrderSummary } from '~/components/OrderSummary/OrderSummary';
import { Divider } from '~/components/UI/Divider/Divider';

export default component$(() => {
	return (
		<main data-testid='checkout-layout'>
			<div
				class='max-w-screen-3xl mx-auto md:px-6 lg:px-10'
				data-testid='narrow-container'
			>
				<div class='px-4 md:px-0 mb-20'>
					<div class='flex justify-between mt-8 mb-10'>
						<h1 class='font-bold typography-headline-3 md:typography-headline-2'>
							Checkout
						</h1>
						<a
							class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent flex md:hidden whitespace-nowrap'
							data-testid='button'
							href='/cart'
						>
							<svg
								viewBox='0 0 24 24'
								data-testid='arrow-back'
								xmlns='http://www.w3.org/2000/svg'
								class='inline-block fill-current w-6 h-6 undefined'
							>
								<path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
							</svg>
							Back{' '}
						</a>
						<a
							class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
							data-testid='button'
							href='/cart'
						>
							<svg
								viewBox='0 0 24 24'
								data-testid='arrow-back'
								xmlns='http://www.w3.org/2000/svg'
								class='inline-block fill-current w-6 h-6 undefined'
							>
								<path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
							</svg>
							Back{' '}
						</a>
					</div>
					<div class='md:grid md:grid-cols-12 md:gap-x-6'>
						<div class='col-span-7 mb-10 md:mb-0'>
							<Divider class='w-screen md:w-auto -mx-4 md:mx-0' />
							<div data-testid='contact-information' class='md:px-4 py-6'>
								<div class='flex justify-between items-center'>
									<h2 class='text-neutral-900 text-lg font-bold mb-4'>
										Contact Information
									</h2>
								</div>
								<div class='w-full md:max-w-[520px]'>
									<p>
										Add your email and phone number to communicate with the
										store.
									</p>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
										data-testid='button'
									>
										Add contact information
									</button>
								</div>
							</div>
							<Divider class='w-screen md:w-auto -mx-4 md:mx-0' />
							<div data-testid='checkout-address' class='md:px-4 py-6'>
								<div class='flex justify-between items-center'>
									<h2 class='text-neutral-900 text-lg font-bold mb-4'>
										Billing Address
									</h2>
								</div>
								<div class='w-full md:max-w-[520px]'>
									<p>
										Add a billing address. You will receive the invoice to the
										email address provided above.
									</p>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
										data-testid='button'
									>
										Add billing address
									</button>
								</div>
							</div>
							<Divider class='w-screen md:w-auto -mx-4 md:mx-0' />
							<div data-testid='checkout-address' class='md:px-4 py-6'>
								<div class='flex justify-between items-center'>
									<h2 class='text-neutral-900 text-lg font-bold mb-4'>
										Shipping Address
									</h2>
								</div>
								<div class='w-full md:max-w-[520px]'>
									<p>Add a shipping address to view shipping details.</p>
									<button
										type='button'
										class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
										data-testid='button'
									>
										Add shipping address
									</button>
								</div>
							</div>
							<Divider class='w-screen md:w-auto -mx-4 md:mx-0' />
							<div data-testid='shipping-method' class='md:px-4 my-6'>
								<div class='flex justify-between items-center'>
									<h3 class='text-neutral-900 text-lg font-bold'>
										Shipping details
									</h3>
								</div>
								<div class='mt-4'>
									<ul
										class='grid gap-y-4 md:grid-cols-2 md:gap-x-4'
										role='radiogroup'
									>
										<label
											class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 border rounded-md items-start'
											data-testid='list-item'
										>
											<span class='flex flex-col w-full min-w-0'>
												<div class='flex gap-2'>
													<input
														type='radio'
														class='h-5 w-5 border-2 p-[3px] bg-clip-content rounded-full appearance-none cursor-pointer focus-visible:outline focus-visible:outline-offset disabled:border-disabled-500 disabled:cursor-not-allowed disabled:checked:bg-disabled-500 disabled:checked:border-disabled-500 border-neutral-500 active:border-primary-900 hover:border-primary-700 checked:bg-primary-700 checked:border-primary-700 hover:checked:bg-primary-800 hover:checked:border-primary-800 active:checked:bg-primary-900 active:checked:border-primary-900'
														name='Standard'
														value='1'
													/>
													<div>
														<p>Standard</p>
														<p class='text-xs text-neutral-500'>tomorrow</p>
													</div>
													<p class='ml-auto'>$3</p>
												</div>
											</span>
										</label>
										<label
											class='inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 border rounded-md items-start'
											data-testid='list-item'
										>
											<span class='flex flex-col w-full min-w-0'>
												<div class='flex gap-2'>
													<input
														type='radio'
														class='h-5 w-5 border-2 p-[3px] bg-clip-content rounded-full appearance-none cursor-pointer focus-visible:outline focus-visible:outline-offset disabled:border-disabled-500 disabled:cursor-not-allowed disabled:checked:bg-disabled-500 disabled:checked:border-disabled-500 border-neutral-500 active:border-primary-900 hover:border-primary-700 checked:bg-primary-700 checked:border-primary-700 hover:checked:bg-primary-800 hover:checked:border-primary-800 active:checked:bg-primary-900 active:checked:border-primary-900'
														name='Express'
														value='2'
													/>
													<div>
														<p>Express</p>
														<p class='text-xs text-neutral-500'>tomorrow</p>
													</div>
													<p class='ml-auto'>$10</p>
												</div>
											</span>
										</label>
									</ul>
								</div>
							</div>
							<Divider class='w-screen md:w-auto -mx-4 md:mx-0' />
							<div data-testid='checkout-payment' class='md:px-4 py-6'>
								<h3 class='text-neutral-900 text-lg font-bold mb-4'>
									Payment method
								</h3>
								<div class='grid gap-4 grid-cols-2'>
									<button
										type='button'
										data-testid='payment-method'
										class='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 border-2 border-primary-700'
									>
										<svg
											viewBox='0 0 24 24'
											data-testid='credit-card'
											xmlns='http://www.w3.org/2000/svg'
											class='inline-block fill-current w-6 h-6 mr-2'
										>
											<path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 14H4v-6h16v6Zm0-10H4V6h16v2Z'></path>
										</svg>
										<span class='font-medium'>Credit Card</span>
									</button>
									<button
										type='button'
										data-testid='payment-method'
										class='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
									>
										<div class='flex flex-col items-center justify-center'>
											<Image
												loading='eager'
												layout='constrained'
												objectFit='fill'
												width={104}
												height={32}
												src='/images/paypal.svg'
												alt='Paypal Icon'
											/>
											<span class=''>Coming soon</span>
										</div>
									</button>
									<button
										type='button'
										data-testid='payment-method'
										class='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
									>
										<div class='flex flex-col items-center justify-center'>
											<Image
												loading='eager'
												layout='constrained'
												objectFit='fill'
												width={104}
												height={32}
												src='/images/apple-pay.svg'
												alt='Apple Pay Icon'
											/>
											<span class='text-xs text-neutral-500'>Coming soon</span>
										</div>
									</button>
									<button
										type='button'
										data-testid='payment-method'
										class='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
									>
										<div class='flex flex-col items-center justify-center'>
											<Image
												loading='eager'
												layout='constrained'
												objectFit='fill'
												width={104}
												height={32}
												src='/images/google-pay.svg'
												alt='Google Pay icon'
											/>
											<span class='text-xs text-neutral-500'>Coming soon</span>
										</div>
									</button>
								</div>
							</div>
							<Divider class=' w-screen md:w-auto -mx-4 md:mx-0 mb-10' />
						</div>
						<OrderSummary>
							<a
								class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full mb-4 md:mb-0'
								data-testid='button'
								href='/order/success'
							>
								Place order and pay
							</a>
							<p class='text-sm text-center mt-4 pb-4 md:pb-0'>
								By placing my order, you agree to our{' '}
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded'
									data-testid='link'
									href='/checkout#'
								>
									Terms and Conditions
								</a>{' '}
								and our{' '}
								<a
									class='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded'
									data-testid='link'
									href='/checkout#'
								>
									Privacy Policy
								</a>
							</p>
						</OrderSummary>
					</div>
				</div>
			</div>
		</main>
	);
});
