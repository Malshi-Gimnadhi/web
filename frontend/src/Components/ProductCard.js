import React from 'react';
import{Button, Card,CardAction, CardContent, CardMedia, Typography} from '@mui/material';
import axios from 'axios';

const ProductCard=(props)=>{
    const imageURL="https://localhost3000" + props.data.image;
    return(
        <>
        <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={imageURL}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.data.name}
                    </Typography>
                    <Typography>
                      {props.data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">delete</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
        </>


    )



}