/**
 * Navbar Component
 */

// Dependencies
import React, { useState, FC } from 'react';
import LogoImage from '../../assets/logo.svg';
import SearchIconImage from '../../assets/search.svg';
import { searchMovies } from '../../utils/movies';
import '../../css/Navbar.css';

interface NavbarProps {
	setMoviesList: React.Dispatch<React.SetStateAction<Movies | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ setError, setLoading, setMoviesList }) => {
	const [input, setInput] = useState<string>('');

	const handleSearchMovies = async (query: string) => {
		try {
			setLoading(true);
			setError(false);
			const movies = await searchMovies(query);
			setMoviesList(movies);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		handleSearchMovies(input);
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
