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
		source:
			| {
					type: 'grid';
					row: number;
					column: number;
			  }
			| {
					type: 'dock';
					index: number;
			  };
	};
};

type P = ParticleId | undefined;
// prettier-ignore
export type ParticleGrid = [
	[P, P, P, P, P],
	[P, P, P, P],
	[P, P, P, P],
	[P, P, P, P]
];

type A = ParticleId | ParticleId[];
// prettier-ignore
export type ParticleAnswerGrid = [
	[A, A, A, A, A],
	[A, A, A, A],
	[A, A, A, A],
	[A, A, A, A]
];
