import Pagination from "@/components/Paginations";
import SearchBar from "@/components/SearchBar";
import { product } from "@/lib/interfaces/product.interface";

export default async function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const filter = (await searchParams).search;
	const page = (await searchParams).page;
	const limit = (await searchParams).limit;

	const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
	const res = await fetch(`${baseURL}/api/products`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ filter, page, limit }),
	});
	const { products, totalPages } = await res.json();

	// Let's test if we have an empty array of products
	// const products: product[] = [];

	return (
		<main className="p-6 max-w-7xl mx-auto">
			<h1 className="text-4xl font-bold text-center mb-10">
				🛍️ Products
			</h1>

			<SearchBar />

			{!products.length ? (
				<p className="text-center text-gray-500">
					No products available...
				</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{products.map((product: product) => (
						<div
							key={product.id}
							className="rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition p-4 bg-white flex flex-col"
						>
							<h3 className="font-semibold text-lg mb-2">
								{product.name}
							</h3>
							<p className="text-gray-600 text-sm flex-1">
								{
									product.description
								}
							</p>
							<p className="mt-4 text-right font-bold text-blue-600">
								{new Intl.NumberFormat(
									"de-DE",
									{
										style: "currency",
										currency: "EUR",
									}
								).format(
									product.price
								)}
							</p>
						</div>
					))}
				</div>
			)}

			<Pagination totalPages={totalPages} />
		</main>
	);
}
