import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About | Nackademin AB';
    }, []);

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage