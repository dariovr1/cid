import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomTableUI from './Components/CustomTableUI';
import { store } from './Store/Index';
import { Provider } from 'react-redux';
import RouterComponent from "./Components/Router/index";
function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}

export default App;
