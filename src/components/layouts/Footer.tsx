/**
 * Footer Component
 */

// Dependencies
import React from 'react';

const Footer = () => {
	return (
		<footer>
			&copy; {new Date().getFullYear()}.{' '}
			<a
				href='https://www.linkedin.com/in/kunalkeshan/'
				target='_blank'
				rel='noreferrer'
			>
				Kunal Keshan
			</a>
			.{' '}
			<a
				href='https://github.com/kunalkeshan/InSynk-Studios-Submission'
				target='_blank'
				rel='noreferrer'
			>
				Licensed under MIT
			</a>
			.
		</footer>
	);
};

export default Footer;
