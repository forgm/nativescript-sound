import { SoundCommon } from './sound.common';
import { PtSound } from './core/contracts/pt-sound.contract';

export class Sound extends SoundCommon implements PtSound {
  private url: NSURL;
  private player: AVAudioPlayer;
  play(): void {
    this.player.play();
  }
  pause(): void {
    if (this.player.playing) {
      this.player.pause();
      this.player.prepareToPlay();
    }
  }
  resume(): void {
    if (!this.player.playing) {
      this.play();
    }
  }
  stop(): void {
    this.player.stop();
    this.player.currentTime = 0;
    this.player.prepareToPlay();
  }

  setVolume(volume: number, fadeDuration: number = 0): void {
    this.player.setVolumeFadeDuration(volume, fadeDuration);
  }
  reset(): void {
    this.player.stop();
    this.player.prepareToPlay();
    this.player.currentTime = 0;
  }
  release(): void {
    if (this.player) {
      this.player.dealloc();
      this.player = null;
    }
  }
  constructor(soundPath: string) {
    super(soundPath);
    this.url = NSURL.fileURLWithPath(this.soundPath);
    this.player = AVAudioPlayer.alloc().initWithContentsOfURLError(this.url);
    this.player.initWithContentsOfURLError(this.url);
    this.player.prepareToPlay();
  }
}
