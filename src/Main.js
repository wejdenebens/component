import React from 'react'
//import './App.css';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';


const  Main = () =>{
    return (
     
        <>
            <p>My Profil Photo is <ProfilPhoto/></p>
            <p>My Full Name is <FullName/></p>
            <p>My Address is <Address/> </p>
        </>
    );
  }


export default Main 