import { Howl, type HowlOptions } from 'howler';

const runningFromFile = typeof window !== 'undefined' && window.location.protocol === 'file:';

function createHowl(options: HowlOptions): Howl {
  return new Howl({
    ...options,
    html5: options.html5 ?? runningFromFile,
  });
}

const soundCache = new Map<string, Howl>();
let music: Howl | null = null;

export function playSound(name: string, volume = 1): void {
  const key = `${name}_${volume}`;
  if (!soundCache.has(key)) {
    soundCache.set(key, createHowl({
      src: [`sound/${name}.mp3`],
      volume,
    }));
  }
  soundCache.get(key)!.play();
}

export function playMusic(name: string, loop = true, volume = 0.5): void {
  stopMusic();
  music = createHowl({
      src: [`sound/${name}.mp3`],
    loop,
    volume,
  });
  music.play();
}

export function stopMusic(): void {
  if (music) {
    music.stop();
    music.unload();
    music = null;
  }
}
