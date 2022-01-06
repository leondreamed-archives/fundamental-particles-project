import type { ParticleId } from '~/types/particles';

type P = ParticleId | ParticleId[];
// prettier-ignore
export const expectedParticles: [
	[P, P, P, P, P],
	[P, P, P, P],
	[P, P, P, P],
	[P, P, P, P],
] = [
	['up', 'charm', 'top', ['photon', 'gluon'], 'higgsBoson'],
	['down', 'strange', 'bottom', ['photon', 'gluon']],
	['electron', 'muon', 'tau', 'zBoson'],
	['electronNeutrino', 'muonNeutrino', 'tauNeutrino', 'wBoson']
]
