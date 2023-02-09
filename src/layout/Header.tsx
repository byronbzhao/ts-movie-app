import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Header = () => {
	return (
		<div className='bg-header'>
			<Container className='flex justify-between'>
				{/* brand and menu */}
				<div className='flex items-center gap-6'>
					<h1 className='text-2xl'>
						<Link to={'/'}>MediaSantuary</Link>
					</h1>
					<div className='flex items-center gap-1.5'>
						<Link to={'/movies'}>Movies</Link>
						<Link to={'/tv'}>TV Shows</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;
