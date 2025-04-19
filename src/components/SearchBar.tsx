"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	// Initialze the input value using the query paramters
	const initQuery = searchParams.get("search") || "";

	const [searchQuery, setSearchQuery] = useState(initQuery);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setSearchQuery(val);
		const params = new URLSearchParams(searchParams);

		if (val === "") {
			params.delete("search");
		} else {
			params.set("search", val);
		}
		router.push(`?${params.toString()}`);
	};

	return (
		<input
			className="border border-gray-200  rounded mb-4 py-1 px-2"
			placeholder="Enter product name..."
			value={searchQuery}
			onChange={handleChange}
		></input>
	);
}
