import type { particlesInformation } from '~/utils/particles';

export type ParticleType = 'quark' | 'lepton' | 'boson';

export type ParticleInformation = {
	name: string;
	charge: string;
	spin: string;
	type: ParticleType;
	mass: string;
};

export type ParticleId = keyof typeof particlesInformation;

export type ParticleDropData = {
	type: 'particle-drop';
	payload: {
		particleId: ParticleId;
		sourceCell?: {
			row: number;
			column: number;
		};
	};
};
