import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, & *': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWWidth: '0.5px',
          '&:hover': {
            borderWidth: '0.5px !important'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
            '& fieldset': {
              borderWidth: '0.5px !important'
            },
            '&:hover fieldSet' : {
              borderWidth: '1px !important'
            },
            '&:focus fieldSet': {
              borderWidth: '1px !important'
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.MuiTypography-body1': {
              fontSize: '0.875rem'
            }
          }
        }
      }
    }
  }
})
export default theme