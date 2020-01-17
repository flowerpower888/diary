import React from 'react';
import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { AppBar,
         Toolbar,
         Typography,
         Grow,
         IconButton,
         Box
       } from '@material-ui/core';
import { AccountCircle, Today } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#eba8ea',
      contrastText: '#ffffff',
      dark: '#e08edf',
    },
    secondary: {
      main: '#ff9c6b',
      contrastText: '#ffffff',
    },
  },

  overrides: {

    MuiToolbar: {
      root: {
        justifyContent: 'space-between'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        border: '2px solid black',
        display: 'block',
        color: '#ffce4f',
        backgroundColor: '#b33ad2',
        textShadow: 'rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px, rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px, rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97998px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px, rgb(0, 0, 0) -1.30729px -1.5136px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px, rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px, rgb(0, 0, 0) 1.92034px -0.558831px 0px'
      }
    },
    MuiFab: {
      root: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }
    },
    MuiPickersDatePickerRoot: {
      toolbar: {
        borderBottom: '2px solid black'
      }
    },
    MuiListItem: {
      button: {
        '&:hover, &:focus': {
          color: 'transparent',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiPickersStaticWrapper: {
      staticWrapperRoot: {
        borderRadius: '1em',
        border: '2px solid',
        backgroundColor: '#f5f5ef'
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#b33ad2',
      },
    },
    MuiPickersToolbarText: {
      toolbarBtnSelected: {
        color: '#ffce4f'
      },
      toolbarTxt: {
          color: 'rgb(218, 176, 68)'
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: '#f5f5ef'
      },
      switchHeader: {
        color: '#d183d0'
      },
    },
    MuiPickersDay: {
      day: {
        color: '#d183d0',
      },
      daySelected: {
        color: '#ffce4f',
        border: '2px solid black',
        backgroundColor: '#b33ad2',
        '&:hover': {
          backgroundColor: '#9e38a3',
        }
      },
      dayDisabled: {
        color: '#d183d0',
      },
      current: {
        color: '#d183d0',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#d183d0',
      },
    },
  },
});



export default function ButtonAppBar() {
    const [calendar, setCalendar] = React.useState(false);
    const [date, changeDate] = React.useState(new Date());

  return (
    <Router>
      <ThemeProvider theme={materialTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setCalendar(!calendar)}
            >
              <Today style={{ fontSize: '2.5rem', stroke: 'black' }} />
            </IconButton>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Diary <span role='img' aria-label='strawberry'>🍓</span>
            </Typography>

            <Link to="/signin" style={{color: '#ffce4f'}}>
              <IconButton color="inherit">
                <AccountCircle style={{ fontSize: '2.5rem', stroke: 'black' }} />
              </IconButton>
            </Link>

          </Toolbar>
        </AppBar>

        <Grow in={calendar}>
          <Box style={{ position: 'absolute', marginTop: '25px' }}>
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
            >
              <DatePicker
                autoOk
                orientation="portrait"
                variant="static"
                openTo="date"
                value={date}
                onChange={(val) => {
                  changeDate(val);
                  console.log(val);
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
        </Grow>
      </ThemeProvider>
    </Router>
  );
}
