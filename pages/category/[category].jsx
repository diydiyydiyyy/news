import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter } from '../../utils/capital';
import axios from 'axios';
import Card from '../../components/card';

function Category(props) {
	const categories = props.categories;
	const router = useRouter();
	const category = router.query.category;

	return (
		<div className="px-10">
			<nav className="text-primary font-bold my-8" aria-label="Breadcrumb">
				<ol className="list-none p-0 inline-flex">
					<li className="flex items-center">
						<Link href="/">
							<a>Home</a>
						</Link>

						<svg
							className="fill-current w-3 h-3 mx-3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512">
							<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
						</svg>
					</li>
					<li className="flex items-center text-secondary">
						<Link href="/">
							<a>{capitalizeFirstLetter(category)}</a>
						</Link>
					</li>
				</ol>
			</nav>

			<div className="flex justify-around items-center flex-wrap">
				{categories.map((el, i) => (
					<Card
						key={i}
						category={category}
						id={el.id}
						title={el.title}
						imageUrl={el.imageUrl}
						readMoreUrl={el.readMoreUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default Category;

export async function getServerSideProps(router) {
	const category = router.query.category;
	const res = await axios.get(
		`https://inshorts.deta.dev/news?category=${category}`
	);

	const categories = await res.data.data;
	return {
		props: {
			categories,
		},
	};
}
