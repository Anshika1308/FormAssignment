import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();

    const backLogin = () => navigate('/')

  return (
    <div>

      <Header/>
      <Footer/>

      <button onClick={backLogin}>Logout</button>
    </div>
  )
}

export default Home;