import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import logo from './assets/Emm.png';
import menu from './assets/hamberger.png';
import './header.css';

const Logoimg = styled.div`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-image:url(${logo});
`;

const Menuimg = styled.div`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image:url(${menu});
  
  &:hover {
    cursor:pointer;
  }
`;

const Lists = styled.li`
  list-style:none;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 20px;

  &:hover{
    background-color:#ebeaea;
    cursor:pointer;
  }
`;

export const Header = ({ click }) => (
  <header>
    <div className="storybook-header">
      <div className="storybook-logo">
       <Logoimg></Logoimg>
        <h1>Emm Shopping</h1>
      </div>
      <div className="storybook-menu">
       <Menuimg/>
        {click ? (
          <>
            <div className="dropwdown">
              <ul className="storybook-lists">
                <Lists>000님, 안녕하세요.</Lists>
                <Lists>상품 리스트 페이지</Lists>
                <Lists>북마크 페이지</Lists>
              </ul>
            </div>
          </>
        ) : null }
      </div>
    </div>
  </header>
);

