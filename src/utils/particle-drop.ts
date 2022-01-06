import type { ParticleName } from '~/types/particles';

export type ParticleDropData = {
	type: 'particle-drop';
	payload: {
		particleName: ParticleName;
	};
};

export function isParticleDrop(data: unknown): data is ParticleDropData {
	if (data !== null && typeof data === 'object') {
		return (data as { type?: string }).type === 'particle-drop';
	}

	return false;
}
