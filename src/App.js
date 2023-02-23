import { ThemeProvider } from "@mui/material";
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import LocalTheme from './components/Theme'


function App() {
  return (
    <>
      <ThemeProvider theme={LocalTheme}>
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </ThemeProvider>
    </>
  );
}

export default App;
