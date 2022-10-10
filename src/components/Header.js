import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

function Header() {
  const[listVisibility, setListVisibility] = useState(false);

  return (
    <div className='container'>
        
          <img src="/images/logo.svg" alt="" />
        

      <div className='menu'>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
      </div>
      
      <div className='right-menu'>
        <p>Shop</p>
        <p>Tesla Account</p>
        <CustomMenu onClick={()=>setListVisibility(true)}/>
      </div>

      <BurgerList show={listVisibility}>
        <div className='close-wrapper'>
        <CustomClose onClick={()=> setListVisibility(false)}/>
        </div>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>CyberTruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Power</li>
      </BurgerList>
    </div>
  )
}

export default Header

const CustomMenu = styled(MenuIcon)`
cursor : pointer;
`

const CustomClose = styled(CloseIcon)`
cursor : pointer;
`

const BurgerList = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 2;
list-style: none;
padding: 20px;
display: ${props => props.show ? "block" : "none"};
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

a{
  font-weight: 600;
}
`