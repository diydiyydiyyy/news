import React, { useState } from 'react';
import Link from 'next/link.js';
import { callouts } from '../data/data.js';

function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			{showSidebar ? (
				<button
					className="flex text-4xl text-secondary items-center cursor-pointer fixed right-10 z-50"
					onClick={() => setShowSidebar(!showSidebar)}>
					X
				</button>
			) : (
				<svg
					onClick={() => setShowSidebar(!showSidebar)}
					className="fixed z-30 flex items-center cursor-pointer right-10 fill-secondary"
					viewBox="0 0 100 80"
					width="40"
					height="40">
					<rect width="100" height="10"></rect>
					<rect y="30" width="100" height="10"></rect>
					<rect y="60" width="100" height="10"></rect>
				</svg>
			)}

			<div
				className={`top-0 right-0 w-[25%] bg-primary p-10 text-secondary fixed h-full z-40  ease-in-out duration-300 ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}>
				<div className="mt-10">
					{callouts.map((callout, i) => (
						<Link href={`/category/${callout.category}`} key={i}>
							<a>
								<h3
									className="mt-3 text-xl font-semibold text-secondary cursor-pointer hover:opacity-80"
									onClick={() => setShowSidebar(!showSidebar)}>
									{callout.name}
								</h3>
							</a>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Sidebar;
