import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home | Nackademin AB';
    }, []);

    return (
        <>
        <div>AdminHomePage</div>
        </>
    )
}

export default HomePage