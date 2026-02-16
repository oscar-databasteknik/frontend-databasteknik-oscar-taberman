import { useEffect } from 'react';
import Hero from '../components/sections/hero/Hero';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home | Nackademin AB';
    }, []);

    return (
        <>
        <Hero />
        </>
    )
}

export default HomePage