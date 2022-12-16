/**
 * Navbar Component
 */

// Dependencies
import React, { useState } from 'react';
import LogoImage from '../../assets/logo.svg';
import SearchIconImage from '../../assets/search.svg';
import '../../css/Navbar.css';

const Navbar = () => {
	const [input, setInput] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<nav>
			<div className='container'>
				<a href='/'>
					<img
						src={LogoImage}
						alt='InSynk Studios'
						className='nav__logo'
					/>
				</a>
				<label className='search__container'>
					<img
						src={SearchIconImage}
						alt='Search'
						className='search__icon'
					/>
					<input
						className='search__input'
						type='text'
						placeholder='Search for a movie'
						value={input}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<hr />
		</nav>
	);
};

export default Navbar;
