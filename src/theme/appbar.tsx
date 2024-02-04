import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function AppBarText() {
  return (
    <Box sx={{ flexGrow: 1 , width:300}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography sx={(theme) => theme.typography.body1}>
            quiz2 typescript
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}