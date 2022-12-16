interface Movie {
	id: number;
	poster_path: string;
	title: string;
	overview: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
}

type Movies = Movie[];
