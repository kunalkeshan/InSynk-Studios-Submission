/**
 * Movies Utilities
 */

// Dependencies
import { THEMOVIESDB_API_KEY, THEMOVIESDB_ENDPOINT } from '../config';

export const fetchLatestMovies = async () => {
	const response = await fetch(
		`${THEMOVIESDB_ENDPOINT}/movie/popular?api_key=${THEMOVIESDB_API_KEY}`
	);
	return response;
};

export const searchMovies = async (query: string) => {
	const response = await fetch(
		`${THEMOVIESDB_ENDPOINT}/search/movie?api_key=${THEMOVIESDB_API_KEY}&query=${query}`
	);
	return response;
};
