import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {useState, useEffect, createContext} from 'react';
import Header from './basic/Header';
import Main from './Pages/Main';
import Bookmark from './Pages/Bookmark';
import ProductLists from './Pages/ProductLists';
import Footer from './basic/Footer';
import axios from 'axios';

export const UserContext = createContext();

function App() {

  const [list, setLists] = useState([]);
  const [bookmark, setBookmark] = useState([{"id":3, "bookmark":true}, {"id":8, "bookmark":true}, {"id":51, "bookmark": true}, {"id": 97, "bookmark": true}]);

  const updateBookmark = (newBookmark) => {
    /* bookmark 값 업데이트 및 저장 : 전역 관리  */
    setBookmark(newBookmark);
  } 

  /*localStorage에 상태 저장 */
  useEffect(() => {
    //localStorage
    const data=bookmark
    localStorage.setItem('myData', JSON.stringify(data));
    
    return() => {
        //컴포넌트 언마운트 시 실행되는 로직
        localStorage.removeItem('myData');

    };
}, [bookmark])/*북마크 상태가 변경 될 때마다 재랜더링*/

  /*localStorage에서 데이터 가져오기 */
  useEffect(() => {
    const storedBookmark = localStorage.getItem('myData');
    if(storedBookmark){
      setBookmark(JSON.parse(storedBookmark));
    };
  },[]);
    
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

  const [totalList, settotalList] = useState([]);

  useEffect(() => {
      axios.get('http://cozshopping.codestates-seb.link/api/v1/products?')
      .then(response => settotalList(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{bookmark, updateBookmark}}>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Main item={list} total={totalList}/>}> </Route>
            <Route path="/products/list" element={<ProductLists/>}></Route>
            <Route path="/bookmark" element={<Bookmark total={totalList}/>}></Route>
          </Routes>
        <Footer/>
      </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
