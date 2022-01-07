import { quarks } from './quarks';
import { leptons } from './leptons';
import { bosons } from './bosons';
import type { ParticleId } from '~/types/particles';

export * from './bosons';
export * from './define';
export * from './html';
export * from './leptons';
export * from './mass';
export * from './quarks';

export const particlesInformation = {
	...quarks,
	...leptons,
	...bosons,
} as const;

export const fundamentalParticles = Object.keys(
	particlesInformation
) as ParticleId[];
