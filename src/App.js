import logo from './logo.svg';
import './App.css';
import {CounterProvider, useCounterStore} from "./global-store/useCounterStore";
import CounterView from "./components/CounterView";
import CounterController from "./controller/CounterController";
import {DummyComp} from "./components/DummyComp";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CounterProvider>
            <CounterView />
            <CounterController />
            <DummyComp />
          </CounterProvider>

        </header>

      </div>
  );
}

export default App;
