import { products } from "@/data/product";
import { product } from "@/lib/interfaces/product.interface";

/**
 * A route to get all products, you can use filters
 * @body filter: the filter keyword to match with product name
 * @body page: the index of the paginated page - 1 indexed
 * @body limit: max number of products per page
 */
export async function POST(req: Request) {
	const requestData = await req.json();
	// object destructuring
	const { page = 1, limit = 5, filter } = requestData;

	// When using database we won't follow the following logic. Instead in the same query we will include the filter and pagination logic
	// So that we reduce the size fo data sent from the DB

	// 1. get the products
	const typedProducts: product[] = products.map(
		(product: any, index: number) => ({
			id: index,
			name: product.name,
			price: product.price,
			description: product.description,
		})
	);

	// 2. fitler the products
	let filteredProduct: product[] = typedProducts;
	if (filter && filter != "") {
		const filterQuery = filter.toLowerCase();
		filteredProduct = filteredProduct.filter((product) =>
			product.name.toLowerCase().includes(filterQuery)
		);
	}

	// 3. paginations
	const start = (page - 1) * limit;
	const end = page * limit;
	const paginatedProducts = filteredProduct.slice(start, end);

	return new Response(
		JSON.stringify({
			products: paginatedProducts,
			totalPages: Math.ceil(filteredProduct.length / limit),
		}),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		}
	);
}
