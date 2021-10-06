import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const fontFamily = [
  'Poppins',
  'Arial',
  'Rubik',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: fontFamily.join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            {
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 400,
              src: `local('Poppins'), url('/assets/fonts/Poppins.ttf') format('truetype')`,
            },
          ],
        },
      },
      MuiCard: {
        root: {
          boxShadow: '1px 2px 5px rgba(117, 115, 115, 20%)',
          borderRadius: 10,
        },
      },
    },
    palette: {
      primary: {
        main: '#313131',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#000000',
        contrastText: '#b5e173',
      },
      danger: {
        main: '#fe03b1',
      },
      background: {
        default: '#ffffff',
        primary: '#162a2e'
      },
      text: {
        primary: '#313131',
        secondary: '#19766e',
        third: '#39271e'
      },
    },
    custom: {
      palette: {
        white: '#FFFFFF',
        lightBlue: '#4283c1',
        blue: '#29316c',
        darkBlue: '#2b2e3f',
        green: '#28C76F',
        pink: '#fe03b1',
        yellow: '#ffb418',
        border: '#52606c'
      },
      layout: {
        topAppBarHeight: 112,
        maxFooterWidth: 520,
        maxDeskWidth: 1296
      }
    },
  })
)

export default theme