import mapObject from 'map-obj';
import type { ParticleInformation, ParticleId } from '~/types/particles';

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
		name: 'up',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 2.3, approx: true, unit: 'MeV' }),
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

export const leptons = defineParticles('lepton', {
	electron: {
		name: 'electron',
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	muon: {
		name: 'muon',
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	tau: {
		name: 'tau',
		mass: m({ mass: 1.777, unit: 'GeV' }),
		charge: '-1',
		spin: '1/2',
	},
	electronNeutrino: {
		name: 'electron neutrino',
		mass: m({ mass: 2.2, unit: 'eV', lessThan: true }),
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
		mass: m({ mass: 15.5, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
});

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
		mass: m({ mass: 91.2, unit: 'GeV' }),
		charge: '0',
		spin: '1',
	},
	wBoson: {
		name: 'W boson',
		mass: m({ mass: 80.4, unit: 'GeV' }),
		charge: '±1',
		spin: '1',
	},
	higgsBoson: {
		name: 'higgs',
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
) as ParticleId[];

export const particlesToHtml: Record<ParticleId, string> = {
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
