import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },

  palette: {
    primary: {
      main: '#48C602',
      greyDark: '#E3E3E3',
      black: '#000000',
      white: '#FFFFFF',
    },

    secondary: {
      main: '#FDDF01',
      orange: '#FF861A',
      greyMid: '#BDBDBD',
      black: '#000000',
      white: '#FFFFFF',
    },

    error: {
      main: '#DF1E23',
      greyLight: '#F5F4F2',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
})

const Themes = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Themes
