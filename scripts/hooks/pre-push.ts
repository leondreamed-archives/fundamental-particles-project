import { execaCommandSync } from 'execa';

if (execaCommandSync('git branch --show-current').stdout === 'main') {
	execaCommandSync('pnpm run tc', { stdio: 'inherit' });
}
