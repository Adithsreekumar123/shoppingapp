import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListItems } from './components/ListItems';
import { Buy } from './components/Buy';
import { CancelOrder } from './components/CancelOrder';
import { ReplaceItem } from './components/ReplaceItem';
import { Search } from './components/Search';

function App() {
  return (
    <div>
<BrowserRouter>

<Routes>

<Route path='/' element={<ListItems/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/buy' element={<Buy/>}/>
<Route path='/cancel' element={<CancelOrder/>}/>
<Route path='/replace' element={<ReplaceItem/>}/>

</Routes>
</BrowserRouter>




    </div>
  );
}

export default App;
