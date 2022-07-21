import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ItemContent from './component/ItemContent';
import { ContextProvider } from './component/ContextApi'

function App() {
  return (
    <div>
      <ContextProvider>
        {<Header />}
        <ItemContent />
      </ContextProvider>
    </div>
  );
}

export default App;
