import type { AppActionThis } from './types';
import type { ParticleId } from '~/types/particles';

type SetParticleGridProps = {
	particleId: ParticleId;
	row: number;
	column: number;
};

export function getRow(this: AppActionThis, rowIndex: number) {
	if (this.particleGrid[rowIndex] === undefined) {
		throw new Error(`Invalid row: ${rowIndex}`);
	}

	return this.particleGrid[rowIndex]!;
}

export function getParticleGridCell(
	this: AppActionThis,
	{ column, row }: { row: number; column: number }
) {
	const cellRow = this.getRow(row);
	return cellRow[column];
}

export function setParticleGridCell(
	this: AppActionThis,
	{ particleId, column, row }: SetParticleGridProps
) {
	const cellRow = this.getRow(row);
	cellRow[column] = particleId;
}

export function unsetParticleGridCell(
	this: AppActionThis,
	{ column, row }: { row: number; column: number }
) {
	const cellRow = this.getRow(row);
	cellRow[column] = undefined;
}
