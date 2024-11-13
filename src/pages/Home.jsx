import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageFrom from '../components/MessageFrom';

const Home = () => {
  return (
    <>
    <Hero title={"Welcome To ZeeCare Medical Institue | Your Trusted Healthcare Provider"} imageUrl={"/hero.png"} />
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    <MessageFrom/>

    </>
  );
};

export default Home;
