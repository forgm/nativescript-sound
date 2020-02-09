import { SoundCommon } from './sound.common';
import { PtSound } from './core/contracts/pt-sound.contract';

export class Sound extends SoundCommon implements PtSound {
  private volume: number;
  private player: android.media.SoundPool;
  private soundId: number;
  private streamId: number;
  play(): void {
    this.streamId = this.player.play(
      this.soundId,
      this.volume,
      this.volume,
      1,
      0,
      1.0
    );
  }
  stop(): void {
    this.player.stop(this.streamId);
  }
  setVolume(volume: number): void {
    if (typeof volume === 'number' && volume >= 0.0 && volume <= 1.0) {
      this.volume = volume;
    } else {
      throw new Error('Volume not set; volume outside of range 0.0 - 1.0');
    }
  }
  reset(): void {
    throw new Error('Method not implemented.');
  }
  release(): void {
    if (this.player) {
      this.player.release();
      this.player = null;
    }
  }
  constructor(path: string) {
    super(path);
    this.volume = 1.0;
    this.player = new android.media.SoundPool(
      1,
      android.media.AudioManager.STREAM_MUSIC,
      0
    );
    this.soundId = this.player.load(this.path, 1);
    this.streamId = null;
  }
}
