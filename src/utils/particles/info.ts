import { quarks } from './quarks';
import { leptons } from './leptons';
import { bosons } from './bosons';
import type { ParticleId } from '~/types/particles';

export const particlesInformation = {
	...quarks,
	...leptons,
	...bosons,
} as const;

export const fundamentalParticleIds = Object.keys(
	particlesInformation
) as ParticleId[];
