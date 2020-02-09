# NativeScript Sound

Play a sound in your NativeScript app.

This project was originally programmed by John Bristowe, and it implements iOS 13.2 fix from Mathew Thompson. Starting point was Grey Laureckis (PR #9) fork that includes code from PR #8. Nativescript-plugin-seed was used to transport it to TypeScript from Vanilla JS. It has fully working demo on both iOS and Android

## Installation

## Usage

To use this plugin you must first import it:

```ts
import { Sound } from 'nativescript-sound';
```

### init and play

It's important to preload the audio file into the **sound** module before playing it; there is a delay during creation due to the audio being processed:

```ts
const beep = new Sound('~/sounds/beep.wav');

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

After release if you start to play, app will crash;

```ts
beep.release();
```

### setVolume

Sets volume, volume should be limited from 0.0 to 1.0.
fadeDuration only for iOS

```ts
beep.setVolume(volume: number, fadeDuration?: number );
```
