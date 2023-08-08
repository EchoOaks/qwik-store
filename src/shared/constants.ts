import { createContextId } from '@builder.io/qwik';
import type { Actions } from '~/store/actions';
import type { ReadonlyStore } from '~/types/store';

export const DEFAULT_METADATA_URL = 'storefront-qwik-boilerplate.vercel.app';
export const DEFAULT_METADATA_TITLE = 'Qwik and Storefront UI';
export const DEFAULT_METADATA_DESCRIPTION =
	'A storefront starter kit built with Qwik and Storefront UI';
export const DEFAULT_METADATA_IMAGE =
	'https://storefront-qwik-boilerplate.vercel.app/images/social_image.png';
export const IMAGE_PLACHEHOLDER =
	'linear-gradient(0deg, rgba(1,137,55,1) 0%, rgba(1,137,55,0.31838672969187676) 67%)';
export const STORE_CONTEXT = createContextId<ReadonlyStore>('STORE_CONTEXT');
export const ACTIONS_CONTEXT = createContextId<Actions>('ACTIONS_CONTEXT');
export const LOCAL_STORAGE_CART_KEY = 'cart';
