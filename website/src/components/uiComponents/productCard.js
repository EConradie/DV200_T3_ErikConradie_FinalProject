import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import EditProduct from '../uiComponents/EditProduct';
import Axios from 'axios';

const ProductCard = (props) => {

  // Handle Modal
  const [modalArea, setModal] = useState();

  let navigate = useNavigate();


  return (
    <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div className='remove'>
              
            </div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Availability: {props.stock}
            </Typography>
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Price: R{props.price}
            </Typography>
            <Typography variant="body2">
            {props.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">View Product</Button>
            <Button variant="outlined" size="small">Edit Product</Button>
          </CardActions>
        </Card>
          {modalArea}
        </Grid>
  )
}

export default ProductCard
