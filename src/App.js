import './App.css';
import Menubar from './component/Menubar';
import Mid from './component/Mid';
import{BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Menubar></Menubar>
    <Mid></Mid>
    </BrowserRouter>
    </>  
  );
}
export default App;