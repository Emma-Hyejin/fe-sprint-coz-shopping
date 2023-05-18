import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components'
import './Item.css';
import xvector from '../logo/Vector.png';
import starOn from '../logo/star-on.png';
import starOff from '../logo/star-off.png';
import {UserContext} from '../App';

const Modal = styled.div`
    filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    z-index: 999;
    width: 744px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Item = ({item}) => {
    //item은 [{}, {}, {}]
    //bookmark도 [{}, {}, {}]
    const [popup, setPopup] = useState(false);
    const [change, setChange] = useState(false);
    const {bookmark, updateBookmark} = useContext(UserContext);

    const handleBookmarkChange = (itemId, isBookmarked) => {

        const isDuplicate = bookmark.some((item) => item.id === itemId); //중복 여부 확인 
        console.log(itemId);

        if(!isDuplicate && isBookmarked){
            updateBookmark([ ...bookmark ,{id: itemId, bookmark: isBookmarked}])
           
            //넘겨 받는 값을 handleBookmarkChange로 넘겨 받고 저장. 

        }else if(isDuplicate && !isBookmarked){
            //있는 것 중에 삭제하려는 경우, 

            // *안좋은 방식
            // const deleteEl = bookmark.indexOf(deleteDuplicate);
            // bookmark.splice(deleteEl, 1);

            //어차피 원래 있던 true값이 false로 바뀌어서 삭제 되야 하니까 중복 된 값을 삭제. 
            const deleteBookmark = bookmark.filter((item) => item.id !== itemId);
            updateBookmark(deleteBookmark)
        }
        console.log(bookmark);
    }

    // const handleSaveBookmark = () => {
    //     //새로운 북마크들을 저장하고 업데이트 된 값을 상위 App.컴포넌트로 전달
    //     updateBookmark([...bookmark, newBookmark]);
    //     //새로 저장후에는 저장 공간을 초기화? 
    //     setNewBookmark({});
    // }

    const clickModal = () =>{
        setPopup(!popup);
    }
  
    const toggleBookmark = () => { 
        setChange(!change);
    }

    if(item.type === 'Product'){
        return(
            <>            
                <div className="item type01" id={item.id} >
                    <div className="item-pic">
                        <img className="product-pic" src={item.image_url} alt="제품사진" onClick={clickModal}/>
                        <img className="icon" alt="북마크 별" src={change ? starOn: starOff} onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title">{item.title}</div>
                        <div className="item-percent">{item.discountPercentage}%</div>
                    </div>
                    <div id="cEx" className="item-ex" >
                        {item.price}
                    </div>
                </div>
                {popup ? 
                    <Modal>
                        <img className="select-pic" src={item.image_url} alt="제품 사진" />
                        <img className="xvector" src={xvector} alt="x기호" onClick={clickModal}/>
                        <div className="modal-ex">
                            <img className="modal-icon" src={change ? starOn: starOff}  alt="북마크 별"  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                            <div className="modal-title">{item.title}</div>
                        </div>
                    </Modal> 
                : null}
            
            </>
        )
    }else if (item.type === 'Category'){
        return(
            <>
                <div className="item type02" id={item.id}>
                    <div className="item-pic">
                        <img className="product-pic" src={item.image_url} alt="제품사진" onClick={clickModal}/>
                        <img className="icon" src={change ? starOn: starOff}  alt="북마크 별"  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title"># {item.title}</div>
                    </div>
                </div>
                {popup ? 
                    <Modal>
                        <img className="select-pic" src={item.image_url} alt="제품 사진"  />
                        <img className="xvector" src={xvector} alt="x기호" onClick={clickModal}/>
                        <div className="modal-ex">
                            <img className="modal-icon" src={change ? starOn: starOff}  alt="북마크 별"  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                            <div className="modal-title">{item.title}</div>
                        </div>
                    </Modal> 
                : null}
            </>
        )
    }else if (item.type === 'Exhibition'){
        return(
            <>  
                <div className="item type03" id={item.id}>
                    <div className="item-pic">
                        <img className="product-pic" src={item.image_url} alt="제품사진" onClick={clickModal}/>
                        <img className="icon" src={change ? starOn: starOff}  alt="북마크 별"  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title">{item.title}</div>
                    </div>
                    <div className="item-ex">
                        {item.sub_title}    
                    </div>
                </div>
                {popup ? 
                    <Modal>
                        <img className="select-pic" src={item.image_url} alt="제품 사진" />
                        <img className="xvector" src={xvector} alt="x기호" onClick={clickModal}/>
                        <div className="modal-ex">
                            <img className="modal-icon" src={change ? starOn: starOff}  alt="북마크 별"  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                            <div className="modal-title">{item.title}</div>
                        </div>
                    </Modal> 
                : null}
            </>
        )
    }else if(item.type === 'Brand'){
        return(
            <>
                <div className="item type04" id={item.id}>
                    <div className="item-pic">
                        <img className="product-pic" src={item.brand_image_url} alt="브랜드 사진"/>
                        <img className="icon" src={change ? starOn: starOff}  alt="북마크 별 "  onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title">{item.brand_name}</div>
                        <div className="item-follower">관심고객수</div>
                    </div>
                    <div id="bEx" className="item-ex">
                        {item.follower}    
                    </div>
                </div>
                {popup ? 
                    <Modal>
                        <img className="select-pic" src={item.image_url}alt="제품 사진" />
                        <img className="xvector" src={xvector} alt="x기호" onClick={clickModal}/>
                        <div className="modal-ex">
                            <img className="modal-icon" src={change ? starOn: starOff}  alt="북마크 별" onClick={() => {
                            toggleBookmark();
                            handleBookmarkChange(item.id, !change); // starOn일때는 false니까 true값이 넘어가게됨 

                        }}/>
                            <div className="modal-title">{item.title}</div>
                        </div>
                    </Modal> 
                : null}
            </>
        )
    }
}

export default Item;