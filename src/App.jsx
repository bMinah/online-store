import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';
import LeftDrawer from './components/drawer';
import MainFeaturedPost from './components/featurepost';

import jars_in_basket from './images/jars_in_basket.jpg';
import note_card from './images/note_card.jpg';

import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9];
const mainFeaturedPost = {
    title: 'Jars that will make you better',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: note_card,
    imgText: 'main image description',
  };

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <LeftDrawer/>
                    <StoreIcon className={classes.icon}/>
                    <Typography variant="h6">
                        Stars of Affirmation
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Stars of Affirmation
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hi we are selling jars.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See our jars
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Contact Us
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <MainFeaturedPost post={mainFeaturedPost}/>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={jars_in_basket} title="Image title"/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Jar #{card}
                                    </Typography>
                                    <Typography>
                                        This is a special jar
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Buy</Button>
                                    <Button size="small" color="primary">View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="secondary">
                    Something here to give purpose!
                </Typography>
            </footer>
        </>
    );
}

export default App;