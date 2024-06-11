import { Grid } from '@mui/material'
import React from 'react'

const Order = () => {
  return (
   <>
   <Grid container sx={{justifyContent:"space-between"}}>
    <Grid item xs={2.5}>
        <div className='h-auto p-5 sticky top-5'>
         <h1>Filters</h1>
                                                                                           
        </div>
    </Grid>
   </Grid>
   </>
  )
}

export default Order