import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			{/* HEADER */}
			<Header />
			{/* BODY */}
			<Body />
			{/* FOOTER */}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
