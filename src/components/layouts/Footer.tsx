/**
 * Footer Component
 */

// Dependencies
import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<p>&copy; {new Date().getFullYear()}.</p>
				<a
					href='https://www.linkedin.com/in/kunalkeshan/'
					target='_blank'
					rel='noreferrer'
				>
					Kunal Keshan.
				</a>
				<a
					href='https://github.com/kunalkeshan/InSynk-Studios-Submission'
					target='_blank'
					rel='noreferrer'
				>
					Licensed under MIT.
				</a>
			</div>
		</footer>
	);
};

export default Footer;
