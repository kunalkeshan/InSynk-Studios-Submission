/**
 * Movie Card
 */

// Dependencies
import React, { FC } from 'react';
import { THEMOVIESDB_IMG_ENDPOINT } from '../../config';
import '../../css/MovieCard.css';

interface MovieCardProps
	extends Pick<Movie, 'poster_path' | 'title' | 'vote_average' | 'id'> {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MovieCard: FC<MovieCardProps> = ({
	poster_path,
	title,
	vote_average,
	id,
	setOpen,
	setId,
}) => {
	return (
		<div
			className='movie__card'
			onClick={() => {
				setOpen(true);
				setId(id);
			}}
		>
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
