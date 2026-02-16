import { useEffect } from 'react';
import Hero from '../components/sections/hero/Hero';

const CoursesPage = () => {
    useEffect(() => {
        document.title = 'Courses | Nackademin AB';
    }, []);

    return (
        <>
        <Hero />
        </>
    )
}

export default CoursesPage