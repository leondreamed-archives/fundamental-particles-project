import type { AppActionThis } from './types';
import type { ParticleName } from '~/types/particles';

type SetParticleGridProps = {
	particleName: ParticleName;
	row: number;
	column: number;
};

export function setParticleGridCell(
	this: AppActionThis,
	{ particleName, column, row }: SetParticleGridProps
) {
	if (this.particleGrid[row] === undefined) {
		throw new Error(`Invalid row: ${row}`);
	}

	this.particleGrid[row]![column] = particleName;
}
