import { defineParticles } from './define';
import { particleMassString as m } from './mass';

export const quarks = defineParticles('quark', {
	up: {
		name: 'up',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 2.2, unit: 'MeV', approx: true }),
	},
	down: {
		name: 'down',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.7, unit: 'MeV', approx: true }),
	},
	charm: {
		name: 'charm',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 1.27, unit: 'GeV', approx: true }),
	},
	strange: {
		name: 'strange',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 96, unit: 'MeV', approx: true }),
	},
	top: {
		name: 'top',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 173, unit: 'GeV', approx: true }),
	},
	bottom: {
		name: 'bottom',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.18, unit: 'GeV', approx: true }),
	},
});
