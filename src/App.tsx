import { UsernamePrompt } from './components/UsernamePrompt';
import { Editor } from './components/Editor';
import { useUser } from './context/UserContext';

function App() {
  const { username } = useUser();
  return <>{username ? <Editor /> : <UsernamePrompt />}</>;
}

export default App;
