export interface Theme {
  name: string;
  vars: Record<string, string>;
}

export const themes: Record<string, Theme> = {
  dark: {
    name: 'Dark',
    vars: {
      '--gl-bg': '#1a1a2e',
      '--gl-fg': '#e0e0e0',
      '--gl-accent': '#4a9eff',
      '--gl-panel': '#16213e',
      '--gl-border': '#0f3460',
      '--gl-positive': '#4ade80',
      '--gl-negative': '#f87171',
      '--gl-warning': '#fbbf24',
    },
  },
  light: {
    name: 'Light',
    vars: {
      '--gl-bg': '#f5f5f5',
      '--gl-fg': '#1a1a1a',
      '--gl-accent': '#2563eb',
      '--gl-panel': '#ffffff',
      '--gl-border': '#d1d5db',
      '--gl-positive': '#16a34a',
      '--gl-negative': '#dc2626',
      '--gl-warning': '#d97706',
    },
  },
  sepia: {
    name: 'Sepia',
    vars: {
      '--gl-bg': '#f4ecd8',
      '--gl-fg': '#3d2b1f',
      '--gl-accent': '#8b6914',
      '--gl-panel': '#ede4d3',
      '--gl-border': '#c4a882',
      '--gl-positive': '#5a7247',
      '--gl-negative': '#8b3a3a',
      '--gl-warning': '#9c6b1e',
    },
  },
  highContrast: {
    name: 'High Contrast',
    vars: {
      '--gl-bg': '#000000',
      '--gl-fg': '#ffffff',
      '--gl-accent': '#ffff00',
      '--gl-panel': '#111111',
      '--gl-border': '#ffffff',
      '--gl-positive': '#00ff00',
      '--gl-negative': '#ff0000',
      '--gl-warning': '#ff8800',
    },
  },
};

export function applyTheme(name: string): void {
  const theme = themes[name] ?? themes.dark;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value);
  }
  localStorage.setItem('gl_theme', name);
}

export function getCurrentTheme(): string {
  return localStorage.getItem('gl_theme') ?? 'dark';
}
