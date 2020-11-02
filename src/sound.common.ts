import * as types from 'tns-core-modules/utils/types';
import * as fs from 'tns-core-modules/file-system/file-system';
export class SoundCommon {
  public path: string;
  constructor(path) {
    this.path = this.constructPath(path);
  }
  private constructPath(path: string): string {
    path = types.isString(path) ? path.trim() : '';
    if (path.indexOf('~/') === 0) {
      path = fs.path.join(
        fs.knownFolders.currentApp().path,
        path.replace('~/', '')
      );
    }
    if (!fs.File.exists(path)) {
      throw new Error('No file on given path!');
    }
    return path;
  }
}
