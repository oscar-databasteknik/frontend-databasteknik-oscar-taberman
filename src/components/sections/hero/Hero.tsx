import { useEffect, useState } from 'react'
import './Hero.css'
import type { HeroDto } from './HeroDto'


const Hero: React.FC = () => {
    const [heroes, setHeroes] = useState<HeroDto[]>([])

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await fetch('https://localhost:7111/api/heroes')
                const data = await response.json()
                setHeroes(data)

            } catch (error) {
                console.error('Error fetching heroes:', error)
            }
        }

        fetchHeroes()
    }, [])
    console.log("heroes", heroes)
    return (
        <section className='hero-section'>
            <div className='container'>
                {heroes.map((hero) => (
                    <div key={hero.title} className='hero-content'>
                        <div className='hero-text'>
                            <h1>{hero.header}</h1>
                            <p>{hero.description}</p>
                            <a href="#courses" className='btn-primary'>Browse Courses</a>
                        </div>
                        {hero.imageUrl && (
                            <div className='hero-image'>
                                <img src={hero.imageUrl} alt={hero.title} />
                            </div>
                        )}
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Hero