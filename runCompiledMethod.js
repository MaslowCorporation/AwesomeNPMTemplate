import { execSync } from 'child_process';

const servicePath = process.argv[2];

if (!servicePath) {
  console.log('Please provide a method name.');
  process.exit(1);
}

try {
  execSync(`npm run build && ts-node lib/esm/services/${servicePath}/${servicePath}.js`, { stdio: 'inherit' });
} catch (error) {
  console.log(error);
  process.exit(1);
}
