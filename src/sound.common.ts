import { path, File, knownFolders } from '@nativescript/core';
import { isString } from '@nativescript/core/utils/types';

export class SoundCommon {
  public soundPath: string;
  constructor(soundPath) {
    this.soundPath = this.constructPath(soundPath);
  }
  private constructPath(soundPath: string): string {
    soundPath = isString(soundPath) ? soundPath.trim() : '';
    if (soundPath.indexOf('~/') === 0) {
      soundPath = path.join(
        knownFolders.currentApp().path,
        soundPath.replace('~/', '')
      );
    }
    if (!File.exists(soundPath)) {
      throw new Error('No file on given path!');
    }
    return soundPath;
  }
}
