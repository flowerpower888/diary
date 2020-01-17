import React from 'react';
import './App.css';
import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from "react-router-dom";

import Stickers from './components/Stickers'
import Page from './components/Page'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'

import { IconButton,
         Grid,
       } from '@material-ui/core';
import { PhotoCamera,
       } from '@material-ui/icons';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
        <Router>

          <div style={{ position: 'absolute', top: '7em', left: '2em' }} className="navigation">
            <p><Link to="/signin" style={{color: '#ffce4f'}}>signin</Link></p>
            <p><Link to="/" style={{color: '#ffce4f'}}>home</Link></p>
          </div>

          <Switch>
            <Route exact path="/">
            <AppBar />

            <Grid container
                  spacing={5}
                  justify="center"
                  style={{'marginTop': '0.5em'}}
            >

              <Grid item md={5} lg={4} xs={6}>
                <Page />
              </Grid>

              <Grid
                item
                xs={2}
                container
                direction='row'
              >
                <Grid item>
                  <Stickers />
                </Grid>
                <Grid item>
                  <input style={{display:'none'}} accept="image/*" onChange={this.handleChange} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <IconButton aria-label="upload picture" component="span">
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Grid>

              </Grid>

            </Grid>
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>

        </Router>
    );
  }
}
