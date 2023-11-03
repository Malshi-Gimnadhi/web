import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './FooterN';
import Header from './Header';
import axios from 'axios';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const defaultTheme = createTheme();

export default function ViewProducts() {
    const[products,setProducts]=React.useState([]);

    React.useEffect(()=>{
        async function fetchData(){
            await axios.get('http://localhost:3000/api/v1/art/all')
            .then(function(response){
              console.log(response.data);  
              setProducts(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
        }
        fetchData();

        
    },[]);





  return (
    <ThemeProvider theme={defaultTheme}>
        
      <CssBaseline />
      
     <Header></Header>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              View Art Gallery
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Explore a diverse collection of paintings, sculptures, and multimedia creations.
             Immerse yourself in the vivid colors, intricate details, and thought-provoking concepts 
             that showcase the boundless creativity of human expression. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"
              onClick={()=>{
                window.location.href="/addart";
              }}>Add a new Art</Button>
              <Button variant="outlined"
              onClick={()=>{
                window.location.href="/myarts";
              }}
              >My Arts</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Art Name
                    </Typography>
                    <Typography>
                    Ethereal Dreams is a mesmerizing digital painting that transports the 
                    viewer into a surreal and otherworldly realm. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer></Footer>
      {/* End footer */}
    </ThemeProvider>
  );
}