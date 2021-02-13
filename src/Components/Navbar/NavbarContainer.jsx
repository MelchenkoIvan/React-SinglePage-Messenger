import React from 'react'
import Navbar from './Navbar';
import {connect} from 'react-redux'


let mapStateToProps = (state) =>{
    return{
        state:state.sidebar.friendData
}}
let mapDispatchToProps = () =>{
    return{

}}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps) (Navbar)

export default NavbarContainer;