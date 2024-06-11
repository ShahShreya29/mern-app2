import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";

const ReviewCard = () => {
  return (
    <>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar sx={{ width: 56, height: 56 }}>s</Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>shreya</p>
              <p>Date</p>
            </div>
          </div>
          <Rating value={3.5} name="half-rating" readOnly precision={0.5}/>
          <p style={{}}>Lorem ipsum dolor sit ameEum, consequatur dolor.</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewCard;
