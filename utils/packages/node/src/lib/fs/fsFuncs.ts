import fs from 'fs';
import { join, dirname } from 'path';
import Tip from '../util/tip.js';

/**
 * @function travelFolderSync
 * @description 遍历文件夹输出信息
 */
export function travelFolderSync(
  dir: string,
  callback: (pathName?: string) => void,
  folderCallback: (pathName?: string) => void
) {
  fs.readdirSync(dir).forEach(function (file) {
    const pathName = join(dir, file);

    if (fs.statSync(pathName).isDirectory()) {
      folderCallback(pathName);
      travelFolderSync(pathName, callback, folderCallback);
    } else {
      callback(pathName);
    }
  });
}

/**
 * @function mkdirsSync
 * @description make folder(sync)
 * @param {String} dirPath
 * @param {String} mode
 */
export function mkdirsSync(dirPath: string) {
  try {
    if (!fs.existsSync(dirPath)) {
      let pathTemp;
      const dirs = dirPath.split(/[/\\]/);
      for (let i = 0, len = dirs.length; i < len; i++) {
        const dirName = dirs[i];
        pathTemp = pathTemp ? join(pathTemp, dirName) : dirName;
        if (!fs.existsSync(pathTemp)) {
          try {
            fs.mkdirSync(pathTemp);
          } catch (e) {
            return false;
          }
        }
      }
    }
    return true;
  } catch (e) {
    Tip.log(`Error!create director fail! path=${dirPath} errorMsg:${e}`);
    return false;
  }
}

/**
 * @function fsExistsSync
 * @description find folder or file
 * @param {String} path: folder or file path
 * @return {Boolean} if exist, true | false
 */
export function fsExistsSync(folderPath: string) {
  try {
    fs.accessSync(folderPath, fs.constants.F_OK);

    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @function setFolderSync
 * @description find folder, if not exist, build it
 * @param {String} folderPath: folder path
 * @param {String} notip: no tip log
 */
export function setFolderSync(folderPath: string, noTip?: boolean) {
  if (!fs.existsSync(folderPath)) {
    mkdirsSync(folderPath);
  } else if (!noTip) {
    Tip.log(`\r\n(${folderPath} folder existed.)`);
  }
}

/**
 * @function rmdirsSync
 * @description 同步删除指定目录下的所前目录和文件,包括当前目录
 * @param {*} targetPath
 * @returns
 */
export function rmdirsSync(targetPath: string) {
  try {
    let files = [];
    if (fs.existsSync(targetPath)) {
      files = fs.readdirSync(targetPath);
      files.forEach(function (file) {
        const curPath = `${targetPath}/${file}`;
        if (fs.statSync(curPath).isDirectory()) {
          // recurse
          if (!rmdirsSync(curPath)) return false;
        } else {
          fs.unlinkSync(curPath);
        }
        return true;
      });
      fs.rmdirSync(targetPath);
    }
  } catch (e) {
    Tip.error(`Error! remove director fail!(rmdirsSync) path=${targetPath}, error=${e}`);
    return false;
  }
  return true;
}

/**
 * @function writeFile
 * @description find file, if not exist, build it.origin setFile
 * @param {String} filePath file path
 * @param {String} fileData file data
 * @param {Boolean} replaceBool replace original data or add
 * @return {Promise}
 */
export function writeFile(filePath: string, fileData: string, replaceBool: boolean) {
  return new Promise((resolve, reject) => {
    const dirPath = dirname(filePath);
    setFolderSync(dirPath, true);

    if (!fileData) reject();
    if (fsExistsSync(filePath)) {
      const nowData = fs.readFileSync(filePath);

      fs.writeFileSync(filePath, replaceBool ? fileData : nowData + fileData);
    } else {
      fs.appendFileSync(filePath, fileData);
    }
    resolve(1);
  });
}

export default {
  travelFolderSync,
  fsExistsSync,
  setFolderSync,
  mkdirsSync,
  rmdirsSync,
  writeFile,
};
