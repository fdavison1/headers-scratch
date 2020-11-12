import './sass/App.scss';
import {HeaderLarge} from './headers/header-large';
import {SpinningDoily} from './components/SpinningDoily';
import {Main} from './Main';

function App() {
  return (
    <div className="App">
        <HeaderLarge/>
        <Main/>
    </div>
  );
}

export default App;
