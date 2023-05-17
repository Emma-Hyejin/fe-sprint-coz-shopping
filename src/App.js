import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './basic/Header';
import Main from './Pages/Main';
import Bookmark from './Pages/Bookmark';
import ProductLists from './Pages/ProductLists';
import Footer from './basic/Footer';


function App() {

  const [list, setLists] = useState([]);
    
    useEffect(() => {
        fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')  
        .then(response =>{
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(json => setLists(json))
        .catch(error => console.log(error))
    }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Main item={list}/>}> </Route>
            <Route path="/products/list" element={<ProductLists/>}></Route>
            <Route path="/bookmark" element={<Bookmark/>}></Route>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
