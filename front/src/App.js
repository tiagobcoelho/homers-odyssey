import React, { useState } from 'react';
import './App.css';
import SignUp from './SignUp'
import { MuiThemeProvider, Grid, Paper, Snackbar } from '@material-ui/core';
function App() {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }
  
  return (
    <div className="App">
      <MuiThemeProvider  >
        <Grid  container
        alignItems='center'
        style={{ height:  '100%' }}>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="user has been signed up"
      />
            <Grid  item  xs={12}>
                <Paper
                elevation={4}
                style={{ margin:  32 }}
                >
                        <Grid  container
                        alignItems='center'
                        justify='center'>
                            <Grid  item  xs={12}  sm={6}
                            style={{ 'text-align':  'center' }}>
                              <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="homer" />
                            </Grid>
                            <Grid  item  xs={12} sm={6}
                            justify="center"
                            alignContent='center'
                            >
                                    <SignUp toggleOpen={toggleOpen}  />
                            </Grid>
                            
                        </Grid>
                </Paper>
            </Grid>
    </Grid>
</MuiThemeProvider>
    </div>
  );
}

export default App;
