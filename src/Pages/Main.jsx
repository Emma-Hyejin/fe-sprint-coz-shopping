import React from 'react';
import Item from '../component/Item';
import '../App.css';


const Main = ({item}) => {
    console.log(item);
    return (
        <div className="main-container">
            <div className="list-section">
                <h2>상품 리스트</h2>
                <div className="list-wrapper">
                {item.map(e => {return(<Item item={e}/>)})}
                </div>
            </div>
            <div className="list-section">
                <h2>북마크 리스트</h2>
                <div className="list-wrapper">
                {item.map(e => {return(<Item item={e}/>)})}
                </div>
            </div>
        </div>
    )
}

export default Main;