export interface PtSound {
    play(): void;
    stop(): void;
    setVolume(volume: number): void;
    reset(): void;
    release(): void;
}
