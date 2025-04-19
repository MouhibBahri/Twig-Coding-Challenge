import { products } from "@/data/product";
import { product } from "@/lib/interfaces/product.interface";

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
