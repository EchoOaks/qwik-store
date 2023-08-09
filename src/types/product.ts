export type Product = {
	id: number;
	slug: string;
	sku: string;
	name: string;
	description: string;
	uploadDate?: string;
	relevance?: number;
	rating: { average: number; count: number };
	price: {
		isDiscounted: boolean;
		regular: { currency: string; amount: number; precisionAmount: number };
		discounted: { currency: string; amount: number; precisionAmount: number };
	};
	image: { alt: string; url: string };
};
