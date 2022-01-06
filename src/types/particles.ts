import type { particlesInformation } from '~/utils/particles';

export type ParticleType = 'quark' | 'lepton' | 'boson';

export type ParticleInformation = {
	charge: string;
	spin: string;
	type: ParticleType;
	mass: string;
};

export type ParticleName = keyof typeof particlesInformation;
