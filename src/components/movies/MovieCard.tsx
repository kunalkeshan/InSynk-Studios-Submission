/**
 * Movie Card
 */

// Dependencies
import React, { FC } from 'react';
import { THEMOVIESDB_IMG_ENDPOINT } from '../../config';
import '../../css/MovieCard.css';

interface MovieCardProps
	extends Pick<Movie, 'poster_path' | 'title' | 'vote_average'> {}

const MovieCard: FC<MovieCardProps> = ({
	poster_path,
	title,
	vote_average,
}) => {
	console.log(`${THEMOVIESDB_IMG_ENDPOINT}${poster_path}`);

	return (
		<div className='movie__card'>
			<div
				className='movie__poster'
				style={{
					background: `url("${THEMOVIESDB_IMG_ENDPOINT}${poster_path}") no-repeat`,
					backgroundSize: 'cover',
				}}
			>
				<p className='movie__rating'>{vote_average}</p>
			</div>
			<p className='movie__title'>{title}</p>
		</div>
	);
};

export default MovieCard;
