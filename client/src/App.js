import React, {useEffect, useState} from "react";
import {Container, AppBar, Typography, Grow , Grid, Fab, Box} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles  from './styles'
import MyLogo from './images/logo.svg';

const App = ()=>{
    const[currentId,setCurrentId] = useState(null);

    const [formVisibility,setFormVisibility] = useState(0);

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId,dispatch,formVisibility])

    const showForm = ()=>{
        setFormVisibility(1);
        window.scrollTo(0, 0);
    }

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={MyLogo} alt="logo" />
                <Typography className={classes.heading } variant="h2" align="center">
                
                </Typography>

                

            </AppBar>

            <Box sx={{ '& > :not(style)': { m: 1 } }} >
      <Fab  color="primary" size="large" aria-label="add" onClick={showForm} className={classes.formButton}>
        <AddIcon />
      </Fab>
      </Box>

            <Grow in>
                <Container>
                    <Grid  className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    {formVisibility?<Grid item xs={12} sm={12}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} formVisibility={formVisibility} setFormVisibility={setFormVisibility}/>
                        </Grid>:null}
                        <Grid item xs={12} sm={12}>
                            <Posts  setCurrentId={setCurrentId} setFormVisibility={setFormVisibility} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;