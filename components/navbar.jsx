import React from 'react';
import Link from 'next/link';
import Sidebar from './sidebar';

function Navbar() {
	return (
		<div className="h-[75px] bg-primary flex justify-between items-center">
			<Link href="/">
				<h1 className="text-secondary text-3xl pl-10 cursor-pointer">
					DIY NEWS
				</h1>
			</Link>
			<Sidebar />
		</div>
	);
}

export default Navbar;
