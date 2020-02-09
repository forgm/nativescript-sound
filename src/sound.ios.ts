import { SoundCommon } from './sound.common';
import { PtSound } from './core/contracts/pt-sound.contract';

export class Sound extends SoundCommon implements PtSound {
  private url: NSURL;
  private player: AVAudioPlayer;
  play(): void {
    this.player.play();
  }
  stop(): void {
    this.player.stop();
  }
  setVolume(): void {
    throw new Error('Method not implemented.');
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
  constructor(path: string) {
    super(path);
    this.url = NSURL.fileURLWithPath(this.path);
    this.player = AVAudioPlayer.alloc().initWithContentsOfURLError(this.url);
    this.player.initWithContentsOfURLError(this.url);
    this.player.prepareToPlay();
  }
}
