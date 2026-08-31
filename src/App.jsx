import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx"
import Cocktails from './components/cocktails.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    );
};

export default App;