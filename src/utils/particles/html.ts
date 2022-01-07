import type { ParticleId } from '~/types/particles';

export const particlesNamesHtml: Record<ParticleId, string> = {
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
