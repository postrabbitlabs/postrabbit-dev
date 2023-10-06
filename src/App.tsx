import Home from './pages/home.tsx';
import { PrcConfigProvider } from './remocollab/prc-base/PrcConfigProvider.tsx';
const App = () => {
  return (
    <PrcConfigProvider>
      <Home />
    </PrcConfigProvider>
  );
};

export default App;
