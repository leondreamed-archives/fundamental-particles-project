import { particlesInformation } from './info';
import { particlesNamesHtml } from './html';
import type { ParticleId } from '~/types/particles';

export function getParticleInfo(particleId: ParticleId) {
	return particlesInformation[particleId];
}

export function getParticleNameHtml(particleId: ParticleId) {
	return particlesNamesHtml[particleId];
}
