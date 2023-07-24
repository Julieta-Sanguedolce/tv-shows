import episodes from './episodes.json'
import EpisodeView from './EpisodeView';

function App(): JSX.Element {
console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);
  return (
  <EpisodeView episode={episodes[0]} />
  )
}

export default App;
