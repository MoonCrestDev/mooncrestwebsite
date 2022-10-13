import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Contact } from './components/Contact';
import NavBar from './components/NavBar';
import { Projects } from './components/Projects';
import StarfieldAnimation from 'react-starfield-animation'

const myTheme = createTheme({
  typography: {
      fontFamily: [
        'Raleway',
        'serif',
      ].join(','),
  },
  palette: {
      primary: {
          main: "#EAE8E8"
      },
      secondary: {
          main: "#454545"
      }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#061E43",
          backgroundImage: "linear-gradient(19deg, #8cc3db, #5d83bd, #59659C, #2E4477, #061E43 100%)",
        }
      }
    }
  }
});

function App() {
  return (
    <>
    <ThemeProvider theme={myTheme}>
    <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <CssBaseline />
      <NavBar/>
      <Welcome/>
      <About/>
      <Projects/>
      <Contact/>
    </ThemeProvider>
    </>
  );
}

export default App;
