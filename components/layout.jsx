import React from 'react';
import HeadApp from './head';
import Navbar from './navbar';

function Layout({ children }) {
	return (
		<div>
			<HeadApp />
			<Navbar />
			<div className="mt-8">{children}</div>
		</div>
	);
}

export default Layout;
