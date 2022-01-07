import confetti from 'canvas-confetti';

export async function createConfetti() {
	await confetti({
		particleCount: 100,
		spread: 160,
	});
}
