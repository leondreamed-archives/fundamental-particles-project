import { defineParticles } from './define';
import { particleMassString as m } from './mass';

export const quarks = defineParticles('quark', {
	up: {
		name: 'up',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 2.3, unit: 'MeV', approx: true }),
	},
	down: {
		name: 'down',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.8, unit: 'MeV', approx: true }),
	},
	charm: {
		name: 'charm',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 1.275, unit: 'GeV', approx: true }),
	},
	strange: {
		name: 'strange',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 95, unit: 'MeV', approx: true }),
	},
	top: {
		name: 'top',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 137, unit: 'GeV', approx: true }),
	},
	bottom: {
		name: 'bottom',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.12, unit: 'GeV', approx: true }),
	},
});
