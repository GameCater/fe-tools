/*
 * production build
 */

const fs = require('fs');
const os = require('os');
const callfile = require('child_process');
const join = require('path').join;
const CONFIG = require(join(__dirname, '../package.json'));
let dirname = process.cwd();

let platform = os.platform();
const isWIN = ~platform.indexOf('win');

/**
 * render package.json -> README.md
 */
let renderREADME = () => {
  const _mdPath = join(__dirname, '../README.md');
  if (fs.existsSync(_mdPath)) {
    let _readmeData = fs.readFileSync(_mdPath);
    let _info = `------
		
# ${CONFIG.name}
- version: ${CONFIG.version}
- description: ${CONFIG.description}
- author: ${CONFIG.author}
- task: ${CONFIG.task || ''}
- build time: ${new Date().toLocaleString()}

------`;
    _readmeData = _info + String(_readmeData).replace(/------(([\s\S])*?)------/, '');

    let buildMD = fs.writeFileSync(_mdPath, _readmeData, {
      encoding: 'utf8',
    });
    if (buildMD) console.log(`${_mdPath}修改成功。`);
  }
};

/**
 * run shell
 */
let runShell = () => {
  callfile.execFile(
    join(__dirname, (isWIN && 'index.bat') || 'index.sh'),
    ['-V', CONFIG.version, '-U', CONFIG.author],
    { cwd: dirname },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return false;
      }

      if (stdout) console.log(stdout);
      else if (stderr) {
        console.error(stderr);
      }
    }
  );
};

// init
renderREADME();
runShell();
