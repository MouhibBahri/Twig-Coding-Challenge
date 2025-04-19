"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
	totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const initialPage = parseInt(searchParams.get("page") || "1");

	const [currentPage, setCurrentPage] = useState(initialPage);

	useEffect(() => {
		setCurrentPage(initialPage);
	}, [initialPage]);

	const onPageChange = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		router.push(`?${params.toString()}`);
	};

	const handlePrevClick = () => {
		if (currentPage > 1) onPageChange(currentPage - 1);
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) onPageChange(currentPage + 1);
	};

	return (
		<div className="flex justify-center space-x-2 mt-4">
			<button
				onClick={handlePrevClick}
				disabled={currentPage === 1}
				className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
			>
				Previous
			</button>
			<span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
			<button
				onClick={handleNextClick}
				disabled={currentPage === totalPages}
				className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
			>
				Next
			</button>
		</div>
	);
}
