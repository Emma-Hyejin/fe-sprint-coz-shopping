import React, {useContext, useState} from 'react';
import brand from '../logo/brand.png';
import whole from '../logo/whole.png';
import product from '../logo/product.png';
import exhibition from '../logo/exhibition.png';
import category from '../logo/category.png';
import {UserContext} from '../App';
import Item from '../component/Item';



const Bookmark = ({total}) => {
    //[1] total 전체 
    // const [bookmark, updateBookmark] = useContext(UserContext);
    const {bookmark, updateBookmark} = useContext(UserContext);
    console.log(bookmark);
    const [select, setSelect] = useState('');

    const clickProduct = () => {
        setSelect('Product');
     }
     const clickCategory = ()=> {
         setSelect('Category')
     }
     const clickExhibition = () => {
         setSelect('Exhibition');
     }
 
     const clickBrand = () => {
         setSelect('Brand');
     }
 
     const clickWhole = () =>{
         setSelect('');
     }

     const filteredBookmark = total.filter( e=> {
        return bookmark.some(el => e.id === el.id);
     })
 
     const totalProduct = filteredBookmark.map(e => {
         return <Item item={e}/>
     });
     
     const selectCategory = filteredBookmark.map(e => {
         if(e.type === select){
             return <Item item ={e}/>

         }
         return null;
     });

    return(
        <>
        <div className="productList-container">
        <div className="category-container">
            <ul>
            <li className="c whole" onClick={clickWhole} tabIndex="0"><img src={whole} alt="전체"/>전체</li>
            <li className="c product" onClick={clickProduct} tabIndex="0"><img src={product} alt="상품"/>상품</li>
            <li className="c category" onClick={clickCategory} tabIndex="0"><img src={category} alt="카테고리"/>카테고리</li>
            <li className="c exhibition" onClick={clickExhibition} tabIndex="0"><img src={exhibition} alt="전시회"/>기획전</li>
            <li className="c brand" onClick={clickBrand} tabIndex="0"><img src={brand} alt="브랜드"/>브랜드</li>
            </ul>
        </div>
        <div className="whole-items-container">
            {select === '' ? totalProduct : selectCategory}
        </div>
        </div>
        </>
    )
}

export default Bookmark;