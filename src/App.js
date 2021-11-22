import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomTableUI from './Components/CustomTableUI';
import { store } from './Store/Index';
import { Provider } from 'react-redux';
import TableUI from './Components/TableUI';
import FilterButton from './Components/Buttons/FilterButton';


function App() {
  return (
    <Provider store={store}>
      <FilterButton />
      <TableUI />
    </Provider>
  );
}

export default App;
