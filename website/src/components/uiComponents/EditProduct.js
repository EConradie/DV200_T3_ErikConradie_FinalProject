import React from 'react'
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';

const EditProduct = () => {

  return (
    <div className='popUpModal'>
      <Grid container spacing={5}>
        <Grid item xs={4}>
        </Grid>
        <Grid item className='innerModal' xs={4}>
            <h1>Update This Product</h1>
            <form>
                <TextField required name="name" label="Product Name" fullWidth margin="dense" />
                <TextField required name="price" label="Product Price" fullWidth margin="dense"  />
                <TextField required name="description" label="Product Description" multiline fullWidth rows={3} margin="dense"/>
                <TextField required name="varOne" label="In Stock: Green" margin="dense"  />
                <TextField required name="varTwo" label="In Stock: Red" margin="dense"  style={{marginLeft: "2.5%", marginTop: "8px", height: "55px"}} />
                <TextField required name="varThree" label="In Stock: Blue" margin="dense"  />
                <Button type="submit" style={{marginLeft: "2.5%", width: "49%", marginTop: "8px", height: "55px"}} variant="contained">Update Product</Button>
            </form>
            <Button fullWidth style={{marginTop:"30px"}} variant="outlined">Close Modal</Button>

        </Grid>
        <Grid item xs={4}>
        </Grid>
    </Grid>
    </div>
  )
}

export default EditProduct
