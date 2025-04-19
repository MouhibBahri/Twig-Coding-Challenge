import { products } from "@/data/product";
import { product } from "@/lib/interfaces/product.interface";

/**
 * A route to get all products, you can use filters
 * @body filter: the filter keyword to match with product name
 */
export async function POST(req: Request) {
	const typedProducts: product[] = products.map(
		(product: any, index: number) => ({
			id: index,
			name: product.name,
			price: product.price,
			description: product.description,
		})
	);

	const requestData = await req.json();
	let filteredProduct: product[] = typedProducts;
	if (requestData.filter && requestData.filter != "") {
		const filterQuery = requestData.filter.toLowerCase();
		filteredProduct = filteredProduct.filter((product) =>
			product.name.toLowerCase().includes(filterQuery)
		);
	}

	return new Response(JSON.stringify(filteredProduct), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
