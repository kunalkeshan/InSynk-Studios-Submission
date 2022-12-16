/**
 * Movies Utilities
 */

// Dependencies
import { THEMOVIESDB_API_KEY, THEMOVIESDB_ENDPOINT } from '../config';

export const fetchLatestMovies = async (): Promise<Movies> => {
	const response = await fetch(
		`${THEMOVIESDB_ENDPOINT}/movie/popular?api_key=${THEMOVIESDB_API_KEY}`
	);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query: string) => {
	const response = await fetch(
		`${THEMOVIESDB_ENDPOINT}/search/movie?api_key=${THEMOVIESDB_API_KEY}&query=${query}`
	);
	const data = await response.json();
	return data.results;
};
