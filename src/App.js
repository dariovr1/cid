import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomTableUI from './Components/CustomTableUI';
import { store } from './Store/Index';
import { Provider } from 'react-redux';
import TableUI from './Components/TableUI';
import FilterButton from './Components/Buttons/FilterButton';
import ProgressBox from './Components/ProgressBox';
import Header from './Components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div style={{ backgroundColor: '#faf9f9' , padding:'20px' }}>
        <ProgressBox />
        <FilterButton />
        <TableUI />
      </div>
    </Provider>
  );
}

export default App;
