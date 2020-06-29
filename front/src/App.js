import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import { MuiThemeProvider, Grid, Paper, Snackbar } from '@material-ui/core';
function App() {

  const [open, setOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleLoggedIn = () => {
    setLoggedIn(!loggedIn)
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
                              <BrowserRouter>
                                <Switch>
                                  <Route path={["/", "/signin"]} exact >
                                    {loggedIn ? <Redirect to="/profile" /> : 
                                    <SignIn handleLoggedIn={handleLoggedIn}  />}
                                  </Route>
                                  <Route path="/signup" component={SignUp}/>
                                  <Route  path="/profile">
                                    {loggedIn ? <Profile handleLoggedIn={handleLoggedIn} /> :  <Redirect to="/" />}
                                  </Route>
                                </Switch>
                              </BrowserRouter>
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
