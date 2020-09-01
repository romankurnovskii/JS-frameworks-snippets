import React, { useState } from 'react';
import './App.css';

import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, makeStyles, Paper, Grid, ThemeProvider, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((mystyle) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: mystyle.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.5)"
  },
  mainFeaturesPost: {
    position: "relative",
    color: mystyle.palette.common.white,
    marginBottom: mystyle.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: mystyle.spacing(6),
    marginTop: mystyle.spacing(3),
  },
  mainContent: {

  },
  card: {
  },
  cardGrid: {
    marginTop: 4
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  }
}))


const cards = [1, 2, 3, 4, 5]



function App() {

  const classes = useStyles();

  const [value, setValue] = useState("recents");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [open, setOpen] = useState(false);
  function handleOpen(event) {
    setOpen(true);
  }

  function handleClose(event) {
    setOpen(false);
  }



  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton edge="start" aria-label="menu" className={classes.menuButton} >
              <MenuIcon />
            </IconButton>

            <Typography variant="h5" className={classes.title} >Web Site</Typography>
            <Box ml={2} marginRight={2} >

              <Button onClick={handleOpen} color="inherit" variant="outlined" >Log-in</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log-in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Login to see</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="emaaail"
                    type="email"
                    fullWidth>

                  </TextField>

                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="emaaail"
                    type="password"
                    fullWidth>

                  </TextField>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Save</Button>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
              </Dialog>

            </Box>
            <Button color="secondary" variant="contained">Sing-out</Button>
          </Toolbar>
        </Container>
      </AppBar>


      <main>
        <Paper className="classes.mainFeaturesPost" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
          <Container fixed >

            <div className={classes.overlay}>

            </div>

            <Grid container>
              <Grid item md={6}>


                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h3" variant="h5" color="inherit" gutterBottom >FIRST</Typography>
                  <Typography color="inherit" paragraph>Alternatively, you can also specify the number of paragraphs, by writing a number, and pressing the shortcut key. Lorem Ipsum will check if there is a number directly preceding the selection range, and replace it with that many paragraphs of lorem ipsum. Addind a decimal point, defines the approximate number of words per paragraph.</Typography>

                  <Button variant="contained" color="secondary">Button</Button>
                </div>


              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom >Title body</Typography>

            <Typography variant="h5" color="textSecondary" align="center" paragraph >atively, you can also specify the number of paragra</Typography>


            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" >BUttt</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>


        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>

                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5">
                      {card}
                    </Typography>
                    <Typography >
                      text
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button size="small" color="primary" variant="contained">View</Button><Button size="small" color="primary" variant="contained">Edit</Button>

                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer>

        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >


          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />} />


          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />} />

        </BottomNavigation>


        <Typography align="center" color="textSecondary" component="p">
          React + Material UI 2020
        </Typography>
      </footer>
    </>
  );
}




export default App;
