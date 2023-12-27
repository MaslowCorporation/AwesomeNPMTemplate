import { execSync } from 'child_process';

const servicePath = process.argv[2];

if (!servicePath) {
  console.error('Please provide a method name.');
  process.exit(1);
}

try {
  execSync(`npm run build && ts-node lib/esm/services/${servicePath}/${servicePath}.js`, { stdio: 'inherit' });
} catch (error) {
  console.error(error);
  process.exit(1);
}
