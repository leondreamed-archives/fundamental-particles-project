import { fundamentalParticleInformation } from '~/utils/particles';

export type ParticleInformation = {
	charge: string;
	spin: string;
	mass: string;
};

export type ParticleName = keyof typeof fundamentalParticleInformation;
