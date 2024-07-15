
import { Provider } from 'react-redux';
import { Cart } from './Components/Cart';
import store from './Store';
import './App.css'

function App() {

  return (
    <>
      <div className="parentdiv">
        <div className="container p-4 container-wrapper">
          <h1 className="Great-Vibes-font">React Redux Task</h1>
          <Provider store={store}>
            <Cart />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App