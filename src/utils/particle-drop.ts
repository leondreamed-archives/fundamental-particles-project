import type { ParticleId } from '~/types/particles';

export type ParticleDropData = {
	type: 'particle-drop';
	payload: {
		particleId: ParticleId;
	};
};

export function isParticleDrop(data: unknown): data is ParticleDropData {
	if (data !== null && typeof data === 'object') {
		return (data as { type?: string }).type === 'particle-drop';
	}

	return false;
}
