import { Sound } from 'nativescript-sound';
import { NavigatedData, Page } from '@nativescript/core';
import { HomeViewModel } from './home-view-model';

const beep = new Sound('~/home/sounds/beep.wav');
let volume = 1;
export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}
export function onTapPlay() {
    beep.play();
}
export function onTapPause() {
    beep.pause();
}
export function onTapResume() {
    beep.resume();
}
export function onTapStop() {
    beep.stop();
}
export function onTapRelease() {
    beep.release();
}
export function onTapMute() {
    volume = 0;
    beep.setVolume(volume);
}
export function onTapIncreaseVolume() {
    if (volume <= 0.9) {
        volume = volume + 0.1;
    }
    beep.setVolume(volume);
}
export function onTapDecreaseVolume() {
    if (volume >= 0.1) {
        volume = volume - 0.1;
    }
    beep.setVolume(volume);
}
