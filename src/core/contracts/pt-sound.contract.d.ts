export interface PtSound {
    resume(): void;
    play(): void;
    pause(): void;
    stop(): void;
    setVolume(volume: number): void;
    setVolume(volume: number, fadeDuration: number): void;
    reset(): void;
    release(): void;
}
