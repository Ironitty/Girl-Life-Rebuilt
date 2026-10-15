import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../audio', () => ({
  playMusic: vi.fn(),
  stopMusic: vi.fn(),
}));

import { playMusic, stopMusic } from '../audio';
import { updateLocationMusic, resetMusic } from '../locationMusic';

const mockPlayMusic = vi.mocked(playMusic);
const mockStopMusic = vi.mocked(stopMusic);

beforeEach(() => {
  vi.clearAllMocks();
  resetMusic();
});

describe('updateLocationMusic', () => {
  it('stops music when soundOn is false', () => {
    updateLocationMusic('pav_park', 12, 6, false);
    expect(mockStopMusic).toHaveBeenCalled();
    expect(mockPlayMusic).not.toHaveBeenCalled();
  });

  it('does not re-trigger music for the same location', () => {
    updateLocationMusic('pav_park', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    updateLocationMusic('pav_park', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
  });

  it('plays music for a known location during day', () => {
    updateLocationMusic('pav_park', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file, loop, volume] = mockPlayMusic.mock.calls[0];
    expect(loop).toBe(true);
    expect(volume).toBe(0.3);
    expect(['park']).toContain(file);
  });

  it('applies night override for pav_park at hour 23', () => {
    updateLocationMusic('pav_park', 23, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(file).toBe('street_night');
  });

  it('applies night override for pav_commercial at hour 5', () => {
    updateLocationMusic('pav_commercial', 5, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(['street_night', 'zima']).toContain(file);
  });

  it('does not apply night override at hour 6 (boundary)', () => {
    updateLocationMusic('pav_park', 6, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(file).toBe('park');
  });

  it('applies night override at hour 22 (boundary)', () => {
    updateLocationMusic('pav_park', 22, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(file).toBe('street_night');
  });

  it('does not apply night override at hour 21 (just before 22)', () => {
    updateLocationMusic('pav_park', 21, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(file).toBe('park');
  });

  it('stops music for unknown location', () => {
    updateLocationMusic('nonexistent_loc', 12, 6, true);
    expect(mockStopMusic).toHaveBeenCalled();
    expect(mockPlayMusic).not.toHaveBeenCalled();
  });

  it('plays music for city_metro with multiple files', () => {
    updateLocationMusic('city_metro', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file, loop, volume] = mockPlayMusic.mock.calls[0];
    expect(loop).toBe(true);
    expect(volume).toBe(0.3);
    expect(['metro1', 'metro2', 'metro3', 'metro4']).toContain(file);
  });

  it('applies night override for city_mall at hour 0', () => {
    updateLocationMusic('city_mall', 0, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(file).toBe('street_night');
  });

  it('does not apply night override for locations without one (city_club)', () => {
    updateLocationMusic('city_club', 23, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    const [file] = mockPlayMusic.mock.calls[0];
    expect(['club', 'club_inside']).toContain(file);
  });

  it('switches music when location changes', () => {
    updateLocationMusic('pav_park', 12, 6, true);
    updateLocationMusic('pav_cafe', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(2);
    const [, , vol2] = mockPlayMusic.mock.calls[1];
    expect(vol2).toBe(0.3);
  });
});

describe('resetMusic', () => {
  it('stops music and resets currentLoc', () => {
    updateLocationMusic('pav_park', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(1);
    resetMusic();
    expect(mockStopMusic).toHaveBeenCalled();
    updateLocationMusic('pav_park', 12, 6, true);
    expect(mockPlayMusic).toHaveBeenCalledTimes(2);
  });
});
