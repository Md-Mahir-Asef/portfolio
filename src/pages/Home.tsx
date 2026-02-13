import Header from "../sections/Header";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import useScrollReveal from "../hooks/useScrollReveal";
import ScrollProgress from "../components/ScrollProgress";

const Home = () => {
    useScrollReveal();

    return (
        <div>
            <ScrollProgress />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
