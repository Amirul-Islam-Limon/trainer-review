import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;