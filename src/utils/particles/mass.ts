type ParticleMassStringOptions = {
	mass: number | string;
	approx?: boolean;
	lessThan?: boolean;
	unit: 'eV' | 'MeV' | 'GeV';
};
export const particleMassString = ({
	mass,
	lessThan,
	approx,
	unit,
}: ParticleMassStringOptions) => {
	let massString = '';
	if (approx) {
		massString += '≈';
	} else if (lessThan) {
		massString += '<';
	}

	massString += `${mass} ${unit}/c<sup>2</sup>`;
	return massString;
};
