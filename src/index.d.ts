import { SoundCommon } from './sound.common';
import { PtSound } from './core/contracts';
export declare class Sound extends SoundCommon implements PtSound {
  soundPath: string;
  constructor(soundPath: string);
  play(): void;
  stop(): void;
  pause(): void;
  resume(): void;
  setVolume(volume: number): void;
  reset(): void;
  release(): void;
}
