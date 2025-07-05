import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography  from '@mui/material/Typography'

function App() {
  return (
    <>
    <Typography variant="h1" component="h2">
      Trello Web App
    </Typography>
    <Typography variant="body1">
      This is a simple Trello web app using Material UI.
    </Typography>
    <Typography variant="body2" color="textSecondary">
      This is a secondary text.
    </Typography>
      <div>Hello, Trello!</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
