import React from 'react'
import Navbar from './Navbar';


const NavbarContainer = (props) => {
    
    let state = props.store.getState().sidebar.friendData;
    return (
        <Navbar state ={state}/>
        
        );
}
export default NavbarContainer;