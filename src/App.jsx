import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <Typography variant="h1" component="h2" gutterBottom>
        Hello, world!
      </Typography>
      <Button variant="contained" startIcon={<HomeIcon />}>
        Home
      </Button>
      <Button variant="outlined" startIcon={<HomeIcon />}>
        Home
      </Button>
      <Button variant="text" startIcon={<HomeIcon />}>
        Home
      </Button>
      <Button variant="text" startIcon={<HomeIcon />} color="secondary">
        Home
      </Button>
      <Button variant="contained" startIcon={<HomeIcon />} color="secondary">
        Home
      </Button>
    </>
  )
}

export default App
