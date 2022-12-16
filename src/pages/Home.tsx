/**
 * Home Page
 */

// Dependencies
import React, { FC, useEffect, useState } from 'react';
import { fetchLatestMovies } from '../utils/movies';
import MovieCard from '../components/movies/MovieCard';
import MovieModal from '../components/movies/MovieModal';
import '../css/Home.css';

interface HomeProps {
	moviesList: Movies | null;
	loading: boolean;
	error: boolean;
	setMoviesList: React.Dispatch<React.SetStateAction<Movies | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<HomeProps> = ({
	moviesList,
	setMoviesList,
	loading,
	error,
	setLoading,
	setError,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

	useEffect(() => {
		const handleFetchMovies = async () => {
			try {
				setLoading(true);
				setError(false);
				const movies = await fetchLatestMovies();
				setMoviesList(movies);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (moviesList === null) handleFetchMovies();
	}, []);

	if (loading) {
		return <div className='home__container'></div>;
	} else if (error) {
		return <div className='home__container'></div>;
	} else {
		return (
			<>
				<div className='home__container'>
					<div className='container'>
						{moviesList instanceof Array &&
							moviesList?.length > 0 &&
							moviesList?.map((movie) => (
								<MovieCard
									key={movie.id}
									{...movie}
									setOpen={setOpen}
									setId={setSelectedMovie}
								/>
							))}
					</div>
				</div>
				<MovieModal
					open={open}
					setOpen={setOpen}
					movies={moviesList}
					id={selectedMovie}
					setId={setSelectedMovie}
				/>
			</>
		);
	}
};

export default Home;
