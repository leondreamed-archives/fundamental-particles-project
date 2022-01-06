import type { AppActionThis } from './types';
import type { ParticleId } from '~/types/particles';

type SetParticleGridProps = {
	particleId: ParticleId;
	row: number;
	column: number;
};

export function setParticleGridCell(
	this: AppActionThis,
	{ particleId, column, row }: SetParticleGridProps
) {
	if (this.particleGrid[row] === undefined) {
		throw new Error(`Invalid row: ${row}`);
	}

	this.particleGrid[row]![column] = particleId;
}
