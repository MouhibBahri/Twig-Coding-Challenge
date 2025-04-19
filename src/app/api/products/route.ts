import { products } from "@/data/product";

interface product {
	id: number;
	name: string;
	price: number;
	description: string;
}

export async function GET(req: Request) {
	const typedProducts: product[] = products.map(
		(product: any, index: number) => ({
			id: index,
			name: product.name,
			price: product.price,
			description: product.description,
		})
	);
	return new Response(JSON.stringify(typedProducts), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
