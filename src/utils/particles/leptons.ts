import { defineParticles } from './define';
import { particleMassString as m } from './mass';

export const leptons = defineParticles('lepton', {
	electron: {
		name: 'electron',
		mass: m({ mass: 0.511, unit: 'MeV', approx: true }),
		charge: '-1',
		spin: '1/2',
	},
	muon: {
		name: 'muon',
		mass: m({ mass: 106, unit: 'MeV', approx: true }),
		charge: '-1',
		spin: '1/2',
	},
	tau: {
		name: 'tau',
		mass: m({ mass: 1.78, unit: 'GeV', approx: true }),
		charge: '-1',
		spin: '1/2',
	},
	electronNeutrino: {
		name: 'electron neutrino',
		mass: m({ mass: '1.0', unit: 'eV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	muonNeutrino: {
		name: 'muon neutrino',
		mass: m({ mass: 0.17, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	tauNeutrino: {
		name: 'tau neutrino',
		mass: m({ mass: 18.2, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
});
