interface Movie {
	poster_path: string;
	title: string;
	adult: boolean;
	overview: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
}

type Movies = Movie[];
