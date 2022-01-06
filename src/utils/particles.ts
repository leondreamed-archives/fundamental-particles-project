import { ParticleInformation } from '~/types/particles.js';

const defineParticles = <P extends Record<string, ParticleInformation>>(p: P) =>
	p;

type ParticleMassStringOptions = {
	mass: number;
	approx?: boolean;
	lessThan?: boolean;
	unit: 'eV' | 'MeV' | 'GeV';
};
const particleMassString = ({
	mass,
	lessThan,
	approx,
	unit,
}: ParticleMassStringOptions) => {
	let massString = '';
	if (approx) {
		massString += '≈';
	} else if (lessThan) {
		massString += '<';
	}

	massString += `${mass} ${unit}/c<sup>2</sup>`;
	return massString;
};

const m = particleMassString;
export const quarks = defineParticles({
	up: {
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 2.3, approx: true, unit: 'MeV' }),
	},
	down: {
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.8, unit: 'MeV', approx: true }),
	},
	charm: {
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 1.275, unit: 'GeV', approx: true }),
	},
	strange: {
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 95, unit: 'MeV', approx: true }),
	},
	top: {
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 137, unit: 'GeV', approx: true }),
	},
	bottom: {
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.12, unit: 'GeV', approx: true }),
	},
});

export const leptons = defineParticles({
	electron: {
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	muon: {
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	tau: {
		mass: m({ mass: 1.777, unit: 'GeV' }),
		charge: '-1',
		spin: '1/2',
	},
	electronNeutrino: {
		mass: m({ mass: 2.2, unit: 'eV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	muonNeutrino: {
		mass: m({ mass: 0.17, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	tauNeutrino: {
		mass: m({ mass: 15.5, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
});

export const bosons = defineParticles({
	gluon: {
		mass: '0',
		charge: '0',
		spin: '1',
	},
	photon: {
		mass: '0',
		charge: '0',
		spin: '1',
	},
	zBoson: {
		mass: m({ mass: 91.2, unit: 'GeV' }),
		charge: '0',
		spin: '1',
	},
	wBoson: {
		mass: m({ mass: 80.4, unit: 'GeV' }),
		charge: '±1',
		spin: '1',
	},
	higgsBoson: {
		mass: m({ mass: 126, unit: 'GeV' }),
		charge: '0',
		spin: '0',
	},
});

export const fundamentalParticles = {
	...quarks,
	...leptons,
	...bosons,
};
