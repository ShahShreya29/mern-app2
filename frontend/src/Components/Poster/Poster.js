import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Posters } from '../../Assets/Assets'; // Ensure the correct path
import { Poster2 } from '../../Assets/Assets';
import './Poster.css'
import { useNavigate } from 'react-router-dom';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Poster = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = Posters.length;
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Grid container spacing={2}>
            {/* Grid for larger screens (both posters side by side) */}
            <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ maxWidth: 600, flexGrow: 1 }} margin={"50px"}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {Posters.map((step, index) => (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 473,
                                            display: 'block',
                                            maxWidth: 800,
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.image}
                                        alt={`Poster ${index + 1}`}
                                    />
                                ) : null}
                            </div>
                        ))}
                           
                    </AutoPlaySwipeableViews >
                    <MobileStepper
                   
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >

                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft visibility= "hidden"/>
                                ) : (
                                    <KeyboardArrowRight visibility= "hidden"/>
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight visibility= "hidden"/>
                                ) : (
                                    <KeyboardArrowLeft visibility= "hidden" />
                                )}

                            </Button>
                        }
                    />
                </Box>
            </Grid>

            {/* Grid for smaller screens (only Poster1) */}
            <Grid item xs={12} lg={6} display="flex" justifyContent="center" alignItems="center" className='FadeIn'  sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Typography sx={{ margin: "80px" }}>
                    <Grid container spacing={2}>
                        {Poster2.map((poster, index) => (
                            <Grid item xs={6} key={index} display="flex" justifyContent="center">
                                <img src={poster.image} alt={`Poster ${index + 1}`} style={{ maxWidth: '150%', height: 'auto' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Poster;
