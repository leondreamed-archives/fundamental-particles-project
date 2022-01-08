import { defineParticles } from './define';
import { particleMassString as m } from './mass';

export const bosons = defineParticles('boson', {
	gluon: {
		name: 'gluon',
		mass: '0',
		charge: '0',
		spin: '1',
	},
	photon: {
		name: 'photon',
		mass: '0',
		charge: '0',
		spin: '1',
	},
	zBoson: {
		name: 'Z boson',
		mass: m({ mass: 91.2, unit: 'GeV', approx: true }),
		charge: '0',
		spin: '1',
	},
	wBoson: {
		name: 'W boson',
		mass: m({ mass: 80.4, unit: 'GeV', approx: true }),
		charge: '±1',
		spin: '1',
	},
	higgsBoson: {
		name: 'higgs',
		mass: m({ mass: 125, unit: 'GeV', approx: true }),
		charge: '0',
		spin: '0',
	},
});
