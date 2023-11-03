import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './FooterN';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const cards = [1];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@malshi gimnadhi',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@aravishan lakshith',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@pubudu arunod',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@m madhunikha',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@sithumini kaushalya',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@malki nimnadhi',
  },
  
];

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Header></Header>
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          
          gutterBottom
        >
          Online Art Gallery
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        It’s hard to hate people when you’re looking at art. They become like riddles or mysteries or problems,
        you’re kind of alive because the rest of the world falls away.
        so much love, so much art, and so much life in one moment.


        </Typography>
      </Container>
      <Container>
  {/* End hero unit */}
  <Grid container spacing={4}>
    {/* Left Column: Cards */}
    <Grid item xs={12} sm={8}>
      {cards.map((card) => (
        <Card
          key={card}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '100%',
            }}
            image="https://source.unsplash.com/random?wallpapers"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
            Step into a world of artistic wonder at our Art Gallery.
            </Typography>
            <Typography>
           
            
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="SHOP NOW"
            onClick={()=>{
              window.location.href="/signin";
  
            }}
            
            >SHOP NOW</Button>
           
          </CardActions>
        </Card>
      ))}
    </Grid>
    {/* Right Column: Add your new content here */}
    <Grid item xs={12} sm={4}>
      <Container>
      <Typography>
      <ImageList sx={{ width: 500, height: 600 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            
          />
        </ImageListItem>
      ))}
    </ImageList>

  
      </Typography>
      </Container>
    </Grid>
  </Grid>
</Container>

      

      <Footer/>

    </ThemeProvider>
  );
}