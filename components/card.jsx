import React from 'react';
import Link from 'next/link';

function Card(props) {
	return (
		<div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm m-5">
			<img
				className="rounded-t-lg w-full h-[200px]"
				src={props.imageUrl}
				alt="card image"
			/>
			<div className="p-5">
				<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
					{props.title}
				</h5>

				<Link href={`${props.readMoreUrl}`} target="_blank">
					<a
						target="_blank"
						className="text-secondary bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
						Read more
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Card;
