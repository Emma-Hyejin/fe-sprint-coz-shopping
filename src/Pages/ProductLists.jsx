import React, {useEffect, useState}from 'react';
import axios from 'axios'
import Item from '../component/Item';
import brand from '../logo/brand.png';
import whole from '../logo/whole.png';
import product from '../logo/product.png';
import exhibition from '../logo/exhibition.png';
import category from '../logo/category.png';

const ProductLists = () => {
    
    const [totalList, settotalList] = useState([]);
    const [select, setSelect] = useState('');

    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products?')
        .then(response => settotalList(response.data))
        .catch(error => console.log(error));
    }, []);

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

    const totalProduct = totalList.map(e => {
        return <Item item={e}/>
    });
    
    const selectCategory = totalList.map(e => {
        if(e.type === select){
            return <Item item ={e}/>
        }
        return null;
    })

    return(
    <div className="productList-container">
    <div className="category-container">
        <ul>
            <li className="c whole" onClick={clickWhole} tabindex="0"><img src={whole} alt="전체"/>전체</li>
            <li className="c product" onClick={clickProduct} tabindex="0"><img src={product} alt="상품"/>상품</li>
            <li className="c category" onClick={clickCategory} tabindex="0"><img src={category} alt="카테고리"/>카테고리</li>
            <li className="c exhibition" onClick={clickExhibition} tabindex="0"><img src={exhibition} alt="전시회"/>기획전</li>
            <li className="c brand" onClick={clickBrand} tabindex="0"><img src={brand} alt="브랜드"/>브랜드</li>
        </ul>
    </div>
    <div className="whole-items-container">
        {select === '' ? totalProduct : selectCategory }
    </div>
    </div>
    )
}

export default ProductLists;