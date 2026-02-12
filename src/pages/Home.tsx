import Header from "../sections/Header";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
    useScrollReveal();

    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Skills />
        </div>
    );
};

export default Home;
