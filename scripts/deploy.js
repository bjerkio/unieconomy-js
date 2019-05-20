const package = require('../package.json');
const semver = require('semver');
const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');
const release = require('release-it');
const request = require('request');

const simpleGit = require('simple-git')(path.resolve(__dirname, '..'));

const swaggerFile = 'https://apidoc.unieconomy.no/api.json';
const packagePath = path.resolve(__dirname, '..', 'package.json');

/**
 * Get swagger file from Tripletex
 */
async function getSwaggerFile() {
    return new Promise((resolve, reject) => {
        request(swaggerFile, (err, response, body) => {
          if (err) {
            return reject(err);
          }
          resolve(JSON.parse(body));
        });
    })
}

async function analyze() {
    console.log('Building temporary date-based release (ugly 😓)');
    return `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getTime()}`;
    // const swagger = await getSwaggerFile();
    // console.log(`Swagger file has version ${swagger.info.version}. We got ${package.version}`);
    // if (semver.lt(package.version, swagger.info.version)) {
    //     return swagger.info.version;
    // } else return false;
}

function exec(cmd) {
    return new Promise((resolve, reject) => {
        console.log(`Running command: ${cmd}`);
        const child = shell.exec(
            cmd, {
                async: true
            }, (code, stdout, stderr) => {
                stdout = stdout.toString().trim();
                if (code === 0) {
                    console.log(stdout);
                    resolve(stdout);
                } else {
                    reject(new Error(stderr || stdout));
                }
            });
    });
}

function buildDocker() {
    return exec(
      `docker run --rm -v \${PWD}:/local swaggerapi/swagger-codegen-cli generate -i ${swaggerFile} -l typescript-node --config /local/config.json --template-dir /local/templates/ -o /local/`
    );
}

function buildTypescript() {
    return exec('npm run compile');
}

async function releasePackage(version) {
    return release({
        increment: version,
        'non-interactive': true,
        git: {
            commitArgs: `--message="chore(release): Release ${version} [skip ci]"`,
            requireCleanWorkingDir: false
        },
        publishConfig: {
            access: 'public'
        }
    });
}

async function checkoutMaster() {
    await exec('git remote set-url origin https://${GH_TOKEN}@github.com/Bjerkio/unieconomy-js.git');
    await exec('git checkout master');
    fs.writeFileSync(
      path.resolve(__dirname, '..', '.npmrc'),
      '//registry.npmjs.org/:_authToken=${NPM_TOKEN}'
    );
}

async function build() {
    await buildDocker();
    await buildTypescript();
}

async function run() {
    // Analyze to see if there is a new build.
    const newVersion = await analyze();
    if (!newVersion) {
        return "No new version. Skipping 🎉"
    }

    await checkoutMaster();
    await build();    
    await releasePackage(newVersion);
}

run().then(console.log).catch(console.error);
