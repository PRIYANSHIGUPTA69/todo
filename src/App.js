
import DisplayTodos from "./Component/DisplayTodos";
import Todos from "./Component/Todo";

import store from './redux/store'
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
       <Provider store={store}>

      <h1 >   Todo App</h1>
      <div
  >
        <Todos />
        <DisplayTodos />
      </div>
      </Provider>
    </div>
  );
}

export default App;
