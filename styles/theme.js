import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const fontFamily = [
  'Oxygen',
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
              fontFamily: 'Oxygen',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 400,
              src: `local('Oxygen'), url('/assets/fonts/Oxygen.ttf') format('truetype')`,
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
        main: '#b5e173',
        contrastText: '#031b1e'
      },
      secondary: {
        main: '#000000',
        contrastText: '#b5e173',
      },
      danger: {
        main: '#fe03b1',
      },
      background: {
        default: '#02191d',
        primary: '#162a2e',
        secondary: '#0d2023'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#698443',
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
        topAppBarHeight: 64,
        maxFooterWidth: 520,
        maxDeskWidth: 1040
      }
    },
  })
)

export default theme