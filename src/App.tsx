// Dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import './css/App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
