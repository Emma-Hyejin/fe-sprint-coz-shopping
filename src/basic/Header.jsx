import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo/logo.png';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const dropdown=()=>{
        setShowModal(!showModal);
    }


    return (
        <div className="header">
            <div className="logo">
                <Link to='/' element><img src={logo} alt="logo사진"/></Link>
                <h1>COZ Shopping</h1>
            </div>
            <div className="header-dropdown">
                <MenuIcon font-size="large" onClick={dropdown}></MenuIcon>
                { showModal ? 
                    <div className="drop-down">
                        <div id="drop-arrow"></div>
                        <ul className="drop-wrapper">
                            <li className="drop-list">OOO님, 안녕하세요!</li>
                            <li className="drop-list"><Link to="/products/list" className="list">상품리스트 페이지</Link></li>
                            <li className="drop-list"><Link to="/bookmark" className="list">북마크 페이지</Link></li>
                        </ul>
                    </div>
                : null }
            </div>
        </div>
    )
}

export default Header;
