import React, {useContext} from 'react';
import brand from '../logo/brand.png';
import whole from '../logo/whole.png';
import product from '../logo/product.png';
import exhibition from '../logo/exhibition.png';
import category from '../logo/category.png';



const Bookmark = () => {


    return(
        <>
        <div className="productList-container">
        <div className="category-container">
            <ul>
                <li className="c whole"><img src={whole} alt="전체"/>전체</li>
                <li className="c product"><img src={product} alt="상품"/>상품</li>
                <li className="c category"><img src={category} alt="카테고리"/>카테고리</li>
                <li className="c exhibition"><img src={exhibition} alt="전시회"/>기획전</li>
                <li className="c brand"><img src={brand} alt="브랜드"/>브랜드</li>
            </ul>
        </div>
        <div className="whole-items-container">
            
        </div>
        </div>
        </>
    )
}

export default Bookmark;