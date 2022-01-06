import mapObject from 'map-obj';
import type { ParticleInformation, ParticleName } from '~/types/particles';

const defineParticles = <
	T extends string,
	P extends Record<string, Omit<ParticleInformation, 'type'>>
>(
	type: T,
	particles: P
): { [K in keyof P]: P[K] & { type: T } } =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	mapObject(particles, (name, particleInfo) => [
		name as string,
		{ ...particleInfo, type },
	]) as any;

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
export const quarks = defineParticles('quark', {
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

export const leptons = defineParticles('lepton', {
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

export const bosons = defineParticles('boson', {
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

export const particlesInformation = {
	...quarks,
	...leptons,
	...bosons,
} as const;

export const fundamentalParticles = Object.keys(
	particlesInformation
) as ParticleName[];

export const particlesToHtml: Record<ParticleName, string> = {
	up: 'u',
	down: 'd',
	charm: 'c',
	strange: 's',
	top: 't',
	bottom: 'b',
	electron: 'e',
	electronNeutrino: '<i>v</i><sub>e</sub>',
	muon: 'µ',
	muonNeutrino: '<i>v</i><sub>µ</sub>',
	tau: 'τ',
	tauNeutrino: '<i>v</i><sub>τ</sub>',
	gluon: 'g',
	photon: 'γ',
	zBoson: 'Z',
	wBoson: 'W',
	higgsBoson: 'H',
};
