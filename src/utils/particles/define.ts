import mapObject from 'map-obj';
import type { ParticleInformation } from '~/types/particles';

export const defineParticles = <
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
