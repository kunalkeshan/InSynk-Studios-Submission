/**
 * Movie Modal Component
 */

// Dependencies
import React, { FC } from 'react';
import { THEMOVIESDB_IMG_ENDPOINT } from '../../config';
import '../../css/MovieModal.css';

interface MovieModalProps
	extends Partial<
		Pick<
			Movie,
			| 'poster_path'
			| 'title'
			| 'overview'
			| 'release_date'
			| 'vote_average'
			| 'vote_count'
		>
	> {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	movies: Movies | null;
	id: number | null;
	setId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MovieModal: FC<MovieModalProps> = ({
	open,
	setOpen,
	movies,
	id,
	setId,
}) => {
	const movie = movies?.find((mov) => mov.id === id);

	const handleModalClose = () => {
		setOpen(false);
		setId(null);
	};

	return (
		<div className='modal' style={{ width: open ? '100%' : '0' }}>
			<div className='modal__backdrop' onClick={handleModalClose}></div>
			<div
				className='modal__container'
				style={{ display: open ? 'flex' : 'none' }}
			>
				<div className='header'>
					<p>{movie?.title}</p>
					<button onClick={handleModalClose}>X</button>
				</div>
				<div className='info'>
					<img
						src={`${THEMOVIESDB_IMG_ENDPOINT}${movie?.poster_path}`}
						alt={movie?.title}
					/>
					<div className='details'>
						<p>
							<b>Release date</b>: {movie?.release_date}
						</p>
						<p>{movie?.overview}</p>
						<p>
							<b>{movie?.vote_average}</b> / 10 (
							{movie?.vote_count} total voes)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieModal;
