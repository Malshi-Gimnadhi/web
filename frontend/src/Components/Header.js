import * as React from 'react';
import { AppBar,Toolbar,Typography,Link , Button} from '@mui/material';


const Header =()=>{
    return(
        <>
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: ' #4169E1'}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
            Thalia Online Art Gallery
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button 
          onClick={()=>{
            window.location.href="/signup";
          }}
          href="#" variant="outlined" 
          sx={{ my: 1, mx: 1.5, color: 'Black', borderColor: 'Black' }}>
          Register
          </Button>
          
          <Button
          onClick={()=>{
            window.location.href="/signin";
          }}
          href="#" variant="outlined" 
          sx={{ my: 1, mx: 1.5, color: 'Black', borderColor: 'Black' }}>
            Login
          </Button>
          <Button
          onClick={()=>{
            window.location.href="/";

          }}
          color="error"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
        
        </>
    );

}

export default Header;