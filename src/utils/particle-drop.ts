import type { ParticleDropData } from '~/types/particles';

export function isParticleDrop(data: unknown): data is ParticleDropData {
	if (data !== null && typeof data === 'object') {
		return (data as { type?: string }).type === 'particle-drop';
	}

	return false;
}
