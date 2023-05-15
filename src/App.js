import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './basic/Header';
import Main from './Pages/Main';
import Bookmark from './Pages/Bookmark';
import ProductLists from './Pages/ProductLists';
import Footer from './basic/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}> </Route>
            <Route path="/products/list" element={<ProductLists/>}></Route>
            <Route path="/bookmark" element={<Bookmark/>}></Route>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
