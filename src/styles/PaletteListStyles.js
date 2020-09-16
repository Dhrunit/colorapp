import sizes from './sizes';
import bg from './bg.svg';
export default {
	'@global': {
		'.fade-exit': {
			color: 'purple',
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-out',
		},
	},
	root: {
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#110e33',
		/* background by SVGBackgrounds.com */
		backgroundImage: `url(${bg})`,
		overflow: 'scroll',
	},
	container: {
		// Test
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '80%',
		},
		[sizes.down('xs')]: {
			width: '75%',
		},
	},
	heading: { fontSize: '2rem' },
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'white',
		'& a': {
			color: 'white',
		},
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)',
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1.4rem',
		},
	},
};
