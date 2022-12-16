// Dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import './css/App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	const [moviesList, setMoviesList] = useState<Movies | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	return (
		<div className='app'>
			<Navbar
				setMoviesList={setMoviesList}
				setLoading={setLoading}
				setError={setError}
			/>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								moviesList={moviesList}
								setMoviesList={setMoviesList}
								loading={loading}
								error={error}
								setLoading={setLoading}
								setError={setError}
							/>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
