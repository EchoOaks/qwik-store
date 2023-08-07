import { Slot, component$, useComputed$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { SfIconDelete } from 'qwik-storefront-ui';
import { STORE_CONTEXT } from '~/shared/constants';
import {
	getCartDiscountendTotal,
	getCartQuantity,
	getCartRegularTotal,
	getCartSavingTotal,
	getCartTotal,
	getShippingCosts,
} from '~/store/selectors';
import { Divider } from '../UI/Divider/Divider';

export const OrderSummary = component$(() => {
	const location = useLocation();
	const isCheckoutPathSig = useComputed$(() =>
		location.url.pathname.includes('checkout')
	);
	const store = useContext(STORE_CONTEXT);
	const cartQuantitySig = useComputed$(() => getCartQuantity(store.cart));
	return (
		<div
			class='md:shadow-lg md:rounded-md md:border md:border-neutral-100 col-span-5 md:sticky md:top-20 h-fit'
			data-testid='order-summary'
		>
			<div class='flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4'>
				<p class='typography-headline-4 font-bold md:typography-headline-3'>
					{$localize`orderSummary`}
				</p>
				<p
					class='typography-text-base font-semibold'
					data-testid='total-in-cart'
				>
					({$localize`itemsInCart`} {cartQuantitySig.value})
				</p>
			</div>
			<div class='px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0'>
				<div class='flex justify-between typography-text-base pb-4'>
					<div class='flex flex-col grow pr-2'>
						<p>{$localize`itemsSubtotal`}</p>
						{getCartSavingTotal(store.cart) !== '$0.00' && (
							<>
								<p class='ml-auto typography-text-xs text-neutral-500'>
									{$localize`originalPrice`}
								</p>
								<p class='ml-auto typography-text-xs text-secondary-700'>
									{$localize`savings`}
								</p>
							</>
						)}
					</div>
					<div class='flex flex-col text-right'>
						<p data-testid='special-price'>
							{getCartDiscountendTotal(store.cart)}
						</p>
						{getCartSavingTotal(store.cart) !== '$0.00' && (
							<>
								<p class='typography-text-xs text-neutral-500'>
									{getCartRegularTotal(store.cart)}
								</p>
								<p class='typography-text-xs text-secondary-700'>
									{getCartSavingTotal(store.cart)}
								</p>
							</>
						)}
					</div>
				</div>
				<div class='flex items-center py-4 border-t border-neutral-200'>
					<p>{$localize`promoCode`}</p>
					<button
						type='button'
						class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent mr-auto ml-2 border border-neutral-300 rounded-md'
						data-testid='button'
					>
						<SfIconDelete />
					</button>
					<p>$20</p>
				</div>
				<div class='flex gap-x-2 py-4 border-y border-neutral-200 mb-4'>
					<div
						class='flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-1 ring-neutral-200 py-2 px-4 grow'
						data-testid='input'
					>
						<input
							class='min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent'
							type='text'
							data-testid='input-field'
							placeholder='Enter promo code'
						/>
					</div>
					<button
						type='button'
						class='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50'
						data-testid='button'
					>
						{$localize`apply`}
					</button>
				</div>
				<div class='px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4'>
					<div class='inline-flex items-center justify-center rounded-md font-normal text-secondary-800 bg-secondary-100 text-sm p-1.5 gap-1.5 w-full'>
						{$localize`savingsTag $20`}
					</div>
				</div>
				{isCheckoutPathSig.value && (
					<div class='flex justify-between typography-text-base pb-4 mb-4'>
						<p>{$localize`shippingDelivery`}</p>
						<p data-testid='total'>{getShippingCosts(store.cart)}</p>
					</div>
				)}
				<div class='flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4'>
					<p>{$localize`total`}</p>
					<p data-testid='total'>{getCartTotal(store.cart, 20)}</p>
				</div>
				<Divider class='my-4 max-md:-mx-4 max-md:w-auto' />
				<Slot />
				<Divider class='my-10 md:hidden -mx-4 w-auto' />
			</div>
		</div>
	);
});
