import {
	useContextProvider,
	useSignal,
	useStore,
	useVisibleTask$,
} from '@builder.io/qwik';
import {
	ACTIONS_CONTEXT,
	LOCAL_STORAGE_CART_KEY,
	STORE_CONTEXT,
} from '~/shared/constants';
import type { Actions, Store } from '~/types/store';
import { actions as appActions } from './actions';

const initialData: Store = { cart: { products: [] } };

export const useAppStore = () => {
	const isStoreInitializedSig = useSignal(false);
	const store = useStore<Store>(initialData, { deep: true });
	useContextProvider(STORE_CONTEXT, store);

	const actions = useStore<Actions>(appActions(store));
	useContextProvider(ACTIONS_CONTEXT, actions);

	useVisibleTask$(async ({ track }) => {
		track(() => store.cart.products);

		const localStorageData = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
		if (
			isStoreInitializedSig.value === false &&
			store.cart.products.length === 0 &&
			localStorageData
		) {
			isStoreInitializedSig.value = true;
			store.cart = JSON.parse(localStorageData);
		} else {
			localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(store.cart));
		}
	});

	return store;
};
