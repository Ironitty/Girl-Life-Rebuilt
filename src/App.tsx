import { useState } from 'react';
import GameScreen from './components/game/GameScreen';
import TitleScreen from './components/game/TitleScreen';
import NewGamePipeline from './components/game/NewGamePipeline';

function App() {
  const [screen, setScreen] = useState<'title' | 'pipeline' | 'game'>('title');

  if (screen === 'title') {
    return <TitleScreen onStart={() => setScreen('pipeline')} onQuickStart={() => setScreen('game')} />;
  }

  if (screen === 'pipeline') {
    return <NewGamePipeline onComplete={() => setScreen('game')} />;
  }

  return <GameScreen />;
}

export default App;
