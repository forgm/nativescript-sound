# NativeScript Sound

Play a sound in your NativeScript app.

John Bristowe has initially programmed this project. The starting point was Grey Laureckis (PR #9) fork that includes code from PR #8. Mathew Thompson's iOS 13.2 fix is also implemented. Nativescript-plugin-seed was used to move it from JS to TypeScript. The demo tested on iOS 13.3 Simulator and Android API 28 virtual device

## Installation

```
npm i nativescript-forgm-sound --save
```

## Usage

To use this plugin you must first import it:

```ts
import { Sound } from 'nativescript-forgm-sound';
```

### init and play

Preload sound before playing it because there is a delay during creation due to the audio being processed.

```ts
const beep: Sound = new Sound('~/sounds/beep.wav');

// play the sound (i.e. tap event handler)
beep.play();
```

### pause

```ts
beep.pause();
```

### resume

```ts
beep.resume();
```

### stop

```ts
beep.stop();
```

### release

After release(), if you play(), the app should crash.

```ts
beep.release();
```

### setVolume

Sets volume, the volume should be limited from 0.0 to 1.0.
fadeDuration in milliseconds only for iOS.

```ts
beep.setVolume(volume: number, fadeDuration?: number );
```
