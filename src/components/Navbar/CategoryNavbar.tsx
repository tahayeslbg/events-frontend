import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../utils/fetchData";
import Link from "next/link";
import { useRouter } from "next/router";

interface ICategory {
	name: string;
	event: any;
	_id: string;
	slug: string;
}

const CategoryNavbar = ({ categoryName }: { categoryName: any }) => {
	const { data: categories } = useQuery(["categories"], getCategories);
	const router = useRouter();

	return (
		<nav className=' flex flex-1 justify-center gap-x-[30px] items-center mobile:w-full mobile:justify-start mobile:flex-nowrap mobile:overflow-x-scroll mobile:px-5 mobile:scrollbar'>
			<Link
				href='/'
				className={
					router.pathname === "/"
						? "font-galanoBold text-[#FF0D87] relative py-4 after:content-[''] after:bottom-0 after:left-0 after:absolute after:w-full after:h-1 after:bg-[#FF0D87] shrink-0"
						: "font-galanoRegular py-4 shrink-0"
				}
			>
				Tüm Etkinlikler
			</Link>
			{categories.map((category: ICategory) => (
				<Link
					key={category._id}
					href={`/${category.slug}`}
					className={
						categoryName && categoryName === category.slug
							? "font-galanoBold text-[#FF0D87] relative py-4 after:content-[''] after:bottom-0 after:left-0 after:absolute after:w-full after:h-1 after:bg-[#FF0D87] shrink-0"
							: "font-galanoRegular py-4  shrink-0"
					}
				>
					{category.name}
				</Link>
			))}
		</nav>
	);
};

export default CategoryNavbar;
