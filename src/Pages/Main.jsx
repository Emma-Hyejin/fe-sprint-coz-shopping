import React , {useContext}from 'react';
import Item from '../component/Item';
import '../App.css';
import {UserContext} from '../App';


const Main = ({item, total}) => {
    //[1]item은 4개만, [2]total 은 전체, [3] bookmark은 저장된 4개 
    //App.에서 4개만 받아와서 item 4개 밖에 없음. 
    const {bookmark, updateBookmark} = useContext(UserContext);

    const mainBookmark = total.filter(e => {
        return bookmark.some(el => e.id === el.id);
    })


    return (
        <div className="main-container">
            <div className="list-section">
                <h2>상품 리스트</h2>
                <div className="list-wrapper">
                {item.map(e => {return(<Item key={e.id} item={e}/>)})}
                </div>
            </div>
            <div className="list-section">
                <h2>북마크 리스트</h2>
                <div className="list-wrapper">
                {mainBookmark.map(e => {return(<Item key={e.id} item={e}/>)})}
                </div>
            </div>
        </div>
    )
}

export default Main;