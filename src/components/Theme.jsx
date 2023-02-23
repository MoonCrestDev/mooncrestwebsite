import { createTheme, responsiveFontSizes } from "@mui/material"

let Theme = createTheme({
    typography: {
        fontFamily: [
          'Raleway',
          'Sans-Serif',
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': "Raleway",
          },
        },
      },
    palette: {
        primary: {
            main: '#0060aa',
            onPrimary: '#001C38',
          },
        surface:{
            main: '#DFE2EB',
            onSurface: '#43474E'
        }
    }
})

Theme = responsiveFontSizes(Theme)

export default Theme