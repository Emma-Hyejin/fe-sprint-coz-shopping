import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import './Item.css';

const Item = ({item}) => {

    if(item.type === 'Product'){
        return(
            <div className="item type01" id={item.id}>
                <div className="item-pic">
                    <img src={item.image_url} alt="제품사진"/>
                    <span><StarIcon className="icon" fontSize="large"></StarIcon></span>
                </div>
                <div className="item-content">
                    <div className="item-title">{item.title}</div>
                    <div className="item-percent">{item.discountPercentage}%</div>
                </div>
                <div id="cEx" className="item-ex" >
                    {item.price}
                </div>
            </div>
        )
    }else if (item.type === 'Category'){
        return(
            <div className="item type02" id={item.id}>
                <div className="item-pic">
                    <img src={item.image_url} alt="제품사진"/>
                    <span><StarOutlineIcon className="icon" fontSize="large"></StarOutlineIcon></span>
                </div>
                <div className="item-content">
                    <div className="item-title"># {item.title}</div>
                </div>
            </div>
        )
    }else if (item.type === 'Exhibition'){
        return(
            <div className="item type03" id={item.id}>
                <div className="item-pic">
                    <img src={item.image_url} alt="제품사진"/>
                    <span><StarOutlineIcon className="icon" fontSize="large"></StarOutlineIcon></span>
                </div>
                <div className="item-content">
                    <div className="item-title">{item.title}</div>
                </div>
                <div className="item-ex">
                    {item.sub_title}    
                </div>
            </div>
        )
    }else if(item.type === 'Brand'){
        return(
            <div className="item type04" id={item.id}>
                <div className="item-pic">
                    <img src={item.brand_image_url} alt="브랜드 사진"/>
                    <span><StarOutlineIcon className="icon" fontSize="large"></StarOutlineIcon></span>
                </div>
                <div className="item-content">
                    <div className="item-title">{item.brand_name}</div>
                    <div className="item-follower">관심고객수</div>
                </div>
                <div id="bEx" className="item-ex">
                    {item.follower}    
                </div>
            </div>
        )
    }
}

export default Item;