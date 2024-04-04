import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link to='../weather/home' color='#fff' variant="h6" component={RouterLink} mr='40px'>
            Weather
          </Link>
          <Link to='../weather/users' color='#fff' variant="h6" component={RouterLink}>
            Users
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar