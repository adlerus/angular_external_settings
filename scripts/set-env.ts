// https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659


import { writeFile } from 'fs';
// import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
// require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
// const environment = argv.environment;
// const isProd = environment === 'prod';

const targetPath = `./src/assets/externalsettings.json`;
const envConfigFile = `
{
  "name": "${process.env.SUPER_SECRET_NAME}"
}
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
